import footerLogo from '../images/iteration-2-images/footer/logo-footer.svg';
import footerIcon1 from '../images/iteration-2-images/footer/icons/icon-1.png';
import footerIcon2 from '../images/iteration-2-images/footer/icons/icon-2.png';
import footerIcon3 from '../images/iteration-2-images/footer/icons/icon-3.png';
import {FaTwitter} from 'react-icons/fa';

import instaIcon1 from '../images/iteration-2-images/footer/insta/li-0.png';
import instaIcon2 from '../images/iteration-2-images/footer/insta/li-1.png';
import instaIcon3 from '../images/iteration-2-images/footer/insta/li-2.png';
import instaIcon4 from '../images/iteration-2-images/footer/insta/li-3.png';
import instaIcon5 from '../images/iteration-2-images/footer/insta/li-4.png';
import instaIcon6 from '../images/iteration-2-images/footer/insta/li-5.png';

const instaImages = [instaIcon1, instaIcon2, instaIcon3, instaIcon4, instaIcon5, instaIcon6]; 

export default function Footer() {
    
    return (
        <>
            <footer className='w-full bg-[#292929] text-white py-12 flex justify-center font-barlow'>
                <div className='flex flex-col md:flex-row justify-center gap-12 max-w-6xl w-full px-8'>

                    <div className='flex-1 min-w-62.5 space-y-4 text-center md:text-left'>
                        <img src={footerLogo} alt='Footer Logo' className='mb-5 mx-auto md:mx-0' />
                        <p className='flex items-center gap-2 justify-center md:justify-start'>
                            <img src={footerIcon1} alt='' /> 34 Londonberry Road, İstanbul Türkiye
                        </p>
                        <p className='flex items-center gap-2 justify-center md:justify-start'>
                            <img src={footerIcon2} alt='' /> aciktim@teknolojikyemekler.com
                        </p>
                        <p className='flex items-center gap-2 justify-center md:justify-start'>
                            <img src={footerIcon3} alt='' /> +90 216 123 45 67
                        </p>
                    </div>

                    <div className='flex-1 min-w-62.5 space-y-2 text-center md:text-left'>
                        <h3 className='text-2xl font-medium mb-5'>Hot Menu</h3>
                        {[
                            "Terminal Pizza",
                            "5 Kişilik Hackathon Pizza",
                            "useEffect Tavuklu Pizza",
                            "Beyaz Console Frosty",
                            "Testler Geçti Mutlu Burger",
                            "Position Absolute Acı Burger",
                        ].map((menuItem, idx) => (
                            <p key={idx}>{menuItem}</p>
                        ))}
                    </div>

                    <div className='flex-1 min-w-62.5 space-y-2 text-center md:text-left'>
                        <h3 className='text-2xl font-medium mb-5'>Instagram</h3>
                        <div className='grid grid-cols-3 grid-rows-2 gap-2 justify-items-center'>
                            {instaImages.map((imgSrc, idx) => (
                                <img 
                                    key={idx}
                                    src={imgSrc}
                                    alt={`Instagram ${idx}`}
                                    className='w-16 h-16 rounded-md object-cover'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            <div className='w-full bg-[#292929] border-t border-[#FAF7F2] flex justify-center text-[#FAF7F2] font-barlow'>
                <div className="flex justify-between items-center w-full max-w-6xl px-8 py-4">
                    <span>@ 2023 Teknolojik Yemekler.</span>
                    <FaTwitter className='text-[#FAF7F2] text-xl'></FaTwitter>
                </div>
            </div>
        </>
    );
}
