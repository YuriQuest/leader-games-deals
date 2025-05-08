import React, { useState } from 'react';
import { DataCards } from '../components/DataTable/DataCards';
import { DataTable } from '../components/DataTable/DataTable';
import { FilterControls } from '../components/FilterControls/FilterControls';
import { useGames } from '../hooks/useGames';
import { GameModal } from '../components/GameModal/GameModal';

export const Home = () => {
  const [filters, setFilters] = useState({
    storeID: '',
    lowerPrice: undefined,
    upperPrice: undefined,
    minDiscount: undefined,
    sortBy: 'savings',
    title: '',
  });

  const [selectedGame, setSelectedGame] = useState(null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const { games, loading } = useGames(filters);

  return (
    <div className='flex flex-col px-6 py-8 mx-auto'>
      <div className='flex justify-between'>
        <h1 className="flex justify-center mb-4 text-3xl font-bold">Leader Games Deal</h1>

        <button
          onClick={() => setViewMode(viewMode === 'cards' ? 'table' : 'cards')}
          className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Visualizar como: {viewMode === 'cards' ? 'Tabela' : 'Cards'}
        </button>
      </div>

      <FilterControls filters={filters} onChange={setFilters} />

      {loading ? (
        <p>Carregando jogos...</p>
      ) : viewMode === 'cards' ? (
        <DataCards games={games} onSelect={setSelectedGame} />
      ) : (
        <DataTable games={games} onSelect={setSelectedGame} />
      )}

      {/* Modal */}
      {selectedGame && (
        <GameModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
};
