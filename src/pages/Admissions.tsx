import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, CalendarDays, PhoneCall } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

const steps = [
  {
    title: 'Inquiry',
    description: 'Fill out the online inquiry form or visit the school campus.',
    icon: FileText,
  },
  {
    title: 'Interaction',
    description: 'A brief interaction with the child and parents to understand their needs.',
    icon: UserCheck,
  },
  {
    title: 'Documentation',
    description: 'Submit required documents and complete the registration process.',
    icon: CheckCircle2,
  },
  {
    title: 'Admission',
    description: 'Finalize the admission by paying the fees and collecting the welcome kit.',
    icon: CalendarDays,
  }
];

export default function Admissions() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Join the <span className="text-accent">Zenith Family</span></h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We are excited to welcome new students for the academic year 2026–27. Start your child's journey towards excellence today.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side: Process & Info */}
            <div>
              <h2 className="text-3xl font-extrabold mb-12">Admission Process</h2>
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-6 relative">
                    {index !== steps.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-12 bg-slate-100"></div>
                    )}
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-slate-50 rounded-[16px] border border-border">
                <h3 className="text-xl font-bold mb-6">Required Documents</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Birth Certificate',
                    'Transfer Certificate',
                    'Previous Report Card',
                    'Passport Size Photos',
                    'Aadhar Card (Child & Parents)',
                    'Address Proof'
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={18} className="text-green-500" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-4 p-6 bg-primary/5 rounded-[12px] border border-primary/10">
                <div className="bg-primary p-3 rounded-[8px] text-white">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Need Help?</p>
                  <p className="text-slate-600 text-sm">Call our admissions counselor at <span className="font-bold text-primary">+91 98765 43210</span></p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:sticky lg:top-32 h-fit">
              <InquiryForm />
            </div>
          </div>

          {/* Academic Calendar Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Admissions <span className="text-primary">Timeline 2026–27</span></h2>
            <div className="overflow-hidden rounded-[16px] border border-border shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-border">
                    <th className="p-4 md:p-6 font-bold text-primary">Event</th>
                    <th className="p-4 md:p-6 font-bold text-primary">Dates</th>
                    <th className="p-4 md:p-6 font-bold text-primary">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { event: 'Registration Opens', date: 'January 15, 2026', remarks: 'Online & at school office' },
                    { event: 'Virtual Open House', date: 'February 5, 2026', remarks: 'Link will be sent via email' },
                    { event: 'Interactions - Phase I', date: 'February 15–20, 2026', remarks: 'Grades Nursery to V' },
                    { event: 'Entrance Exam - Phase I', date: 'February 22, 2026', remarks: 'Grades VI to IX' },
                    { event: 'First List Announcement', date: 'March 1, 2026', remarks: 'Via Website & Email' },
                    { event: 'Admission Formalities', date: 'March 2–10, 2026', remarks: 'Fee payment & document submission' },
                    { event: 'Orientation Program', date: 'March 25, 2026', remarks: 'For new parents & students' },
                    { event: 'New Session Begins', date: 'April 4, 2026', remarks: 'Academic Year 2026–27' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 md:p-6 font-medium text-slate-900">{row.event}</td>
                      <td className="p-4 md:p-6 text-slate-600">
                        <div className="flex items-center gap-2">
                          <CalendarDays size={16} className="text-accent" />
                          {row.date}
                        </div>
                      </td>
                      <td className="p-4 md:p-6 text-slate-500 text-sm italic">{row.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-accent/5 rounded-[12px] border border-accent/10 flex items-start gap-4">
              <div className="bg-accent p-2 rounded-full text-white shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-bold text-accent">Note:</span> Dates are subject to change. Please keep checking the website for updates or contact the admissions office for any clarifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
