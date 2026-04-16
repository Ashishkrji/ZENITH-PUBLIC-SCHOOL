import { motion } from 'motion/react';
import { Laptop, BookOpen, FlaskConical, Trophy, Bus, Music, Coffee, ShieldCheck } from 'lucide-react';

const facilities = [
  {
    title: 'Smart Classrooms',
    icon: Laptop,
    description: 'Every classroom is equipped with interactive smart boards and high-speed internet to facilitate digital learning.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Modern Library',
    icon: BookOpen,
    description: 'A vast collection of books, journals, and digital resources to foster a love for reading and research.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Science & Computer Labs',
    icon: FlaskConical,
    description: 'State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science to encourage practical learning.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Sports Complex',
    icon: Trophy,
    description: 'Facilities for cricket, football, basketball, swimming, and indoor games like table tennis and chess.',
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Safe Transport',
    icon: Bus,
    description: 'A fleet of GPS-tracked buses with trained staff to ensure safe and comfortable commute for students.',
    image: 'https://images.unsplash.com/photo-1556616330-cd2f5df2d574?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Performing Arts Studio',
    icon: Music,
    description: 'Dedicated spaces for music, dance, and theater to nurture creative talents.',
    image: 'https://images.unsplash.com/photo-1514525253344-f814d0743b15?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Hygienic Cafeteria',
    icon: Coffee,
    description: 'Serving nutritious and balanced meals prepared in a highly hygienic environment.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Security & CCTV',
    icon: ShieldCheck,
    description: 'Round-the-clock security personnel and comprehensive CCTV coverage across the entire campus.',
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Facilities() {
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
            <h1 className="text-4xl md:text-6xl mb-6">Our <span className="text-accent">Infrastructure</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A sprawling green campus equipped with modern amenities to provide a stimulating learning environment.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-slate-100 rounded-[20px] -z-10 group-hover:bg-primary/5 transition-colors"></div>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full aspect-video object-cover rounded-[16px] shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-[12px] flex items-center justify-center">
                    <facility.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">{facility.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {['Modern Equipment', 'Expert Supervision', 'Regular Maintenance', 'Safe Environment'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
