import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useStores } from '../../hooks/useStores';
export const DataCards = ({ games, onSelect }) => {
    const { stores, loading } = useStores();
    if (loading)
        return _jsx("p", { className: "text-center text-gray-500", children: "Carregando lojas..." });
    if (!stores || stores.length === 0)
        return _jsx("p", { className: "text-center text-red-500", children: "Erro ao carregar as lojas." });
    return (_jsx("div", { className: "grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: games.map((game) => {
            const store = stores.find(store => store.storeID === game.storeID);
            return (_jsxs("div", { onClick: () => onSelect(game), className: "flex flex-col items-center p-4 text-center transition rounded-lg shadow cursor-pointer bg-slate-300 hover:shadow-md", children: [_jsx("img", { src: game.thumb, alt: game.title, className: "object-cover h-40 mb-2 rounded w-50" }), _jsx("h3", { className: "mb-1 font-semibold text-md", children: game.title }), _jsxs("p", { className: 'flex justify-between gap-4', children: [_jsxs("p", { className: "mb-1 text-sm text-gray-700", children: ["Pre\u00E7o: ", _jsxs("span", { className: "font-medium text-green-600", children: ["R$ ", Number(game.salePrice).toFixed(2)] })] }), _jsxs("p", { className: "mb-2 text-sm text-red-500", children: ["Desconto: ", Number(game.savings).toFixed(0), "%"] })] }), _jsxs("p", { className: "mb-1 text-sm text-gray-500", children: ["Valor original: R$ ", Number(game.normalPrice).toFixed(2)] }), store ? (_jsxs("div", { className: "flex items-center gap-2 mt-2", children: [_jsx("img", { src: `https://www.cheapshark.com${store.images.logo}`, alt: `Ícone da loja ${store.storeName}`, className: "w-6 h-6" }), _jsx("span", { className: "text-sm", children: store.storeName })] })) : (_jsx("span", { className: "mt-2 text-sm text-gray-400", children: "Loja n\u00E3o encontrada" })), _jsxs("p", { className: "mt-2 text-sm text-blue-600", children: ["Nota: ", game.dealRating] })] }, game.dealID));
        }) }));
};
