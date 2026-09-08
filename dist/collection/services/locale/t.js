import { locales } from "../../stores/locales.store";
/**
 * Reads a localized string out of the `locales` store.
 *
 * Call it inside `render()` — the read goes through the `@stencil/store` proxy,
 * which subscribes the calling component, so text re-renders on a language
 * switch with no `@Watch('language')` of its own.
 *
 *   {t('Lcz_Balance')}
 *   {t('Lcz_BookingsNbr', { params: [guest.nbr_confirmed_bookings] })}
 *
 * @param key A declared `Lcz_*` key. Unknown keys are a compile error — use
 * {@link tRaw} when the key is only known at runtime.
 * @returns The translation, or `options.fallback` (defaulting to `key` itself,
 * so gaps are visible) when the key has not been loaded.
 */
export function t(key, options) {
    return tRaw(key, options);
}
/**
 * {@link t} for keys that aren't in the declared union — keys built at runtime,
 * or sections not yet added to `src/stores/locales.store.ts`.
 */
export function tRaw(key, options) {
    const entries = locales.entries;
    const value = entries?.[key];
    if (value === undefined || value === null || value === '') {
        return options?.fallback ?? key;
    }
    return interpolate(value, options?.params);
}
/**
 * Fills the API's positional placeholders. Translations carry `%1`, `%2`, … —
 * e.g. `Lcz_EmailBookingto` is "Email booking to %1".
 */
function interpolate(value, params) {
    if (!params?.length) {
        return value;
    }
    return params.reduce((acc, param, index) => acc.split(`%${index + 1}`).join(String(param)), value);
}
