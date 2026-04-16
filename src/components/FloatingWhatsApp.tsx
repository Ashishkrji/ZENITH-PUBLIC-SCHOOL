import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const phoneNumber = '919876543210'; // Replace with real number
  const message = 'Hello! I would like to inquire about admissions at Zenith Public School.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-[30px] right-[30px] z-50 bg-[#25D366] text-white w-[60px] h-[60px] rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Chat with us
      </span>
    </motion.a>
  );
}
