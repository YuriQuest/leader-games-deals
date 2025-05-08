import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useStores } from '../../hooks/useStores';
export const FilterControls = ({ filters, onChange }) => {
    const { stores, loading } = useStores();
    if (loading)
        return _jsx("p", { children: "Carregando lojas..." });
    return (_jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsxs("select", { value: filters.storeID, onChange: e => onChange({ ...filters, storeID: e.target.value }), children: [_jsx("option", { value: "", children: "Todas as lojas" }), stores.map((store) => (_jsx("option", { value: store.storeID, children: store.storeName }, store.storeID)))] }), _jsx("input", { type: "number", placeholder: "Valor m\u00EDnimo", value: filters.lowerPrice ?? '', onChange: (e) => onChange({
                    ...filters,
                    lowerPrice: e.target.value ? Number(e.target.value) : undefined,
                }) }), _jsx("input", { type: "number", placeholder: "Valor m\u00E1ximo", value: filters.upperPrice ?? '', onChange: (e) => onChange({
                    ...filters,
                    upperPrice: e.target.value ? Number(e.target.value) : undefined,
                }) }), _jsxs("select", { value: filters.sortBy || 'Savings', onChange: (e) => onChange({ ...filters, sortBy: e.target.value }), children: [_jsx("option", { value: "price", children: "Pre\u00E7o" }), _jsx("option", { value: "savings", children: "Desconto" }), _jsx("option", { value: "dealRating", children: "Nota do neg\u00F3cio" })] }), _jsx("input", { type: "number", placeholder: "Desconto m\u00EDnimo (%)", value: filters.minDiscount, onChange: e => onChange({ ...filters, minDiscount: Number(e.target.value) }) }), _jsx("input", { type: "text", placeholder: "Buscar por t\u00EDtulo", value: filters.title || '', onChange: (e) => onChange({ ...filters, title: e.target.value }) })] }));
};
