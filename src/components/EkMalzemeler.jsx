const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Salam",
  "Ananas",
  "Kabak",
];

export default function EkMalzemeler({ selected, onChange, error }) {
  return (
    <div className={error ? "border border-red-500 p-3 rounded" : ""}>
      <h3 className="font-semibold mb-2">
        Ek Malzemeler <span className="text-red-500">*</span>
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
      </p>

      <div className="grid grid-flow-col grid-rows-5 gap-x-10 gap-y-3">
        {malzemeler.map((malzeme) => (
        <label
          data-cy={`ingredient-${malzeme}`}
          key={malzeme}
          className= {`flex items-center gap-3 text-sm cursor-pointer
            ${selected.includes(malzeme) ? "font-semibold" : ""}`}
        >
          <span 
          className= {`w-9 h-9 flex items-center justify-center rounded-md border
            ${
              selected.includes(malzeme)
                ? "bg-yellow-400 border-yellow-600"
                : "border-gray-300"
          }`}
          >
            {selected.includes(malzeme) && "✓"}
          </span>
        <input
          className="w-5 h-5 accent-red-600 hidden"
          type="checkbox"
          checked={selected.includes(malzeme)}
          onChange={() => onChange(malzeme)}
        />
        {malzeme}
      </label>
      ))}
    </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}