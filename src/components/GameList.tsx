import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type GameDeal } from '../types/GameDeal';

const GameList: React.FC = () => {
  const [games, setGames] = useState<GameDeal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<GameDeal[]>('https://www.cheapshark.com/api/1.0/deals')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar jogos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Jogos em Promoção</h2>
      <ul>
        {games.map(game => (
          <li key={game.gameID}>
            <img src={game.thumb} alt={game.title} width={100} />
            <p>{game.title}</p>
            <p>De: ${game.normalPrice} | Por: ${game.salePrice}</p>
            <p> Score {game.metacriticScore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;