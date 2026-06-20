
import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead.jsx';

const PetSafeChecklistLandingPage = () => {
  const checklistItems = [
    "The 5 most common garden plants that are toxic to dogs",
    "A simple trick to secure any fence from digging or climbing",
    "How to choose lawn care products that are 100% pet-safe",
    "The #1 health reason to keep your yard free of pet waste"
  ];

  return (
    <>
      <SEOHead path="/pet-safe-checklist" />

      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
        
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {/* Prominent Headline for FREE DOWNLOAD */}
            <div className="inline-block mb-8">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-black text-primary uppercase tracking-widest drop-shadow-sm">
                Free Download
              </span>
              <div className="h-1.5 w-1/3 bg-primary mx-auto mt-4 rounded-full opacity-30"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
              Create the Perfect Yard for Your Pet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tired of a messy lawn? Worried about pet safety? Download our FREE checklist and learn the secrets to creating a beautiful outdoor space that's safe for your family and your furry friends.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-8"
            >
              {/* Scoopy Chatt Logo Graphic */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-border/60 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-12 aspect-[4/3]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0,transparent_100%)] pointer-events-none" />
                <img 
                  src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/7f889d94bae15b826df9c1daf461a7b9.png" 
                  alt="Scoopy Chatt Logo" 
                  className="w-full max-w-[260px] md:max-w-[300px] h-auto object-contain relative z-10 drop-shadow-sm transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Checklist Content */}
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                
                <h2 className="text-2xl font-bold text-foreground mb-6 relative z-10">Inside, You'll Discover:</h2>
                <ul className="space-y-5 relative z-10">
                  {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-4 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground/90 leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Google Form Iframe */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-3xl shadow-xl border border-border/80 overflow-hidden relative min-h-[700px] flex flex-col"
            >
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-6 py-5 border-b border-border">
                <h3 className="text-lg font-bold text-foreground text-center">
                  Where should we send your checklist?
                </h3>
              </div>
              <div className="flex-grow w-full h-[800px] -mt-4 bg-white">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScbaF6PTn8ALcU4yePXrUkrvhotEg5ywJtp86DvFx-gJxwy2Q/viewform?usp=publish-editor" 
                  className="w-full h-full border-0"
                  title="Pet-Safe Yard Checklist Signup Form"
                  aria-label="Signup form for free checklist"
                  marginHeight="0" 
                  marginWidth="0"
                >
                  Loading&hellip;
                </iframe>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/5 border border-secondary/20 rounded-[2rem] p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/40 dark:bg-black/20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                Join Hundreds of Happy Pet Owners in Asheville!
              </h2>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center space-x-1.5 bg-white dark:bg-card px-4 py-2 rounded-full shadow-sm border border-border">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-lg font-semibold text-foreground/80">
                  85+ Five-Star Reviews on Google
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </>
  );
};

export default PetSafeChecklistLandingPage;
