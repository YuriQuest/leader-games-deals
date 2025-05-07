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
    <div style={{ display: 'flex', gap: '12px' }}>

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

      {/* Buscar por Preço mínimo */}
      <input
        type="number"
        placeholder="Valor mínimo"
        value={filters.lowerPrice ?? ''}
        onChange={(e) =>
          onChange({
            ...filters,
            lowerPrice: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />

      {/* Buscar por Preço máximo */}
      <input
        type="number"
        placeholder="Valor máximo"
        value={filters.upperPrice ?? ''}
        onChange={(e) =>
          onChange({
            ...filters,
            upperPrice: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />
        
        {/* Ordenar por */}
          <select
            value={filters.sortBy || 'Savings'}
            onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
          >
            <option value="price">Preço</option>
            <option value="savings">Desconto</option>
            <option value="dealRating">Nota do negócio</option>
          </select>

      {/* Buscar por Desconto mínimo */}
        <input
          type="number"
          placeholder="Desconto mínimo (%)"
          value={filters.minDiscount}
          onChange={e => onChange({ ...filters, minDiscount: Number(e.target.value) })}
        />

       {/* Buscar por título */}
        <input
        type="text"
        placeholder="Buscar por título"
        value={filters.title || ''}
        onChange={(e) => onChange({ ...filters, title: e.target.value })}
      />
    </div>
  );
};
