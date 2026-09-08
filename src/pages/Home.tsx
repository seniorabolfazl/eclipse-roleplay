import { useEffect, useState } from 'react';
import { Monitor, Radio, Wrench, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Home() {
  const [serverData, setServerData] = useState({ online: true, players: 'بارگذاری...' });

  useEffect(() => {
    setTimeout(() => {
      setServerData({ online: true, players: '128 / 256' });
    }, 1500);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="relative z-10 flex flex-col items-center justify-center pt-16 px-4 text-center max-w-6xl mx-auto w-full">
      
      {/* ویدیوی سینماتیک زنده در پس‌زمینه */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-41582-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050308]/80 via-transparent to-[#050308]"></div>
      </div>

      <motion.h2 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">زندگی ای دیگر در</span> <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-pulse">دل شب</span> رقم بزن.
      </motion.h2>

      <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
        یک شهر زنده، داستان‌های واقعی و جامعه‌ای که با هم رشد می‌کند. همین حالا به کامل‌ترین تجربه رول‌پلی بپیوندید.
      </motion.p>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-6 mb-24">
        <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          ورود با دیسکورد
        </button>
        <Link to="/store" className="liquid-glass px-8 py-3 rounded-lg font-bold hover:bg-purple-600/30 transition-all text-white">
          فروشگاه VIP
        </Link>
        
        <div className="flex items-center gap-3 liquid-glass px-6 py-3 rounded-lg text-white">
          <div className="flex relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <div className="text-sm text-right">
            <p className="font-bold text-green-400">سرور آنلاین است</p>
            <p className="text-gray-300 text-xs">بازیکنان: {serverData.players}</p>
          </div>
        </div>
      </motion.div>

      {/* بخش امکانات */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full text-right mb-20">
        <h3 className="text-3xl font-bold mb-10 text-center text-purple-300">طراحی شده برای بهترین تجربه</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20">
            <Monitor className="text-purple-400 mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white">اسکوربورد اختصاصی</h4>
            <p className="text-sm text-gray-400">طراحی مدرن و روان برای دسترسی لحظه‌ای به وضعیت شهر.</p>
          </Tilt>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20">
            <Wrench className="text-purple-400 mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white">سیستم مکانیک</h4>
            <p className="text-sm text-gray-400">تیونینگ حرفه‌ای خودروها و منوهای کاستوم NUI.</p>
          </Tilt>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20">
            <Radio className="text-purple-400 mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white">رادیو ارتباطی</h4>
            <p className="text-sm text-gray-400">رابط کاربری واقعی برای فرکانس‌های دولتی و گنگ‌ها.</p>
          </Tilt>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20">
            <Package className="text-purple-400 mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white">اینونتوری هوشمند</h4>
            <p className="text-sm text-gray-400">مدیریت سریع آیتم‌ها با سیستم Drag & Drop.</p>
          </Tilt>
        </div>
      </motion.div>
    </main>
  );
}
