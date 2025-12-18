import foodBanner1 from '../images/iteration-2-images/pictures/food-1.png';
import foodBanner2 from '../images/iteration-2-images/pictures/food-2.png';
import foodBanner3 from '../images/iteration-2-images/pictures/food-3.png';

const menuItems = [
    {id: 1, img: foodBanner1, name: "Terminal Pizza", rating: 4.9, stock: (200), price: "60₺"},
    {id: 2, img: foodBanner2, name: "Position Absolute Aci Pizza", rating: 4.9, stock: (928), price: "85₺"},
    {id: 3, img: foodBanner3, name: "useEffect Tavuklu Burger", rating: 4.9, stock: (462), price: "75₺"},
];

export default function MenuGrid() {
    return (
        <section className='max-w-7xl mx-auto px-4 md:px-6 mb-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {menuItems.map((item) => (
                    <div 
                        key={item.id} 
                        className='bg-white rounded-2xl p-6 shadow-md font-barlow'
                    >
                        <img 
                            src={item.img} 
                            alt={item.name}
                            className='w-full h-40 md:h-48 object-contain mb-6' 
                        />

                        <h4 className='font-semibold text-lg mb-4'>{item.name}</h4>

                        <div className='grid grid-cols-3 items-center text-xs font-semibold'>
                            
                            <span className='text-gray-500 text-left'>{item.rating}</span>

                            <span className='text-gray-500 text-center'>({item.stock})</span>

                            <span className='text-[#292929] text-right text-sm'>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}