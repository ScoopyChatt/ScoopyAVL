import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, AlertCircle, RefreshCw, ExternalLink, MessageSquare as MessageSquareOff, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import apiServerClient from '@/lib/apiServerClient.js';

const ITEMS_PER_PAGE = 9;

const GoogleReviewsWidget = ({ limit }) => {
  const [reviewData, setReviewData] = useState({ overallRating: 0, totalReviews: 0, reviews: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiServerClient.fetch('/google-reviews');
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Failed to fetch reviews (${response.status})`);
      }
      
      const data = await response.json(); 
      
      if (data && Array.isArray(data.reviews)) {
        setReviewData({
          overallRating: data.overallRating || 5,
          totalReviews: data.totalReviews || data.reviews.length,
          reviews: data.reviews
        });
      } else {
        throw new Error('Unexpected response format: Expected an object with a reviews array.');
      }
    } catch (err) {
      console.error('[GoogleReviewsWidget] Fetch error:', err);
      setError(err.message || 'An error occurred while loading reviews.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

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

  if (isLoading) {
    return (
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 mb-12">
            <Skeleton className="h-10 w-3/4 max-w-lg" />
            <Skeleton className="h-6 w-1/2 max-w-md" />
          </div>
          <div className="flex items-center gap-4 mb-10">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-6">
                <Skeleton className="h-64 w-full rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-destructive/5 border border-destructive/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
            <AlertCircle className="w-12 h-12 text-destructive mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Unable to load reviews</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {error}
            </p>
            <Button onClick={fetchReviews} variant="outline" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Retry Connection
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const { overallRating, totalReviews, reviews } = reviewData;
  const displayReviews = limit ? reviews.slice(0, limit) : reviews;
  
  if (!displayReviews || displayReviews.length === 0) {
    return (
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-card shadow-sm border border-border/50 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
            <MessageSquareOff className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No reviews found</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Be the first to share your experience with Scoopy Doo!
            </p>
            <Button asChild>
              <a href="https://www.google.com/maps/place/ChIJS6mO-bZgYYgRba6PiaitAAM/reviews" target="_blank" rel="noopener noreferrer">
                Leave a Review
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Pagination logic
  const totalPages = Math.ceil(displayReviews.length / ITEMS_PER_PAGE);
  const currentReviews = limit ? displayReviews : displayReviews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
    // Scroll to top of widget for better UX
    document.getElementById('reviews-widget-header')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
    document.getElementById('reviews-widget-header')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/noise.png')] opacity-[0.01] mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="reviews-widget-header">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground tracking-tight">
            Trusted by Pet Parents Across Greater Asheville
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            See why our neighbors rate us 5 stars for keeping their yards fresh, safe, and poop-free.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-[#FF9E30] text-white hover:bg-[#FF9E30]/90 transition-all duration-200 h-14 px-8 text-lg rounded-xl shadow-lg"
          >
            <a 
              href="https://www.google.com/maps/place/ChIJS6mO-bZgYYgRba6PiaitAAM/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Leave Us a Review
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        {/* Rating Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mb-10 gap-4">
          <div className="flex items-center gap-4 bg-background px-6 py-4 rounded-2xl shadow-sm border border-border/50">
            <div className="bg-yellow-400/10 p-3 rounded-full flex-shrink-0">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground tabular-nums tracking-tight">
                  {overallRating}
                </span>
                <span className="text-muted-foreground font-medium">out of 5</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Based on {totalReviews} Google reviews</p>
            </div>
          </div>
        </div>

        {/* Paginated Grid of Reviews */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentReviews.map((review, index) => (
                <div 
                  key={`${review.author}-${index}`}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md border border-border/50 flex flex-col relative group transition-shadow duration-300 h-full"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/30 rotate-180 transition-transform group-hover:scale-110 duration-500 pointer-events-none" />
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <Avatar className="h-12 w-12 border border-primary/10 shadow-sm">
                      <AvatarFallback className="bg-primary/5 text-primary font-bold text-lg">
                        {getInitials(review.author)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-base truncate pr-8">{review.author}</h4>
                      <div className="flex text-yellow-400 mt-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
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
                    <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-wrap">
                      "{review.text}"
                    </p>
                  </div>
                  
                  {review.date && formatDate(review.date) && (
                    <div className="mt-6 pt-4 border-t border-border/50 text-xs text-muted-foreground font-medium tracking-wide uppercase relative z-10 shrink-0">
                      {formatDate(review.date)}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {!limit && totalPages > 1 && (
          <div className="flex items-center justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="rounded-full w-12 h-12 border-border/50 hover:bg-muted"
              aria-label="Previous page of reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">Page {currentPage}</span>
              <span className="text-sm text-muted-foreground">of {totalPages}</span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded-full w-12 h-12 border-border/50 hover:bg-muted"
              aria-label="Next page of reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;