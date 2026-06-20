
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Eye, FileText, Bell, Phone, MapPin, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const PrivacyPolicyPage = () => {
  const lastUpdated = "June 7, 2026";
  const canonicalUrl = getCanonicalUrl('/privacy-policy');
  const pageTitle = "Privacy Policy | Scoopy Doo Pet Waste Removal";
  const pageDesc = "Read our privacy policy to understand how Scoopy Doo protects and uses your information while providing pet waste removal services.";

  const sections = [
    {
      id: "information-collection",
      icon: Database,
      title: "Information Collection",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>We collect information that you voluntarily provide to us when you request a quote, schedule a service, or contact our customer support. This information includes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Contact Information:</strong> Your name, email address, phone number, and physical address for service delivery.</li>
            <li><strong className="text-foreground">Service Requests:</strong> Details about your yard size, gate access codes or instructions, and specific service preferences.</li>
            <li><strong className="text-foreground">Pet Information:</strong> The number, breed, and names of your dogs to ensure our technicians approach your property with the right preparation and care.</li>
            <li><strong className="text-foreground">Usage Data:</strong> Automatically collected information about how you interact with our website, such as IP addresses, browser types, and pages visited, to help us improve our digital experience.</li>
          </ul>
        </div>
      )
    },
    {
      id: "how-we-use",
      icon: Eye,
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Your information is primarily used to provide you with reliable, high-quality pet waste removal services. Specifically, we use your data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Deliver Services:</strong> Route our technicians efficiently to your property and ensure they have the necessary access instructions.</li>
            <li><strong className="text-foreground">Communication:</strong> Send you service reminders, "on-the-way" notifications, completion confirmations, and billing invoices.</li>
            <li><strong className="text-foreground">Marketing &amp; Promotions:</strong> Occasionally send you special offers, referral discounts, or newsletters. <em className="text-foreground/80">You may opt out of marketing communications at any time by replying STOP to any text message or clicking the "unsubscribe" link in our emails.</em></li>
            <li><strong className="text-foreground">Service Improvement:</strong> Analyze customer feedback and service patterns to enhance our offerings and training procedures.</li>
          </ul>
        </div>
      )
    },
    {
      id: "sms-messaging",
      icon: MessageSquare,
      title: "SMS & Text Messaging (A2P)",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Scoopy Doo LLC sends automated text messages (SMS) to customers who provide their mobile phone number. By providing your phone number and requesting or scheduling service, you consent to receive text messages from us at the number provided.</p>

          <p><strong className="text-foreground">Types of messages we send:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Transactional / Service Messages:</strong> Appointment confirmations, "on-the-way" arrival notifications, post-service completion confirmations, and gate-closed photo alerts. These are sent in connection with your active service.</li>
            <li><strong className="text-foreground">Account &amp; Billing Notifications:</strong> Invoice reminders, payment receipts, and account updates.</li>
            <li><strong className="text-foreground">Promotional Messages:</strong> Seasonal specials, referral offers, and service announcements. These are sent only to customers who have not opted out.</li>
          </ul>

          <p><strong className="text-foreground">Message frequency:</strong> Message frequency varies. Transactional messages are sent around each scheduled service visit. Promotional messages are sent no more than 4 times per month.</p>

          <p><strong className="text-foreground">Message and data rates may apply.</strong> Standard SMS and data rates charged by your mobile carrier may apply to messages you send and receive from us.</p>

          <p><strong className="text-foreground">How to opt out:</strong> You may opt out of receiving text messages from us at any time by replying <strong>STOP</strong> to any message we send. After opting out, you will receive one final confirmation text, and then no further messages. To opt back in, reply <strong>START</strong> or contact us directly.</p>

          <p><strong className="text-foreground">Consent is not a condition of purchase.</strong> You are not required to consent to receiving promotional text messages as a condition of purchasing any services from Scoopy Doo LLC.</p>

          <p><strong className="text-foreground">No third-party sharing of mobile information:</strong> We do not sell, rent, or share your mobile phone number or SMS opt-in data with third parties or affiliates for their own marketing purposes. Mobile information collected through our SMS program will not be shared with any third party for marketing or promotional purposes.</p>

          <p>For help with our text messaging program, reply <strong>HELP</strong> to any message or contact us at <a href="tel:828-844-8060" className="text-primary hover:underline">(828) 844-8060</a> or <a href="mailto:info@scoopyavl.com" className="text-primary hover:underline">info@scoopyavl.com</a>.</p>
        </div>
      )
    },
    {
      id: "data-protection",
      icon: Lock,
      title: "Data Protection and Security",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Scoopy Doo takes the security of your personal and property information seriously. We implement industry-standard physical, technical, and administrative security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
          <p>This includes secure encryption for online payments (processed through verified third-party payment gateways; we do not store full credit card numbers on our servers) and strict access controls for our dispatch and routing software. We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy and to comply with our legal obligations.</p>
        </div>
      )
    },
    {
      id: "third-party-sharing",
      icon: Shield,
      title: "Third-Party Sharing",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</strong></p>
          <p>We only share your information with trusted third-party service providers who assist us in operating our business, such as:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment processors for secure billing.</li>
            <li>Routing and dispatch software providers to schedule our technicians.</li>
            <li>Email and SMS delivery services for service notifications.</li>
          </ul>
          <p>These providers are contractually obligated to keep your information confidential and use it solely for the specific services they perform for Scoopy Doo. Mobile opt-in data and consent are never shared with third parties for marketing purposes.</p>
        </div>
      )
    },
    {
      id: "customer-rights",
      icon: FileText,
      title: "Your Customer Rights",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Depending on your jurisdiction, you may have specific rights regarding your personal data. At Scoopy Doo, we extend these fundamental rights to all our customers:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Access:</strong> You have the right to request a copy of the personal information we hold about you.</li>
            <li><strong className="text-foreground">Correction:</strong> You can request that we correct any inaccurate or incomplete information regarding your account or property details.</li>
            <li><strong className="text-foreground">Deletion:</strong> You may request the deletion of your personal data, subject to certain legal exceptions (e.g., retaining records for tax purposes or dispute resolution).</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the information provided at the bottom of this policy.</p>
        </div>
      )
    },
    {
      id: "policy-updates",
      icon: Bell,
      title: "Policy Updates",
      content: (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you by updating the "Last Updated" date at the top of this policy and, where appropriate, sending a notification to the email address associated with your account. We encourage you to review this page periodically to stay informed about how we are protecting your information.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Header />

      <main className="flex-grow pb-24 md:pb-0">
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight">
              Privacy Policy &mdash; How Scoopy Doo Protects Your Personal Information
            </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Scoopy Doo, we respect your privacy as much as we respect your yard. This policy outlines how we handle your personal information with care and security.
              </p>
              <p className="text-sm font-medium text-muted-foreground mt-6">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none mb-16"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Scoopy Doo (also operating as Scoopy Chatt). As Asheville's trusted pet waste removal service, we know that inviting us onto your property requires trust. Part of that trust involves being completely transparent about how we collect, use, and protect the personal information of our clients in Asheville, North Carolina, and the surrounding areas.
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="border-border/50 shadow-sm overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <section.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground m-0">{section.title}</h2>
                      </div>
                      {section.content}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-card border border-border rounded-2xl p-8 shadow-md text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to reach out to our team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <a href="tel:828-844-8060" className="flex flex-col items-center p-6 bg-muted/50 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors group">
                  <Phone className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">828-844-8060</span>
                  <span className="text-sm text-muted-foreground mt-1">Call or Text</span>
                </a>

                <div className="flex flex-col items-center p-6 bg-muted/50 rounded-xl">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <span className="font-bold text-lg text-foreground">Asheville, NC</span>
                  <span className="text-sm text-muted-foreground mt-1">Local Headquarters</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      
      <nav aria-label="Scoopy Doo site navigation" className="py-8 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Explore Scoopy Doo</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
            <li><Link to="/" className="text-primary hover:underline font-medium text-sm">Home</Link></li>
            <li><Link to="/services" className="text-primary hover:underline font-medium text-sm">Services</Link></li>
            <li><Link to="/pricing" className="text-primary hover:underline font-medium text-sm">Pricing</Link></li>
            <li><Link to="/quote" className="text-primary hover:underline font-medium text-sm">Get a Quote</Link></li>
            <li><Link to="/faq" className="text-primary hover:underline font-medium text-sm">FAQ</Link></li>
            <li><Link to="/reviews" className="text-primary hover:underline font-medium text-sm">Reviews</Link></li>
            <li><Link to="/service-areas" className="text-primary hover:underline font-medium text-sm">Service Areas</Link></li>
            <li><Link to="/blog" className="text-primary hover:underline font-medium text-sm">Blog</Link></li>
          </ul>
        </div>
      </nav>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PrivacyPolicyPage;
