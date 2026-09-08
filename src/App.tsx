import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Whitelist from './pages/Whitelist';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen eclipse-fallback-bg relative overflow-hidden flex flex-col">
        {/* هدر سایت که در همه صفحات ثابت است */}
        <Navbar />
        
        {/* محتوای متغیر صفحات */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/whitelist" element={<Whitelist />} />
          </Routes>
        </div>

        {/* فوتر */}
        <footer className="text-center py-6 text-gray-500 text-sm border-t border-purple-900/30 bg-black/40 backdrop-blur-sm z-50">
          <p>تمامی حقوق برای مجموعه Eclipse Roleplay محفوظ است.</p>
        </footer>
      </div>
    </Router>
  );
}
