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
    <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-black/70 backdrop-blur-xl border border-purple-500/30 px-5 py-2.5 flex items-center justify-between rounded-full shadow-[0_0_25px_rgba(124,58,237,0.3)]"
      >
        {}
        <Link to="/" onClick={playClick} className="text-lg font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 pl-2">
          ECLIPSE <span className="text-xs text-purple-400 font-normal">RP</span>
        </Link>

        {}
        <ul className="hidden lg:flex flex-row-reverse gap-1.5 text-xs font-medium text-gray-300 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={playClick}
                  className={`px-3 py-1.5 transition-all duration-300 rounded-full block ${
                    isActive 
                      ? 'text-white bg-purple-600 shadow-[0_0_15px_rgba(124,58,237,0.6)] font-bold' 
                      : 'hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {}
        <div className="flex items-center lg:hidden">
          <button 
            className="text-white p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => { setIsOpen(!isOpen); playClick(); }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-2xl p-6 flex flex-col gap-2 lg:hidden shadow-2xl border border-purple-500/30 rounded-2xl z-50"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => { setIsOpen(false); playClick(); }}
                    className={`p-3 rounded-xl text-center font-bold transition-all ${
                      isActive ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' : 'text-gray-300 hover:bg-white/10'
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
