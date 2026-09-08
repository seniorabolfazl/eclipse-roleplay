import Navbar from './Navbar'
import FadeIn from './FadeIn'
import AnimatedHeading from './AnimatedHeading'

const VIDEO_SRC = ''

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-eclipse-black text-white">
      {}
      {VIDEO_SRC ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div className="absolute inset-0 eclipse-fallback-bg" />
      )}
      {}

      {}
      <div className="relative z-10 h-full flex flex-col">
        <div className="px-6 md:px-12 lg:px-16 pt-6">
          <Navbar />
        </div>

        <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {}
            <div>
              <AnimatedHeading
                text={'زندگی‌ای دیگر\nدر دل شب رقم بزن.'}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
                initialDelay={200}
                charDelay={30}
                charDuration={500}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  یک شهر زنده، داستان‌های واقعی و جامعه‌ای که با هم رشد می‌کند.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    ورود به دیسکورد
                  </a>
                  <a
                    href="#"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    کاوش کن
                  </a>
                </div>
              </FadeIn>
            </div>

            {}
            <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light">
                    شهروندی. تجارت. ماجراجویی.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
