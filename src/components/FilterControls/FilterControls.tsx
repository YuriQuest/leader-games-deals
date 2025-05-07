// components/FilterControls/FilterControls.tsx
export const FilterControls = ({ filters, onChange }: any) => {
  return (
    <div>
      {/* Store ID */}
      <select
        value={filters.storeID}
        onChange={e => onChange({ ...filters, storeID: e.target.value })}
      >
        <option value="">Todas as lojas</option>
        <option value="1">Steam</option>
        <option value="2">GamersGate</option>
        {/* Adicione mais opções conforme necessário */}
      </select>

      {/* Faixa de preço */}
      <input
        type="number"
        placeholder="Preço mínimo"
        value={filters.lowerPrice}
        onChange={e => onChange({ ...filters, lowerPrice: Number(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Preço máximo"
        value={filters.upperPrice}
        onChange={e => onChange({ ...filters, upperPrice: Number(e.target.value) })}
      />

      {/* Desconto mínimo */}
      <input
        type="number"
        placeholder="Desconto mínimo (%)"
        value={filters.minDiscount}
        onChange={e => onChange({ ...filters, minDiscount: Number(e.target.value) })}
      />
    </div>
  );
};
