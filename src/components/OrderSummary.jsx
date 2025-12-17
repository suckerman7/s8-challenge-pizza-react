import {Button} from 'reactstrap';

export default function OrderSummary({secimlerToplam, toplamFiyat}) {
    return (
        <div className='w-72 border rounded-lg p-4'>
            <h4 className='font-semibold mb-3'>Sipariş Toplamı</h4>

            <div className='flex justify-between text-sm mb-2'>
                <span>Seçimler</span>
                <span>{secimlerToplam.toFixed(2)}₺</span>
            </div>

            <div className='flex justify-between font-bold text-red-600 mb-4'>
                <span>Toplam</span>
                <span>{toplamFiyat.toFixed(2)}₺</span>
            </div>

            <Button 
                type='submit'
                disabled={disabled}
                className={`w-full bg-yellow-400 py-3 rounded-md font-bold hover:bg-yellow-500 transition 
                ${disabled ? "bg-gray-300 cursor-not-allowed"
                           : "bg-yellow-400 hover:bg-yellow-500"}`
                }
            >
                SİPARİŞ VER
            </Button>
        </div>
    );
}