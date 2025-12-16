export default function OrderHero() {
    return (
        <section className='relative -mt-6 bg-white rounded-t-3xl'>
            <div className='max-w-4xl mx-auto px-4 py-6'>

                <h2 className='text-2xl font-bold mb-2'>Position Absolute Aci Pizza</h2>

                <div className='flex items-center gap-6 text-sm mb-4'>
                    <span className='font-semibold text-lg'>85.50₺</span>

                    <div className='flex items-center gap-2 text-gray-500'>
                        <span>4.9</span>
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