import React from 'react';
import type { GameDeal } from '../../types/game';
import { useStores } from '../../hooks/useStores';

interface DataCardsProps {
  games: GameDeal[];
  onSelect: (game: GameDeal) => void;
}

export const DataCards: React.FC<DataCardsProps> = ({ games, onSelect }) => {
  const { stores, loading } = useStores();

  if (loading) return <p className="text-center text-gray-500">Carregando lojas...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {games.map((game) => (
        <div
          key={game.dealID}
          onClick={() => onSelect(game)}
          className="bg-white border rounded-lg shadow hover:shadow-md transition cursor-pointer p-4 flex flex-col items-center text-center"
        >
          <img src={game.thumb} alt={game.title} className="w-full h-auto rounded mb-2" />
          <h3 className="text-md font-semibold mb-1">{game.title}</h3>
          <p className="text-sm text-gray-700 mb-1">
            Preço: <span className="font-medium text-green-600">R$ {Number(game.salePrice).toFixed(2)}</span>
          </p>
          <p className="text-sm text-red-500 mb-2">Desconto: {Number(game.savings).toFixed(0)}%</p>

          {stores[game.storeID]?.icon ? (
            <img
              src={stores[game.storeID].icon}
              alt={stores[game.storeID].storeName}
              className="w-6 h-6 mt-auto"
              title={stores[game.storeID].storeName}
            />
          ) : (
            <span className="text-xs text-gray-500 mt-auto">{stores[game.storeID]?.storeName || 'Loja desconhecida'}</span>
          )}
        </div>
      ))}
    </div>
  );
};
