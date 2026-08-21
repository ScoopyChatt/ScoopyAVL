
import React, { useEffect, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import ChatWidgetGate from '@/components/ChatWidgetGate.jsx';

import { useGTM } from '@/hooks/useGTM.js';
import { usePixel } from '@/hooks/usePixel.js';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';
import { generateLocalBusinessSchema } from '@/utils/seoHelpers.js';

// Lazy loaded pages for code splitting
const CoreServicePage = React.lazy(() => import('@/pages/CoreServicePage.jsx'));
const NearMePage = React.lazy(() => import('@/pages/NearMePage.jsx'));
const OneTimeCleanupPage = React.lazy(() => import('@/pages/OneTimeCleanupPage.jsx'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage.jsx'));
const PricingPage = React.lazy(() => import('@/pages/PricingPage.jsx'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage.jsx'));
const FAQPage = React.lazy(() => import('@/pages/FAQPage.jsx'));
const ComparisonPage = React.lazy(() => import('@/pages/ComparisonPage.jsx'));
const QuoteRequestPage = React.lazy(() => import('@/pages/QuoteRequestPage.jsx'));
const ThankYouPage = React.lazy(() => import('@/pages/ThankYouPage.jsx'));
const SpringSpecialPage = React.lazy(() => import('@/pages/SpringSpecialPage.jsx'));
const FirstScoopFreePage = React.lazy(() => import('@/pages/FirstScoopFreePage.jsx'));
const PrivacyPolicyPage = React.lazy(() => import('@/pages/PrivacyPolicyPage.jsx'));
const TermsOfServicePage = React.lazy(() => import('@/pages/TermsOfServicePage.jsx'));
const PetSafeChecklistLandingPage = React.lazy(() => import('@/pages/PetSafeChecklistLandingPage.jsx'));
const DogParkGuideLandingPage = React.lazy(() => import('@/pages/DogParkGuideLandingPage.jsx'));
const DogPoopRemovalPage = React.lazy(() => import('@/pages/DogPoopRemovalPage.jsx'));
const PetWasteRemovalPage = React.lazy(() => import('@/pages/PetWasteRemovalPage.jsx'));
const DogPoopScoopingPage = React.lazy(() => import('@/pages/DogPoopScoopingPage.jsx'));
const YardCleanupPage = React.lazy(() => import('@/pages/YardCleanupPage.jsx'));
const ServiceAreasPage = React.lazy(() => import('@/pages/ServiceAreasPage.jsx'));

// Location Template for dynamic routing
const LocationTemplate = React.lazy(() => import('@/components/LocationTemplate.jsx'));

// Blogs
const BlogListPage = React.lazy(() => import('@/pages/BlogListPage.jsx'));

// Specific/Working Blog Pages (Live)
const HowOftenCleanYard = React.lazy(() => import('@/pages/blog/HowOftenCleanYardPage.jsx'));
const AshevilleHomeownersPage = React.lazy(() => import('@/pages/blog/AshevilleHomeownersPage.jsx'));
const CommercialPetWastePage = React.lazy(() => import('@/pages/blog/CommercialPetWastePage.jsx'));
const BlogSignalMountain = React.lazy(() => import('@/pages/blog/BlogSignalMountainPage.jsx'));
const BlogSoddyDaisy = React.lazy(() => import('@/pages/blog/BlogSoddyDaisyPage.jsx'));
const DogPoopCleanupSummerHeat = React.lazy(() => import('@/pages/blog/DogPoopCleanupSummerHeatAsheville.jsx'));
const DogParksAsheville = React.lazy(() => import('@/pages/blog/DogParksAshevillePage.jsx'));
const PooperScooperCostAsheville = React.lazy(() => import('@/pages/blog/PooperScooperCostAsheville.jsx'));
const BestPooperScooperServicesAsheville = React.lazy(() => import('@/pages/blog/BestPooperScooperServicesAsheville.jsx'));
const HowOftenScoopDogPoopAsheville = React.lazy(() => import('@/pages/blog/HowOftenScoopDogPoopAsheville.jsx'));
const IsDogPoopHurtingYourAshevilleYard = React.lazy(() => import('@/pages/blog/IsDogPoopHurtingYourAshevilleYard.jsx'));
const IsDogWasteBadForLawn = React.lazy(() => import('@/pages/blog/IsDogWasteBadForLawn.jsx'));
const SpringPetCareChecklist = React.lazy(() => import('@/pages/blog/SpringPetCareChecklist.jsx'));
const ProfessionalWasteRemovalBenefits = React.lazy(() => import('@/pages/blog/BlogArticle1_ProfessionalWasteRemovalBenefits.jsx'));
const SeasonalPetCareTips = React.lazy(() => import('@/pages/blog/BlogArticle2_SeasonalPetCareTips.jsx'));
const HealthBenefitsYardCleanup = React.lazy(() => import('@/pages/blog/BlogArticle3_HealthBenefitsYardCleanup.jsx'));
const CustomerSuccessStories = React.lazy(() => import('@/pages/blog/BlogArticle4_CustomerSuccessStories.jsx'));
const DIYVsProfessional = React.lazy(() => import('@/pages/blog/BlogArticle5_DIYVsProfessional.jsx'));
const LawnHealthAndPetWaste = React.lazy(() => import('@/pages/blog/BlogArticle6_LawnHealthAndPetWaste.jsx'));
const HealthRisksOfPetWaste = React.lazy(() => import('@/pages/blog/BlogArticle7_HealthRisksOfPetWaste.jsx'));
const PetWasteManagementGuide = React.lazy(() => import('@/pages/blog/BlogArticle8_PetWasteManagementGuide.jsx'));

// Media / Utilities
const RedditOAuthCallbackPage = React.lazy(() => import('@/pages/RedditOAuthCallbackPage.jsx'));
const QuickBooksOAuthCallbackPage = React.lazy(() => import('@/pages/QuickBooksOAuthCallbackPage.jsx'));

// Sitemap Route
const SitemapXML = React.lazy(() => import('@/pages/SitemapXML.jsx'));
import HowItWorksPage from '@/pages/HowItWorksPage.jsx';

const RouteTracker = () => {
  const location = useLocation();
  const { trackPageView } = usePixel();

  useEffect(() => {
    trackPageView();
  }, [location, trackPageView]);

  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-muted-foreground font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  useGTM('GTM-59B5PDXS');

  return (
    <Router>
      <Helmet>
        <meta property="og:title" content="Scoopy Doo LLC" />
        <meta property="og:description" content="Scoopy Doo, Asheville Pet Waste Removal" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_BASE_URL} />
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </script>
      </Helmet>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <ScrollToTop />
      <RouteTracker />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/sitemap.xml" element={<SitemapXML />} />

          <Route path="/" element={<CoreServicePage />} />
          <Route path="/near-me" element={<NearMePage />} />
          <Route path="/one-time-cleanup" element={<OneTimeCleanupPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/quote" element={<QuoteRequestPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/spring-special" element={<SpringSpecialPage />} />
          <Route path="/1st-scoop-free" element={<FirstScoopFreePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          
          <Route path="/dog-poop-removal-asheville" element={<DogPoopRemovalPage />} />
          <Route path="/pet-waste-removal-asheville" element={<PetWasteRemovalPage />} />
          <Route path="/dog-poop-scooping-asheville" element={<DogPoopScoopingPage />} />
          <Route path="/yard-cleanup-asheville" element={<YardCleanupPage />} />

          <Route path="/pet-safe-checklist" element={<PetSafeChecklistLandingPage />} />
          <Route path="/dog-park-guide" element={<DogParkGuideLandingPage />} />

          <Route path="/reddit-oauth-callback" element={<RedditOAuthCallbackPage />} />
          <Route path="/qb-oauth-callback" element={<QuickBooksOAuthCallbackPage />} />
          
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/service/:slug" element={<LocationTemplate />} />

          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/asheville-pet-waste-removal-homeowners" element={<AshevilleHomeownersPage />} />
          <Route path="/blog/commercial-pet-waste-removal-asheville" element={<CommercialPetWastePage />} />
          <Route path="/blog/how-often-clean-yard" element={<HowOftenCleanYard />} />
          <Route path="/blog/black-mountain" element={<BlogSignalMountain />} />
          <Route path="/blog/weaverville" element={<BlogSoddyDaisy />} />
          <Route path="/blog/dog-poop-cleanup-asheville-summer-heat" element={<DogPoopCleanupSummerHeat />} />
          <Route path="/blog/best-dog-parks-asheville-nc" element={<DogParksAsheville />} />
          
          <Route path="/blog/pooper-scooper-cost-asheville" element={<PooperScooperCostAsheville />} />
          <Route path="/blog/best-pooper-scooper-services-asheville" element={<BestPooperScooperServicesAsheville />} />
          <Route path="/blog/how-often-scoop-dog-poop-asheville" element={<HowOftenScoopDogPoopAsheville />} />
          <Route path="/blog/is-dog-poop-hurting-your-asheville-yard" element={<IsDogPoopHurtingYourAshevilleYard />} />
          <Route path="/blog/is-dog-waste-bad-for-lawn" element={<IsDogWasteBadForLawn />} />
          <Route path="/blog/spring-pet-care-checklist" element={<SpringPetCareChecklist />} />
          <Route path="/blog/professional-waste-removal-benefits" element={<ProfessionalWasteRemovalBenefits />} />
          <Route path="/blog/seasonal-pet-care-tips" element={<SeasonalPetCareTips />} />
          <Route path="/blog/health-benefits-yard-cleanup" element={<HealthBenefitsYardCleanup />} />
          <Route path="/blog/customer-success-stories" element={<CustomerSuccessStories />} />
          <Route path="/blog/diy-vs-professional" element={<DIYVsProfessional />} />
          <Route path="/blog/lawn-health-and-pet-waste" element={<LawnHealthAndPetWaste />} />
          <Route path="/blog/health-risks-of-pet-waste" element={<HealthRisksOfPetWaste />} />
          <Route path="/blog/pet-waste-management-guide" element={<PetWasteManagementGuide />} />

          <Route path="*" element={
            <>
              <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
              <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
                <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="text-primary hover:underline font-bold">Back to home</a>
              </div>
            </div>
          </>
          } />
                  <Route path="/how-it-works" element={<HowItWorksPage />} />
          </Routes>
      </Suspense>
      
      <ChatWidgetGate />
      <Toaster />
    </Router>
  );
}

export default App;
