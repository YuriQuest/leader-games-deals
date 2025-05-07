import React from 'react';
import type { GameDeal } from '../../types/game';
import { useStores } from '../../hooks/useStores';

interface DataTableProps {
  games: GameDeal[];
  onSelect: (game: GameDeal) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ games, onSelect }) => {
  const { stores, loading } = useStores();  // Usando o hook que busca os ícones das lojas

  if (loading) {
    return <p>Carregando lojas...</p>;  // Enquanto carrega, exibe "Carregando lojas..."
  }

  if (!stores || Object.keys(stores).length === 0) {
    return <p>Erro ao carregar as lojas.</p>;  // Exibe erro se stores estiver vazio ou indefinido
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Jogo</th>
          <th>Preço</th>
          <th>Valor original</th>
          <th>Desconto</th>
          <th>Loja</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => {
          // Encontrar a loja correspondente usando o storeID do jogo
          const store = stores.find(store => store.storeID === game.storeID);

          return (
            <tr key={game.dealID} onClick={() => onSelect(game)}>
              <td>
                <img src={game.thumb} alt={game.title} style={{ width: '50px', height: 'auto' }} />
                {game.title}
              </td>
              <td>${game.salePrice}</td>
              <td>${game.normalPrice}</td>
              <td>{game.savings}%</td>
              <td>
                {store ? (
                  <div>
                    <img
                      src={`https://www.cheapshark.com${store.images.logo}`}  // Exibindo o ícone da loja
                      alt={`Ícone da loja ${store.storeName}`}
                      style={{ width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '5px' }}
                    />
                    {store.storeName}
                  </div>
                ) : (
                  <span>Loja não encontrada</span>
                )}
              </td>
              <td>{game.dealRating}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
