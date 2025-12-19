export default function PizzaBoyutu({ value, onChange, error }) {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <div
      className={error ? "border border-red-500 p-4 rounded-lg" : ""}
    >
    <h3 className="font-semibold mb-4">
      Boyut Seç <span className="text-red-500">*</span>
    </h3>

      <div className="flex gap-4">
        {sizes.map((boyut) => (
          <label
              data-cy={`size-${boyut}`}
              key={boyut} 
              className={`w-16 h-16 flex items-center justify-center rounded-full cursor-pointer font-semibold border transition
                ${
                  value === boyut
                    ? "bg-yellow-400 border-yellow-600"
                    : "border-gray-300 hover:border-yellow-400"
            }`}
          >
            <input
              type="radio"
              className="w-5 h-5 accent-red-600 hidden"
              checked={value === boyut}
              onChange={() => onChange(boyut)}
            />
            {boyut[0]}
          </label>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}