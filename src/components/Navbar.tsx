import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const playClick = () => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3'); 
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const navLinks = [
    { name: 'خانه', path: '/' },
    { name: 'داستان', path: '/story' },
    { name: 'فکشن‌ها', path: '/factions' },
    { name: 'مجرمین', path: '/wanted' },
    { name: 'فروشگاه', path: '/store' }, // تب فروشگاه VIP
    { name: 'قوانین', path: '/rules' },
    { name: 'شهروندی', path: '/whitelist' },
    { name: 'مدیریت', path: '/admin' },  // تب پنل ادمین
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-8">
        <Link to="/" onClick={playClick} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-purple-400 transition-colors">
          ECLIPSE
        </Link>
        <ul className="hidden lg:flex gap-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                onClick={playClick}
                className={`transition-colors pb-1 border-b-2 ${
                  location.pathname === link.path 
                    ? 'text-white border-purple-500' 
                    : 'border-transparent hover:text-white hover:border-purple-500/50'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden text-white z-50 p-2"
          onClick={() => { setIsOpen(!isOpen); playClick(); }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 liquid-glass rounded-xl p-6 flex flex-col gap-3 lg:hidden shadow-2xl border border-purple-500/30 bg-black/90 z-50"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => { setIsOpen(false); playClick(); }}
                className={`p-3 rounded-lg text-center font-bold ${
                  location.pathname === link.path ? 'bg-purple-600/40 text-white' : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
