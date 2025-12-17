import logo from './images/iteration-1-images/logo.svg';

export default function Success() {
    return (
        <div className='min-h-screen bg-red-600 flex flex-col'>
            <header className='py-6 text-center'>
                <img 
                    src={logo}
                    alt='Teknolojik Yemekler' 
                    className='mx-auto h-10'
                ></img>
            </header>

            <main className='flex-1 flex items-center justify-center text-center px-4'>
                <div>
                    <h1 className='text-white text-4xl md:text-5xl font-light tracking-wide mb-4'>
                        TEBRİKLER!
                    </h1>

                    <h2 className='text-white text-3xl md:text-4xl font-light tracking-wide'>
                        SİPARİŞİNİZ ALINDI!
                    </h2>
                </div>
            </main>
        </div>
    );
}