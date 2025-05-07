// components/DataTable/DataTable.tsx
import React from 'react';
import type { GameDeal } from '../../types/game';

interface Props {
  games: GameDeal[];
  onSelect: (game: GameDeal) => void;
}

export const DataTable: React.FC<Props> = ({ games, onSelect }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Jogo</th>
          <th>Preço Atual</th>
          <th>Preço Original</th>
          <th>Desconto</th>
          <th>Loja</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game => (
          <tr key={game.dealID} onClick={() => onSelect(game)}>
            <td>{game.title}</td>
            <td>${game.salePrice}</td>
            <td>${game.normalPrice}</td>
            <td>{Math.round(Number(game.savings))}%</td>
            <td>{game.storeID}</td>
            <td>{game.dealRating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
