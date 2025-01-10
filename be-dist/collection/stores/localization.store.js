import { createStore } from "@stencil/store";
const initialState = {
    entries: null,
    direction: 'ltr',
};
export const { state: localizedWords, onChange: onCalendarDatesChange } = createStore(initialState);
export default localizedWords;
//# sourceMappingURL=localization.store.js.map
