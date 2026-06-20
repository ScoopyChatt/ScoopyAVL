import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Loader2, Download, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import pb from '@/lib/pocketbaseClient';

const PetSafeChecklistCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      await pb.collection('checklist_signups').create({
        name: formData.name,
        email: formData.email
      }, { $autoCancel: false });

      toast.success('Thank you! Check your email for the checklist.');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Checklist signup error:', error);
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-card flex flex-col lg:flex-row"
        >
          {/* Left Column: Content and Form */}
          <div className="p-8 md:p-12 lg:p-16 lg:w-1/2 flex flex-col justify-center bg-card relative">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-6 w-fit">
              <ShieldCheck className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold tracking-wide">Free Download</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground tracking-tight">
              Get Your Free Pet-Safe Yard Checklist!
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Tired of a messy lawn? Worried about pet safety? Download our FREE checklist, "10 Tips for a Pet-Safe & Clean Yard," and learn the secrets to creating a beautiful outdoor space that's safe for your family and your furry friends.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="Maya Chen" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  disabled={isSubmitting}
                  className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-secondary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">Your Email Address</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="maya@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  disabled={isSubmitting}
                  className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-secondary"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-secondary/20 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download My Free Checklist
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1628040668080-ce0f5bccfa70" 
              alt="happy dog playing in clean green yard" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle gradient overlay to blend image with the card on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-card lg:via-card/20 lg:to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PetSafeChecklistCTA;