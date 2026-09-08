const NAV_LINKS = ['داستان', 'قوانین', 'شهروندی', 'پشتیبانی']

export default function Navbar() {
  return (
    <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
      <span className="text-2xl font-semibold tracking-tight">
        ECLIPSE
      </span>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-white/90 hover:text-gray-300 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#"
        className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        شروع چت
      </a>
    </nav>
  )
}
