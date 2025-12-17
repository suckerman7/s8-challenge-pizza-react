import {Label, Input} from 'reactstrap';

export default function CustomerName({value, onChange, error}) {
    return (
        <div className='mb-6'>
            <Label className='block font-semibold mb-2'>
                İsim <span className='text-red-500'>*</span>
            </Label>

            <Input 
                type='text'
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Adınızı giriniz"
                className={`w*full border rounded-md p-3 focus:outline-none
                    ${
                    error ? "border-red-500"
                    : "border-gray-300 focus:border-yellow-400"
                }`}
            />

            {error && (
                <p className='text-red-500 text-sm mt-1'>
                    {error}
                </p>
            )}
        </div>
    );
}