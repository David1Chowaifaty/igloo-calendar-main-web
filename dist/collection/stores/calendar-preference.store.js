import { createStore } from "@stencil/store";
const initialState = {
    resolved: 'gregory',
    override: null,
    // Follow the locale's conventional digits (Arabic-Indic under `ar`, Latin elsewhere). A persisted
    // `ir_numbering_system` value overrides this on init. The API boundary stays Latin regardless.
    numberingSystem: 'auto',
};
export const { state: calendarPreference, onChange: onCalendarPreferenceChange } = createStore(initialState);
export default calendarPreference;
