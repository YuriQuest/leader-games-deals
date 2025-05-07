// src/hooks/useStores.ts
import { useState, useEffect } from 'react';
import API from '../services/api';

export function useStores() {
  const [stores, setStores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const { data } = await API.get('/stores'); // Supondo que você use Axios ou fetch aqui
        setStores(data); // Armazenamos as lojas no estado
      } catch (error) {
        console.error('Erro ao carregar as lojas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return { stores, loading };
}
