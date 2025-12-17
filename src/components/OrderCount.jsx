export default function OrderCount({ siparisSayisi, setSiparisSayisi }) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setSiparisSayisi(Math.max(1, siparisSayisi - 1))}
        className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 text-xl font-bold rounded"
      >
        -
      </button>

       <span className="text-xl font-semibold">{siparisSayisi}</span>

      <button
        type="button"
        onClick={() => setSiparisSayisi(siparisSayisi + 1)}
        className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 text-xl font-bold rounded">
        +
      </button>
    </div>
  );
}