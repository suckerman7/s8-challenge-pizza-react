export default function PizzaBoyutu({ value, onChange, error }) {
  const sizes = ["Küçük", "Orta", "Büyük"];

  return (
    <div
      className={error ? "border border-red-500 p-3 rounded" : ""}
    >
    <h3 className="font-semibold mb-2">
      Boyut Seç <span className="text-red-500">*</span>
    </h3>

      <div className="space-y-2">
        {["Küçük", "Orta", "Büyük"].map((boyut) => (
          <label key={boyut} className="flex items-center gap-2">
            <input
              type="radio"
              data-cy={`size-${boyut}`}
              checked={value === boyut}
              onChange={() => onChange(boyut)}
              className="accent-red-600"
            />
            {boyut}
          </label>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}