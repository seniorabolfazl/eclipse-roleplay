export default function Whitelist() {
  return (
    <div className="max-w-3xl mx-auto pt-12 px-6 text-white pb-20">
      <h2 className="text-4xl font-bold mb-4 text-center text-purple-400">درخواست شهروندی</h2>
      <p className="text-center text-gray-400 mb-8">فرم زیر را با دقت پر کنید. نتیجه به دیسکورد شما ارسال خواهد شد.</p>
      
      <form className="liquid-glass p-8 rounded-2xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm mb-2 text-gray-300">نام و نام خانوادگی داخل بازی (RP Name):</label>
          <input type="text" className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="مثال: John Doe" />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300">آیدی دیسکورد شما:</label>
          <input type="text" className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="مثال: username#1234" />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300">سن واقعی شما:</label>
          <input type="number" className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300">داستان کاراکتر شما (حداقل ۵۰ کلمه):</label>
          <textarea rows={5} className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="داستان ورود کاراکتر خود به شهر را بنویسید..."></textarea>
        </div>

        <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors mt-4">
          ارسال فرم جهت بررسی
        </button>
      </form>
    </div>
  );
}