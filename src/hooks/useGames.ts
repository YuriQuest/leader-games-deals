import { useState, useEffect } from 'react';
import API from '../services/api';
import type { GameDeal } from '../types/game';
import type { Filters } from '../types/Filters';

export function useGames(filters: Filters) {
  const [games, setGames] = useState<GameDeal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);

      const params: any = {
        storeID: filters.storeID || undefined,
        upperPrice: filters.upperPrice,
        lowerPrice: filters.lowerPrice,
        pageSize: 60,
        sortBy: 'Savings',
        onSale: 1,
      };

      const { data } = await API.get('/deals', { params });

      const filtered = data.filter((deal: GameDeal) => {
        return Number(deal.savings) >= (filters.minDiscount || 0);
      });

      setGames(filtered);
      setLoading(false);
    };

    fetchGames();
  }, [filters]);

  return { games, loading };
}
