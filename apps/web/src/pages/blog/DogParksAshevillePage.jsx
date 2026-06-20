
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle2, Star, ArrowRight, Dog } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import { Button } from '@/components/ui/button';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const pageTitle = "7 Best Dog Parks in Asheville, NC (2026 Guide)";
const pageDesc = "Discover the 7 best dog parks in Asheville, NC for 2026 — off-leash areas, addresses, hours, amenities, and tips for keeping your home yard just as clean.";
const canonicalPath = "/blog/best-dog-parks-asheville-nc";
const publishDate = "2026-06-07";
const authorName = "Scoopy Doo LLC";

const parks = [
  {
    id: "french-broad-river",
    number: 1,
    name: "French Broad River Dog Park",
    location: "West Asheville (near Carrier Park, off Amboy Road)",
    address: "Amboy Road, Asheville, NC 28806",
    phone: null,
    hours: "Daily, dawn to dusk",
    cost: "Free",
    tag: "Most Popular",
    tagColor: "bg-primary/10 text-primary",
    highlights: [
      "Large fully fenced off-leash area right on the French Broad River",
      "River access so dogs can wade and cool off",
      "Separate space for shy and small dogs",
      "Shade trees and benches for owners",
      "Connected to the Carrier Park and greenway path system",
      "Easy parking off Amboy Road",
    ],
    description: "The French Broad River Dog Park is the best-known off-leash park in Asheville, sitting right on the river next to Carrier Park in West Asheville. The big fenced field and direct river access make it a favorite on warm afternoons, and it connects to the river greenway if you want to keep walking afterward. If you live in West Asheville or anywhere on the river side of town, this is your go-to.",
    serviceLink: "/service/west-asheville",
    serviceName: "West Asheville",
  },
  {
    id: "azalea-park",
    number: 2,
    name: "Azalea Park Dog Park",
    location: "East Asheville (Azalea Road, along the Swannanoa River)",
    address: "Azalea Road East, Asheville, NC 28805",
    phone: null,
    hours: "Daily, dawn to dusk",
    cost: "Free",
    tag: "Best River Access",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    highlights: [
      "Off-leash area beside the Swannanoa River",
      "Part of the larger Azalea Park recreation complex",
      "Room to run plus a riverbank for water-loving dogs",
      "Close to the East Asheville and Oakley neighborhoods",
      "Walking paths nearby for a cool-down lap",
      "Free and open to the public",
    ],
    description: "Tucked into the Azalea Park complex in East Asheville, this off-leash park runs along the Swannanoa River and is a favorite for dogs who love the water. It is an easy stop for the East Asheville, Oakley, and Haw Creek neighborhoods, and the surrounding park gives you trails and ballfields to explore once your dog has burned off some energy.",
    serviceLink: "/service/asheville",
    serviceName: "Asheville",
  },
  {
    id: "richmond-hill",
    number: 3,
    name: "Richmond Hill Park Dog Park",
    location: "North Asheville (off Richmond Hill Drive)",
    address: "Richmond Hill Drive, Asheville, NC 28806",
    phone: null,
    hours: "Daily, dawn to dusk",
    cost: "Free",
    tag: "Best Wooded Setting",
    tagColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    highlights: [
      "Large off-leash area in a wooded north Asheville park",
      "Separate fenced zones for large and small dogs",
      "Natural terrain that dogs love to explore and sniff",
      "Shaded, which helps on hot summer days",
      "Walking trails throughout Richmond Hill Park",
      "Free public access",
    ],
    description: "Richmond Hill Park sits on a wooded ridge in north Asheville and offers one of the larger off-leash dog areas in the city, with separate zones for big and small dogs. The natural, shaded terrain is a welcome change from open turf parks and stays cooler in summer. It is a convenient option for north Asheville, Woodfin, and Weaverville dog owners.",
    serviceLink: "/service/woodfin",
    serviceName: "Woodfin",
  },
  {
    id: "carrier-park",
    number: 4,
    name: "Carrier Park",
    location: "West Asheville (on the French Broad River)",
    address: "Amboy Road, Asheville, NC 28806",
    phone: null,
    hours: "Daily, dawn to dusk",
    cost: "Free",
    tag: "Best for Long Walks",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    highlights: [
      "Riverside park with paved greenway loops",
      "Right next to the French Broad River Dog Park",
      "Great for leashed walks and cool-downs",
      "Lots of open green space and shade",
      "Velodrome, ballfields, and picnic areas",
      "Part of the Wilma Dykeman Greenway system",
    ],
    description: "Carrier Park is the riverside green space right next to the French Broad River Dog Park, and the two together make a perfect outing. Dogs should be leashed in Carrier Park itself, but the paved greenway loops along the river are ideal for a long walk before or after off-leash time next door. A West Asheville staple for dog owners.",
    serviceLink: "/service/west-asheville",
    serviceName: "West Asheville",
  },
  {
    id: "lake-tomahawk",
    number: 5,
    name: "Lake Tomahawk Park",
    location: "Black Mountain",
    address: "Lake Tomahawk, Black Mountain, NC 28711",
    phone: null,
    hours: "Daily, dawn to dusk",
    cost: "Free",
    tag: "Best in the Swannanoa Valley",
    tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    highlights: [
      "Flat, scenic loop around a small mountain lake",
      "Popular leashed-walking spot in Black Mountain",
      "Mountain views and shade along the path",
      "Easy, level terrain for all ages",
      "Close to downtown Black Mountain",
      "Free public access",
    ],
    description: "Lake Tomahawk in Black Mountain is not an off-leash park, but its flat, scenic loop around the lake is one of the most pleasant leashed dog walks in the Swannanoa Valley. With mountain views and plenty of shade, it is a favorite for Black Mountain, Swannanoa, and Montreat dog owners who want an easy, beautiful stroll.",
    serviceLink: "/service/black-mountain",
    serviceName: "Black Mountain",
  },
  {
    id: "jackson-park",
    number: 6,
    name: "Jackson Park",
    location: "Hendersonville",
    address: "801 Glover Street, Hendersonville, NC 28792",
    phone: null,
    hours: "Daily, dawn to dusk",
    cost: "Free",
    tag: "Best in Henderson County",
    tagColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    highlights: [
      "Henderson County's largest park with miles of trails",
      "Wooded creekside paths for leashed walks",
      "Lots of shade and open space",
      "Popular with Hendersonville and Fletcher dog owners",
      "Plenty of parking",
      "Free public access",
    ],
    description: "Jackson Park is the largest park in Henderson County and a favorite for leashed dog walks, with wooded trails winding along Mud Creek. While it is not a fenced off-leash park, the shaded paths and open fields make it a great everyday walking spot for dog owners in Hendersonville, Fletcher, and Mills River.",
    serviceLink: "/service/hendersonville",
    serviceName: "Hendersonville",
  },
];

