export default function OrderHero() {
    return (
        <section className='relative -mt-6 bg-white rounded-t-3xl'>
            <div className='max-w-4xl mx-auto px-4 py-6'>

                <h1 className="text-4xl font-bold">
                    Position Absolute Acı Pizza
                </h1>

                <div className="flex items-center justify-between">
      
                    <span className="text-3xl font-bold text-gray-800">
                        85.50₺
                    </span>

                
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="font-semibold">4.9</span>
                        <span>(200)</span>
                    </div>
                </div>

                <p className='text-gray-600 leading-relaxed'>
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