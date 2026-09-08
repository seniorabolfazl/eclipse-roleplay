import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // ایده: افکت صوتی هنگام تعامل با منو
  const playClick = () => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3'); 
    audio.volume = 0.3;
    audio.play().catch(() => {}); // هندل کردن ارور در مرورگرهایی که اتوپلی را می‌بندند
  };

  const navLinks = [
    { name: 'خانه', path: '/' },
    { name: 'داستان', path: '/story' },
    { name: 'فکشن‌ها', path: '/factions' },
    { name: 'قوانین', path: '/rules' },
    { name: 'شهروندی', path: '/whitelist' },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-12">
        <Link to="/" onClick={playClick} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-purple-400 transition-colors">
          ECLIPSE
        </Link>
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
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
        <button className="hidden md:block liquid-glass px-6 py-2 text-sm font-medium hover:bg-white/10 transition-all rounded-lg text-white">
          شروع چت
        </button>
        {/* دکمه منوی موبایل */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => { setIsOpen(!isOpen); playClick(); }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* منوی بازشوی موبایل با انیمیشن */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 liquid-glass rounded-xl p-6 flex flex-col gap-4 md:hidden shadow-2xl border border-purple-500/30"
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
            <button className="bg-white text-black px-6 py-3 mt-4 text-sm font-bold rounded-lg w-full">
              شروع چت با پشتیبانی
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
