import { buildEditSetupParams, setupEntryToTranslationEntry } from "./setup-mapping";
const EMPTY_PLAN = { params: [], entries: [] };
/**
 * Works out the writes that bring a description's rows in other used tables in step
 * with a language edit. The caller folds `params` into the *same* Edit_Setup_Many as
 * the row that was edited, so a synced edit costs one write however many tables it
 * touches.
 *
 * Siblings aren't in memory (only the active table's rows are loaded), so each is
 * fetched first — `buildEditSetupParams` without a row's own meta would reset its
 * flags, order and notes to defaults. Only the changed language values travel:
 * notes, keys and flags stay per-row. System-protected and soft-deleted siblings are
 * left alone, as is anything already holding the new values.
 */
export async function planDuplicateSync(service, { siblings, changedValues, ownerId, entryUserId, touch, }) {
    const codes = Object.keys(changedValues);
    if (siblings.length === 0 || codes.length === 0) {
        return EMPTY_PLAN;
    }
    const rows = await Promise.all(siblings.map(sibling => service.getSetupEntryByCode({ TBL_NAME: sibling.tableName, CODE_NAME: sibling.key })));
    const entries = rows
        .filter((row) => row !== null)
        .map(setupEntryToTranslationEntry)
        .filter(sibling => sibling.meta?.isUpdateable !== false && sibling.meta?.isDeleted !== true)
        .filter(sibling => codes.some(code => (sibling.values[code] ?? '') !== changedValues[code]))
        .map(sibling => ({ ...sibling, values: { ...sibling.values, ...changedValues } }));
    const params = entries.map(sibling => buildEditSetupParams({
        ownerId,
        entryUserId,
        tableName: sibling.tableName,
        key: sibling.key,
        values: sibling.values,
        meta: sibling.meta,
        touch,
    }));
    return { params, entries };
}
