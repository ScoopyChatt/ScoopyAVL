
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, AlertCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import apiServerClient from '@/lib/apiServerClient.js';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils.js';

const CustomGoogleReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false
  });
  const [reviewsData, setReviewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiServerClient.fetch('/google-reviews');
      if (!res.ok) throw new Error('Failed to fetch Google reviews');
      const data = await res.json();
      setReviewsData(data);
    } catch (err) {
      console.error('Error fetching Google reviews:', err);
      setError('Unable to load reviews at this time.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Auto-scroll functionality (5 seconds)
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) {
    return (
      <div className="w-full relative px-4 sm:px-12">
        <div className="overflow-hidden">
          <div className="flex gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <div className="bg-card border border-border rounded-2xl p-8 h-[300px] flex flex-col justify-between">
                  <Skeleton className="h-6 w-32 rounded-md mb-4" />
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="w-full max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-12 shadow-sm"
      >
        <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Reviews temporarily unavailable</h3>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button onClick={fetchReviews} variant="outline" className="rounded-xl">
          Try Again
        </Button>
      </motion.div>
    );
  }

  const reviews = reviewsData?.reviews || [];

  if (reviews.length === 0) {
    return null; // Hide section gracefully if no reviews exist
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons (Desktop) */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border shadow-lg hidden sm:flex hover:bg-background hover:scale-110 transition-all duration-300"
        onClick={scrollPrev}
        aria-label="Previous reviews"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </Button>

      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border shadow-lg hidden sm:flex hover:bg-background hover:scale-110 transition-all duration-300"
        onClick={scrollNext}
        aria-label="Next reviews"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </Button>

      {/* Carousel Viewport */}
      <div className="overflow-hidden px-2 sm:px-4" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 sm:-ml-6">
          {reviews.map((review, index) => {
            // Determine rating to show
            const rating = review.rating || 5;
            
            return (
              <div 
                key={review.time || index} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 sm:pl-6"
              >
                <div className="bg-card border border-border/60 hover:border-primary/30 transition-colors duration-300 p-8 rounded-2xl shadow-sm hover:shadow-md h-full flex flex-col relative overflow-hidden">
                  
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5 -rotate-12 pointer-events-none" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-5 h-5",
                          i < rating 
                            ? "fill-[#fbbc04] text-[#fbbc04]" 
                            : "fill-muted text-muted"
                        )} 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-foreground leading-relaxed mb-8 flex-grow">
                    "{review.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/40">
                    {review.profile_photo_url ? (
                      <img 
                        src={review.profile_photo_url} 
                        alt={`${review.author_name} profile`} 
                        className="w-12 h-12 rounded-xl object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                        {review.author_name?.charAt(0) || 'C'}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {review.author_name}
                      </h4>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        {review.relative_time_description || 'Customer'} 
                        <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/30 mx-1"></span>
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Indicators */}
      <div className="flex justify-center items-center gap-4 mt-8 sm:hidden">
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={scrollPrev}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" onClick={scrollNext}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
};

export default CustomGoogleReviewsCarousel;
