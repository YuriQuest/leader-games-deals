import React from 'react';
import { useStores } from '../../hooks/useStores';

interface FilterControlsProps {
  filters: any;
  onChange: (filters: any) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({ filters, onChange }) => {
  const { stores, loading } = useStores();

  if (loading) return <p>Carregando lojas...</p>;

  return (
    <div>
      {/* Filtro por loja */}
      <select
        value={filters.storeID}
        onChange={e => onChange({ ...filters, storeID: e.target.value })}
      >
        <option value="">Todas as lojas</option>
        {stores.map((store) => (
          <option key={store.storeID} value={store.storeID}>
            {store.storeName}
          </option>
        ))}
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
