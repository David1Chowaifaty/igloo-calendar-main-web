import { createStore } from "@stencil/store";
const initialState = {
    entries: null,
    direction: 'ltr',
    language: 'en',
};
export const { state: locales, onChange: onCalendarDatesChange } = createStore(initialState);
export default locales;
