/**
 * The setup tables this codebase actually reads at runtime.
 *
 * Setup holds far more tables than the app consumes, so the manager can hide the
 * ones nothing reads. There is no runtime way to ask the bundle which tables it
 * touches, so this is a hand-maintained snapshot — **update it when call sites
 * change**. To re-derive it, collect the string literals passed to:
 *
 *   - `SetupService.getSetupEntriesByTableName(...)`
 *   - `SetupService.getSetupEntriesByTableNameMulti([...])`
 *
 * plus every locale table in `SCREEN_TABLES` and `BASE_TABLES`
 * (`src/services/locale/screen-tables.ts`), which is where the `Get_Exposed_Language`
 * sections now live, and the members of the `TableEntries` union in
 * `src/services/setup/types.ts`, the declared contract for those same getters.
 *
 *   grep -rnE "getSetupEntriesByTable(Name|NameMulti)" src
 */
const USED_SETUP_TABLES = [
    '_AGENT_RATE_TYPE',
    '_AGENT_TYPE',
    '_ARRIVAL_TIME',
    '_BED_PREFERENCE_TYPE',
    '_BOOKING_LIST_FRONT',
    '_CALENDAR_BLOCKED_TILL',
    '_CHANNEL_FRONT',
    '_CITY_TAX_INCLUDED',
    '_CL_POST_TIMING',
    '_CL_TX_TYPE',
    '_DEPARTURE_TIME',
    '_FD_STATUS',
    '_FD_TYPE',
    '_GAP_RANGE',
    '_GAP_RULE',
    '_HB_PREFERENCE',
    '_HK_FREQUENCY',
    '_HK_FRONT',
    '_ID_TYPE',
    '_INVOICE_TARGET',
    '_MEAL_TYPE',
    '_PAYMENT_BACK',
    '_PAY_METHOD',
    '_PAY_TYPE',
    '_PAY_TYPE_GROUP',
    '_PMS_FRONT',
    '_RATE_PRICING_MODE',
    '_SERVICE_CHARGE_INCLUDED',
    '_SVC_CATEGORY',
    '_TAXATION_STRATEGY',
    '_TA_PAYMENT_METHOD',
    '_USER_MGT',
    '_USER_TYPE',
    '_VAT_INCLUDED',
    '_COMMON',
    '_BOOKING',
    '_CALENDAR',
    '_FRONTDESK',
    '_HOUSEKEEPING',
    '_FINANCIALS',
    '_AGENTS',
    '_REPORTS',
    '_SETTINGS',
    '_GUESTS',
    '_AUTH',
    '_PMS',
];
/** Membership test for the list above — the manager checks this per table and per row. */
const USED_SETUP_TABLE_SET = new Set(USED_SETUP_TABLES);
const USED_TABLES_LOCAL_STORAGE_NAME = 'IR_USED_TABLES_ONLY';
/** Non-source language codes currently pinned as columns. Absent entirely (not just empty) means "everything pinned". */
const PINNED_LANG_LOCAL_STORAGE_NAME = 'IR_PINNED_LANG';
const SHOW_NOTES_LOCAL_STORAGE_NAME = 'IR_SHOW_NOTES_COLUMN';
const SESSION_CURRENT_TABLE = 'IR_CURRENT_TABLE';

/** A translation counts as present only when it holds non-whitespace text. */
function hasValue(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
/** How many of `languages` are still untranslated for a single entry. */
function countMissing(entry, languages) {
    return languages.reduce((total, language) => (hasValue(entry.values[language.code]) ? total : total + 1), 0);
}
/** Percentage (0-100) of `entries` that carry a value for `code`. Empty sets read as complete. */
function completionFor(entries, code) {
    if (entries.length === 0) {
        return 100;
    }
    const translated = entries.filter(entry => hasValue(entry.values[code])).length;
    return Math.round((translated / entries.length) * 100);
}
/** The language authors write against — flagged source, or the first language as a fallback. */
function getSourceLanguage(languages) {
    return languages.find(language => language.isSource) ?? languages[0];
}
/** Source language first, then the rest in their configured order. */
function orderLanguages(languages) {
    const source = getSourceLanguage(languages);
    if (!source) {
        return languages;
    }
    return [source, ...languages.filter(language => language.code !== source.code)];
}
/** True once at least one entry carries a real (non-default) display order. */
function hasExplicitOrder(entries) {
    return entries.some(entry => (entry.meta?.displayOrder ?? 0) !== 0);
}
/** Leaves fetch order alone until a display order has actually been set. */
function sortByDisplayOrder(entries) {
    if (!hasExplicitOrder(entries)) {
        return entries;
    }
    return [...entries].sort((a, b) => (a.meta?.displayOrder ?? 0) - (b.meta?.displayOrder ?? 0));
}
/**
 * The last row copied from the entries table. Held in memory rather than on the
 * system clipboard — that only gets the key, so it can be pasted straight into
 * the Key field — and read back by the entry form, which fills the translations
 * in when a new entry is given the same key. That is how a row travels from one
 * setup table to another.
 */
let copiedEntry = null;
function setCopiedEntry(entry) {
    copiedEntry = { key: entry.key, values: { ...entry.values } };
}
function getCopiedEntry() {
    return copiedEntry;
}
/** The language codes whose value differs between two versions of a row, with the new values. */
function diffValues(before, after) {
    const changed = {};
    for (const code of Object.keys(after)) {
        if ((before?.[code] ?? '') !== (after[code] ?? '')) {
            changed[code] = after[code] ?? '';
        }
    }
    return changed;
}
/**
 * Flattens the API's per-description groups into a per-row lookup keyed by the same
 * `TBL_NAME::CODE_NAME` id the entries carry. Only tables the codebase actually reads
 * count, and a row's own table never does — so a description that also lives in one
 * unused table gets no badge and no propagation, while one repeated twice inside a
 * single other table yields two siblings in one table.
 */
function buildDuplicateMap(groups) {
    const byEntry = new Map();
    for (const group of groups ?? []) {
        const used = group.ENTRIES.filter(entry => USED_SETUP_TABLE_SET.has(entry.TBL_NAME));
        for (const entry of used) {
            const siblings = used.filter(other => other.TBL_NAME !== entry.TBL_NAME).map(other => ({ tableName: other.TBL_NAME, key: other.CODE_NAME }));
            if (siblings.length === 0) {
                continue;
            }
            const tables = [...new Set(siblings.map(sibling => sibling.tableName))].sort();
            byEntry.set(`${entry.TBL_NAME}::${entry.CODE_NAME}`, { siblings, tables });
        }
    }
    return byEntry;
}

export { PINNED_LANG_LOCAL_STORAGE_NAME as P, SHOW_NOTES_LOCAL_STORAGE_NAME as S, USED_TABLES_LOCAL_STORAGE_NAME as U, countMissing as a, getCopiedEntry as b, completionFor as c, diffValues as d, buildDuplicateMap as e, SESSION_CURRENT_TABLE as f, getSourceLanguage as g, hasValue as h, sortByDisplayOrder as i, USED_SETUP_TABLE_SET as j, orderLanguages as o, setCopiedEntry as s };
