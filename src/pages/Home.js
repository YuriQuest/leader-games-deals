import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DataCards } from '../components/DataTable/DataCards';
import { DataTable } from '../components/DataTable/DataTable';
import { FilterControls } from '../components/FilterControls/FilterControls';
import { useGames } from '../hooks/useGames';
import { GameModal } from '../components/GameModal/GameModal';
export const Home = () => {
    const [filters, setFilters] = useState({
        storeID: '',
        lowerPrice: undefined,
        upperPrice: undefined,
        minDiscount: undefined,
        sortBy: 'savings',
        title: '',
    });
    const [selectedGame, setSelectedGame] = useState(null);
    const [viewMode, setViewMode] = useState('table');
    const { games, loading } = useGames(filters);
    const handleSelectGame = (game) => {
        setSelectedGame(game);
    };
    return (_jsxs("div", { className: 'flex flex-col px-6 py-8 mx-auto', children: [_jsxs("div", { className: 'flex justify-between', children: [_jsx("h1", { className: "flex justify-center mb-4 text-3xl font-bold", children: "Leader Games Deal" }), _jsxs("button", { onClick: () => setViewMode(viewMode === 'cards' ? 'table' : 'cards'), className: "px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600", children: ["Visualizar como: ", viewMode === 'cards' ? 'Tabela' : 'Cards'] })] }), _jsx(FilterControls, { filters: filters, onChange: setFilters }), loading ? (_jsx("p", { children: "Carregando jogos..." })) : viewMode === 'cards' ? (_jsx(DataCards, { games: games, onSelect: handleSelectGame })) : (_jsx(DataTable, { games: games, onSelect: handleSelectGame })), selectedGame && (_jsx(GameModal, { game: selectedGame, onClose: () => setSelectedGame(null) }))] }));
};
