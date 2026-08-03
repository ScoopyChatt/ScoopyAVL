import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';

// No confirmed route days yet (new location, no customers as of launch) - every
// entry has day: null. Once Tony has real routes, fill these in the same way
// Chattanooga's SERVICE_AREA does, e.g. '28711': { area: 'Black Mountain', day: 'Tuesday' }.
const SERVICE_AREA = {
  '28801': { area: 'Downtown Asheville', day: null },
  '28802': { area: 'Downtown Asheville', day: null },
  '28803': { area: 'South Asheville / Biltmore Forest', day: null },
  '28804': { area: 'North Asheville', day: null },
  '28805': { area: 'East Asheville', day: null },
  '28806': { area: 'West Asheville', day: null },
  '28810': { area: 'Asheville', day: null },
  '28813': { area: 'Asheville', day: null },
  '28814': { area: 'Asheville', day: null },
  '28815': { area: 'Asheville', day: null },
  '28816': { area: 'West Asheville', day: null },
  '28704': { area: 'Arden', day: null },
  '28715': { area: 'Candler', day: null },
  '28732': { area: 'Fletcher', day: null },
  '28711': { area: 'Black Mountain', day: null },
  '28778': { area: 'Swannanoa', day: null },
  '28787': { area: 'Weaverville', day: null },
  '28730': { area: 'Fairview', day: null },
  '28759': { area: 'Mills River', day: null },
  '28757': { area: 'Montreat', day: null },
  '28701': { area: 'Alexander', day: null },
  '28791': { area: 'Hendersonville', day: null },
  '28792': { area: 'Hendersonville', day: null },
};

const WEBHOOK_URL =
  import.meta.env.VITE_QUOTE_WEBHOOK_URL ||
  'https://hook.us2.make.com/qstmqg51xqw9rdqddepjn5fraipn18gg';

const PRICING = {
  'weekly': { base: 20, extra: 2, cadence: '/ visit', note: 'weekly service' },
  'twice-weekly': { base: 18, extra: 1, cadence: '/ visit', note: 'twice-weekly service' },
  'biweekly': { base: 33, extra: 3, cadence: '/ visit', note: 'every-other-week service' },
  'onetime': { base: 125, extra: 15, inc: 3, cadence: 'one-time', note: 'a one-time cleanup' },
};

const SERVICE_LABELS = {
  'weekly': 'Weekly Pet Waste Removal',
  'twice-weekly': 'Twice-Weekly Pet Waste Removal',
  'biweekly': 'Bi-Weekly Pet Waste Removal',
  'onetime': 'One-Time Yard Cleanup',
};

function computeQuote(serviceType, dogs, takeAway) {
  const p = PRICING[serviceType];
  const n = parseInt(dogs, 10) || 1;
  if (!p) return { price: null };
  const inc = p.inc || 1;
  const price = p.base + Math.max(0, n - inc) * p.extra + (takeAway ? 5 : 0);
  return { price, cadence: p.cadence, note: p.note, takeAway: !!takeAway };
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceZipCode: z.string().regex(/^\d{5}$/, 'Must be a valid 5-digit zip code'),
  serviceType: z.string().min(1, 'Please select a service type'),
  numberOfDogs: z.string().min(1, 'Please select the number of dogs'),
  additionalNotes: z.string().optional(),
});

