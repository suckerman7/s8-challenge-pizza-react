import {FormGroup, Label, Input} from 'reactstrap';

const ekMalzemeListesi = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        'Sucuk',
        'Jalepeno',
        'Sarımsak',
        'Biber',
        'Salam',
        'Ananas',
        'Kabak'
];

export default function EkMalzemeler({selected, onChange}) {
    return (
        <FormGroup
            className={error ? 'border border-red-500 rounded p-2' : ''}
        >
            <Label>Ek Malzemeler</Label>
            <p className='text-sm text-gray-500'>
                En Fazla 10 malzeme seçebilirsiniz. (5₺)
            </p>

            <div className='grid grid-cols-2 gap-2 mt-2'>
                {ekMalzemeListesi.map((ekMalzeme) => {
                    const checked = selected.includes(ekMalzeme);
                    const disabled = selected.length >= 10 & !checked;

                    return (
                        <Label key={ekMalzeme} className='flex items-center gap-2'>
                            <Input 
                                type='checkbox'
                                checked={checked}
                                disabled={disabled}
                                onChange={() => onChange(ekMalzeme)}
                            />
                            {ekMalzeme}
                        </Label>  
                    );
                })}
            </div>

            {error && (
                <p className='text-red-500 text-sm mt-1'>
                    {error}
                </p>
            )}
        </FormGroup>
    );
}