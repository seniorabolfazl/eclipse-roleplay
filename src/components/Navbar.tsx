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
    { name: 'فروشگاه', path: '/store' },
    { name: 'قوانین', path: '/rules' },
    { name: 'شهروندی', path: '/whitelist' },
    { name: 'مدیریت', path: '/admin' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 w-full flex justify-center">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="liquid-glass w-full max-w-6xl px-6 py-3 flex items-center justify-between shadow-[0_0_25px_rgba(124,58,237,0.2)]"
      >
        {/* لوگو در سمت راست */}
        <Link to="/" onClick={playClick} className="text-xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
          ECLIPSE <span className="text-xs text-purple-500 font-normal">RP</span>
        </Link>

        {/* تب‌های منو در وسط (ترتیب درست RTL: از خانه تا مدیریت) */}
        <ul className="hidden lg:flex flex-row-reverse gap-5 text-sm font-medium text-gray-300 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={playClick}
                  className={`relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
                    isActive 
                      ? 'text-white bg-purple-600/30 shadow-[0_0_15px_rgba(124,58,237,0.4)]' 
                      : 'hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* دکمه منوی موبایل */}
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden text-white z-50 p-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => { setIsOpen(!isOpen); playClick(); }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* منوی موبایل کشویی */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-20 left-4 right-4 liquid-glass p-6 flex flex-col gap-2 lg:hidden shadow-2xl bg-[#050308]/95 border-purple-500/30 z-50 rounded-2xl"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => { setIsOpen(false); playClick(); }}
                    className={`p-3 rounded-xl text-center font-bold transition-all ${
                      isActive ? 'bg-purple-600/40 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
