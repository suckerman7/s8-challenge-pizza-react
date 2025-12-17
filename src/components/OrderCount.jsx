export default function OrderCount({siparisSayisi, setSiparisSayisi}) {
    return (
        <div className="flex-items-center rounded-lg overflow-hidden-border">
            <Button 
                className='bg-yellow-400 px-4 py-2 font-bold' 
                onClick={() => setSiparisSayisi(Math.max(1, siparisSayisi - 1))} 
                type='button'>
                -
            </Button>
        
             <span className="px-4 py-2 font-semibold">{siparisSayisi}</span>
        
            <Button 
                className='bg-yellow-400 px-4 py-2 font-bold' 
                onClick={() => setSiparisSayisi(1, siparisSayisi + 1)} 
                type='button'>
                +
            </Button> 
        </div>
    );
}