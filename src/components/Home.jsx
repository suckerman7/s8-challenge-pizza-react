import { useHistory } from "react-router-dom";
import homeBanner from "../images/iteration-1-images/home-banner.png";
import logo from "../images/iteration-1-images/logo.svg";

export default function Home() {
  const history = useHistory();

  return (
    <main className="relative w-full h-screen overflow-hidden font-condensed">

      
      <img
        src={homeBanner}
        alt="Pizza Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        
        <img
          src={logo}
          alt="Teknolojik Yemekler"
          className="mt-24 mb-12 w-lg"
        />

        <h1 className="text-7xl md:text-9xl font-light tracking-wide leading-none">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>

        <button
          onClick={() => history.push("/order")}
          className="mt-14 bg-yellow-400 hover:bg-yellow-500 transition text-black font-bold px-20 py-5 rounded-full text-xl"
        >
          ACIKTIM
        </button>

      </div>
    </main>
  );
}