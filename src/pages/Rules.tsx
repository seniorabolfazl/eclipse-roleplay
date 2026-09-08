import { FileText, BookOpen, AlertTriangle } from 'lucide-react';

export default function Rules() {
  return (
    <div className="max-w-5xl mx-auto pt-12 px-6 text-white pb-20">
      
      {/* هدر رسمی شبیه پرونده‌های دولتی */}
      <div className="bg-white/5 border-2 border-white/10 rounded-t-2xl p-6 flex items-center justify-between border-b-0">
        <div className="flex items-center gap-4">
          <FileText size={40} className="text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold tracking-widest text-gray-200">PENAL CODE & RULES</h2>
            <p className="text-xs text-gray-400 font-mono">DOCUMENT ID: #EC-99201 | LOS SANTOS GOV</p>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-red-400 font-bold text-xl border-2 border-red-500/50 p-2 rounded rotate-3 inline-block">CLASSIFIED</p>
        </div>
      </div>

      <div className="liquid-glass p-8 rounded-b-2xl space-y-10">
        
        {/* بخش قوانین پایه */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-2 border-b border-white/10 pb-2">
            <AlertTriangle size={24}/> قوانین اساسی شهر
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-2">قانون RDM</h4>
              <p className="text-gray-400 text-sm">کشتن یا آسیب رساندن به بازیکنان بدون داشتن هیچ داستان و دلیل منطقی (RP) به شدت ممنوع است.</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-2">قانون VDM</h4>
              <p className="text-gray-400 text-sm">استفاده از ماشین به عنوان سلاح سرد و زیر گرفتن عمدی بازیکنان مجاز نمی‌باشد.</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg mb-2">قانون Fear RP</h4>
              <p className="text-gray-400 text-sm">شما باید جان کاراکتر خود را در اولویت قرار دهید. اگر تحت تهدید اسلحه هستید، باید بترسید و تسلیم شوید.</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-2">قانون New Life (NLR)</h4>
              <p className="text-gray-400 text-sm">در صورت کشته شدن و بیدار شدن در بیمارستان، کاراکتر شما وقایع منجر به مرگ را فراموش می‌کند.</p>
            </div>
          </div>
        </section>

        {/* دیکشنری اصطلاحات */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-2 border-b border-white/10 pb-2">
            <BookOpen size={24}/> دیکشنری اصطلاحات (OOC & IC)
          </h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex gap-4 items-start bg-white/5 p-3 rounded">
              <span className="font-bold text-purple-400 w-24 shrink-0">OOC :</span>
              <p>خارج از کاراکتر (Out Of Character). هرگونه صحبتی که به دنیای واقعی مربوط شود.</p>
            </li>
            <li className="flex gap-4 items-start bg-white/5 p-3 rounded">
              <span className="font-bold text-purple-400 w-24 shrink-0">IC :</span>
              <p>داخل کاراکتر (In Character). صحبت‌ها و رفتارهایی که صرفاً متعلق به شخصیت شما در بازی است.</p>
            </li>
            <li className="flex gap-4 items-start bg-white/5 p-3 rounded">
              <span className="font-bold text-purple-400 w-24 shrink-0">Power Gaming :</span>
              <p>انجام کارهایی در بازی که در دنیای واقعی غیرممکن است یا ندادن فرصت واکنش به طرف مقابل.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
