/** Calendar system identifiers, matching the `-u-ca-` Unicode locale extension values. */
export type CalendarSystem = 'gregory' | 'islamic-umalqura';
/**
 * Named display styles — deliberately not raw Intl/moment tokens. Every call site picks a
 * semantic style; if a new visual need arises, add a style here (and its Intl mapping in
 * `ir-date.ts`) rather than passing ad hoc format strings through.
 */
export type DateStyle = 'short' | 'medium' | 'long' | 'weekday-medium' | 'month-year' | 'day-only';
/** Currently the only supported time style; kept as a union so it can grow deliberately. */
export type TimeStyle = 'short';
export interface FormatDateOptions {
    style?: DateStyle;
    withTime?: TimeStyle;
    /** Overrides the resolved calendar-preference store value for this call only. */
    calendar?: CalendarSystem;
    /** Overrides the resolved language for this call only. Defaults to `LanguageObserver.getLang()`. */
    locale?: string;
    /** Defaults to `'latn'` — see the module doc comment in `ir-date.ts` for why this default exists. */
    numberingSystem?: 'latn';
}
