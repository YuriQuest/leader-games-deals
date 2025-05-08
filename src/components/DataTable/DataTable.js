import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useStores } from '../../hooks/useStores';
export const DataTable = ({ games, onSelect }) => {
    const { stores, loading } = useStores();
    if (loading)
        return _jsx("p", { className: "text-center text-gray-500", children: "Carregando lojas..." });
    if (!stores || stores.length === 0)
        return _jsx("p", { className: "text-center text-red-500", children: "Erro ao carregar as lojas." });
    return (_jsx("div", { className: "p-4 overflow-x-auto", children: _jsxs("table", { className: "min-w-full", children: [_jsx("thead", { className: "bg-slate-400", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2", children: "Jogo" }), _jsx("th", { className: "px-4 py-2", children: "Pre\u00E7o" }), _jsx("th", { className: "px-4 py-2", children: "Valor original" }), _jsx("th", { className: "px-4 py-2", children: "Desconto" }), _jsx("th", { className: "px-4 py-2", children: "Loja" }), _jsx("th", { className: "px-4 py-2", children: "Nota" })] }) }), _jsx("tbody", { children: games.map((game) => {
                        const store = stores.find(store => store.storeID === game.storeID);
                        return (_jsxs("tr", { className: "shadow cursor-pointer hover:bg-gray-50 bg-slate-300", onClick: () => onSelect(game), children: [_jsxs("td", { className: "flex items-center gap-2 px-4 py-2", children: [_jsx("img", { src: game.thumb, alt: game.title, className: "object-cover w-24 h-10 rounded" }), _jsx("span", { className: "text-sm font-medium", children: game.title })] }), _jsxs("td", { className: "px-4 py-2 font-semibold text-green-600", children: ["R$ ", Number(game.salePrice).toFixed(2)] }), _jsxs("td", { className: "px-4 py-2 text-gray-500 ", children: ["R$ ", Number(game.normalPrice).toFixed(2)] }), _jsxs("td", { className: "px-4 py-2 text-red-500 ", children: [Number(game.savings).toFixed(0), "%"] }), _jsx("td", { className: "px-4 py-2 ", children: store ? (_jsxs("div", { className: "flex items-center gap-2 ", children: [_jsx("img", { src: `https://www.cheapshark.com${store.images.logo}`, alt: `Ícone da loja ${store.storeName}`, className: "w-6 h-6" }), _jsx("span", { className: "text-sm", children: store.storeName })] })) : (_jsx("span", { className: "text-sm text-gray-400", children: "Loja n\u00E3o encontrada" })) }), _jsx("td", { className: "px-4 py-2 text-center", children: game.dealRating })] }, game.dealID));
                    }) })] }) }));
};
