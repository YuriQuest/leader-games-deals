// pages/Home.tsx
import React, { useState } from 'react';
import { useGames } from '../hooks/useGames';
import { DataTable } from '../components/DataTable/DataTable';
import { FilterControls } from '../components/FilterControls/FilterControls';
import { GameModal } from '../components/GameModal/GameModal';
import type { GameDeal } from '../types/game';

export const Home: React.FC = () => {
  const [filters, setFilters] = useState({});
  const { games, loading } = useGames(filters);
  const [selectedGame, setSelectedGame] = useState<GameDeal | null>(null);

  return (
    <div>
      <FilterControls filters={filters} onChange={setFilters} />
      {loading ? <p>Carregando...</p> : <DataTable games={games} onSelect={setSelectedGame} />}
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
};