const faqs = [
  {
    question: "Are all dog parks in Asheville free?",
    answer: "Most are free, including Barks and Tails, Heritage Park, Fletcher, Greenway Farms, and Asheville Chew Chew Canine Park. Play Wash Pint is the exception — it requires a day pass or membership, but offers a premium experience with ranger staff, a self-wash station, and an on-site bar.",
  },
  {
    question: "Which Asheville dog park is best for small dogs?",
    answer: "All seven parks on this list have separate zones for small dogs. Greenway Farms in Arden is especially popular for smaller dogs because of its quiet, natural setting. Fletcher Dog Park is also great for small dogs, with a peaceful atmosphere and complimentary waste bags.",
  },
  {
    question: "Which dog park in Asheville has the most amenities?",
    answer: "Barks and Tails Dog Park in northeast Asheville is the most feature-rich free park, with a splash pad, sandbox, agility equipment, dog wash station, and access to 40 miles of trails. Play Wash Pint wins overall for premium amenities if you are open to a membership.",
  },
  {
    question: "Are Asheville dog parks open year-round?",
    answer: "Yes, all of the parks listed are open year-round. Note that water stations at some parks (like Greenway Farms) are only available during warm months. Barks and Tails opens at 7 AM daily; most parks operate dawn to dusk.",
  },
  {
    question: "My dog just visited a dog park — how do I keep my yard clean too?",
    answer: "After regular park visits, dogs tend to do more of their business at home too. Scoopy Doo handles weekly, bi-weekly, and one-time yard cleanups throughout the Asheville area and Western North Carolina — so you never have to worry about it. Get a free quote at scoopyavl.com.",
  },
];

