
import React from 'react';
import { CheckCircle2, Star, MapPin } from 'lucide-react';
import SEOHead from '@/components/SEOHead.jsx';

const DogParkGuideLandingPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <SEOHead path="/dog-park-guide" />

      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
          <MapPin className="w-4 h-4" />
          <span>Asheville, NC Local Guide</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance mb-6 max-w-4xl mx-auto leading-tight">
          Discover Asheville's Best Kept Secrets for Dog Owners!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Stop guessing where to take your pup. Get our exclusive, fully-detailed guide to the best off-leash areas and hidden gems around the Scenic City&mdash;absolutely free.
        </p>
      </section>

      {/* Two-Column Feature Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform -rotate-3 scale-[1.02] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1702573391190-85feea21409c" 
              alt="Happy dog running in a sunny park in Asheville" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Your Free Guide Includes:
            </h2>
            <ul className="space-y-6">
              {[
                "A complete map of 6 premier off-leash parks",
                "Insider tips on water access, shaded areas, and amenities",
                "Hidden gem parks that most locals don't even know about",
                "Perfect park day planning checklists and safety tips"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground/90 leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 mt-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free Guide Now!
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter your details below and we'll send the guide straight to your inbox.
            </p>
          </div>
          
          <div className="bg-card rounded-3xl shadow-lg border border-border overflow-hidden p-2 md:p-6">
            <div className="relative w-full h-[800px] md:h-[700px] rounded-2xl overflow-hidden bg-background">
              <iframe 
                src="https://forms.gle/sa9We3nEZvaMc9h37" 
                className="absolute inset-0 w-full h-full border-0"
                title="Get Your Free Guide"
                loading="lazy"
              >
                Loading form...
              </iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://forms.gle/sa9We3nEZvaMc9h37" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-sm"
              >
                Having trouble seeing the form? Click here
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Join Hundreds of Happy Asheville Pet Owners
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 fill-accent text-accent" />
            ))}
          </div>
          <div className="text-xl font-bold text-foreground">5.0 Average Rating</div>
          <p className="text-muted-foreground">Based on Google Reviews from local dog parents</p>
        </div>
      </section>


      {/* SEO Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">Asheville's Best Dog Parks & Off-Leash Areas</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Asheville is one of the most dog-friendly cities in North Carolina. From the French Broad River waterfront to the mountain trails above the city, the Scenic City has no shortage of places to let your dog run, explore, and socialize. Here's your local insider guide to the best spots.
        </p>

        <h3 className="text-2xl font-semibold text-foreground mb-4">French Broad Riverpark Dog-Friendly Trail</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Stretching over 10 miles along the French Broad River, the Riverpark is Asheville's most popular outdoor recreation area. Dogs are welcome on leashes throughout the paved trail system. You'll find water fountains, restrooms, and plenty of shaded areas &mdash; perfect for longer walks on hot North Carolina summer days. The trail connects Bent Creek Dam all the way to downtown, passing through several neighborhood greenways along the way.
        </p>

        <h3 className="text-2xl font-semibold text-foreground mb-4">Bent Creek &amp; Lake Powhatan</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Just south of Asheville in the Pisgah National Forest, the Bent Creek Experimental Forest and Lake Powhatan offer miles of wooded, well-marked trails where leashed dogs are welcome. Routes like the Hard Times Trail and Explorer Loop wind along creeks and the lake with plenty of shade and water access. These natural areas are ideal for dogs who love to sniff, explore, and get their paws dirty. After a muddy trail hike, a proper yard cleanup back home becomes especially important.
        </p>

        <h3 className="text-2xl font-semibold text-foreground mb-4">Fairview and Hendersonville Dog-Friendly Parks</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The suburban neighborhoods of Fairview, Hendersonville, and Swannanoa are home to several community parks and greenways where dogs are welcome on leash. The Fairview Greenway is a favorite among local dog owners, offering a flat, paved path through a quiet residential corridor. These neighborhoods are also among Scoopy Doo's most popular service areas for weekly pet waste removal.
        </p>

        <h3 className="text-2xl font-semibold text-foreground mb-4">Black Mountain and Swannanoa Trails</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For the adventurous dog owner, the mountain communities east of Asheville offer world-class trail access. Black Mountain connects to the trails around Montreat and Lake Tomahawk, while Swannanoa offers the public paths at Warren Wilson College and nearby sections of the Mountains-to-Sea Trail. Dogs must be leashed in most of these areas, and always bring water &mdash; the mountain trails are more strenuous than flatland walks.
        </p>

        <h3 className="text-2xl font-semibold text-foreground mb-4">Keep Your Yard Clean Between Park Visits</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          All those dog park adventures mean your yard gets a workout too. Pet waste left on your lawn creates bacteria, attracts pests, and can make your yard unsafe for children and other pets. Scoopy Doo provides weekly, bi-weekly, and one-time yard cleanup services throughout Asheville and surrounding communities &mdash; so your yard stays as clean as the parks you love to visit.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Download our free Asheville Dog Park Guide above for a complete list of locations, hours, rules, and insider tips from local dog owners who've explored every corner of the Scenic City with their four-legged companions.
        </p>
      </section>
    </div>
  );
};

export default DogParkGuideLandingPage;
