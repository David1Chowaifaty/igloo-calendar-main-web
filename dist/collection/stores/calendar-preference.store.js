import { createStore } from "@stencil/store";
const initialState = {
    resolved: 'gregory',
    override: null,
};
export const { state: calendarPreference, onChange: onCalendarPreferenceChange } = createStore(initialState);
export default calendarPreference;
