
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, Sparkles, Users, Clock, ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const SpringSpecialPage = () => {
  const benefits = [
    {
      title: "Save Money Instantly",
      description: "Get a full month of professional pet waste removal completely free when you sign up for two months.",
      icon: DollarSign,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Professional Cleaning",
      description: "We sanitize, deodorize, and leave your yard spotless so you can enjoy the spring weather worry-free.",
      icon: Sparkles,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Trusted Local Team",
      description: "Leighton & Brandon are Asheville locals dedicated to providing reliable, top-tier service to our community.",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Limited Time Offer",
      description: "Spring is our busiest season. This exclusive 3-for-2 deal won't last long, so secure your spot today.",
      icon: Clock,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <>
      <SEOHead path="/spring-special" />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="relative min-h-[90dvh] flex items-center pt-20 pb-24 overflow-hidden">
            {/* Spring-themed background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-40 pointer-events-none">
              <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="max-w-2xl"
                >
                  <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-bold text-secondary mb-8 tracking-wide uppercase">
                    <Clock className="mr-2 h-4 w-4" />
                    Limited Time Spring Offer
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
                    Spring Into Clean - <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Buy 2 Months, Get 1 Month FREE!</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-[55ch]">
                    Limited time spring cleaning special. Reclaim your yard this season with Asheville's most trusted pet waste removal team. Let us handle the mess while you enjoy the sunshine.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-[0.98] h-16 px-10 text-lg rounded-2xl shadow-xl shadow-primary/20">
                      <Link to="/quote" className="flex items-center">
                        Claim Your Spring Special
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-16 px-8 text-lg rounded-2xl border-2 hover:bg-muted transition-all duration-300">
                      <a href="tel:828-844-8060" className="flex items-center">
                        <Phone className="mr-3 h-5 w-5 text-primary" />
                        828-844-8060
                      </a>
                    </Button>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
                >
                  <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-accent/30 rounded-[2.5rem] transform -rotate-3 scale-105 opacity-50 blur-xl"></div>
                  <img 
                    src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/b1670810727214d17b31497614887688.jpg" 
                    alt="Leighton and Brandon - Scoopy Doo cleaning team in Asheville" 
                    className="relative rounded-[2rem] shadow-2xl border-8 border-background object-cover w-full aspect-[4/5]"
                  />
                  
                  {/* Floating Trust Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -bottom-8 -left-8 md:-left-12 bg-background rounded-2xl p-5 shadow-2xl border border-border flex items-center gap-5"
                  >
                    <div className="bg-secondary/10 p-4 rounded-xl">
                      <ShieldCheck className="h-10 w-10 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Asheville's</p>
                      <p className="text-xl font-extrabold text-foreground">Trusted Team</p>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </section>

          <ReviewsSection />

          {/* VALUE SECTION */}
          <section className="py-24 bg-muted/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">Why Choose Our Spring Special?</h2>
                <p className="text-xl text-muted-foreground">
                  We're making it easier than ever to get your yard ready for the season. Here's what you get when you claim this offer today.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-10 rounded-3xl shadow-lg shadow-black/5 border border-border/50 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-8`}>
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="py-32 relative overflow-hidden bg-secondary text-secondary-foreground">
            <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/b1670810727214d17b31497614887688.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-secondary/90"></div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-balance">
                  Ready to Reclaim Your Yard?
                </h2>
                <p className="text-xl md:text-2xl mb-12 text-secondary-foreground/90 max-w-2xl mx-auto">
                  Don't miss out on our biggest sale of the year. Buy 2 months, get 1 month free.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <Button asChild size="lg" className="bg-background text-secondary hover:bg-background/90 transition-all duration-300 active:scale-[0.98] h-16 px-12 text-xl rounded-2xl shadow-2xl w-full sm:w-auto">
                    <Link to="/quote">
                      Claim Your Spring Special
                    </Link>
                  </Button>
                  <p className="text-secondary-foreground/80 font-medium text-lg">
                    or call <a href="tel:828-844-8060" className="underline hover:text-background transition-colors">828-844-8060</a>
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SpringSpecialPage;
