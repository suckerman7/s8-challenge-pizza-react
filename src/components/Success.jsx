import {withRouter} from 'react-router-dom';
import OrderSummary from './OrderSummary';
import Footer from './Footer';
import logo from '../images/iteration-1-images/logo.svg';

function Success({location}) {

  const {
    pizzaBoyutu,
    hamurKalinligi,
    ekMalzemeler,
    secimlerToplam,
    toplamFiyat,
  } = location.state || {};


  return (

    <div className="flex flex-col min-h-screen bg-[#CE2829] text-white font-condensed">

      <main className="grow flex flex-col items-center px-4">
          <img
              src={logo}
              alt="Teknolojik Yemekler"
              className="w-72 sm:w-80 md:w-96 mt-24 sm:mt-32 mb-16 sm:mb-24"
          />

        <div className="text-center mt-8 sm:mt-16">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-yellow-300 tracking-wide leading-tight font-satisfy">
            Lezzetin yolda
          </h1>
          <h1 className="text-5xl md:text-8xl tracking-wide leading-tight font-condensed">
            SİPARİŞ ALINDI
          </h1>
        </div>

        <hr className='border-white w-full max-w-xl my-6 sm:my-8'/>

        <h1 className="text-2xl sm:text-4xl font-barlow mb-4 text-center">
            Position Absolute Acı Pizza
        </h1>

        <div className='text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 font-barlow'>
          <p><strong>Boyut:</strong> {pizzaBoyutu}</p>
          <p><strong>Hamur:</strong> {hamurKalinligi}</p>
          <div>
            <strong>Ek Malzemeler: </strong>
            {ekMalzemeler && ekMalzemeler.length > 0 
            ? ekMalzemeler.join(', ')
            : <p>Seçilmedi</p>
            }
          </div>
          <div className='mt-4'>
            <strong>Sipariş Toplamı:</strong> {toplamFiyat?.toFixed(2)}₺
          </div>
        </div>

        <div className='mb-12 sm:mb-16 font-barlow'>
          <OrderSummary
            secimlerToplam={secimlerToplam || 0}
            toplamFiyat={toplamFiyat || 0}  
            disabled={true}
            hideButton={true}
            whiteTotal={true}
          />
        </div>
      </main>
        <Footer />
    </div>
  );
}

export default withRouter(Success);
