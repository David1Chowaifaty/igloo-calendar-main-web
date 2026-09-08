import { c as createStore } from './index-CimhgHoX.js';

const initialState = {
    entries: null,
    direction: 'ltr',
    language: 'en',
    loadedTables: [],
    status: 'idle',
};
const { state: locales} = createStore(initialState);

export { locales as l };
