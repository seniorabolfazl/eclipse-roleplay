import { Crown, Zap, ShieldCheck } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Store() {
  const handleBuy = (packageName: string) => {
    toast.success(`در حال انتقال به درگاه پرداخت برای ${packageName}...`, { theme: 'dark' });
  };

  return (
    <div className="max-w-6xl mx-auto pt-16 px-6 text-white pb-20">
      <div className="text-center mb-16">
        <Crown size={50} className="mx-auto text-yellow-400 mb-4 animate-bounce" />
        <h2 className="text-4xl font-black text-yellow-400 tracking-wider">فروشگاه اکلیپس (VIP)</h2>
        <p className="text-gray-400 mt-2">با حمایت از سرور، امکانات انحصاری دریافت کنید و به رشد کامیونیتی کمک کنید.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="liquid-glass p-8 rounded-2xl border border-yellow-500/30 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">پکیج VIP برنزی</h3>
              <Crown className="text-yellow-600" size={28} />
            </div>
            <p className="text-3xl font-black text-yellow-400 mb-6">۱۵۰,۰۰۰ <span className="text-sm text-gray-400">تومان / ماهانه</span></p>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-center gap-2">✓ حقوق ماهیانه داخل بازی</li>
              <li className="flex items-center gap-2">✓ دسترسی به گاراژ VIP</li>
              <li className="flex items-center gap-2">✓ اولویت ورود معمولی</li>
            </ul>
          </div>
          <button onClick={() => handleBuy('VIP برنزی')} className="w-full bg-yellow-600 hover:bg-yellow-500 font-bold py-3 rounded-lg transition-colors text-black">
            خرید پکیج
          </button>
        </div>

        <div className="liquid-glass p-8 rounded-2xl border-2 border-purple-500 flex flex-col justify-between relative shadow-[0_0_30px_rgba(124,58,237,0.3)]">
          <span className="absolute -top-3 right-8 bg-purple-600 text-xs font-bold px-3 py-1 rounded-full">محبوب‌ترین</span>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-purple-300">پکیج VIP طلایی</h3>
              <Zap className="text-purple-400" size={28} />
            </div>
            <p className="text-3xl font-black text-purple-400 mb-6">۳۵۰,۰۰۰ <span className="text-sm text-gray-400">تومان / ماهانه</span></p>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-center gap-2">✓ تمام مزایای برنزی</li>
              <li className="flex items-center gap-2">✓ اولویت بالا در صف ورود (Priority Queue)</li>
              <li className="flex items-center gap-2">✓ یک دستگاه خودروی وارداتی رایگان</li>
              <li className="flex items-center gap-2">✓ پلاک اختصاصی روی خودرو</li>
            </ul>
          </div>
          <button onClick={() => handleBuy('VIP طلایی')} className="w-full bg-purple-600 hover:bg-purple-500 font-bold py-3 rounded-lg transition-colors text-white">
            خرید پکیج
          </button>
        </div>

        <div className="liquid-glass p-8 rounded-2xl border border-blue-500/30 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">پلاک و ماشین کاستوم</h3>
              <ShieldCheck className="text-blue-400" size={28} />
            </div>
            <p className="text-3xl font-black text-blue-400 mb-6">۲۰۰,۰۰۰ <span className="text-sm text-gray-400">تومان / دائمی</span></p>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-center gap-2">✓ ثبت پلاک دلخواه در دیتابیس</li>
              <li className="flex items-center gap-2">✓ تحویل مستقیم به گاراژ شخصی</li>
              <li className="flex items-center gap-2">✓ هندلینگ اختصاصی</li>
            </ul>
          </div>
          <button onClick={() => handleBuy('خودروی کاستوم')} className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-3 rounded-lg transition-colors text-white">
            خرید آیتم
          </button>
        </div>
      </div>
    </div>
  );
}
