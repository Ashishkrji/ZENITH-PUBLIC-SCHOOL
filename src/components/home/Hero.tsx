import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-20 overflow-hidden bg-background">
      <div className="container-custom relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <span className="inline-block bg-[#DBEAFE] text-primary px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
              CBSE AFFILIATED - ND054
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-[1.1]">
              Shaping Future Leaders for a Global World
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Empowering students through innovative learning, global standards of excellence, and character development in the heart of the city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg rounded-[6px] font-bold uppercase tracking-wide">
                <Link to="/admissions" className="flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 h-14 text-lg rounded-[6px] font-bold">
                <Link to="/contact">Book a School Visit</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Board Pass Rate', value: '100%' },
                { label: 'Modern Facilities', value: '25+' },
                { label: 'Years Excellence', value: '15+' },
                { label: 'Alumni Success', value: '2000+' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-5 rounded-[12px] border border-border shadow-sm">
                  <div className="text-2xl font-extrabold text-accent">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 blur-2xl"></div>
              <InquiryForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
