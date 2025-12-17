import logo from '../images/iteration-1-images/logo.svg';

export default function Success() {
  return (
    <main className="min-h-screen bg-[#CE2829] text-white font-condensed flex flex-col items-center">

        <img
            src={logo}
            alt="Teknolojik Yemekler"
            className="w-96 mt-32 mb-24"
        />

      <div className="text-center mt-68">
        <h1 className="text-5xl md:text-8xl tracking-wide leading-tight">
          TEBRİKLER! <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </div>

    </main>
  );
}
