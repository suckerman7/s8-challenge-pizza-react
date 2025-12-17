export default function SiparisNotu({ value, onChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Sipariş Notu</h3>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        className="w-full border rounded-md px-3 py-2 resize-none"
        rows={3}
      />
    </div>
  );
}