import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      {/* فیلتر سیاه و سفید برای حس مردن در بازی */}
      <div className="absolute inset-0 backdrop-grayscale backdrop-blur-sm -z-10"></div>
      
      <h1 className="text-7xl md:text-9xl font-black text-red-600 tracking-widest drop-shadow-[0_0_30px_rgba(220,38,38,0.8)] mb-6 font-['Inter']">
        WASTED
      </h1>
      <p className="text-2xl md:text-3xl text-gray-200 mb-10 font-bold drop-shadow-md">
        مسیر رو اشتباه اومدی شهروند!
      </p>
      
      <Link to="/" className="liquid-glass px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors text-white z-10">
        بازگشت به لوس سانتوس
      </Link>
    </div>
  );
}
