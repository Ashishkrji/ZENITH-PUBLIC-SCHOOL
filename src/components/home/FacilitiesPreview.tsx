import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Laptop, BookOpen, FlaskConical, Trophy, Bus } from 'lucide-react';

const facilities = [
  {
    title: 'Smart Classes',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Library',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Science Labs',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Sports Ground',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Transport',
    icon: Bus,
    image: 'https://images.unsplash.com/photo-1556616330-cd2f5df2d574?auto=format&fit=crop&q=80&w=800',
  }
];

export default function FacilitiesPreview() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-slate-600 text-lg">
            A modern campus designed to inspire learning and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
            <div className="group relative h-72 rounded-[16px] overflow-hidden shadow-lg">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <div className="bg-primary/80 p-2 rounded-[8px] backdrop-blur-sm">
                  <facility.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{facility.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center bg-primary p-8 rounded-[16px] text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Explore More</h3>
          <p className="text-white/80 mb-8">
            Discover our full range of facilities and campus life.
          </p>
          <Button asChild variant="secondary" className="rounded-[6px] px-8 h-12 font-bold">
            <Link to="/facilities" className="flex items-center gap-2">
              View All <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
