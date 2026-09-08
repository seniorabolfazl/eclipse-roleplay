import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// بارگذاری تنبل صفحات (Lazy Loading) برای سرعت بیشتر سایت
const Home = lazy(() => import('./pages/Home'));
const Rules = lazy(() => import('./pages/Rules'));
const Whitelist = lazy(() => import('./pages/Whitelist'));
const Factions = lazy(() => import('./pages/Factions'));
const Story = lazy(() => import('./pages/Story'));
const NotFound = lazy(() => import('./pages/NotFound'));

// لودینگ اسکرین با تم RP
const GtaLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[75vh]">
    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-6"></div>
    <p className="text-purple-400 font-bold tracking-widest animate-pulse font-['Inter']">LOADING LOS SANTOS...</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* حل مشکل گیر کردن اسکرول در پایین صفحه */}
      <div className="min-h-screen eclipse-fallback-bg relative overflow-hidden flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <Suspense fallback={<GtaLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/whitelist" element={<Whitelist />} />
              <Route path="/factions" element={<Factions />} />
              <Route path="/story" element={<Story />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        <footer className="text-center py-6 text-gray-500 text-sm border-t border-purple-900/30 bg-black/40 backdrop-blur-sm z-50">
          <p>تمامی حقوق برای مجموعه Eclipse Roleplay محفوظ است.</p>
        </footer>
      </div>
      
      {/* کانتینر پیام‌های پاپ‌آپ سراسری */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </Router>
  );
}
