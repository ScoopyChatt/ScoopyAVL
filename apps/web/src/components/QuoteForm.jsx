import React from 'react';
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
import apiServerClient from '@/lib/apiServerClient.js';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceZipCode: z.string().regex(/^\d{5}$/, 'Must be a valid 5-digit zip code'),
  serviceType: z.string().min(1, 'Please select a service type'),
  numberOfDogs: z.string().min(1, 'Please select the number of dogs'),
  additionalNotes: z.string().optional(),
});

const QuoteForm = () => {
  const navigate = useNavigate();

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

  const onSubmit = async (values) => {
    try {
      // Ensure numberOfDogs is sent as a number if needed by the backend, 
      // though Zapier often accepts strings. We will cast it based on standard practices.
      const submitData = {
        ...values,
        numberOfDogs: parseInt(values.numberOfDogs, 10),
      };

      const response = await apiServerClient.fetch('/quote-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (!response.ok) {
        let errorMessage = 'Failed to submit quote request';
        try {
          const errorData = await response.json();
          if (errorData.error) errorMessage = errorData.error;
        } catch (e) {
          // If response is not JSON, fallback to generic error
        }
        throw new Error(errorMessage);
      }
      
      // Await successful response parsing as per requirements
      await response.json();
      
      toast.success('Quote submitted successfully');
      form.reset();
      
      // Redirect to thank you page after successful submission
      navigate('/thank-you');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Connection failed. Please try again.');
    }
  };

  const onError = () => {
    toast.error('Please fill in all required fields correctly.');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
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
            {isSubmitting ? 'Submitting...' : 'Request Free Quote'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;