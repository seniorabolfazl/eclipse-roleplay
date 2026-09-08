import 'react-toastify/dist/ReactToastify.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { Instagram, Youtube, MessagesSquare } from 'lucide-react'; // آیکون‌های جدید
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Rules = lazy(() => import('./pages/Rules'));
const Whitelist = lazy(() => import('./pages/Whitelist'));
const Factions = lazy(() => import('./pages/Factions'));
const Story = lazy(() => import('./pages/Story'));
const Wanted = lazy(() => import('./pages/Wanted')); // صفحه جدید مجرمین
const NotFound = lazy(() => import('./pages/NotFound'));

const GtaLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[75vh]">
    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-6"></div>
    <p className="text-purple-400 font-bold tracking-widest animate-pulse font-['Inter']">LOADING LOS SANTOS...</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* افکت CRT به کل سایت اضافه شد */}
      <div className="min-h-screen eclipse-fallback-bg relative overflow-hidden flex flex-col">
        <div className="crt-overlay hidden sm:block"></div> 
        
        <Navbar />
        
        <div className="flex-grow z-10">
          <Suspense fallback={<GtaLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/whitelist" element={<Whitelist />} />
              <Route path="/factions" element={<Factions />} />
              <Route path="/story" element={<Story />} />
              <Route path="/wanted" element={<Wanted />} /> {/* مسیر مجرمین */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        {/* فوتر حرفه‌ای با شبکه‌های اجتماعی */}
        <footer className="z-10 py-8 border-t border-purple-900/30 bg-black/60 backdrop-blur-md mt-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>تمامی حقوق برای مجموعه <strong className="text-purple-400">Eclipse Roleplay</strong> محفوظ است © 2026</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#5865F2] transition-colors"><MessagesSquare size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF0000] transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
        </footer>
      </div>
      
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </Router>
  );
}
