// components/GameModal/GameModal.tsx
import React from 'react';
import type { GameDeal } from '../../types/game';

interface Props {
  game: GameDeal | null;
  onClose: () => void;
}

export const GameModal: React.FC<Props> = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="modal">
      <button onClick={onClose}>Fechar</button>
      <h2>{game.title}</h2>
      <img src={game.thumb} alt={game.title} />
      <p>Preço Atual: ${game.salePrice}</p>
      <p>Preço Original: ${game.normalPrice}</p>
      <p>Nota: {game.dealRating}</p>
      <a
        href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Comprar Agora
      </a>
    </div>
  );
};
