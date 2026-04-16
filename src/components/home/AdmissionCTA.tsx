import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AdmissionCTA() {
  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[16px] border border-white/10">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DBEAFE] text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} /> Limited Seats Available
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Admissions Open for <span className="text-accent">2026–27</span>
            </h2>
            <p className="text-white/80 text-lg">
              Secure your child's future today. Join the Zenith family and experience excellence in education.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 h-14 rounded-[6px] text-lg uppercase tracking-wide">
              <Link to="/admissions" className="flex items-center gap-2">
                Apply Now <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-white/10 text-white border-white/30 px-10 h-14 rounded-[6px] text-lg font-bold">
              <Link to="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
