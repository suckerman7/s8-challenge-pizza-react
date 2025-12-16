import {
    FormGroup, 
    Label, 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from 'reactstrap';
import {useState} from 'react';

const hamurKalinliklari = [
        {value: 'thin', label: 'İnce Hamur'},
        {value: 'normal', label: 'Klasik Hamur'},
        {value: 'thick', label: 'Kalın Hamur'},
];

export default function HamurKalinligi({value, onChange}) {
    const [open, setOpen] = useState(false);

    return (
        <FormGroup>
            <Label>
                Hamur Seç <span className='text-red-500'>*</span>
            </Label>

            <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
                <DropdownToggle 
                    caret 
                    className={`w-full-text-left ${error ? 'border border-red-500' : ''}`}
                >
                    {value ? hamurKalinliklari.find((h) => h.value === value).label
                    : 'Hamur Kalınlığı'}
                </DropdownToggle>

                <DropdownMenu className='w-full'>
                    {hamurKalinliklari.map((kalinlik) => (
                        <DropdownItem
                            key={kalinlik.value}
                            onClick={() => {
                                onChange(kalinlik.value)
                                setOpen(false);
                            }}
                        >
                            {kalinlik.label} 
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>

            {error && (
                <p className='text-red-500 text-sm mt-1'>
                    {error}
                </p>
            )}
        </FormGroup>
    );
}