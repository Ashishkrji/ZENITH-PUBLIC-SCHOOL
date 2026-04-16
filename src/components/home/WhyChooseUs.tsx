import { motion } from 'motion/react';
import { ShieldCheck, Laptop, Heart, Star } from 'lucide-react';

const reasons = [
  {
    title: 'Experienced Faculty',
    description: 'Our teachers are highly qualified and passionate about nurturing young minds with modern teaching methods.',
    icon: Star,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Smart Classrooms',
    description: 'Equipped with interactive boards and digital tools to make learning engaging and effective for every student.',
    icon: Laptop,
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    title: 'Safe & Secure Campus',
    description: '24/7 CCTV surveillance, GPS-tracked transport, and strict security protocols to ensure student safety.',
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Holistic Development',
    description: 'Focus on sports, arts, and life skills alongside academics to build well-rounded future leaders.',
    icon: Heart,
    color: 'bg-red-50 text-red-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Why Parents Trust <span className="text-primary">Zenith Public School</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We provide an environment where students can thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className={`w-14 h-14 rounded-[12px] ${reason.color} flex items-center justify-center mb-6`}>
                <reason.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
