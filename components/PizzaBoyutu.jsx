import {FormGroup, Label, Input} from 'reactstrap';

export default function PizzaBoyutu({value, onChange}) {
    return (
        <FormGroup className={error ? 'border border-red-500 rounded p-2' : ''}>
            <Label>Boyut Seç <span className='text-red-500'>*</span></Label>

            {['small', 'normal', 'large'].map((boyut) => (
                <Label key={boyut} className='block'>
                    <Input 
                        type='radio'
                        name='pizza-boyutu'
                        value= {boyut}
                        checked= {value === boyut}
                        onChange={(event) => onChange(event.target.value)}
                    />
                    {boyut === 'small' && ' Küçük'}
                    {boyut === 'normal' && ' Orta'}
                    {boyut === 'large' && ' Büyük'}
                </Label>
            ))}

            {error && (
                <p className='text-red-500 text-sm mt-1'>
                    {error}
                </p>
            )}
        </FormGroup>
    );
}