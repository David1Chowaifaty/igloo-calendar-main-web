import { CalendarSystem, NumberingSystemPreference } from "../utils/date/types";
export interface ICalendarPreference {
    /** What's actually applied right now — device-detected or the persisted override. */
    resolved: CalendarSystem;
    /** Explicit user/QA choice, or `null` when following device auto-detect. */
    override: CalendarSystem | null;
    /** Digit script dates render in. `'auto'` follows whatever the moment locale produces. */
    numberingSystem: NumberingSystemPreference;
}
export declare const calendarPreference: ICalendarPreference, onCalendarPreferenceChange: import("@stencil/store/dist/types").OnChangeHandler<ICalendarPreference>;
export default calendarPreference;
