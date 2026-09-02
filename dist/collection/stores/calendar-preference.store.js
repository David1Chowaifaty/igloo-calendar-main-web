import { createStore } from "@stencil/store";
const initialState = {
    resolved: 'gregory',
    override: null,
    // Latin by default: the API boundary is always Latin and every existing screen renders it,
    // so following the locale's native digits is an explicit opt-in.
    numberingSystem: 'latn',
};
export const { state: calendarPreference, onChange: onCalendarPreferenceChange } = createStore(initialState);
export default calendarPreference;