const QuoteForm = ({ source = 'scoopyavl.com/quote' }) => {
  const navigate = useNavigate();
  const honeypotRef = useRef(null);
  const [quote, setQuote] = useState(null);
  const resultRef = useRef(null);
  useEffect(() => {
    if (quote) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [quote]);
  const [takeAway, setTakeAway] = useState(false);
  const [streetAddress, setStreetAddress] = useState('');
  const isAddressValid = streetAddress.trim().length >= 5;

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceZipCode: '',
      serviceType: '',
      numberOfDogs: '',
      additionalNotes: '',
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const zipValue = form.watch('serviceZipCode');
  const isCompleteZip = (zipValue || '').length === 5;
  const areaEntry = isCompleteZip ? SERVICE_AREA[zipValue] : undefined;
  const matchedArea = areaEntry ? areaEntry.area : undefined;
  const matchedDay = areaEntry ? areaEntry.day : null;

  const requestStart = async () => {
    if (!isAddressValid) {
      toast.error('Please enter your street address so we can schedule your visit.');
      return;
    }
    const v = form.getValues();
    const entry = SERVICE_AREA[v.serviceZipCode];
    const readyPayload = {
      full_name: v.name, email: v.email, phone: v.phone,
      service_zip: v.serviceZipCode, service_type: v.serviceType,
      street_address: streetAddress.trim(),
      number_of_dogs: parseInt(v.numberOfDogs, 10),
      service_area: entry ? entry.area : '',
      route_day: entry && entry.day ? entry.day : '',
      quoted_price: quote && quote.price ? quote.price : '',
      base_price: quote && quote.price != null ? quote.price - (takeAway ? 5 : 0) : '',
      takeaway_fee: takeAway ? 5 : 0,
      service_label: SERVICE_LABELS[v.serviceType] || 'Custom Pet Waste Removal Service',
      ready_to_book: true, lead_stage: 'Ready to Book', take_away: takeAway ? 'Yes (+$5/visit)' : 'No', company_website: '',
      source, submitted_at: new Date().toISOString(),
    };
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(readyPayload),
      });
    } catch (error) { console.error(error); }
    if (window && window.fbq) window.fbq('track', 'Schedule');
    navigate('/thank-you');
  };

  const onSubmit = async (values) => {
    // Service-area gate: reject out-of-area zips before submitting
    if (!SERVICE_AREA[values.serviceZipCode]) {
      alert("Sorry - Scoopy Doo AVL is not in your service area yet. We currently serve Asheville, NC and the surrounding area within about 30 minutes. If you think this is a mistake, please call or text us at 828-830-0779.");
      return;
    }
    // Honeypot: real people never fill this. If it has a value, drop silently.
    if (honeypotRef.current && honeypotRef.current.value) {
      form.reset();
      navigate('/thank-you');
      return;
    }

    const payload = {
      full_name: values.name,
      email: values.email,
      phone: values.phone,
      service_zip: values.serviceZipCode,
      service_type: values.serviceType,
      number_of_dogs: parseInt(values.numberOfDogs, 10),
      additional_notes: values.additionalNotes || '',
      quoted_price: computeQuote(values.serviceType, values.numberOfDogs, takeAway).price,
      lead_stage: 'New Website Lead',
      take_away: takeAway ? 'Yes (+$5/visit)' : 'No',
      service_area: SERVICE_AREA[values.serviceZipCode] ? SERVICE_AREA[values.serviceZipCode].area : '',
      route_day: SERVICE_AREA[values.serviceZipCode] && SERVICE_AREA[values.serviceZipCode].day ? SERVICE_AREA[values.serviceZipCode].day : '',
      in_service_area: !!SERVICE_AREA[values.serviceZipCode],
      company_website: '',
      source,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }

      setQuote(computeQuote(values.serviceType, values.numberOfDogs, takeAway));
      if (window && window.fbq) window.fbq('track', 'Lead');
      toast.success('Got it - here is your instant price!');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Connection failed. Please call or text us at 828-830-0779.');
    }
  };

  const onError = () => {
    toast.error('Please fill in all required fields correctly.');
  };

  if (quote) {
    const entry = SERVICE_AREA[form.getValues('serviceZipCode')];
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-1">Your instant price</p>
          {quote.price ? (
            <>
              <p ref={resultRef} className="text-4xl font-bold text-foreground">{'$' + quote.price}<span className="text-lg font-medium text-muted-foreground"> {quote.cadence}</span></p>
              <p className="text-sm text-muted-foreground mt-2">For {quote.note}{quote.takeAway ? ' with waste haul-away' : ''}{entry && entry.day ? (' - our trucks are in ' + entry.area + ' on ' + entry.day + 's') : (entry ? (' - we service ' + entry.area) : '')}.</p>
              <p className="text-xs text-muted-foreground mt-3">Most yards start the same week. A one-time initial cleanup may apply for very overgrown yards - we will confirm before your first visit.</p>
            </>
          ) : (
            <p className="text-xl font-semibold text-foreground">We will put together a custom quote for you.</p>
          )}
        </div>
        <div className="text-left">
            <label className="mb-1 block text-sm font-medium text-foreground">Service Address *</label>
            <input
              type="text"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              placeholder="123 Main St"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
            />
            <p className="mt-1 text-xs text-muted-foreground">We need your street address to schedule your first visit - it is not shared or used for anything else.</p>
          </div>
          <div
            className="relative"
            onClick={() => {
              if (!isAddressValid) {
                toast.error('Please enter your street address so we can schedule your visit.');
              }
            }}
          >
            <Button onClick={requestStart} disabled={!isAddressValid} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed">Request my start date</Button>
          </div>
        <button type="button" onClick={() => setQuote(null)} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">Back to edit my details</button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
        {/* Honeypot - hidden from humans; bots fill it and get dropped */}
        <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="text-foreground"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="text-foreground"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="text-foreground"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceZipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Zip Code *</FormLabel>
                <FormControl>
                  <Input
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="e.g. 28801"
                    className="text-foreground"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <AnimatePresence mode="wait">
                  {isCompleteZip && matchedArea && (
                    <motion.div key="matched" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="mt-2 flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Great news - we service <strong>{matchedArea}</strong> ({zipValue})! Enter your info to see your price and reserve your spot.</span>
                    </motion.div>
                  )}
                  {isCompleteZip && !matchedArea && (
                    <motion.div key="unmatched" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="mt-2 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>We serve Asheville, NC and the surrounding area within about 30 minutes. Send your details and we will confirm your service day with your quote.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="twice-weekly">2X Weekly Service</SelectItem>
                    <SelectItem value="weekly">Weekly Service</SelectItem>
                    <SelectItem value="biweekly">Bi-Weekly Service</SelectItem>
                    <SelectItem value="onetime">One-Time Cleanup</SelectItem>
                    <SelectItem value="custom">Custom Service</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfDogs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Dogs *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-foreground">
                      <SelectValue placeholder="Select number of dogs" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Dog' : 'Dogs'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your yard size, gate access, or any special requirements..."
                  className="text-foreground resize-none"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <label className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4 cursor-pointer">
          <input type="checkbox" checked={takeAway} onChange={(e) => setTakeAway(e.target.checked)} className="mt-1 h-4 w-4 accent-orange-500" />
          <span className="text-sm text-foreground">Haul the waste away for me <span className="text-muted-foreground">(+$5 per visit)</span>. Otherwise we double-bag it and leave it in your bin.</span>
        </label>

        {/* Wrapper div to capture clicks when button is disabled so we can show the toast */}
        <div
          className="relative"
          onClick={() => {
            if (!isValid && !isSubmitting) {
              toast.error('Please fill in all required fields correctly.');
              form.trigger();
            }
          }}
        >
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Getting your price...' : 'See My Price'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;
