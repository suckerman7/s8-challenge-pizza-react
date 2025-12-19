export default function CustomerName({ value, onChange, error, onBlur }) {
  return (
    <div>
      <label className="font-semibold mb-2 block">
        Adınız <span className="text-red-500">*</span>
      </label>

      <input
        data-cy='customer-name'
        onBlur={onBlur}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-2 rounded-md border
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}