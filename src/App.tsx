import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen eclipse-fallback-bg relative overflow-hidden">
      
      {/* Navbar (Header) */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-bold tracking-widest uppercase">ECLIPSE</h1>
          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">داستان</li>
            <li className="hover:text-white cursor-pointer transition-colors">قوانین</li>
            <li className="hover:text-white cursor-pointer transition-colors">شهروندی</li>
            <li className="hover:text-white cursor-pointer transition-colors">پشتیبانی</li>
          </ul>
        </div>
        <button className="liquid-glass px-6 py-2 text-sm font-medium hover:bg-white/10 transition-all rounded-lg">
          شروع چت
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-24 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          زندگی ای دیگر در <br/> <span className="text-purple-400">دل شب</span> رقم بزن.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          یک شهر زنده، داستان‌های واقعی و جامعه‌ای که با هم رشد می‌کند. همین حالا به کامل‌ترین تجربه رول‌پلی بپیوندید.
        </p>

        {/* دکمه‌های اصلی و وضعیت سرور */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            ورود به دیسکورد
          </button>
          <button className="liquid-glass px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
            کاوش کن
          </button>
          
          {/* Server Status Widget */}
          <div className="flex items-center gap-3 liquid-glass px-6 py-3 rounded-lg ms-0 sm:ms-4">
            <div className="flex relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <div className="text-sm text-right">
              <p className="font-bold text-green-400">سرور آنلاین است</p>
              <p className="text-gray-300 text-xs">بازیکنان: ۱۲۸ / ۲۵۶</p>
            </div>
          </div>
        </div>

        {/* Features Section (معرفی سیستم‌های اختصاصی سرور) */}
        <div className="w-full text-right mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-300">امکانات اختصاصی اکلیپس</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="liquid-glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg mb-2 text-white">رابط کاربری و اسکوربورد</h4>
              <p className="text-sm text-gray-400">دسترسی سریع و روان به اطلاعات بازی با HUD و اسکوربورد کاملاً اختصاصی و بهینه‌سازی شده.</p>
            </div>

            <div className="liquid-glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg mb-2 text-white">تیونینگ و مکانیک حرفه‌ای</h4>
              <p className="text-sm text-gray-400">شخصی‌سازی دقیق و کامل خودروها با سیستم‌های جذاب برای گاراژها و مکانیک‌های شهر.</p>
            </div>

            <div className="liquid-glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg mb-2 text-white">ارتباطات رادیویی بی‌نقص</h4>
              <p className="text-sm text-gray-400">هماهنگی کامل فکشن‌های دولتی و گنگ‌ها با سیستم رادیویی و فرکانس‌های پیشرفته و بدون باگ.</p>
            </div>

            <div className="liquid-glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg mb-2 text-white">اینونتوری هوشمند</h4>
              <p className="text-sm text-gray-400">مدیریت راحت آیتم‌ها، لباس‌ها و سلاح‌ها با یک سیستم موجودی کاربرپسند، سریع و مدرن.</p>
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-purple-900/30">
        <p>تمامی حقوق برای مجموعه Eclipse Roleplay محفوظ است.</p>
      </footer>
    </div>
  );
}
