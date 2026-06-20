import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAnimatedText } from '@/hooks/use-animated-text.jsx';
import { useIntegratedAi } from '@/hooks/use-integrated-ai.jsx';
import { Send, Image as ImageIcon, X, MessageSquare as BotMessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import apiServerClient from '@/lib/apiServerClient.js';

const MAX_IMAGES = 10;
const MAX_IMAGE_SIZE = 20 * 1024 * 1024;
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const getImageKey = file => `${file.name}:${file.size}:${file.lastModified}`;

export default function IntegratedAiChat({ customerContext }) {
	const [input, setInput] = useState('');
	const [selectedImages, setSelectedImages] = useState([]);
	const [isSendingSummary, setIsSendingSummary] = useState(false);
	
	const { messages, isStreaming, isLoadingHistory, sendMessage, clearMessages } = useIntegratedAi();
	const messagesEndRef = useRef(null);
	const fileInputRef = useRef(null);

	const imagePreviews = useMemo(() => selectedImages.map(file => ({
		key: getImageKey(file),
		file,
		url: URL.createObjectURL(file),
	})), [selectedImages]);

	useEffect(() => () => {
		imagePreviews.forEach(preview => URL.revokeObjectURL(preview.url));
	}, [imagePreviews]);

	const lastMessage = messages[messages.length - 1];
	const isLastMessageStreaming = isStreaming && lastMessage?.role === 'assistant';
	const animatedText = useAnimatedText(isLastMessageStreaming ? lastMessage.content : '');

	useEffect(() => {
		const scrollToBottom = () => {
			if (messagesEndRef.current) {
				messagesEndRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'end',
				});
			}
		};

		scrollToBottom();
	}, [messages]);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();

		const trimmed = input.trim();

		if ((!trimmed && selectedImages.length === 0) || isStreaming) {
			return;
		}

		setInput('');
		sendMessage(trimmed, selectedImages);
		setSelectedImages([]);
	}, [input, selectedImages, isStreaming, sendMessage]);

	const handleImageSelect = useCallback((e) => {
		const files = Array.from(e.target.files || []);
		const validFiles = files.filter(file => VALID_IMAGE_TYPES.includes(file.type) && file.size <= MAX_IMAGE_SIZE);

		setSelectedImages((prev) => {
			const uniqueFilesMap = new Map(prev.map(file => [getImageKey(file), file]));
			validFiles.forEach(file => uniqueFilesMap.set(getImageKey(file), file));
			return Array.from(uniqueFilesMap.values()).slice(0, MAX_IMAGES);
		});

		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	}, [fileInputRef]);

	const removeImage = useCallback((index) => {
		setSelectedImages(prev => prev.filter((_, i) => i !== index));
	}, []);

	const handleEndChatAndSendSummary = async () => {
		if (!messages || messages.length === 0) return;
		
		setIsSendingSummary(true);
		
		try {
			// 1 & 2. Format messages
			const formattedMessages = messages.map(msg => ({
				role: msg.role,
				content: msg.content || (msg.images?.length ? '[Images Attached]' : ''),
				timestamp: new Date().toISOString()
			}));

			const currentUser = pb.authStore.model;
			
			// If not authenticated, we can't save the summary due to DB rules
			if (!currentUser) {
				throw new Error("You must be connected to send a summary.");
			}

			const userEmail = currentUser?.email || customerContext?.email || 'customer@scoopyavl.com';
			const userName = currentUser?.name || customerContext?.name || 'Customer';

			// 3. Call backend endpoint
			const response = await apiServerClient.fetch('/chat-summary/send-summary', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					userId: currentUser.id,
					conversationMessages: formattedMessages,
					userEmail: userEmail,
					userName: userName,
					businessOwnerEmail: 'admin@scoopyhelper.com' // Explicitly requested in task
				})
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.error || 'Failed to send conversation summary');
			}

			// 4. Show success toast
			toast.success('Conversation summary sent to business owner');
			
			// 6. Clear messages after successful send
			clearMessages();
			
		} catch (error) {
			console.error('Failed to send summary:', error);
			// 5. Handle errors with error toast
			toast.error(error.message || 'Failed to send chat summary. Please try again.');
		} finally {
			setIsSendingSummary(false);
		}
	};

	return (
		<div className="flex flex-col h-full w-full bg-background overflow-hidden">
			{/* Header */}
			<div className="flex items-center justify-between p-4 bg-primary text-primary-foreground border-b border-primary/20 shrink-0 shadow-sm z-10">
				<div className="flex items-center gap-2">
					<BotMessageSquare className="w-5 h-5" />
					<h2 className="text-lg font-semibold tracking-tight">AI Assistant</h2>
				</div>
				{messages.length > 0 && (
					<div className="flex items-center gap-3">
						<button
							onClick={clearMessages}
							disabled={isStreaming || isSendingSummary}
							className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						>
							Clear
						</button>
						<button
							onClick={handleEndChatAndSendSummary}
							disabled={isStreaming || isSendingSummary}
							className="text-sm font-medium bg-primary-foreground text-primary px-3 py-1.5 rounded-lg shadow-sm hover:bg-primary-foreground/90 hover:scale-[0.98] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
						>
							{isSendingSummary ? (
								<Loader2 className="w-3.5 h-3.5 animate-spin" />
							) : (
								<CheckCircle className="w-3.5 h-3.5" />
							)}
							End & Send
						</button>
					</div>
				)}
			</div>

			{/* Message List */}
			<div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth bg-background">
				{isLoadingHistory && (
					<div className="text-center text-sm text-muted-foreground py-4 flex items-center justify-center gap-2">
						<Loader2 className="w-4 h-4 animate-spin" />
						Loading history...
					</div>
				)}
				
				{messages.length === 0 && !isLoadingHistory && (
					<div className="h-full flex flex-col items-center justify-center text-center px-4 opacity-70">
						<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
							<BotMessageSquare className="w-8 h-8" />
						</div>
						<p className="text-foreground font-medium text-lg mb-2">How can I help you today?</p>
						<p className="text-muted-foreground text-sm max-w-[250px]">
							Ask me about our pricing, services, or how to get your yard clean and safe.
						</p>
					</div>
				)}

				{messages.map((msg, i) => {
					const isLastStreamingMessage = isStreaming && i === messages.length - 1 && msg.role === 'assistant';
					const displayContent = isLastStreamingMessage ? animatedText : msg.content;

					return (
						<div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
							<div
								className={`max-w-[85%] rounded-2xl px-5 py-3 shadow-sm ${
									msg.role === 'user'
										? 'bg-primary text-primary-foreground rounded-tr-sm'
										: 'bg-muted text-foreground rounded-tl-sm border border-border'
								}`}
							>
								<p className="whitespace-pre-wrap text-[15px] leading-relaxed">{displayContent}</p>
								{msg.images?.map((url, j) => (
									<img
										key={j}
										src={url}
										alt="AI generated"
										className="mt-3 rounded-lg max-w-full border border-border shadow-sm"
									/>
								))}
								{msg.role === 'assistant' && isStreaming && i === messages.length - 1 && !msg.content && (
									<span className="inline-block w-2 h-4 bg-muted-foreground animate-pulse ml-1 align-middle" />
								)}
							</div>
						</div>
					);
				})}
				<div ref={messagesEndRef} className="h-1" />
			</div>

			{/* Input Area */}
			<div className="p-4 border-t border-border bg-background shrink-0">
				{selectedImages.length > 0 && (
					<div className="mb-3 flex gap-2 flex-wrap">
						{imagePreviews.map(({ key, file, url }, index) => (
							<div key={key} className="relative group">
								<img
									src={url}
									alt={file.name}
									className="w-16 h-16 object-cover rounded-lg border border-border shadow-sm"
								/>
								<button
									type="button"
									onClick={() => removeImage(index)}
									className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-destructive/90 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
								>
									<X className="w-3 h-3" />
								</button>
							</div>
						))}
					</div>
				)}
				<form onSubmit={handleSubmit} className="flex gap-2 items-end">
					<input
						ref={fileInputRef}
						type="file"
						accept={VALID_IMAGE_TYPES.join(',')}
						multiple
						onChange={handleImageSelect}
						className="hidden"
						disabled={isStreaming || isLoadingHistory || isSendingSummary}
					/>
					<button
						type="button"
						onClick={() => fileInputRef.current?.click()}
						className="rounded-xl border border-input bg-background text-foreground px-3 py-3 hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm h-[46px] flex items-center justify-center"
						disabled={isStreaming || isLoadingHistory || selectedImages.length >= MAX_IMAGES || isSendingSummary}
						title="Upload images"
					>
						<ImageIcon className="w-5 h-5" />
					</button>
					<input
						type="text"
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder="Type your message..."
						className="flex-1 rounded-xl border border-input bg-background text-foreground px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground shadow-sm h-[46px]"
						disabled={isStreaming || isLoadingHistory || isSendingSummary}
					/>
					<button
						type="submit"
						disabled={isStreaming || (!input.trim() && selectedImages.length === 0) || isSendingSummary}
						className="rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm h-[46px] flex items-center justify-center"
					>
						<Send className="w-5 h-5" />
					</button>
				</form>
			</div>
		</div>
	);
}