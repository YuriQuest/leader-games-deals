import React from 'react';
import type { GameDeal } from '../../types/game';
import { useStores } from '../../hooks/useStores';

interface GameModalProps {
  game: GameDeal;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
    const { stores, loading } = useStores();
  
    if (loading) return <p className="text-center text-gray-500">Carregando lojas...</p>;
  
    if (!stores || stores.length === 0) return <p className="text-center text-red-500">Erro ao carregar as lojas.</p>

    const store = stores.find(store => store.storeID === game.storeID);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 rounded-lg shadow-lg bg-slate-300">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-2 right-2 hover:text-black"
        >
          &times;
        </button>
        <img src={game.thumb} alt={game.title} className="w-full h-auto mb-4 rounded" />
        <h2 className="mb-2 text-xl font-semibold">{game.title}</h2>
        <p className='flex justify-between'>
          <p className="mb-2"><strong>Preço:</strong> R$ {Number(game.salePrice).toFixed(2)}</p>
          <p className="mb-2"><strong>Preço original:</strong> R$ {Number(game.normalPrice).toFixed(2)}</p>
        </p>
        <p className='flex justify-between'>
          <p className="mb-2"><strong>Desconto:</strong> {Number(game.savings).toFixed(0)}%</p>
          <p className="mb-2"><strong>Menor preço:</strong> R$ {Number(game.savings).toFixed(0)}</p>
        </p>
        <p className="flex mb-2">
          <strong>Loja:</strong>
          <img
              src={`https://www.cheapshark.com${store.images.logo}`}
              alt={`Ícone da loja ${store.storeName}`}
              className="w-6 h-6"
            />
          {store.storeName}
          
        </p>
        <a
          href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Ver Oferta
        </a>
      </div>
    </div>
  );
};
