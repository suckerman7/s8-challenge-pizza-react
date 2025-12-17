import {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
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

export default function OrderPizza() {

    console.log("OrderPizza render edildi");

    const [pizzaBoyutu, setPizzaBoyutu] = useState('');
    const [siparisSayisi, setSiparisSayisi] = useState(1);
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [hamurKalinligi, setHamurKalinligi] = useState('');
    const [musteriIsmi, setMusteriIsmi] = useState('');

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const history = useHistory();

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

        if (!musteriIsmi || musteriIsmi.trim().length < 3) {
            hataListesi.musteriIsmi = "İsminiz en az 3 karakterde olmalıdır."
        }

        return hataListesi;
    }

    const formHazirMi =
        musteriIsmi.trim().length >= 3 
        && pizzaBoyutu 
        && hamurKalinligi 
        && ekMalzemeler.length >= 4 
        && ekMalzemeler.length <= 10;

    const resetForm = () => {
        setMusteriIsmi('');
        setPizzaBoyutu('');
        setHamurKalinligi('');
        setEkMalzemeler([]);
        setErrors([]);
        setSubmitted(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);

        const validasyonHatalari = validasyonFormu();
        setErrors(validasyonHatalari);

        if(Object.keys(validasyonHatalari).length > 0) return;

        const siparisVerisi = {
            musteriIsmi,
            pizzaBoyutu,
            hamurKalinligi,
            ekMalzemeler,
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

            resetForm();
            history.push('/success');
        } catch (error) {
            console.error("Sipariş gönderilirken hata oluştu!", error)
        }
    };

    useEffect(() => {
        if (!submitted) return;
        setErrors(validasyonFormu());
    }, [pizzaBoyutu, hamurKalinligi, ekMalzemeler]);

    return (
        <>
        <div className="text-2xl p-10">
            ORDER PIZZA ÇALIŞIYOR
        </div>
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
                    <CustomerName
                        value={musteriIsmi}
                        onChange={setMusteriIsmi}
                        error={errors.musteriIsmi}
                    />

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

                    <OrderSummary secimlerToplam={secimlerToplam} toplamFiyat={toplamFiyat} disabled={!formHazirMi} />
                </div>
            </Form>
        </div>
        </>
    );
}