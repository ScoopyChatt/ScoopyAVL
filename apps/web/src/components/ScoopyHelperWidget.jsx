import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, ShieldCheck } from 'lucide-react';
import IntegratedAiChat from '@/components/integrated-ai-chat.jsx';
import { useLeadCapture } from '@/hooks/useLeadCapture.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import pb from '@/lib/pocketbaseClient.js';
import apiServerClient from '@/lib/apiServerClient.js';
import { toast } from 'sonner';

const ScoopyHelperWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [chatStartTime, setChatStartTime] = useState(null);
  const [customerContext, setCustomerContext] = useState(null);
  
  const { submitLead, isLeadCaptured, isLoading } = useLeadCapture();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipCode: '',
    numberOfDogs: '1'
  });

  // Auto-open after 3 seconds
  useEffect(() => {
    const openTimer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    }, 3000);
    
    return () => clearTimeout(openTimer);
  }, [hasAutoOpened]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    
    // Save to local state so we can pass it down to the chat
    const contextData = {
      name: formData.name,
      phone: formData.phone,
      zipCode: formData.zipCode,
      numberOfDogs: formData.numberOfDogs
    };
    
    try {
      await submitLead(formData);
      setCustomerContext(contextData);
      
      // Send lead email immediately
      try {
        await apiServerClient.fetch('/lead-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contextData)
        });
        toast.success('Lead information sent!');
      } catch (emailErr) {
        console.error('Failed to send lead email:', emailErr);
      }
      
      // PocketBase auth skipped - not required for AI chat
      
      setChatStartTime(new Date().toISOString());
    } catch (err) {
      console.error('Failed to initialize chat session:', err);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const sendTranscript = async () => {
    try {
      if (!pb.authStore.isValid) return;

      const records = await pb.collection('_integratedAiMessages').getFullList({
        sort: 'created',
        $autoCancel: false
      });

      if (!records || records.length === 0) return;

      const formattedMessages = records.map(record => {
        let textContent = '';
        if (Array.isArray(record.content)) {
          textContent = record.content
            .filter(b => b.type === 'text' || b.type === 'content')
            .map(b => b.text || b.data?.content || '')
            .join('\n');
        }
        return {
          role: record.role,
          content: textContent || '[Complex Content]'
        };
      });

      const customerInfo = {
        name: customerContext?.name || formData.name || null,
        email: null,
        phone: customerContext?.phone || formData.phone || null,
        numberOfDogs: customerContext?.numberOfDogs || formData.numberOfDogs || null,
        zipCode: customerContext?.zipCode || formData.zipCode || null
      };

      await apiServerClient.fetch('/chatbot-transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: formattedMessages,
          customerInfo,
          conversationStartTime: chatStartTime || new Date().toISOString()
        })
      });
    } catch (err) {
      // Silent fail
      console.error('Failed to send chatbot transcript silently:', err);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (isLeadCaptured) {
      sendTranscript();
    }
  };

  const isFormLoading = isLoading || isAuthenticating;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[600px] max-h-[85vh] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Widget Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Scoopy Helper</h3>
                  <p className="text-xs text-primary-foreground/80">Online & ready to help</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary-foreground hover:bg-white/20 hover:text-white rounded-full h-8 w-8"
                onClick={handleClose}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Widget Body */}
            <div className="flex-1 overflow-hidden flex flex-col bg-muted/30">
              {!isLeadCaptured ? (
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Let's get started!</h4>
                    <p className="text-sm text-muted-foreground">
                      Please provide a few details so we can give you the most accurate service information for your area.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Maya Chen"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        required 
                        placeholder="(828) 555-0123"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input 
                          id="zipCode" 
                          name="zipCode" 
                          required 
                          placeholder="28801"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="bg-background text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="numberOfDogs">Number of Dogs</Label>
                        <Input 
                          id="numberOfDogs" 
                          name="numberOfDogs" 
                          type="number"
                          min="1"
                          max="20"
                          required 
                          placeholder="1"
                          value={formData.numberOfDogs}
                          onChange={handleInputChange}
                          className="bg-background text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full mt-4" 
                      disabled={isFormLoading}
                    >
                      {isFormLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        <>
                          Start Chat <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="flex-1 overflow-hidden [&>div]:h-full [&>div>div:first-child]:hidden">
                  {/* Pass the extracted customer context down to IntegratedAiChat */}
                  <IntegratedAiChat customerContext={customerContext} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isOpen ? handleClose : () => setIsOpen(true)}
        className="bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ScoopyHelperWidget;