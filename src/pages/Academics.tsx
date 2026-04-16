import { motion } from 'motion/react';
import { BookOpen, Laptop, FlaskConical, Palette, Trophy, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const curriculum = [
  {
    level: 'Pre-Primary',
    subjects: ['English', 'Number Work', 'General Awareness', 'Art & Craft', 'Music & Movement'],
    focus: 'Play-way method, Montessori activities, and social-emotional development.'
  },
  {
    level: 'Primary',
    subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Computer Science', 'Art'],
    focus: 'Developing core competencies, inquiry-based learning, and creative thinking.'
  },
  {
    level: 'Middle School',
    subjects: ['English', 'Hindi', 'Sanskrit/French', 'Mathematics', 'Science', 'Social Science', 'ICT'],
    focus: 'Conceptual understanding, experimental learning, and project-based assignments.'
  },
  {
    level: 'Secondary',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'AI/Coding', 'Physical Education'],
    focus: 'Rigorous academic prep, career guidance, and leadership development.'
  }
];

export default function Academics() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Academic <span className="text-secondary">Excellence</span></h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our curriculum is designed to challenge, inspire, and prepare students for the complexities of the 21st century.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Teaching <span className="text-primary">Methodology</span></h2>
            <p className="text-slate-600 text-lg">We believe in learning by doing, not just by listening.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Inquiry-Based', icon: BookOpen, desc: 'Encouraging students to ask questions and explore answers through research.' },
              { title: 'Digital Integration', icon: Laptop, desc: 'Using smart boards and digital tools to enhance conceptual understanding.' },
              { title: 'Experiential', icon: FlaskConical, desc: 'Hands-on experiments and field trips to bridge the gap between theory and practice.' },
              { title: 'Creative Arts', icon: Palette, desc: 'Integrating music, dance, and fine arts into the daily learning schedule.' },
              { title: 'Sports & Fitness', icon: Trophy, desc: 'Daily physical education to build stamina, teamwork, and discipline.' },
              { title: 'Global Outlook', icon: Globe, desc: 'Fostering awareness of global issues and diverse cultures.' }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <method.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <p className="text-slate-600 leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Our <span className="text-primary">Curriculum</span></h2>
            <p className="text-slate-600 text-lg">A structured approach to learning across all grade levels.</p>
          </div>

          <Tabs defaultValue="Pre-Primary" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-2 bg-white rounded-2xl shadow-sm mb-12">
              {curriculum.map((item) => (
                <TabsTrigger
                  key={item.level}
                  value={item.level}
                  className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {item.level}
                </TabsTrigger>
              ))}
            </TabsList>
            {curriculum.map((item) => (
              <TabsContent key={item.level} value={item.level}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary">{item.level} Program</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Core Subjects</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {item.subjects.map((sub) => (
                          <li key={sub} className="flex items-center gap-3 text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Learning Focus</h4>
                      <p className="text-slate-600 leading-relaxed text-lg italic">
                        "{item.focus}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
