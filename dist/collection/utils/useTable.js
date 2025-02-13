import { createStore } from "@stencil/store";
import { createTable } from "@tanstack/table-core";
export const flexRender = (comp, props) => {
    if (typeof comp === 'function') {
        return comp(props);
    }
    return comp;
};
export const useTable = (options) => {
    // Compose in the generic options to the user options
    const resolvedOptions = Object.assign({ state: {}, onStateChange: () => { }, renderFallbackValue: null }, options);
    // Create a new table
    const table = createTable(resolvedOptions);
    // By default, manage table state here using the table's initial state
    const { state } = createStore(table.initialState);
    // Subscribe to state changes
    const setState = (updater) => {
        var _a;
        if (typeof updater === 'function') {
            const newState = updater(state);
            Object.assign(state, newState);
        }
        else {
            Object.assign(state, updater);
        }
        (_a = options.onStateChange) === null || _a === void 0 ? void 0 : _a.call(options, updater);
    };
    table.setOptions(prev => (Object.assign(Object.assign(Object.assign({}, prev), options), { state, onStateChange: setState })));
    return table;
};
//# sourceMappingURL=useTable.js.map
