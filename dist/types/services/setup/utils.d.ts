import type { IEntries, ISetupEntries } from "../../models/IBooking";
import type { EntryLanguage, GroupedTableEntries } from './types';
/**
 * Normalises any raw language string — a `@Prop() language`, `<html lang>`, the
 * `locales.language` store value — to a supported {@link EntryLanguage}. Case is
 * ignored; anything unrecognised falls back to `'en'`.
 */
export declare function toEntryLanguage(language?: string | null): EntryLanguage;
/**
 * Returns the localised display string for a setup entry.
 *
 * Resolution order:
 * 1. `CODE_VALUE_<language>` — if present and non-empty.
 * 2. `CODE_VALUE_EN` — English fallback.
 * 3. `CODE_NAME` — last-resort fallback when both are absent.
 *
 * @param entry - The `IEntries` object to translate.
 * @param language - Language code, any case (e.g. `"fr"`, `"AR"`). Defaults to `"en"`.
 *
 * @example
 * const label = getEntryValue({ entry: someEntry, language: 'fr' });
 * // → "Petit-déjeuner" (falls back to "Breakfast" if French is null)
 */
export declare function getEntryValue({ entry, language }: {
    entry: IEntries;
    language?: string;
}): string;
/**
 * The localised label for a setup entry in the **currently selected UI language**.
 *
 * When `language` is omitted it reads `locales.language` (the `@stencil/store`
 * value kept in sync with `<html lang>` by `ir-locale-switcher`). Because it
 * reads a store-proxied value, calling this in a component `render()` makes the
 * component re-render automatically when the user switches language.
 */
export declare function getSetupEntryLabel(entry: IEntries, language?: string): string;
/**
 * Groups a flat setup-entry list by table. The key is the lower-cased `TBL_NAME`
 * with its leading underscore stripped (`_PAY_TYPE` -> `pay_type`). Null-safe:
 * entries without a `TBL_NAME` are skipped, and names without a leading `_` are
 * tolerated.
 */
export declare function groupEntryTablesResult(entries: IEntries[]): GroupedTableEntries;
/**
 * Maps the arrival-time / rate-pricing-mode / bed-preference groups of a
 * {@link groupEntryTablesResult} output to the {@link ISetupEntries} shape the
 * booking editors consume.
 */
export declare function toSetupEntries(grouped: GroupedTableEntries): ISetupEntries;
