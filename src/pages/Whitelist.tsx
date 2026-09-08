import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Whitelist() {
  const [formData, setFormData] = useState({
    rpName: '',
    discordId: '',
    age: '',
    story: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // اعتبارسنجی فرم فرانت‌اند
    if (!formData.rpName || !formData.discordId || !formData.age || !formData.story) {
      toast.error('شهروند، لطفاً تمام فیلدها را پر کن!', { theme: 'dark' });
      return;
    }
    if (parseInt(formData.age) < 15) {
      toast.warning('سن شما برای ورود به شهر مناسب نیست.', { theme: 'dark' });
      return;
    }
    if (formData.story.length < 50) {
      toast.error('داستان کاراکتر شما خیلی کوتاه است. حداقل ۵۰ کاراکتر بنویسید.', { theme: 'dark' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('درخواست شما به اداره مهاجرت لوس سانتوس ارسال شد!', { theme: 'dark' });
      setFormData({ rpName: '', discordId: '', age: '', story: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto pt-12 px-6 text-white pb-20">
      <h2 className="text-4xl font-bold mb-4 text-center text-purple-400">درخواست شهروندی</h2>
      <p className="text-center text-gray-400 mb-8">فرم زیر را با دقت پر کنید. نتیجه به دیسکورد شما ارسال خواهد شد.</p>
      
      <form onSubmit={handleSubmit} className="liquid-glass p-6 md:p-10 rounded-2xl flex flex-col gap-6">
        <div>
          <label className="block text-sm mb-2 text-gray-300">نام و نام خانوادگی داخل بازی (RP Name):</label>
          <input 
            type="text" 
            value={formData.rpName}
            onChange={(e) => setFormData({...formData, rpName: e.target.value})}
            className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
            placeholder="مثال: John Doe" 
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300">آیدی دیسکورد شما:</label>
          <input 
            type="text" 
            value={formData.discordId}
            onChange={(e) => setFormData({...formData, discordId: e.target.value})}
            className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
            placeholder="مثال: username#1234" 
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300">سن واقعی شما:</label>
          <input 
            type="number" 
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300">داستان کاراکتر شما:</label>
          <textarea 
            rows={5} 
            value={formData.story}
            onChange={(e) => setFormData({...formData, story: e.target.value})}
            className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors custom-scrollbar" 
            placeholder="داستان ورود کاراکتر خود به شهر را بنویسید..."
          ></textarea>
        </div>

        <button 
          disabled={isSubmitting}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'در حال ارسال...' : 'ارسال فرم جهت بررسی'}
        </button>
      </form>
    </div>
  );
}
