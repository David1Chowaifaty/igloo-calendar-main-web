import { c as createStore } from './index-1d7b1ff2.js';

const initialValue = {
    default_properties: undefined,
    hk_criteria: undefined,
    hk_tasks: undefined,
    pending_housekeepers: [],
};
const { state: housekeeping_store } = createStore(initialValue);
function updateHKStore(key, value) {
    housekeeping_store[key] = value;
}
function getDefaultProperties() {
    return housekeeping_store.default_properties;
}

export { getDefaultProperties as g, housekeeping_store as h, updateHKStore as u };

//# sourceMappingURL=housekeeping.store-82894713.js.map