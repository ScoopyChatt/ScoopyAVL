
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const ThankYouPage = () => {
  return (
    <>
      <SEOHead path="/thank-you" noindex={true} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl shadow-xl p-8 md:p-12 text-center border border-border/50"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight">
                Thank You!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-2">
                Your quote request has been successfully received.
              </p>
              <p className="text-lg font-medium text-foreground mb-12">
                We will be in touch with you shortly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-2xl">
                  <Phone className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:828-844-8060" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    828-844-8060
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-2xl">
                  <Mail className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@scoopyavl.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    info@scoopyavl.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-2xl">
                  <Clock className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <span className="text-muted-foreground">
                    Mon - Fri: 8:00 AM - 6:00 PM
                  </span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] h-14 px-8 rounded-xl">
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Return to Home
                </Link>
              </Button>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ThankYouPage;
