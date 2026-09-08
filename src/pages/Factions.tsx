import { Shield, Cross, Wrench, Skull } from 'lucide-react';

export default function Factions() {
  const factions = [
    { name: 'اداره پلیس (LSPD)', icon: <Shield size={40} className="text-blue-400" />, status: 'open', desc: 'حفظ امنیت شهر و مبارزه با جرایم سازمان‌یافته.' },
    { name: 'بیمارستان (EMS)', icon: <Cross size={40} className="text-red-400" />, status: 'open', desc: 'نجات جان شهروندان و ارائه خدمات پزشکی شبانه‌روزی.' },
    { name: 'مکانیک', icon: <Wrench size={40} className="text-yellow-400" />, status: 'closed', desc: 'تیونینگ، تعمیرات و امداد خودرو در سراسر نقشه.' },
    { name: 'کارتل و مافیا', icon: <Skull size={40} className="text-purple-400" />, status: 'closed', desc: 'کنترل بازار سیاه و رقابت برای قدرت در سایه‌ها.' },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-16 px-6 text-white pb-20">
      <h2 className="text-4xl font-bold mb-4 text-center text-purple-400">فکشن‌ها و مشاغل</h2>
      <p className="text-center text-gray-400 mb-12">وضعیت فعلی استخدام در دپارتمان‌ها و گروه‌های شهر</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {factions.map((faction, index) => (
          <div key={index} className="liquid-glass p-8 rounded-2xl flex items-start gap-6 hover:bg-white/5 transition-colors">
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 shrink-0">
              {faction.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">{faction.name}</h3>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  faction.status === 'open' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {faction.status === 'open' ? 'در حال استخدام' : 'ظرفیت تکمیل'}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{faction.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
