
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare as MessageSquareOff } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import apiServerClient from '@/lib/apiServerClient.js';

const formatDate = (dateString) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return '';
  }
};

const getInitials = (name) => {
  if (!name || name === 'Anonymous') return 'U';
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const ReviewsSection = () => {
  const [showFallback, setShowFallback] = useState(false);
  const [fallbackReviews, setFallbackReviews] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true, skipSnaps: false });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    // 1. Fetch fallback data in the background just in case
    apiServerClient.fetch('/google-reviews')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.reviews)) {
          setFallbackReviews(data.reviews);
        }
      })
      .catch(err => console.error('[ReviewsSection] Failed to fetch fallback reviews:', err));

    // 2. Inject Elfsight script safely
    const scriptId = 'elfsight-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.onerror = () => setShowFallback(true);
      document.body.appendChild(script);
    }

    // 3. Setup a timeout to check if Elfsight actually rendered anything
    // (It often fails in preview environments or due to adblockers)
    const checkTimer = setTimeout(() => {
      const widget = document.querySelector('.elfsight-app-8240dd2e-e144-493a-add7-52c8fd1b05f7');
      if (!widget || widget.children.length === 0) {
        setShowFallback(true);
      }
    }, 3500);

    return () => clearTimeout(checkTimer);
  }, []);

  return (
    <section className="py-24 bg-muted/20 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See why pet owners across Asheville trust Scoopy Doo to keep their yards clean, safe, and fresh.
          </p>
        </motion.div>

        {/* Elfsight Widget Wrapper */}
        <div className={`w-full flex justify-center transition-opacity duration-500 ${showFallback ? 'hidden' : 'block min-h-[300px]'}`}>
          <div className="elfsight-app-8240dd2e-e144-493a-add7-52c8fd1b05f7 w-full" data-elfsight-app-lazy></div>
        </div>

        {/* Custom Fallback Carousel (Shown if Elfsight fails to render) */}
        {showFallback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 relative"
          >
            {fallbackReviews.length > 0 ? (
              <>
                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                  <div className="flex -ml-6 py-4">
                    {fallbackReviews.map((review, idx) => (
                      <div key={idx} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md border border-border/50 flex flex-col relative group transition-all duration-300 h-full">
                          <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/20 rotate-180 transition-transform group-hover:scale-110 duration-500 pointer-events-none" />
                          
                          <div className="flex items-center gap-4 mb-5 relative z-10">
                            <Avatar className="h-12 w-12 border border-primary/10 shadow-sm">
                              <AvatarFallback className="bg-primary/5 text-primary font-bold text-base">
                                {getInitials(review.author)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-base truncate pr-8">{review.author}</h4>
                              <div className="flex text-yellow-400 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < review.rating ? 'fill-current text-yellow-500' : 'text-muted-foreground/30'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-1 relative z-10">
                            <p className="text-muted-foreground text-base leading-relaxed line-clamp-4">
                              "{review.text}"
                            </p>
                          </div>
                          
                          {review.date && (
                            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-muted-foreground font-medium tracking-wide uppercase relative z-10 shrink-0">
                              {formatDate(review.date)}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={scrollPrev} 
                    className="rounded-full w-12 h-12 border-border/50 hover:bg-muted active:scale-[0.98] transition-all shadow-sm"
                    aria-label="Previous reviews"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={scrollNext} 
                    className="rounded-full w-12 h-12 border-border/50 hover:bg-muted active:scale-[0.98] transition-all shadow-sm"
                    aria-label="Next reviews"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl border border-border/50 shadow-sm">
                <MessageSquareOff className="mx-auto w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No reviews available</h3>
                <p className="text-muted-foreground">Check back later to see what our customers have to say.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
