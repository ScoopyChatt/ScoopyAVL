// Build-time renderer used by tools/prerender.mjs. Never shipped to the browser.
//
// This is a client-rendered SPA, so without this step every crawler that does not run
// JavaScript (GPTBot, ClaudeBot, PerplexityBot, and Google's first pass) sees an empty
// <div id="root">. Rendering each route here puts the real page body in the HTML.
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import { AppRoutes } from '@/App';

export function render(url) {
  return new Promise((resolve, reject) => {
    const helmetContext = {};
    let html = '';
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
    });
    sink.on('finish', () => resolve({ html, helmet: helmetContext.helmet }));

    const timer = setTimeout(() => reject(new Error('render timed out')), 15000);
    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>,
      {
        // Wait for every lazy page chunk, so the output is the page and not the spinner.
        onAllReady() {
          clearTimeout(timer);
          stream.pipe(sink);
        },
        onShellError(err) {
          clearTimeout(timer);
          reject(err);
        },
        onError(err) {
          clearTimeout(timer);
          reject(err);
        },
      }
    );
  });
}
