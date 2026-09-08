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

  // انیمیشن پایه برای ظاهر شدن تدریجی المان‌ها
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="relative z-10 flex flex-col items-center justify-center pt-16 px-4 text-center max-w-6xl mx-auto w-full">
      
      {/* تیتر اصلی با افکت گرادیانت و انیمیشن */}
      <motion.h2 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">زندگی ای دیگر در</span> <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-pulse">دل شب</span> 
        <span className="text-white"> رقم بزن.</span>
      </motion.h2>

      <motion.p 
        initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
      >
        یک شهر زنده، داستان‌های واقعی و جامعه‌ای که با هم رشد می‌کند. همین حالا به کامل‌ترین تجربه رول‌پلی بپیوندید.
      </motion.p>

      {/* دکمه‌های اکشن */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-6 mb-24"
      >
        <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1">
          ورود با دیسکورد
        </button>
        <Link to="/whitelist" className="liquid-glass px-8 py-3 rounded-lg font-bold hover:bg-purple-600/30 transition-all text-white hover:-translate-y-1">
          درخواست وایت‌لیست
        </Link>
        
        {/* وضعیت سرور */}
        <div className="flex items-center gap-3 liquid-glass px-6 py-3 rounded-lg ms-0 sm:ms-4 text-white">
          <div className="flex relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${serverData.online ? 'bg-green-400' : 'bg-red-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${serverData.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
          </div>
          <div className="text-sm text-right">
            <p className={`font-bold ${serverData.online ? 'text-green-400' : 'text-red-400'}`}>
              {serverData.online ? 'سرور آنلاین است' : 'سرور آفلاین است'}
            </p>
            <p className="text-gray-300 text-xs">بازیکنان: {serverData.players}</p>
          </div>
        </div>
      </motion.div>

      {/* امکانات اختصاصی با افکت سه‌بعدی Tilt */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}
        className="w-full text-right mb-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">طراحی شده برای بهترین تجربه</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20 group">
            <Monitor className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">اسکوربورد اختصاصی</h4>
            <span className="text-xs font-mono text-purple-300/50 mb-2 block">mrz_scoreboard</span>
            <p className="text-sm text-gray-400">طراحی مدرن، سبک و روان برای دسترسی لحظه‌ای به وضعیت شهر و بازیکنان.</p>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20 group">
            <Wrench className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">سیستم مکانیک</h4>
            <span className="text-xs font-mono text-purple-300/50 mb-2 block">mrz_mechanic</span>
            <p className="text-sm text-gray-400">تیونینگ حرفه‌ای خودروها، منوهای کاستوم NUI و تعامل بی‌نقص با گاراژهای شهر.</p>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20 group">
            <Radio className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">رادیو ارتباطی</h4>
            <span className="text-xs font-mono text-purple-300/50 mb-2 block">vmp_radio</span>
            <p className="text-sm text-gray-400">طراحی واقع‌گرایانه با رابط کاربری اختصاصی برای فرکانس‌های دولتی و گنگ‌ها.</p>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="liquid-glass p-6 rounded-xl cursor-pointer border border-purple-500/20 group">
            <Package className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" size={32} />
            <h4 className="font-bold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">اینونتوری هوشمند</h4>
            <span className="text-xs font-mono text-purple-300/50 mb-2 block">eclipse_inventory</span>
            <p className="text-sm text-gray-400">مدیریت سریع آیتم‌ها و سلاح‌ها با سیستم Drag & Drop بسیار نرم و بدون باگ.</p>
          </Tilt>

        </div>
      </motion.div>
    </main>
  );
}
