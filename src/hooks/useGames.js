import { useState, useEffect } from 'react';
import API from '../services/api';
export function useGames(filters) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true);
            const params = {
                storeID: filters.storeID || undefined,
                upperPrice: filters.upperPrice != null && filters.upperPrice >= 0 ? filters.upperPrice : undefined,
                lowerPrice: filters.lowerPrice != null && filters.lowerPrice >= 0 ? filters.lowerPrice : undefined,
                sortBy: filters.sortBy?.toLowerCase() || 'savings',
                title: filters.title || undefined,
                onSale: 1,
                pageSize: 60,
            };
            try {
                const { data } = await API.get('/deals', { params });
                const filtered = data.filter((deal) => {
                    return Number(deal.savings) >= (filters.minDiscount || 0);
                });
                setGames(filtered);
            }
            catch (error) {
                console.error('Erro ao buscar jogos:', error);
                setGames([]);
            }
            finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, [filters]);
    return { games, loading };
}
