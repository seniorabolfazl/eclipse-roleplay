import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'خانه', path: '/' },
    { name: 'داستان', path: '/story' },
    { name: 'فکشن‌ها', path: '/factions' }, // این خط اضافه شد
    { name: 'قوانین', path: '/rules' },
    { name: 'شهروندی', path: '/whitelist' },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-2xl font-bold tracking-widest uppercase text-white hover:text-purple-400 transition-colors">
          ECLIPSE
        </Link>
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
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
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}
