import pizzaBanner from '../images/iteration-2-images/pictures/food-2.png';

export default function OrderHero() {
    return (
        <section className='relative bg-white rounded-t-3xl mt-10 pt-10'>
            <div className='max-w-3xl mx-auto px-4'>

                <div className='flex justify-center mb-10'>
                    <img
                        src={pizzaBanner} 
                        alt='Absolute Position Acı Pizza'
                        className="mx-auto w-56 sm:w-72 md:w-96 mb-6"
                    />
                </div>

                <nav className="text-sm text-[#292929]/70 mb-4">
                    <span>Anasayfa</span>
                    <span className="mx-2">-</span>
                    <span>Seçenekler</span>
                    <span className="mx-2">-</span>
                    <span className="font-semibold text-red-600">Sipariş Oluştur</span>
                </nav>

                <br />

                <h1 className="text-4xl font-bold mb-4">
                    Position Absolute Acı Pizza
                </h1>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                        85.50₺
                    </span>

                
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="font-semibold">4.9</span>
                        <span className='flex items-center gap-1 text-gray-400 text-xs'>(200)</span>
                    </div>
                </div>

                <br />

                <p className='text-gray-600 leading-relaxed max-w-xl'>
                    Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana 
                    göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha
                    sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                    genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan 
                    kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>
        </section>
    );
}