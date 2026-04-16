import { motion } from 'motion/react';
import { Users, Award, BookOpen, UserCheck } from 'lucide-react';

const trustItems = [
  { label: 'Safe Campus', value: 'CCTV & Guarded' },
  { label: 'Technology', value: 'Smart Classrooms' },
  { label: 'Development', value: 'Holistic Approach' },
  { label: 'Faculty', value: 'Certified Experts' },
  { label: 'Transport', value: 'GPS Enabled Buses' },
];

export default function Stats() {
  return (
    <section className="bg-primary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-wrap justify-around items-center gap-8 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-[11px] uppercase opacity-70 tracking-[1px] mb-1">
                {item.label}
              </p>
              <h4 className="text-lg md:text-xl font-bold">
                {item.value}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
