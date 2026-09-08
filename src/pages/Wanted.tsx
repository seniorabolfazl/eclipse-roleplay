import { Target, Skull } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Wanted() {
  const criminals = [
    { name: "John 'The Ghost' Doe", crime: "سرقت مسلحانه از بانک مرکزی", bounty: "$50,000", status: "WANTED", image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Unknown (Masked)", crime: "قتل افسر LSPD در حال خدمت", bounty: "$120,000", status: "WANTED", image: "https://images.unsplash.com/photo-1517436073-3b1b110bc4e0?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Tommy Vercetti", crime: "قاچاق اسلحه درجه یک", bounty: "$35,000", status: "CAPTURED", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-16 px-6 text-white pb-20">
      <div className="text-center mb-16">
        <Target size={60} className="mx-auto text-red-500 mb-4 animate-pulse" />
        <h2 className="text-5xl font-black text-red-600 tracking-widest drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] font-['Inter']">MOST WANTED</h2>
        <p className="text-gray-400 mt-4 text-lg">لیست خطرناک‌ترین مجرمین تحت تعقیب اداره پلیس لوس سانتوس</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {criminals.map((criminal, i) => (
          <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="relative">
            <div className={`border-4 rounded-xl overflow-hidden bg-black/60 backdrop-blur-sm ${criminal.status === 'WANTED' ? 'border-red-600' : 'border-gray-600 opacity-75'}`}>
              
              {/* لیبل روی عکس */}
              {criminal.status === 'CAPTURED' && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
                  <span className="text-4xl font-black text-red-600 border-4 border-red-600 p-2 -rotate-12 tracking-widest font-['Inter'] drop-shadow-md">BUSTED</span>
                </div>
              )}

              <div className="h-64 overflow-hidden grayscale contrast-125">
                {/* استفاده از تصاویر تصادفی دارک به عنوان عکس مجرم */}
                <img src={criminal.image} alt="criminal" className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 uppercase font-['Inter'] tracking-wider">{criminal.name}</h3>
                <div className="flex gap-2 items-center text-red-400 font-bold mb-4 bg-red-950/30 p-2 rounded border border-red-900/50">
                  <Skull size={18} /> جایزه: {criminal.bounty}
                </div>
                <div className="text-sm text-gray-400 border-t border-gray-700 pt-3">
                  <span className="text-gray-500 text-xs block mb-1">آخرین جرم ثبت شده:</span>
                  {criminal.crime}
                </div>
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
