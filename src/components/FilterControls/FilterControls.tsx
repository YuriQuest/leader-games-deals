// components/FilterControls/FilterControls.tsx
import React from 'react';

interface Props {
  filters: any;
  onChange: (newFilters: any) => void;
}

export const FilterControls: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <div className="filters">
      <input
        placeholder="Buscar jogo"
        value={filters.title || ''}
        onChange={e => onChange({ ...filters, title: e.target.value })}
      />
      <select
        value={filters.sortBy}
        onChange={e => onChange({ ...filters, sortBy: e.target.value })}
      >
        <option value="Price">Preço</option>
        <option value="Savings">Desconto</option>
        <option value="Deal Rating">Nota</option>
      </select>
      {/* Adicionar mais controles aqui */}
    </div>
  );
};