const DogParksAshevillePage = () => {
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDesc,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://www.scoopyavl.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Scoopy Doo LLC",
      "url": "https://www.scoopyavl.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scoopyavl.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.scoopyavl.com/blog" },
      { "@type": "ListItem", "position": 3, "name": pageTitle, "item": canonicalUrl }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl opacity-50" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl opacity-50" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-slate-300">Dog Parks Asheville</span>
              </nav>
              <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
                <MapPin className="w-4 h-4" />
                <span>Asheville, NC Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 text-balance leading-tight">
                7 Best Dog Parks in Asheville, NC
                <span className="block text-primary mt-1">(2026 Guide)</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl">
                Asheville is one of the most dog-friendly cities in the Southeast. From a splash pad and sandbox in northeast Asheville to a dog park bar on the Southside, here are the seven best places to let your pup run free in 2026 — with verified hours, addresses, and what makes each one worth the trip.
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>By Scoopy Doo LLC</span>
                <span>|</span>
                <span>Updated June 2026</span>
                <span>|</span>
                <span>7 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Jump to a Park</p>
            <div className="flex flex-wrap gap-2">
              {parks.map(park => (
                <a
                  key={park.id}
                  href={`#${park.id}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {park.number}. {park.name.split(" ")[0]} {park.name.split(" ")[1]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With thousands of dog owners living across Buncombe County, the demand for quality off-leash spaces has never been higher. The good news: Asheville has invested heavily in dog-friendly infrastructure over the past few years, and the options are genuinely excellent.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are in West Asheville, downtown, Black Mountain, or out toward Hendersonville, there is a great dog park within easy driving distance. Here is what to expect at each one and which neighborhoods it serves best.
            </p>
          </motion.div>
        </section>

        {/* Parks */}
        <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {parks.map((park, index) => (
            <motion.article
              key={park.id}
              id={park.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Card Header */}
              <div className="bg-slate-950 px-8 py-6 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl font-black text-primary/30 leading-none">{park.number}</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${park.tagColor}`}>
                      {park.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{park.name}</h2>
                  <p className="text-slate-400 mt-1 flex items-center gap-1.5 text-sm">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {park.location}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-8">{park.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Highlights */}
                  <div>
                    <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Highlights</h3>
                    <ul className="space-y-2">
                      {park.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Visitor Info</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{park.address}</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{park.hours}</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Admission: {park.cost}</span>
                        </div>
                        {park.phone && (
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <a href={`tel:${park.phone}`} className="hover:text-primary transition-colors">{park.phone}</a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Scoopy Doo serves {park.serviceName}.</span>{" "}
                        Live nearby? We handle weekly yard cleanup so your yard stays as clean as the park.
                      </p>
                      <Link to={park.serviceLink} className="inline-flex items-center gap-1 text-sm text-primary font-semibold mt-2 hover:underline">
                        Learn about service in {park.serviceName} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Tip Section */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Dog Park Etiquette: A Quick Refresher
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Pick up immediately — don't rely on the park's waste stations being stocked",
                  "Keep vaccinations current and bring proof if required (Play Wash Pint enforces this)",
                  "Remove retractable leashes before entering the off-leash area",
                  "Watch your dog at all times — no phone scrolling while your dog plays",
                  "If your dog is sick or in heat, skip the visit and come back next week",
                  "Spayed or neutered dogs over 1 year old are required at Play Wash Pint",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-2xl mb-6">
                <Dog className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Keep Your Home Yard as Clean as the Park
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Dog parks are great for your pup, but regular visits mean more cleanup at home too.
                Scoopy Doo handles weekly, bi-weekly, and one-time yard cleanups across Asheville,
                Arden, Fletcher, Fairview, Mills River, and surrounding areas. We scoop, bag, and
                dispose — so your yard is always ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                  <Link to="/quote">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 h-14 px-8 text-lg rounded-xl">
                  <Link to="/service-areas">View All Service Areas</Link>
                </Button>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                Serving Asheville, Arden, Fletcher, Fairview, Hendersonville, Mills River, Leicester, and more.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default DogParksAshevillePage;
