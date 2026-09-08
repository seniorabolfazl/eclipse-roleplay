import { AlertCircle } from 'lucide-react';

export default function Rules() {
  return (
    <div className="max-w-4xl mx-auto pt-12 px-6 text-white pb-20">
      <h2 className="text-4xl font-bold mb-8 text-purple-400 text-center">قوانین سرور اکلیپس</h2>
      
      <div className="liquid-glass p-8 rounded-2xl space-y-8">
        <div className="flex gap-4">
          <AlertCircle className="text-red-400 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">قانون RDM (Random Death Match)</h3>
            <p className="text-gray-300 text-sm leading-relaxed">کشتن بازیکنان دیگر بدون هیچ دلیل موجه یا داستان قبلی (RP) کاملاً ممنوع است و با برخورد جدی ادمین‌ها مواجه خواهد شد.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <AlertCircle className="text-red-400 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">قانون VDM (Vehicle Death Match)</h3>
            <p className="text-gray-300 text-sm leading-relaxed">استفاده از وسیله نقلیه به عنوان سلاح برای زیر گرفتن عمدی دیگران مجاز نیست.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <AlertCircle className="text-yellow-400 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">قانون Fear RP</h3>
            <p className="text-gray-300 text-sm leading-relaxed">شما باید برای جان کاراکتر خود ارزش قائل شوید. اگر دو نفر روی شما اسلحه کشیده‌اند، نمی‌توانید فرار کنید یا اسلحه بکشید.</p>
          </div>
        </div>
      </div>
    </div>
  );
}