import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, AlertCircle, Copy, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const QuickBooksOAuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const realmId = searchParams.get('realmId');
  const state = searchParams.get('state');
  const fullQuery = searchParams.toString();

  const handleCopyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      toast.success('Authorization code copied to clipboard!', {
        description: 'You can now paste this into your application.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Helmet>
        <title>QuickBooks Authorization Callback</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8 sm:p-10">
          {code ? (
            <div className="space-y-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-success" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-heading">
                  Authorization Code Captured
                </h1>
                <p className="text-muted-foreground">
                  QuickBooks has successfully authorized your request.
                </p>
              </div>

              <div className="bg-background border border-border rounded-xl p-5 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Authorization Code</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-foreground font-mono text-sm break-all bg-muted/50 p-3 rounded-lg flex-1 border border-border/50">
                      {code}
                    </p>
                    <Button 
                      onClick={handleCopyCode}
                      className="shrink-0 flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </Button>
                  </div>
                </div>

                {realmId && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Realm ID</h3>
                    <p className="text-foreground font-mono text-sm break-all bg-muted/50 p-3 rounded-lg border border-border/50">
                      {realmId}
                    </p>
                  </div>
                )}

                {state && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">State</h3>
                    <p className="text-foreground font-mono text-sm break-all bg-muted/50 p-3 rounded-lg border border-border/50">
                      {state}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-heading">
                Authorization Failed
              </h1>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-destructive font-medium text-sm text-left">
                Error: No authorization code received. Check the URL parameters.
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-border space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Raw Query String (Debugging)</h3>
              <div className="w-full bg-background border border-border rounded-xl p-4 font-mono text-xs text-muted-foreground overflow-auto break-all">
                {fullQuery ? `?${fullQuery}` : 'No query parameters found.'}
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuickBooksOAuthCallbackPage;