import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-extrabold text-2xl tracking-tighter text-white">
                  ZENITH
                </span>
                <span className="text-sm font-bold tracking-tight text-slate-400">
                  PUBLIC SCHOOL
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering students with knowledge, character, and leadership skills since 1995. Zenith Public School is committed to academic excellence and holistic development.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://facebook.com/zenithpublicschool', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/zenithpublicschool', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com/zenithschool', label: 'Twitter' },
                { icon: Youtube, href: 'https://youtube.com/zenithpublicschool', label: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-accent hover:text-white transition-colors border border-slate-700 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Admissions</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Admission Process</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Eligibility Criteria</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Fee Structure</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Inquiry Form</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>123 Knowledge Park, Sector 45, New Delhi, India - 110001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>info@zenithpublicschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Zenith Public School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
