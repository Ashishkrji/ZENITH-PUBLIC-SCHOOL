import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Grade 4 Student',
    content: 'Zenith Public School has been a blessing for my daughter. The teachers are incredibly supportive and the focus on holistic development is evident in her growth.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    role: 'Parent of Grade 8 Student',
    content: 'The smart classrooms and modern facilities make learning so much more engaging. My son actually looks forward to going to school every day!',
    rating: 5
  },
  {
    name: 'Anjali Gupta',
    role: 'Parent of Grade 2 Student',
    content: 'Safety was my biggest concern, and Zenith has exceeded my expectations. The GPS-tracked buses and secure campus give me peace of mind.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            What <span className="text-primary">Parents</span> Say
          </h2>
          <p className="text-slate-600 text-lg">
            Join hundreds of happy families who have chosen Zenith Public School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[16px] relative border border-border shadow-sm"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
