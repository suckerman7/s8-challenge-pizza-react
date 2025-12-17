import {useHistory} from 'react-router-dom';
import homeBanner from '../images/iteration-1-images/home-banner.png';
import logo from '../images/iteration-1-images/logo.svg';

import {Button} from 'reactstrap';

export default function Home() {

    const history = useHistory();

    return (
        <main className='min-h-screen bg-red-600 relative overflow-hidden'>
            <header className='text-center py-6'>
                <img
                    src={logo}
                    alt='Teknolojik Yemekler'
                    className='text-center py-6'
                />
            </header>

            <section className='flex flex-col items-center text-center px-4'>
                <h1 className='text-white text-4xl md:text-5xl font-light tracking-wide mb-6'>
                    KOD ACIKTIRIR <br />
                    <span className='font-bold'>PİZZA, DOYURUR</span>
                </h1>

                <Button 
                    onClick={() => history.push("/order")}
                    className='bg-yellow-400 hover:bg-yellow-500 transition text-block font-bold px-10 py-3 rounded-full mb-10'
                >
                    ACIKTIM
                </Button>

                <img 
                    src={homeBanner}
                    alt='Pizza Home Banner'
                    className='max-w-full md:max-w-4xl'
                />
            </section>
        </main>
    );
}