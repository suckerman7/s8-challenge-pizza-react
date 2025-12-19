export default function HamurKalinligi({ value, onChange, error }) {
  return (
    <div>
      <label className="font-semibold mb-2 block">
        Hamur Seç <span className="text-red-500">*</span>
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-cy='dough-size'
        className="w-56 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center">
          
        <option value="">-Hamur Kalınlığı Seç-</option>
        <option value="İnce">İnce Hamur</option>
        <option value="Orta">Klasik Hamur</option>
        <option value="Kalın">Kalın Hamur</option>
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}