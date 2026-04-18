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

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[70] md:hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="h-20 flex items-center justify-between px-6 border-b">
                <span className="font-sans font-extrabold text-lg text-primary">NAVIGATION</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-grow overflow-y-auto py-8 px-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'text-xl font-bold py-3 transition-colors flex items-center justify-between group',
                      location.pathname === link.href ? 'text-primary' : 'text-slate-600 hover:text-primary'
                    )}
                  >
                    {link.name}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-primary"
                    >
                      →
                    </motion.span>
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t bg-slate-50">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white h-12 rounded-[6px] font-bold uppercase tracking-wide">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
                <a
                  href="tel:+919876543210"
                  className="mt-6 flex items-center justify-center gap-2 text-primary font-bold"
                >
                  <Phone size={18} /> +91 98765 43210
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
