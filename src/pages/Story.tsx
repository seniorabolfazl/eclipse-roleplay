export default function Story() {
  return (
    <div className="max-w-4xl mx-auto pt-16 px-6 text-white pb-20">
      <h2 className="text-4xl font-bold mb-8 text-purple-400 text-center">داستان اکلیپس</h2>
      
      <div className="liquid-glass p-8 rounded-2xl relative overflow-hidden">
        {/* یک افکت نور در پس‌زمینه کارت داستان */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
        
        <p className="text-gray-300 leading-loose text-lg text-justify">
          لوس سانتوس دیگر آن شهر همیشگی نیست. پس از یک دوره طولانی از هرج و مرج، اکنون نظم جدیدی بر شهر حاکم شده است. 
          <strong className="text-white mx-1">اکلیپس</strong> تنها یک نام نیست؛ نمادی از تقابل همیشگی روشنایی قانون و تاریکی خلافکاران است. 
          در این شهر، هر تصمیمی که می‌گیرید، از خرید یک قهوه ساده تا برنامه‌ریزی برای سرقت از بانک مرکزی، روی اقتصاد و جامعه تاثیر مستقیم می‌گذارد. 
        </p>
        <p className="text-gray-300 leading-loose text-lg text-justify mt-6">
          آیا به دپارتمان پلیس می‌پیوندید تا شهر را پاکسازی کنید؟ یا در تاریکی شب، امپراتوری زیرزمینی خود را بنا می‌کنید؟ داستان شما از همین لحظه آغاز می‌شود.
        </p>
      </div>
    </div>
  );
}
