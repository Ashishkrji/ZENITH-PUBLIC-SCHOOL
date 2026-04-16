import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center',
        scrolled ? 'bg-white shadow-sm border-b' : 'bg-white border-b'
      )}
    >
      <div className="container-custom flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-baseline gap-1">
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-primary">
              ZENITH
            </span>
            <span className="text-sm font-bold tracking-tight text-slate-500">
              PUBLIC SCHOOL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-all relative py-1',
                location.pathname === link.href 
                  ? 'text-primary after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary' 
                  : 'text-slate-500 hover:text-primary'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-white px-6 py-3 h-auto rounded-[6px] font-semibold uppercase text-[13px] tracking-wide">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-slate-100',
                    location.pathname === link.href ? 'text-primary' : 'text-slate-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <Button asChild className="w-full bg-primary">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-primary font-bold py-2"
                >
                  <Phone size={18} /> +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
