import {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import OrderHeader from './OrderHeader';
import OrderHero from './OrderHero';
import OrderCount from './OrderCount';
import OrderSummary from './OrderSummary';
import PizzaBoyutu from './PizzaBoyutu';
import HamurKalinligi from './HamurKalinligi';
import EkMalzemeler from './EkMalzemeler';
import CustomerName from './CustomerName';
import SiparisNotu from './SiparisNotu';
import Footer from './Footer';

export default function OrderPizza() {

    const [pizzaBoyutu, setPizzaBoyutu] = useState('');
    const [siparisSayisi, setSiparisSayisi] = useState(1);
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [hamurKalinligi, setHamurKalinligi] = useState('');
    const [musteriIsmi, setMusteriIsmi] = useState('');
    const [siparisNotu, setSiparisNotu] = useState('');

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [touched, setTouched] = useState({
        musteriIsmi: false,
    });

    const history = useHistory();

    const pizzaFiyati = 85.5;

    const secimlerFiyati = 5;

    const secimlerToplam = ekMalzemeler.length * secimlerFiyati;

    const toplamFiyat = (pizzaFiyati + secimlerToplam) * siparisSayisi;

    const handleIngredientChange = (ingredient) => {
        setEkMalzemeler((prev) =>
            prev.includes(ingredient)
                ? prev.filter((e) => e !== ingredient)
                : prev.length < 10
                ? [...prev, ingredient]
                : prev
        );
    };

    const validasyonformu = () => {
        const hataListesi = {};

        if (!pizzaBoyutu) {
            hataListesi.pizzaBoyutu = 'Pizza boyutu seçimi zorunludur.';
        }

        if (!hamurKalinligi) {
            hataListesi.hamurKalinligi = 'Hamur kalınlığı seçimi zorunludur.';
        }

        if (ekMalzemeler.length > 10) {
            hataListesi.ekMalzemeler = 'En fazla 10 malzeme seçmelisiniz.'
        }

        if (!musteriIsmi || musteriIsmi.trim().length < 3) {
            hataListesi.musteriIsmi = "İsminiz en az 3 karakterde olmalıdır."
        }

        return hataListesi;
    }

    const formHazirMi =
        siparisSayisi >= 1
        && musteriIsmi.trim().length >= 3 
        && pizzaBoyutu 
        && hamurKalinligi 
        && ekMalzemeler.length >= 4 
        && ekMalzemeler.length <= 10;

    const resetform = () => {
        setMusteriIsmi('');
        setPizzaBoyutu('');
        setHamurKalinligi('');
        setEkMalzemeler([]);
        setSiparisNotu('');
        setErrors({});
        setSubmitted(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);

        const validasyonHatalari = validasyonformu();
        setErrors(validasyonHatalari);

        if(Object.keys(validasyonHatalari).length > 0) return;

        const siparisVerisi = {
            musteriIsmi,
            pizzaBoyutu,
            hamurKalinligi,
            ekMalzemeler,
            siparisNotu,
            secimlerToplam,
            toplamFiyat,
        };

        try {
            const response = await axios.post(
                "https://reqres.in/api/pizza",
                siparisVerisi,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "reqres-free-v1",
                    },
                }
            );

            console.log("Sipariş Yanıtı:", response.data);

            resetform();
            history.push('/success', {
                pizzaBoyutu,
                hamurKalinligi,
                ekMalzemeler,
                secimlerToplam,
                toplamFiyat,
            });
        } catch (error) {
            console.error("Sipariş gönderilirken hata oluştu!", error)
        }
    };

    useEffect(() => {
        if (!submitted && !touched.musteriIsmi) return;
        setErrors(validasyonformu());
    }, [pizzaBoyutu, hamurKalinligi, ekMalzemeler, musteriIsmi, touched.musteriIsmi,]);

    return (
        <>      
        <main className="min-h-screen bg-gray-50 font-barlow">
        <OrderHeader />

            <section className="max-w-3xl mx-auto mt-10 px-4">
            <OrderHero />
    
                <form className="bg-white p-4 sm:p-6 rounded-lg shadow space-y-10 mt-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PizzaBoyutu 
                            value={pizzaBoyutu} 
                            onChange={setPizzaBoyutu} 
                            error={submitted && errors.pizzaBoyutu}
                        />
                        <HamurKalinligi 
                            value={hamurKalinligi} 
                            onChange={setHamurKalinligi}
                            error={submitted && errors.hamurKalinligi}
                        />
                    </div>
                    
                        <EkMalzemeler 
                            selected={ekMalzemeler} 
                            onChange={handleIngredientChange}
                            error={submitted && errors.ekMalzemeler}
                        />
                        <CustomerName
                            value={musteriIsmi}
                            onChange={setMusteriIsmi}
                            onBlur={() => 
                                setTouched((prev) => ({ ...prev, musteriIsmi: true}))
                            }
                            error={(touched.musteriIsmi || submitted) && errors.musteriIsmi}
                        />
                        <SiparisNotu
                            value={siparisNotu}
                            onChange={setSiparisNotu}
                        />
                    <hr />

                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-10">
                        <OrderCount siparisSayisi={siparisSayisi} setSiparisSayisi={setSiparisSayisi}/>

                        <OrderSummary secimlerToplam={secimlerToplam} toplamFiyat={toplamFiyat} disabled={!formHazirMi} />
                    </div>
                </form>
            </section>
            <div className='mt-20'>
                <Footer />
            </div>
        </main>
        </>
    );
}