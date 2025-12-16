import logo from './images/iteration-1-images/logo.svg';

export default function OrderHeader() {
    return (
        <header className='bg-yellow-400 py-10 mb-8'>
            <div className='max-w-4xl mx-auto text-center px-4'>
                <img
                    src={logo}
                    alt='Teknolojik Yemekler'
                    className='mx-auto mb-4 h-10'
                />

                <nav className='text-sm text-gray-800'>
                    Anasayfa <span className='mx-1'>-</span>
                    Seçenekler <span className='mx-1'>-</span>
                    <span className='font-semibold'>Sipariş Oluştur</span>
                </nav>
            </div>
        </header>
    );
}