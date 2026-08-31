import moment from "moment";
/**
 * Normalizes any accepted date input to a native `Date`, or `null` for empty/unparseable input.
 * Parse order mirrors `ir-air-date-picker.tsx`'s `toMoment()`: strict `YYYY-MM-DD` → strict
 * ISO-8601 → loose fallback, so canonical app dates never hit moment's slow/ambiguous loose parser.
 *
 * This exists only to feed the Intl formatter in `ir-date.ts` a native `Date` — it is not a
 * general-purpose moment replacement, and nothing outside `src/utils/date/` should depend on it.
 */
export function toDate(value) {
    if (!value)
        return null;
    if (value instanceof Date)
        return isNaN(value.getTime()) ? null : value;
    if (moment.isMoment(value))
        return value.isValid() ? value.toDate() : null;
    const strict = moment(value, 'YYYY-MM-DD', true);
    if (strict.isValid())
        return strict.toDate();
    const iso = moment(value, moment.ISO_8601, true);
    if (iso.isValid())
        return iso.toDate();
    const loose = moment(value);
    return loose.isValid() ? loose.toDate() : null;
}
