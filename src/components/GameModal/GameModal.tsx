import React from 'react';
import type { GameDeal } from '../../types/game';

interface GameModalProps {
  game: GameDeal;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <img src={game.thumb} alt={game.title} className="w-full h-auto rounded mb-4" />
        <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
        <p className="mb-2"><strong>Preço:</strong> R$ {Number(game.salePrice).toFixed(2)}</p>
        <p className="mb-2"><strong>Preço original:</strong> R$ {Number(game.normalPrice).toFixed(2)}</p>
        <p className="mb-2"><strong>Desconto:</strong> {Number(game.savings).toFixed(0)}%</p>
        <a
          href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Ver Oferta
        </a>
      </div>
    </div>
  );
};
