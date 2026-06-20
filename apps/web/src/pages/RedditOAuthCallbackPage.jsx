import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Copy, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const RedditOAuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Helmet>
        <title>Reddit Authorization Complete</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        {error ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-heading">
              Authorization Failed
            </h1>
            <p className="text-muted-foreground mb-6">
              Reddit returned an error during the authorization process.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-destructive font-mono text-sm break-all">
              {error}
            </div>
          </div>
        ) : !code ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-heading">
              Missing Authorization Code
            </h1>
            <p className="text-muted-foreground">
              No authorization code was received from Reddit. Please close this window and try the authorization process again.
            </p>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-heading">
                Reddit Authorization Complete
              </h1>
              <p className="text-muted-foreground">
                You have successfully authorized the application. Please copy the code below and return to your application to complete the setup.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Authorization Code
                </label>
                <div className="relative group">
                  <div className="w-full bg-background border border-border rounded-xl p-4 pr-24 font-mono text-sm sm:text-base text-foreground break-all shadow-inner">
                    {code}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors active:scale-95"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {state && (
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    State Parameter
                  </label>
                  <div className="w-full bg-background/50 border border-border rounded-lg p-3 font-mono text-xs text-muted-foreground break-all">
                    {state}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RedditOAuthCallbackPage;