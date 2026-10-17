import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';
import '@/index.css';

const container = document.getElementById('root');
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Pages built by tools/prerender.mjs already contain the rendered page, so React adopts
// that markup instead of wiping it and showing the loading spinner. Any other content in
// #root is a plain-HTML fallback for crawlers and is simply replaced.
if (container.hasAttribute('data-prerendered')) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
