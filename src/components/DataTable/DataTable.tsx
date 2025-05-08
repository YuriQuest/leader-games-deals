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
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-slate-400">
          <tr>
            <th className="px-4 py-2">Jogo</th>
            <th className="px-4 py-2">Preço</th>
            <th className="px-4 py-2">Valor original</th>
            <th className="px-4 py-2">Desconto</th>
            <th className="px-4 py-2">Loja</th>
            <th className="px-4 py-2">Nota</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => {
            const store = stores.find(store => store.storeID === game.storeID);

            return (
              <tr
                key={game.dealID}
                className="shadow cursor-pointer hover:bg-gray-50 bg-slate-300"
                onClick={() => onSelect(game)}
              >
                <td className="flex items-center gap-2 px-4 py-2">
                  <img src={game.thumb} alt={game.title} className="object-cover w-24 h-10 rounded" />
                  <span className="text-sm font-medium">{game.title}</span>
                </td>
                <td className="px-4 py-2 font-semibold text-green-600">R$ {Number(game.salePrice).toFixed(2)}</td>
                <td className="px-4 py-2 text-gray-500 ">R$ {Number(game.normalPrice).toFixed(2)}</td>
                <td className="px-4 py-2 text-red-500 ">{Number(game.savings).toFixed(0)}%</td>
                <td className="px-4 py-2 ">
                  {store ? (
                    <div className="flex items-center gap-2 ">
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
                <td className="px-4 py-2 text-center">{game.dealRating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
