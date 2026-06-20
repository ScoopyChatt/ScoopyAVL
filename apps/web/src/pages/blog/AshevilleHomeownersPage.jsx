
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { Button } from '@/components/ui/button';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const AshevilleHomeownersPage = () => {
  const faqs = [
    {
      question: "How often should I have my yard cleaned?",
      answer: "Most Asheville homeowners prefer our weekly pooper scooper service to keep their yards consistently clean. However, we also offer twice-weekly and bi-weekly schedules depending on the number of dogs you have and the size of your yard."
    },
    {
      question: "Is pet waste removal safe for my kids?",
      answer: "Absolutely. In fact, professional pet waste removal makes your yard significantly safer for children. We remove the waste that harbors harmful bacteria, parasites, and pathogens, reducing the risk of transmission to your family."
    },
    {
      question: "What areas does Scoopy Doo serve?",
      answer: "We proudly serve the greater Asheville area, including Hendersonville, Fairview, Arden, Fletcher, Woodfin, Black Mountain, Swannanoa, Mills River, and nearby Western North Carolina communities."
    },
    {
      question: "Do I need to be home when you clean the yard?",
      answer: "No, you don't need to be home! As long as we have secure access to your backyard (like an unlocked gate or a provided gate code) and your dogs are secured inside, our trained technicians can complete the yard poop cleanup service seamlessly."
    },
    {
      question: "What happens to the dog poop after you scoop it?",
      answer: "We double-bag the collected waste and securely place it in your designated outdoor trash bin. This ensures odor control and compliance with local municipal waste guidelines."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        title="Why Asheville Homeowners Are Hiring Pet Waste Removal Services"
        description="Why Asheville homeowners are hiring professional pet waste removal services. Learn the benefits of weekly dog poop cleanup for your lawn."
        canonicalUrl={`${CANONICAL_BASE_URL}/blog/asheville-pet-waste-removal-homeowners`}
      />
      <Header />

      <main className="flex-grow py-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          
          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Homeowner Tips
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight text-balance" style={{ letterSpacing: '-0.02em' }}>
              Why Asheville Homeowners Are Hiring Pet Waste Removal Services
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
              <div className="flex items-center font-medium">
                <User className="w-5 h-5 mr-2 text-primary" />
                Scoopy Doo Team
              </div>
              <div className="flex items-center font-medium">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                May 20, 2026
              </div>
            </div>
          </header>

          <div className="blog-prose">
            <p className="lead text-xl text-muted-foreground font-medium mb-8">
              Life in the Scenic City is all about enjoying the outdoors, but dealing with landmines in your own backyard can quickly ruin the fun. Here is why more homeowners than ever are outsourcing their yard poop cleanup service.
            </p>

            <p>
              Asheville is a wildly pet-friendly city. From the trails on Black Mountain to the greenways in Fairview, we love our dogs. But while having a furry best friend brings endless joy, the inevitable cleanup is a chore that no one looks forward to. That is exactly why professional pet waste removal in Asheville is becoming an essential home service.
            </p>
            
            <p>
              Whether you live in Hendersonville, Arden, or across the border in Mills River NC, a pooper scooper service is no longer viewed as an extravagant luxury&mdash;it is a practical solution for busy families.
            </p>

            <h2>1. Winning Back Your Free Time</h2>
            <p>
              Between work commutes, school drop-offs, and weekend activities, free time is your most valuable asset. Spending your Saturday morning doing dog poop removal in Asheville is frustrating. Professional pet waste cleanup near me means taking that dreaded chore off your to-do list permanently. Instead of scanning the grass with a plastic bag, you can spend your weekend hiking Swannanoa or enjoying time with your family.
            </p>

            <h2>2. Dramatically Reducing Odor</h2>
            <p>
              Summers in North Carolina and Western North Carolina get hot and humid. When dog waste sits in the sun, the odor can quickly overtake your backyard, making it impossible to enjoy your patio or host a barbecue. A routine pooper scooper service in Asheville ensures waste is removed before it bakes into the soil and creates a lingering stench.
            </p>

            <h2>3. Protecting Your Children's Health</h2>
            <p>
              Dog waste is not a natural fertilizer; it is highly acidic and packed with harmful bacteria, including E. coli, salmonella, and various parasites. When kids play in the yard, they are at risk of coming into contact with these pathogens. Professional yard poop cleanup service eliminates these hazards, giving parents true peace of mind when their children are running barefoot through the grass in Fletcher NC or Woodfin.
            </p>

            <h2>4. Stopping Tracked-In Messes</h2>
            <p>
              We have all experienced the horror of a family member&mdash;or worse, the dog&mdash;stepping in a fresh pile and tracking it across the living room rug. Routine dog waste removal service acts as an insurance policy for your indoor carpets and hardwood floors. Consistent cleanings mean fewer accidents and significantly less time spent scrubbing your floors.
            </p>

            <h2>5. Reclaiming Backyard Enjoyment and Curb Appeal</h2>
            <p>
              A yard filled with pet waste quickly becomes a neglected space. Homeowners stop gardening, kids stop playing, and hosting guests becomes out of the question. Furthermore, the high nitrogen content in dog poop burns grass, leaving unsightly brown patches. Pet waste removal in Hendersonville, Fairview, and surrounding areas ensures your lawn stays green, healthy, and ready for entertaining.
            </p>

            <hr className="my-12 border-border" />

            <h2>Frequently Asked Questions</h2>
            <div className="mb-12">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>

          <div className="mt-16 bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12 text-center shadow-xl border border-border">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Reclaim Your Yard?</h3>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Schedule Scoopy Doo service today and let our professionals handle the mess so you can enjoy your outdoor space again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                <Link to="/quote">Get Your Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-secondary-foreground/20 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-xl">
                <a href="tel:828-844-8060">Call (828) 844-8060</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-secondary-foreground/70">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> No Contracts</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Weekly Servicing</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> 100% Satisfaction</span>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AshevilleHomeownersPage;
