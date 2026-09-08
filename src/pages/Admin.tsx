import { useState } from 'react';
import { Lock, UserCheck, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // لیست نمونه درخواست‌های وایت‌لیست در پنل ادمین
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', discord: 'johndoe#1234', age: 22, status: 'pending' },
    { id: 2, name: 'Alex Smith', discord: 'alex#5678', age: 19, status: 'pending' },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // رمز عبور تستی ادمین
      setIsAuthenticated(true);
      toast.success('با موفقیت وارد پنل ادمین شدید.', { theme: 'dark' });
    } else {
      toast.error('رمز عبور اشتباه است!', { theme: 'dark' });
    }
  };

  const handleAction = (id: number, action: 'approved' | 'rejected') => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: action } : req));
    toast.info(`درخواست کاربر ${action === 'approved' ? 'تایید' : 'رد'} شد.`, { theme: 'dark' });
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[75vh] px-4">
        <form onSubmit={handleLogin} className="liquid-glass p-8 rounded-2xl max-w-md w-full text-white space-y-6">
          <div className="text-center">
            <Lock size={40} className="mx-auto text-purple-400 mb-2" />
            <h2 className="text-2xl font-bold">ورود به پنل مدیریت</h2>
            <p className="text-xs text-gray-400 mt-1">مختص مدیران ارشد سرور اکلیپس</p>
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-300">رمز عبور ادمین:</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500" 
              placeholder="••••••••" 
            />
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-500 font-bold py-3 rounded-lg transition-colors">
            ورود به سیستم
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pt-12 px-6 text-white pb-20">
      <div className="flex justify-between items-center mb-8 bg-white/5 p-6 rounded-2xl border border-white/10">
        <div>
          <h2 className="text-3xl font-bold text-purple-400">پنل مدیریت اکلیپس</h2>
          <p className="text-sm text-gray-400">مدیریت درخواست‌های شهروندی و وضعیت سرور</p>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600/40 transition-colors">
          خروج از حساب
        </button>
      </div>

      <div className="liquid-glass p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <UserCheck size={22} className="text-purple-400" /> درخواست‌های وایت‌لیست در انتظار بررسی
        </h3>
        
        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="bg-black/40 p-4 rounded-xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="font-bold text-lg">{req.name} <span className="text-xs text-gray-400 font-mono">({req.discord})</span></p>
                <p className="text-sm text-gray-400">سن: {req.age} سال</p>
              </div>
              <div className="flex items-center gap-3">
                {req.status === 'pending' ? (
                  <>
                    <button onClick={() => handleAction(req.id, 'approved')} className="flex items-center gap-1 bg-green-600/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-600/40 transition-colors">
                      <CheckCircle size={16} /> تایید
                    </button>
                    <button onClick={() => handleAction(req.id, 'rejected')} className="flex items-center gap-1 bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600/40 transition-colors">
                      <XCircle size={16} /> رد
                    </button>
                  </>
                ) : (
                  <span className={`px-4 py-1.5 rounded-lg text-xs font-bold ${req.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {req.status === 'approved' ? 'تایید شده' : 'رد شده'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
