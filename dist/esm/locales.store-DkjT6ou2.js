import { c as createStore } from './index-CLFOnCBt.js';

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: locales} = createStore(initialState);

export { locales as l };
