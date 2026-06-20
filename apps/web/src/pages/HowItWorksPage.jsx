import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, CalendarCheck, MessageSquare, Camera, CreditCard, ShieldCheck, ChevronDown, ChevronUp, Star } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { Button } from '@/components/ui/button';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Get a Free Quote Online',
    desc: "No phone calls, no waiting on hold. Fill out our quick form with your zip code, number of dogs, and yard size and we send back your price, usually within a few hours.",
    highlight: "100% online &mdash; quote, schedule, and pay without picking up the phone.",
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Pick a Plan & Pay Online',
    desc: "Choose weekly, bi-weekly, or one-time service. Pay securely online &mdash; no checks, no cash at the door. We send your confirmation and put you on the schedule.",
    highlight: "Secure online payment. No contracts. Cancel anytime.",
    color: 'bg-green-500/10 text-green-600',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'We Text You On the Way',
    desc: "Before every visit, you get a text letting you know we are heading to your yard. No surprise visits, no wondering if we showed up. You are always in the loop.",
    highlight: "Heads-up text before every single visit so you are never caught off guard.",
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'We Scoop Every Inch',
    desc: "Our techs walk your entire yard in a systematic grid &mdash; no shortcuts, no missed spots. All waste is double-bagged and hauled away from your property.",
    highlight: "Full yard coverage. Waste removed from property. Equipment sanitized between every yard.",
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    number: '05',
    icon: Camera,
    title: 'Gate Photo Sent When Done',
    desc: "When we finish, we close and secure your gate and send you a photo as proof. You know your yard is clean and your gate is locked without having to check yourself.",
    highlight: "Photo confirmation of your secured gate sent straight to your phone after every visit.",
    color: 'bg-rose-500/10 text-rose-600',
  },
];

const perks = [
  { icon: '💻', label: 'Online Quotes', desc: 'Fast pricing with no phone tag' },
  { icon: '💳', label: 'Online Payment', desc: 'Secure, no contracts, cancel anytime' },
  { icon: '📱', label: 'On the Way Texts', desc: 'Heads-up before every single visit' },
  { icon: '📸', label: 'Gate Photo Proof', desc: 'Photo of your secured gate when done' },
  { icon: '🧹', label: 'Full Yard Coverage', desc: 'Grid-pattern &mdash; zero missed spots' },
  { icon: '🗑️', label: 'Waste Removed', desc: 'Hauled away, not left by the gate' },
];

const faqs = [
  { q: 'Do I need to be home during the service?', a: "No. We just need access to your backyard &mdash; an unlocked gate or a code you provide. Most customers are at work when we show up. You get an on-the-way text before we arrive and a gate photo when we are done." },
  { q: 'How does the gate photo work?', a: "After every visit, our tech closes and latches your gate, then snaps a photo and texts it to you. It is your confirmation that the job is done and your yard is secure." },
  { q: 'When do I get the on-the-way text?', a: "We send it when we are en route to your address, so you have a few minutes notice. It lets you know we are coming without you having to guess which day or time." },
  { q: 'Can I pay online?', a: "Yes &mdash; everything is handled online. You request a quote, receive pricing by email, and pay securely online before service begins. No checks, no cash, no awkward in-person payment." },
  { q: 'Is there a contract?', a: "No contracts, ever. You can pause, change, or cancel your service at any time." },
  { q: 'What if it rains on my service day?', a: "We show up rain or shine. Weather does not cancel your service &mdash; rainy days are actually when cleanup matters most, since runoff carries bacteria across your lawn." },
  { q: 'Do you service my neighborhood?', a: "We cover all of Asheville and surrounding areas: Arden, Hendersonville, Fairview, Black Mountain, Fletcher, Weaverville, Mills River, Brevard, West Asheville, Candler, Swannanoa, Mars Hill, Leicester, and more." },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors">
        <span className="font-semibold text-foreground pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

const HowItWorksPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead
      title="How It Works | Scoopy Doo Pet Waste Removal Asheville"
      description="Easy online quotes, secure online payment, on-the-way texts, and gate photo proof after every visit. Working with Scoopy Doo is simple."
      canonicalUrl={CANONICAL_BASE_URL + '/how-it-works'}
    />
    <Header />
    <main className="flex-grow">

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Ridiculously Easy</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">Working With Us Is Simple</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Online quotes. Online payment. A text before we arrive. A photo of your secured gate when we leave. You do not have to do anything except enjoy your yard.</p>
          <Button asChild size="lg" className="rounded-xl px-8 h-14 text-base font-bold">
            <Link to="/quote">Get Your Free Quote</Link>
          </Button>
        </motion.div>
      </section>

      <section className="py-12 px-4 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {perks.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{p.icon}</span>
              <div className="font-bold text-sm text-foreground">{p.label}</div>
              <div className="text-xs text-muted-foreground">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-14">From Quote to Clean Yard in 5 Steps</h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-6 bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 z-10">
                <div className={'w-14 h-14 rounded-2xl flex items-center justify-center ' + step.color}>
                  <step.icon className="w-7 h-7" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-1">Step {step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                <div className="inline-block bg-muted rounded-lg px-4 py-2 text-sm font-medium text-foreground">{step.highlight}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-primary/5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
            "I love getting the picture of my closed gate &mdash; it gives me total peace of mind."
          </blockquote>
          <cite className="text-muted-foreground not-italic">&mdash; Asheville customer, weekly service</cite>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Common Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready? It Takes 2 Minutes.</h2>
          <p className="text-lg opacity-90 mb-8">Get a free quote online right now. No phone calls, no commitments. Just a clean yard.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-xl px-10 h-14 text-base font-bold">
            <Link to="/quote">Get My Free Quote</Link>
          </Button>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default HowItWorksPage;
