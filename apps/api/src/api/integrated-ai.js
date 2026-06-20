import { Readable } from 'stream';
import logger from '../utils/logger.js';

export const ContentBlockType = { Text: 'text', Image: 'image' };

export async function stream({ userId, systemPrompt, userMessage, requestId }) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) throw new Error('GOOGLE_GENERATIVE_AI_API_KEY not configured');
  const parts = (Array.isArray(userMessage) ? userMessage : [{ type: 'text', text: String(userMessage) }])
    .filter(msg => msg && msg.type === 'text' && msg.text)
    .map(msg => ({ text: msg.text }));
  if (parts.length === 0) parts.push({ text: 'Hello' });
  const contents = [];
  if (systemPrompt) {
    contents.push({ role: 'user', parts: [{ text: 'Instructions: ' + systemPrompt }] });
    contents.push({ role: 'model', parts: [{ text: 'Understood.' }] });
  }
  contents.push({ role: 'user', parts });
  const model = 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents }) });
  if (!response.ok) { const err = await response.text(); throw new Error(`Gemini API error ${response.status}: ${err}`); }
  const readable = new Readable({ read() {} });
  (async () => {
    try {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) readable.push('data: ' + JSON.stringify({ type: 'content', data: { content: text } }) + '\n\n');
            } catch(e) {}
          }
        }
      }
      readable.push('data: ' + JSON.stringify({ type: 'done' }) + '\n\n');
      readable.push(null);
    } catch (err) {
      logger.error('Stream error', { error: err.message });
      readable.push('data: ' + JSON.stringify({ type: 'error', data: { content: err.message } }) + '\n\n');
      readable.push(null);
    }
  })();
  return readable;
}

export async function uploadImagesToPocketBase({ images }) { return []; }