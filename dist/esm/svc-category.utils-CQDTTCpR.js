import { c as calendar_data } from './calendar-data-Bwf2mcZp.js';
import { o as getEntryValue } from './utils-CmsmLI2N.js';

/** Strips non-alphanumeric characters and lowercases a string for fuzzy matching against tax names. */
function normalizeTaxName(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}
/** Finds a tax entry by keyword from the property's taxes array. Undefined means Not Applicable. */
function findAccTax(keyword) {
    const taxes = calendar_data.property?.taxes ?? [];
    return taxes.find(t => normalizeTaxName(t.name).includes(normalizeTaxName(keyword)));
}
/** Converts a property tax entry to an AccChargeRule. Absent tax resolves to Not Applicable. */
function toAccChargeRule(tax) {
    if (!tax)
        return { mode: '002', value: null };
    return { mode: tax.is_exlusive ? '000' : '001', value: tax.pct };
}
/**
 * Reads the property's current accommodation-level tax setup (VAT, City Tax, Service Charge,
 * Taxation Strategy) unchanged, for callers that must submit these required top-level fields
 * to `Handle_Exposed_Property_Tax_Categories` without actually managing/editing them.
 */
function getAccTaxPayloadFields() {
    const vat = toAccChargeRule(findAccTax('vat'));
    const cityTax = toAccChargeRule(findAccTax('city'));
    const serviceCharge = toAccChargeRule(findAccTax('service'));
    const taxationStrategy = calendar_data.property?.taxation_strategy?.code ?? '000';
    return {
        VAT_INCLUDED_CODE: vat.mode,
        VAT_PC: vat.mode === '002' ? 0 : (vat.value ?? 0),
        CITY_TAX_INCLUDED_CODE: cityTax.mode,
        CITY_TAX_PCT: cityTax.mode === '002' ? 0 : (cityTax.value ?? 0),
        SERVICE_CHARGE_INCLUDED_CODE: serviceCharge.mode,
        SERVICE_CHARGE_PCT: serviceCharge.mode === '002' ? 0 : (serviceCharge.value ?? 0),
        TAXATION_STRATEGY: taxationStrategy,
    };
}

/** A `NOTES` value counts as a group-code reference (not a free-text description) when it's shaped like a setup-entry code. */
const GROUP_CODE_PATTERN = /^[a-z0-9_]{2,10}$/i;
/** Friendlier titles for known group codes that don't have their own `svc_category` row to source a `CODE_VALUE_EN` from. */
const KNOWN_GROUP_LABELS = { ACM: 'Accommodation' };
/** Whether a `NOTES` value references another category as its parent group, rather than being a free-text description. */
function isGroupCodeReference(notes) {
    const trimmed = notes?.trim();
    return !!trimmed && GROUP_CODE_PATTERN.test(trimmed);
}
/** Minimal placeholder entry for a group code referenced by children but with no `svc_category` row of its own (e.g. `ACM`). */
function createGroupPlaceholderEntry(code) {
    const label = KNOWN_GROUP_LABELS[code] ?? code;
    return {
        CODE_NAME: code,
        CODE_VALUE_AR: '',
        CODE_VALUE_DE: '',
        CODE_VALUE_EL: '',
        CODE_VALUE_EN: label,
        CODE_VALUE_FR: '',
        CODE_VALUE_HE: '',
        CODE_VALUE_PL: '',
        CODE_VALUE_RU: '',
        CODE_VALUE_UA: '',
        DISPLAY_ORDER: 0,
        ENTRY_DATE: '',
        ENTRY_USER_ID: 0,
        INVARIANT_VALUE: null,
        ISDELETEABLE: false,
        ISDELETED: false,
        ISSYSTEM: false,
        ISUPDATEABLE: false,
        ISVISIBLE: true,
        NOTES: '',
        OWNER_ID: 0,
        TBL_NAME: '_SVC_CATEGORY',
    };
}
/**
 * Top-level `svc_category` entries: those whose `NOTES` does *not* reference another category as a
 * parent group (e.g. Spa's "Treatments, fitness, and wellness programs" is free text, so it stays
 * top-level; Breakfast's `NOTES` of `ACM` is shaped like a code, so it's a sub-category instead).
 *
 * When a referenced parent group (e.g. `ACM`) has no `svc_category` row of its own, a placeholder
 * entry is synthesized in its place — selectable as a generic parent category (e.g.
 * "Accommodation extras") even though its individual sub-categories aren't shown standalone. The
 * placeholder is inserted where its first child appears, keeping source order.
 */
function getTopLevelSvcCategories(categories) {
    const byCode = new Map(categories.map(entry => [entry.CODE_NAME, entry]));
    const seenGroupCodes = new Set();
    const result = [];
    categories.forEach(category => {
        const groupCode = category.NOTES?.trim();
        if (!isGroupCodeReference(groupCode)) {
            result.push(category);
            return;
        }
        if (byCode.has(groupCode) || seenGroupCodes.has(groupCode))
            return;
        seenGroupCodes.add(groupCode);
        result.push(createGroupPlaceholderEntry(groupCode));
    });
    return result;
}
/**
 * Groups `svc_category` entries by their `NOTES` field: an entry belongs to a group when its
 * `NOTES` is shaped like a category code (e.g. Breakfast's `NOTES` is `ACM`, so it's keyed under
 * group `ACM`) rather than free text. The group itself doesn't need its own row in `svc_category`
 * — the set of entries sharing a `NOTES` value is what defines the group; when a row for that code
 * *does* exist, its `CODE_VALUE_*` becomes the group label, otherwise a known fallback (or the raw
 * code) is used.
 *
 * A single pass over `categories` (assumed API/DISPLAY_ORDER-sorted) appends each entry straight
 * into its resolved group, so groups keep source order instead of being re-sorted afterward.
 *
 * Returns a `Map` keyed by group code so a specific group's sub-categories can be looked up
 * directly, e.g. `groupSvcCategoriesByParent(categories).get('ACM')`.
 */
function groupSvcCategoriesByParent(categories, language = 'en') {
    const byCode = new Map(categories.map(entry => [entry.CODE_NAME, entry]));
    const groups = new Map();
    categories.forEach(entry => {
        const groupCode = entry.NOTES?.trim();
        if (!isGroupCodeReference(groupCode))
            return;
        const group = groups.get(groupCode);
        if (group) {
            group.categories.push(entry);
            return;
        }
        const groupEntry = byCode.get(groupCode);
        groups.set(groupCode, {
            code: groupCode,
            label: groupEntry ? getEntryValue({ entry: groupEntry, language }) : (KNOWN_GROUP_LABELS[groupCode] ?? groupCode),
            categories: [entry],
        });
    });
    return groups;
}

export { getAccTaxPayloadFields as a, getTopLevelSvcCategories as b, findAccTax as f, groupSvcCategoriesByParent as g, toAccChargeRule as t };
