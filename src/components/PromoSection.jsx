import promoImage1 from '../images/iteration-2-images/cta/kart-1.png';
import promoImage2 from '../images/iteration-2-images/cta/kart-2.png';
import promoImage3 from '../images/iteration-2-images/cta/kart-3.png';

import { Link } from "react-router-dom";

export default function PromoSection() {
    return (
        <section className='w-full mt-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className="flex flex-col md:flex-row gap-4 md:h-130">
                    <div 
                        className='relative md:w-1/2 w-full bg-red-600 text-[#FAF7F2] rounded-2xl p-10 overflow-hidden' 
                        style={{
                            backgroundImage: `url(${promoImage1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            className: "absolute md:right-[-120px] right-[-60px] top-1/2 -translate-y-1/2 h-[360px] md:h-[460px]"
                        }}
                    >
                        <div>
                            <h2 className='font-quattrocento text-6xl leading-tight'>Özel <br /> Lezzetus</h2>
                            <p className='mt-4'>Position Absolute Acı Pizza</p>
                            
                        </div>
                        <br />
                        <Link to='/order' >
                            <button className='z-10 bg-[#FAF7F2] text-red-600 rounded-full px-8 py-4 text-lg w-fit font-semibold transition-all duration-300 hover:bg-[#c4c2be] hover:shadow-xl hover:-translate-y-1 active:scale-95'>SİPARİŞ VER</button>
                        </Link>
                    </div>

                    <div className='md:w-1/2 w-full flex flex-col gap-6'>
                        <div 
                            className='flex-1 rounded-xl p-6 text-beige' 
                            style={{
                                backgroundImage: `url(${promoImage2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >

                            <h2 className='font-barlow text-2xl text-[#FAF7F2] font-bold mb-4'>Hackathlon <br /> Burger Menü</h2>

                            <Link to='/order' >
                                <button className='bg-[#FAF7F2] text-red-600 rounded-full px-5 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[#c4c2be] hover:shadow-xl hover:-translate-y-1 active:scale-95'>SİPARİŞ VER</button>
                            </Link>
                        </div>
                        <div 
                            className='flex-1 rounded-xl p-6' 
                            style={{
                                backgroundImage: `url(${promoImage3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >

                            <h2 className='font-barlow text-2xl font-bold mb-4'>
                                <span className='text-red-600'>Çooook</span> hızlı<br />
                                npm gibi kurye
                            </h2>

                            <Link to='/order' >
                                <button className='bg-[#FAF7F2] text-red-600 rounded-full px-5 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[#c4c2be] hover:shadow-xl hover:-translate-y-1 active:scale-95'>SİPARİŞ VER</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}