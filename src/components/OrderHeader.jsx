import logo from "../images/iteration-1-images/logo.svg";

export default function OrderHeader() {
  return (
    <header className="bg-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">

        <img
          src={logo}
          alt="Teknolojik Yemekler"
          className="w-80 md:w-96 mb-8"
        />
        
        <nav className="text-sm text-white/80 self-start">
          <span>Anasayfa</span>
          <span className="mx-2">-</span>
          <span>Seçenekler</span>
          <span className="mx-2">-</span>
          <span className="font-bold text-white">Sipariş Oluştur</span>
        </nav>

      </div>
    </header>
  );
}