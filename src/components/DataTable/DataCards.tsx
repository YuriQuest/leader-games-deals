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

  if (!stores || stores.length === 0) return <p className="text-center text-red-500">Erro ao carregar as lojas.</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games.map((game) => {
        const store = stores.find(store => store.storeID === game.storeID);

        return (
          <div
            key={game.dealID}
            onClick={() => onSelect(game)}
            className="flex flex-col items-center p-4 text-center transition rounded-lg shadow cursor-pointer bg-slate-300 hover:shadow-md"
          >
            <img src={game.thumb} alt={game.title} className="object-cover h-40 mb-2 rounded w-50" />
            <h3 className="mb-1 font-semibold text-md">{game.title}</h3>
            <p className='flex justify-between gap-4'>
              <p className="mb-1 text-sm text-gray-700">
                Preço: <span className="font-medium text-green-600">R$ {Number(game.salePrice).toFixed(2)}</span>
              </p>
              <p className="mb-2 text-sm text-red-500">Desconto: {Number(game.savings).toFixed(0)}%</p>
            </p>
            
            <p className="mb-1 text-sm text-gray-500">
              Valor original: R$ {Number(game.normalPrice).toFixed(2)}
            </p>

            {store ? (
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={`https://www.cheapshark.com${store.images.logo}`}
                  alt={`Ícone da loja ${store.storeName}`}
                  className="w-6 h-6"
                />
                <span className="text-sm">{store.storeName}</span>
              </div>
            ) : (
              <span className="mt-2 text-sm text-gray-400">Loja não encontrada</span>
            )}

            <p className="mt-2 text-sm text-blue-600">Nota: {game.dealRating}</p>
          </div>
        );
      })}
    </div>
  );
};
