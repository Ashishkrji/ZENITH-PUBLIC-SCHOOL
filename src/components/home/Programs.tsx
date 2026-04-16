import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Baby, Book, GraduationCap, School } from 'lucide-react';

const programs = [
  {
    title: 'Pre-Primary',
    age: '3–5 Years',
    description: 'Play-based learning focusing on social skills, motor development, and foundational literacy.',
    icon: Baby,
    color: 'bg-pink-50 text-pink-600'
  },
  {
    title: 'Primary',
    age: '6–10 Years',
    description: 'Focusing on core subjects with inquiry-based learning and creative expression.',
    icon: Book,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Middle School',
    age: '11–13 Years',
    description: 'Developing critical thinking, research skills, and deeper subject knowledge.',
    icon: School,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Secondary',
    age: '14–17 Years',
    description: 'Rigorous academic preparation for board exams and future career paths.',
    icon: GraduationCap,
    color: 'bg-purple-50 text-purple-600'
  }
];

export default function Programs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Our Academic <span className="text-primary">Programs</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Tailored learning paths for every stage of your child's educational journey.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-[6px] border-primary text-primary hover:bg-primary hover:text-white font-bold">
            <Link to="/academics" className="flex items-center gap-2">
              View Curriculum <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-[16px] border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-[12px] ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon size={28} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                {program.age}
              </span>
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {program.description}
              </p>
              <Link to="/admissions" className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
