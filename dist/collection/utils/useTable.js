import { createTable } from "@tanstack/table-core";
export const flexRender = (comp, props) => {
    if (typeof comp === 'function') {
        return comp(props);
    }
    return comp;
};
export const useTable = (options) => {
    // Compose in the generic options to the user options
    const resolvedOptions = {
        state: {}, // Dummy state
        onStateChange: () => { }, // noop
        renderFallbackValue: null,
        ...options,
    };
    // Create a new table
    const table = createTable(resolvedOptions);
    // Manage table state locally and always include feature defaults (e.g. columnPinning).
    let tableState = {
        ...table.initialState,
        ...(options.state ?? {}),
    };
    const applyOptions = () => {
        table.setOptions(prev => ({
            ...prev,
            ...options,
            state: {
                ...tableState,
                ...(options.state ?? {}),
            },
            onStateChange: (updater) => {
                tableState = typeof updater === 'function' ? updater(tableState) : updater;
                applyOptions();
                options.onStateChange?.(tableState);
            },
        }));
    };
    applyOptions();
    return table;
};
//# sourceMappingURL=useTable.js.map
