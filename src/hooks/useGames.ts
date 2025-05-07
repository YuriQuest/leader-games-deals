import { useEffect, useState } from 'react';
import API from '../services/api';
import type { GameDeal } from '../types/game';

interface Filters {
  storeID?: string;
  lowerPrice?: number;
  upperPrice?: number;
  title?: string;
  sortBy?: 'Price' | 'Savings' | 'Deal Rating';
  desc?: boolean;
  minDiscount?: number;
}

export function useGames(filters: Filters) {
  const [games, setGames] = useState<GameDeal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);

      const params: any = {
        storeID: filters.storeID,
        upperPrice: filters.upperPrice,
        lowerPrice: filters.lowerPrice,
        title: filters.title,
        sortBy: filters.sortBy,
        desc: filters.desc ? 1 : 0,
        pageSize: 60,
      };

      if (filters.minDiscount) {
        params.onSale = 1;
        params.sortBy = 'Savings';
      }

      const { data } = await API.get('/deals', { params });
      setGames(data);
      setLoading(false);
    };

    fetchGames();
  }, [filters]);

  return { games, loading };
}
