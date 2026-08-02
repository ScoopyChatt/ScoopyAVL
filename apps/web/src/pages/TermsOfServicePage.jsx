
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Clock, CreditCard, AlertCircle, FileText, MessageSquare, CheckCircle2, CalendarX2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const TermsOfServicePage = () => {
  const lastUpdated = "August 2, 2026";
  const canonicalUrl = getCanonicalUrl('/terms-of-service');
  const pageTitle = "Terms of Service | Scoopy Doo AVL Pet Waste Removal";
  const pageDesc = "Read the terms of service, billing policy, and SMS messaging terms for Scoopy Doo AVL pet waste removal services in Asheville, NC.";

  const sections = [
    {
      id: "introduction",
      title: "1. Acceptance of Terms",
      icon: <FileText className="w-6 h-6 text-primary" />,
      content: (
        <>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Scoopy Doo AVL, LLC operates as an independent, locally owned entity offering pet waste removal services ("we," "us," or "our") to residential, commercial, and business properties throughout Asheville, NC and the surrounding area. By booking or continuing to use our services, you ("Customer") agree to the following Terms of Service ("Terms"), which govern the sales and services we provide ("Services").
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Continued use of our Services constitutes your acceptance of these Terms. You acknowledge that our ability to provide Services may depend on factors such as weather conditions, grass height, and access to the yard, which remains the Customer's responsibility, along with other circumstances beyond our control.
          </p>
        </>
      )
    },
    {
      id: "service-description",
      title: "2. Dog Waste Removal Service & Pricing",
      icon: <Shield className="w-6 h-6 text-primary" />,
      content: (
        <>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Scoopy Doo AVL specializes in residential and commercial pet waste removal. Pricing is calculated based on an average property area of 1/8 to 1/4 of an acre, with additional charges applicable for larger yards. It is our responsibility to notify a Customer before servicing if their yard is large enough to require an additional charge. This agreement does not give us the right to retroactively charge an additional fee for a yard larger than defined here without first notifying the Customer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            New customers have their initial cleaning fee ($125) waived so long as they remain an active customer for at least four normal priced service visits following any introductory offer. Customers who cancel service before completing four normal priced visits will have an early termination fee of $125 charged to their account.
          </p>
        </>
      )
    },
    {
      id: "yard-access",
      title: "3. Access to Your Yard",
      icon: <AlertCircle className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Gates must be accessible on your scheduled service day. Inaccessible areas due to locked, blocked, or frozen gates, or the presence of an unfriendly or aggressive dog left outside, may result in the exclusion of cleaning services for that visit, with charges still applicable as scheduled.
        </p>
      )
    },
    {
      id: "leaves-debris",
      title: "4. Leaves, Debris & Tall Grass",
      icon: <AlertCircle className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          While we strive for thoroughness, we acknowledge that tall grass, leaves, or heavy debris can make waste difficult to locate. If overgrowth obstructs visibility during a visit, some waste may be missed. We commit to correcting any oversights during a subsequent visit following yard maintenance. Customers are encouraged to notify us promptly of any significant oversight so we can make it right.
        </p>
      )
    },
    {
      id: "weather",
      title: "5. Weather & Scheduling",
      icon: <Clock className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          We operate during a wide range of weather conditions, except in cases of severe thunderstorms, high winds, extreme temperatures, flooding, or excessive snowfall. Recurring service runs on a monthly subscription basis, and we do not offer refunds for a visit skipped due to weather. In that case, service is resumed the following week without refund. To protect the condition of your yard, we may also skip service during especially muddy conditions and resume during drier periods. If urgent cleaning is needed before your next scheduled visit, contact us, though we cannot guarantee immediate accommodation.
        </p>
      )
    },
    {
      id: "payment-terms",
      title: "6. Billing",
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Billing occurs prior to each service, with payment due upon receipt of the invoice. Failure to remit payment within 5 days will result in service suspension and a late payment fee equivalent to one week of service. Accounts overdue beyond this period will be forwarded to collections. One-time cleanings require a deposit, with the remaining balance due immediately upon completion of service. Payment by credit card, debit card, or ACH is required.
        </p>
      )
    },
    {
      id: "holidays",
      title: "7. Holidays",
      icon: <CalendarX2 className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Scoopy Doo AVL does not operate on Memorial Day, the 4th of July, Labor Day, Thanksgiving Day, Christmas Day, or New Year's Day. Any service scheduled on one of these holidays will be postponed to the following week without a refund.
        </p>
      )
    },
    {
      id: "guarantee",
      title: "8. Satisfaction Guarantee",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          We prioritize customer satisfaction. If you are dissatisfied with a service visit, notify us within 24 hours of the pickup and we will promptly arrange a return visit to make it right.
        </p>
      )
    },
    {
      id: "privacy",
      title: "9. Privacy",
      icon: <Shield className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          We may collect personal information for the purpose of providing our Services. Your privacy matters to us, and we will never sell or share your information with third parties except as necessary to provide Services or to comply with the law. For full detail on what we collect and how it's used, see our{" "}
          <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
        </p>
      )
    },
    {
      id: "sms-terms",
      title: "10. SMS & Text Messaging Terms",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      content: (
        <>
          {/* Program Name and Description */}
          <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
            <p className="font-semibold text-foreground mb-1">Scoopy Doo AVL SMS Alerts</p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              When you provide your mobile phone number to Scoopy Doo AVL, LLC, you may receive automated text messages related to your pet waste removal service. These include: appointment confirmations, technician "on-the-way" arrival notifications, post-service completion alerts with gate-closed confirmation photos, billing reminders, and occasional promotional offers such as seasonal specials or referral discounts.
            </p>
          </div>

          {/* Opt-Out Instructions */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">How to Opt Out (STOP):</strong> You can cancel the SMS service at any time. Simply text <strong className="text-foreground">"STOP"</strong> to any message you receive from us. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us.
          </p>

          {/* Rejoining Instructions */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">How to Rejoin:</strong> To rejoin our SMS program after opting out, simply text <strong className="text-foreground">"START"</strong> in reply to any prior message, or re-provide your phone number when booking a new service. We will resume sending SMS messages to you upon confirmation.
          </p>

          {/* Help Instructions */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Need Help?</strong> If you experience any issues with the messaging program, reply with the keyword <strong className="text-foreground">HELP</strong> for assistance. You can also reach our support team directly at{" "}
            <a href="tel:828-830-0779" className="text-primary hover:underline font-medium">(828) 830-0779</a>
            {" "}or{" "}
            <a href="mailto:info@scoopyavl.com" className="text-primary hover:underline font-medium">info@scoopyavl.com</a>.
          </p>

          {/* Carrier Liability Disclaimer */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Carrier Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages. Message delivery is subject to the policies and network conditions of your wireless carrier.
          </p>

          {/* Message and Data Rates */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Message and Data Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service schedule, typically 1 to 3 messages per service visit plus occasional promotional messages no more than 4 times per month. For questions about your text or data plan, contact your wireless provider.
          </p>

          {/* Privacy Policy Link */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Privacy Policy:</strong> For privacy-related inquiries, including how we collect, use, and protect your mobile number and SMS opt-in data, please refer to our{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
            We do not sell, rent, or share your mobile information with third parties for marketing purposes.
          </p>

          {/* Compliance with Industry Standards */}
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Industry Standards Compliance:</strong> Our SMS messaging program complies with the Telephone Consumer Protection Act (TCPA), the CTIA Messaging Principles and Best Practices, and applicable carrier guidelines for Application-to-Person (A2P) 10DLC messaging.
          </p>

          {/* Legal Compliance Note */}
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Legal Compliance:</strong> Consent to receive SMS messages is not a condition of purchasing any service from Scoopy Doo AVL, LLC. You may opt out at any time without affecting your service agreement. All text messaging activity is governed by applicable federal and state law.
          </p>
        </>
      )
    },
    {
      id: "modifications",
      title: "11. Changes to These Terms",
      icon: <FileText className="w-6 h-6 text-primary" />,
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Scoopy Doo AVL, LLC reserves the right to amend these Terms of Service at any time without prior notice. Amendments become effective upon posting to this page. Continued use of our Services constitutes acceptance of any revised Terms.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
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

      <main className="flex-grow">
        <section className="bg-primary/5 border-b border-primary/10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight text-balance"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Please read these terms carefully before using Scoopy Doo AVL's pet waste removal services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground"
            >
              Last Updated: {lastUpdated}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
                >
                  <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-border">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  12. Contact Information
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have any questions or concerns regarding these terms, please contact our support team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="tel:828-830-0779" className="bg-background rounded-xl p-4 flex items-center space-x-3 border border-border shadow-sm hover:border-primary/40 transition-colors group">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone / Text</p>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">828-830-0779</p>
                    </div>
                  </a>
                  <a href="mailto:info@scoopyavl.com" className="bg-background rounded-xl p-4 flex items-center space-x-3 border border-border shadow-sm hover:border-primary/40 transition-colors group">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">info@scoopyavl.com</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
