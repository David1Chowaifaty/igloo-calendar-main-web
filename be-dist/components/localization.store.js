import { c as createStore } from './index2.js';

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: localizedWords, onChange: onCalendarDatesChange } = createStore(initialState);

export { localizedWords as l };

//# sourceMappingURL=localization.store.js.map