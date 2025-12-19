
import navIcon1 from '../images/iteration-2-images/icons/1.svg';
import navIcon2 from '../images/iteration-2-images/icons/2.svg';
import navIcon3 from '../images/iteration-2-images/icons/3.svg';
import navIcon4 from '../images/iteration-2-images/icons/4.svg';
import navIcon5 from '../images/iteration-2-images/icons/5.svg';
import navIcon6 from '../images/iteration-2-images/icons/6.svg';

const navItems = [
    {icon: navIcon1, label: "YENİ! Kore"},
    {icon: navIcon2, label: "Pizza"},
    {icon: navIcon3, label: "Burger"},
    {icon: navIcon4, label: "Kızartmalar"},
    {icon: navIcon5, label: "Fast Food"},
    {icon: navIcon6, label: "Gazlı İçecek"},
]

export default function TopNav() {
    return (
        <nav className='w-full bg-white border-b border-gray-200'>
            <div className='max-w-6xl mx-auto flex flex-wrap justify-between gap-y-6 gap-x-4 items-center px-6 py-5'>
                {navItems.map((item, idx) => (
                    <div key={idx} className='flex items-center gap-3 font-semibold text-sm text-darkGray'>
                        <img src={item.icon} alt={item.label} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </nav>
    );
}