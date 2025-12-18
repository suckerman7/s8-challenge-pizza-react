import filterIcon1 from '../images/iteration-2-images/icons/1.svg';
import filterIcon2 from '../images/iteration-2-images/icons/2.svg';
import filterIcon3 from '../images/iteration-2-images/icons/3.svg';
import filterIcon4 from '../images/iteration-2-images/icons/4.svg';
import filterIcon5 from '../images/iteration-2-images/icons/5.svg';
import filterIcon6 from '../images/iteration-2-images/icons/6.svg';

const filterItems = [
    {icon: filterIcon1, label: "Ramen"},
    {icon: filterIcon2, label: "Pizza", active: true},
    {icon: filterIcon3, label: "Burger"},
    {icon: filterIcon4, label: "French Fries"},
    {icon: filterIcon5, label: "Fast Food"},
    {icon: filterIcon6, label: "Soft Drinks"},
]

export default function FilterButtons() {
    return (
        <div className='flex justify-center gap-4 flex-wrap mb-12'>
            {filterItems.map((filter) => (
                <button 
                    key={filter.label} 
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border text-sm font-barlow transition
                        ${
                            filter.active
                                ? 'bg-[#292929] text-white'
                                : 'bg-white text-[#292929] hover:bg-[#292929] hover:text-white'
                        }`}
                >
                    <img src={filter.icon} alt={filter.label} className='w-5 h-5' />
                    <span>{filter.label}</span>
                </button>
            ))}
        </div>
    );
}