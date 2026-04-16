import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Get in <span className="text-secondary">Touch</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have questions? We're here to help. Reach out to us for admissions, campus tours, or any other inquiries.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full"></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none bg-slate-50 rounded-3xl p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Our Address</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        123 Knowledge Park, Sector 45, New Delhi, India - 110001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                      <p className="text-slate-600 text-sm">Main Office: +91 98765 43210</p>
                      <p className="text-slate-600 text-sm">Admissions: +91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                      <p className="text-slate-600 text-sm">info@zenithpublicschool.com</p>
                      <p className="text-slate-600 text-sm">admissions@zenithpublicschool.com</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Office Hours</h3>
                      <p className="text-slate-600 text-sm">Mon - Sat: 8:00 AM - 4:00 PM</p>
                      <p className="text-slate-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Visit Our Campus</h3>
                <p className="text-white/80 text-sm mb-6">
                  We encourage parents to visit our campus and experience the Zenith environment firsthand.
                </p>
                <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-xl">
                  Schedule a Tour
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-secondary/20 text-primary rounded-xl flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-xl h-12 border-slate-200 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="rounded-xl h-12 border-slate-200 focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <Input placeholder="+91 98765 43210" className="rounded-xl h-12 border-slate-200 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Subject</label>
                      <Input placeholder="General Inquiry" className="rounded-xl h-12 border-slate-200 focus:border-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <Textarea placeholder="How can we help you?" className="rounded-xl min-h-[150px] border-slate-200 focus:border-primary" />
                  </div>

                  <Button className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold text-lg flex items-center gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-80 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                  alt="Map Placeholder"
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 text-center max-w-xs">
                    <MapPin className="text-primary mx-auto mb-4" size={32} />
                    <h4 className="font-bold mb-2">Zenith Public School</h4>
                    <p className="text-xs text-slate-500">123 Knowledge Park, Sector 45, New Delhi</p>
                    <Button variant="link" className="text-primary font-bold mt-2">Open in Google Maps</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
