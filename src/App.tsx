// BrowserRouter به HashRouter تغییر کرد
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Whitelist from './pages/Whitelist';
import Factions from './pages/Factions';
import Story from './pages/Story';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen eclipse-fallback-bg relative overflow-hidden flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route path="/factions" element={<Factions />} />
            <Route path="/story" element={<Story />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <footer className="text-center py-6 text-gray-500 text-sm border-t border-purple-900/30 bg-black/40 backdrop-blur-sm z-50">
          <p>تمامی حقوق برای مجموعه Eclipse Roleplay محفوظ است.</p>
        </footer>
      </div>
    </Router>
  );
}
