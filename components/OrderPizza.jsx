import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import OrderCount from './components/OrderCount';
import OrderSummary from './components/OrderSummary';

export default function OrderPizza() {

    const [pizzaBoyutu, setPizzaBoyutu] = useState('');
    const [siparisSayisi, setSiparisSayisi] = useState(1);
    const [ekMalzemeler, setEkMalzemeler] = useState([]);

    const pizzaFiyati = 85.5;

    const secimlerFiyati = 5;

    const secimlerToplam = ekMalzemeler.length * secimlerFiyati;

    const toplamFiyat = (pizzaFiyati + secimlerToplam) * siparisSayisi;

    const ekMalzemeListesi = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        'Sucuk',
        'Jalepeno',
        'Sarımsak',
        'Biber',
        'Salam',
        'Ananas',
        'Kabak'
    ];

    const handleIngredientChange = (extra) => {
        setEkMalzemeler((prev) => {
            if (prev.includes(extra)) {
                return prev.filter((item) => item !== extra);
            }

            if (prev.length >= 10) {
                return prev;
            }

            return [...prev, extra];
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (ekMalzemeler.length < 4) {
            alert("En az 4 malzeme seçmelisiniz!");
            return;
        }
    };

    return (
        <div className="form-content">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='pizza-size'>Boyut Seç *</Label>
                    <Label>
                        <Input id='pizza-size' type='radio' name='size' value='small' checked={pizzaBoyutu === 'small'} onChange={handleSizeChange} /> Küçük
                    </Label>
                    <br />
                    <Label>
                        <Input id='pizza-size' type='radio' name='size' value='medium' checked={pizzaBoyutu === 'medium'} onChange={handleSizeChange} /> Orta
                    </Label>
                    <br />
                    <Label>
                        <Input id='pizza-size' type='radio' name='size' value='large' checked={pizzaBoyutu === 'large'} onChange={handleSizeChange} /> Büyük
                    </Label>
                    <br />
                </FormGroup>
                <FormGroup>

                </FormGroup>
                <FormGroup>
                    <Label for='extra-ingredients'>Ek Malzemeler</Label>
                    <p className='text-sm text-gray-500'>En Fazla 10 malzeme seçebilirsiniz. (5₺)</p>

                    <div className='grid grid-cols-2 gap-2 mt-2'>
                        {ekMalzemeListesi.map((extra) => {
                            const isChecked = ekMalzemeler.includes(extra);
                            const isDisabled = ekMalzemeler.length >= 10 && !isChecked;

                            return (
                                <Label key={extra} className='flex items-center gap-2'>
                                    <Input 
                                        type='checkbox'
                                        checked={isChecked}
                                        disabled={isDisabled}
                                        onChange={() => handleIngredientChange(extra)}
                                    />
                                    {extra}
                                </Label>
                            );
                        })}
                    </div>

                    <p className='mt-2 text-sm font-medium'>
                        Seçilen: {ekMalzemeler.length} / 10
                    </p>

                    {ekMalzemeler.length > 0 && ekMalzemeler.length < 4 && (
                        <p className='text-red-500 text-sm mt-1'>
                            En az 4 malzeme seçmelisiniz.
                        </p>
                    )}
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
    );
}