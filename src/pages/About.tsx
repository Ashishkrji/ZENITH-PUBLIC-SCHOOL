import { motion } from 'motion/react';
import { Target, Eye, History, Award, Users, Heart } from 'lucide-react';

export default function About() {
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
            <h1 className="text-4xl md:text-6xl mb-6">Our Legacy of <span className="text-secondary">Excellence</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded in 1995, Zenith Public School has been a pioneer in providing quality education that balances academic rigor with character development.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[16px] border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-[12px] flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide a nurturing environment that empowers students to achieve their full potential, fostering intellectual curiosity, ethical leadership, and a lifelong passion for learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-10 rounded-[16px] text-white shadow-xl"
            >
              <div className="w-16 h-16 bg-white/10 text-white rounded-[12px] flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-extrabold mb-6">Our Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To be a global leader in education, recognized for producing compassionate, innovative, and responsible citizens who contribute positively to the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-[12px] -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  alt="Principal"
                  className="rounded-[16px] shadow-2xl w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[12px] shadow-xl border border-border hidden md:block">
                  <p className="font-bold text-primary text-xl">Dr. Sarah Jenkins</p>
                  <p className="text-slate-500 text-sm font-medium">Principal, Zenith Public School</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Message from the <span className="text-primary">Principal</span></h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  "Welcome to Zenith Public School. At Zenith, we believe that every child is unique and possesses immense potential. Our role is to provide the right environment and guidance to help them discover and nurture their talents."
                </p>
                <p>
                  "We focus on a balanced approach to education, where academic excellence is complemented by character building and emotional intelligence. Our dedicated faculty works tirelessly to ensure that our students are not just exam-ready, but life-ready."
                </p>
                <p>
                  "I invite you to be a part of our vibrant community and witness the transformation of your child into a confident and responsible individual."
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-0.5 w-12 bg-primary"></div>
                <p className="font-display font-bold text-slate-900 italic">Dr. Sarah Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-slate-600 text-lg">The principles that guide everything we do at Zenith.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', icon: Heart, desc: 'Acting with honesty and strong moral principles in all situations.' },
              { title: 'Excellence', icon: Award, desc: 'Striving for the highest standards in academics, arts, and sports.' },
              { title: 'Inclusivity', icon: Users, desc: 'Respecting and celebrating diversity within our school community.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all text-center"
              >
                <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
