import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <Card className="border border-border shadow-[0_20px_40px_rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden bg-white">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-extrabold text-primary">Admissions Open 2026</CardTitle>
        <CardDescription className="text-slate-500">
          Experience the Zenith Advantage
        </CardDescription>
        <div className="mt-2">
          <span className="text-accent font-extrabold text-sm uppercase tracking-tight">
            ⚠️ Limited Seats for Grade 1-8
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-1">
                <Input required placeholder="Parent Name" className="rounded-[6px] h-12 border-border bg-[#F1F5F9] focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1">
                <Input required type="tel" placeholder="Mobile Number" className="rounded-[6px] h-12 border-border bg-[#F1F5F9] focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1">
                <select required className="flex h-12 w-full rounded-[6px] border border-border bg-[#F1F5F9] px-3 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
                  <option value="">Select Grade for Admission</option>
                  <option value="nursery">Pre-Primary</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                </select>
              </div>
              <div className="space-y-1">
                <Input type="email" placeholder="Email Address" className="rounded-[6px] h-12 border-border bg-[#F1F5F9] focus:bg-white transition-colors" />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-[6px] text-lg font-bold transition-all shadow-md"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enquire Today <Send size={18} />
                  </span>
                )}
              </Button>
              <p className="text-center text-[11px] text-slate-400">
                By clicking, you agree to our privacy policy and terms.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600 mb-8">
                Your inquiry has been received. Our admissions counselor will get in touch with you shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="rounded-full px-8"
              >
                Send Another Inquiry
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
