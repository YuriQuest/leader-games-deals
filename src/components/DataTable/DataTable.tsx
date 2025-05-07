import React from 'react';
import type { GameDeal } from '../../types/game';
import { useStores } from '../../hooks/useStores';

interface DataTableProps {
  games: GameDeal[];
  onSelect: (game: GameDeal) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ games, onSelect }) => {
  const { stores, loading } = useStores();

  if (loading) return <p className="text-center text-gray-500">Carregando lojas...</p>;

  if (!stores || stores.length === 0) return <p className="text-center text-red-500">Erro ao carregar as lojas.</p>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Jogo</th>
            <th className="px-4 py-2 border">Preço</th>
            <th className="px-4 py-2 border">Valor original</th>
            <th className="px-4 py-2 border">Desconto</th>
            <th className="px-4 py-2 border">Loja</th>
            <th className="px-4 py-2 border">Nota</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => {
            const store = stores.find(store => store.storeID === game.storeID);

            return (
              <tr
                key={game.dealID}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelect(game)}
              >
                <td className="px-4 py-2 border flex items-center gap-2">
                  <img src={game.thumb} alt={game.title} className="w-12 h-auto rounded" />
                  <span className="text-sm font-medium">{game.title}</span>
                </td>
                <td className="px-4 py-2 border text-green-600 font-semibold">R$ {Number(game.salePrice).toFixed(2)}</td>
                <td className="px-4 py-2 border text-gray-500">R$ {Number(game.normalPrice).toFixed(2)}</td>
                <td className="px-4 py-2 border text-red-500">{Number(game.savings).toFixed(0)}%</td>
                <td className="px-4 py-2 border">
                  {store ? (
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://www.cheapshark.com${store.images.logo}`}
                        alt={`Ícone da loja ${store.storeName}`}
                        className="w-6 h-6"
                      />
                      <span className="text-sm">{store.storeName}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">Loja não encontrada</span>
                  )}
                </td>
                <td className="px-4 py-2 border text-center">{game.dealRating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
