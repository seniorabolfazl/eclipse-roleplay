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
    <header className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-5xl bg-[#0a0514]/60 backdrop-blur-md border border-purple-500/20 px-6 py-3 flex items-center justify-between rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.25)]"
      >
        {/* لوگو در سمت راست */}
        <Link to="/" onClick={playClick} className="text-xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
          ECLIPSE <span className="text-xs text-purple-400 font-normal">RP</span>
        </Link>

        {/* تب‌های منو در وسط (ترتیب درست از راست به چپ) */}
        <ul className="hidden lg:flex flex-row-reverse gap-2 text-sm font-medium text-gray-300 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={playClick}
                  className={`px-3.5 py-1.5 transition-all duration-300 rounded-xl block ${
                    isActive 
                      ? 'text-white bg-purple-600/40 shadow-[0_0_15px_rgba(124,58,237,0.5)] border border-purple-400/30 font-bold' 
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
        <div className="flex items-center lg:hidden">
          <button 
            className="text-white p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => { setIsOpen(!isOpen); playClick(); }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* منوی موبایل کشویی */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="absolute top-20 left-4 right-4 bg-[#0a0514]/95 backdrop-blur-xl p-6 flex flex-col gap-2 lg:hidden shadow-2xl border border-purple-500/30 rounded-2xl z-50"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => { setIsOpen(false); playClick(); }}
                    className={`p-3 rounded-xl text-center font-bold transition-all ${
                      isActive ? 'bg-purple-600/50 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' : 'text-gray-300 hover:bg-white/10'
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
