import {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import OrderHeader from './components/OrderHeader';
import OrderHero from './components/OrderHero';
import OrderCount from './components/OrderCount';
import OrderSummary from './components/OrderSummary';
import PizzaBoyutu from './components/PizzaBoyutu';
import HamurKalinligi from './components/HamurKalinligi';
import EkMalzemeler from './components/EkMalzemeler';

export default function OrderPizza() {

    const [pizzaBoyutu, setPizzaBoyutu] = useState('');
    const [siparisSayisi, setSiparisSayisi] = useState(1);
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [hamurKalinligi, setHamurKalinligi] = useState('');

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const pizzaFiyati = 85.5;

    const secimlerFiyati = 5;

    const secimlerToplam = ekMalzemeler.length * secimlerFiyati;

    const toplamFiyat = (pizzaFiyati + secimlerToplam) * siparisSayisi;

    const handleIngredientChange = (ekMalzemeler) => {
        setEkMalzemeler((prev) =>
            prev.includes(ekMalzemeler)
                ? prev.filter((e) => e !== ekMalzemeler)
                : prev.length < 10
                ? [...prev, ekMalzemeler]
                : prev
        );
    };

    const validasyonFormu = () => {
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

        return hataListesi;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        const validasyonHatalari = validasyonFormu();
        setErrors(validasyonHatalari);

        if(Object.keys(validasyonHatalari).length > 0) return;

        console.log("Sipariş Gönderildi");
    };

    useEffect(() => {
        if (!submitted) return;
        setErrors(validasyonFormu());
    }, [pizzaBoyutu, hamurKalinligi, ekMalzemeler]);

    return (
        <>
        <OrderHeader />
        <OrderHero />
        
        <div className="form-content">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
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
                    <EkMalzemeler 
                        selected={ekMalzemeler} 
                        onChange={handleIngredientChange}
                        error={submitted && errors.ekMalzemeler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='order-note'>Sipariş Notu</Label>
                    <Input 
                        id='data-order-note'
                        name='order-note'
                        type='text'
                        placeholder='Siparişine eklemek istediğin bir not var mı?'
                    />
                </FormGroup>
                <hr />

                <div className="flex-items-start justify-between mt-8">
                    <OrderCount siparisSayisi={siparisSayisi} setSiparisSayisi={setSiparisSayisi}/>

                    <OrderSummary secimlerToplam={secimlerToplam} toplamFiyat={toplamFiyat} />
                </div>
            </Form>
        </div>
        </>
    );
}