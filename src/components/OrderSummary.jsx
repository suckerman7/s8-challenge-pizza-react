export default function OrderSummary({ secimlerToplam, toplamFiyat, disabled, hideButton, whiteTotal }) {
  return (
    <div className="w-full sm:w-72 mx-auto sm:mx-0 bg-[#FAF7F2] rounded-xl p-6 shadow-sm space-y-4">
      <h4 className="font-semibold text-lg text-gray-800">Sipariş Toplamı</h4>

      <div className="flex justify-between text-gray-600">
        <span>Seçimler</span>
        <span data-cy='ingredient-price'>{secimlerToplam.toFixed(2)}₺</span>
      </div>

      <div className={`border-t pt-4 flex justify-between items-center ${whiteTotal ? 'text-white' : 'text-red-600'}`}>
        <span className='font-semibold text-gray-700'>Toplam</span>
        <span data-cy='total-price' className='text-xl font-bold text-red-600'>{toplamFiyat.toFixed(2)}₺</span>
      </div>

        {!hideButton && (
        <button
          data-cy='submit-order'
          type="submit"
          disabled={disabled}
          className={`w-full mt-2 py-3 rounded-lg font-bold tracking-wide transition
          ${
            disabled
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-yellow-400 hover:bg-yellow-500"
          }`}
      >
        SİPARİŞ VER
      </button>
        )}
    </div>
  );
}