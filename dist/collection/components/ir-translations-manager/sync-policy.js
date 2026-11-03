/**
 * Tables whose rows are read outside this codebase (email templates, fiscal documents).
 * They take part in duplicate detection, but a language edit only crosses into or out
 * of them once the user has agreed to it.
 */
export const SYNC_GUARDED_TABLES = ['_EMAIL_LABELS', '_FD_LABELS'];
export const SYNC_GUARDED_TABLE_SET = new Set(SYNC_GUARDED_TABLES);
/**
 * `targets` are the duplicates that would actually change. Anything else in the
 * edited row's own table is irrelevant here — duplicates never include it.
 */
export function getSyncPrompt(editedTable, targets) {
    if (targets.length > 0 && SYNC_GUARDED_TABLE_SET.has(editedTable)) {
        return { kind: 'confirm' };
    }
    const guarded = [...new Set(targets.map(target => target.tableName).filter(name => SYNC_GUARDED_TABLE_SET.has(name)))].sort();
    if (guarded.length > 0) {
        return { kind: 'choose', tables: guarded };
    }
    return { kind: 'none' };
}
/** Drops the writes the answer rules out, keeping `params` paired index-for-index with `entries`. */
export function narrowSyncPlan(plan, answer) {
    const keep = (tableName) => {
        if (answer.kind === 'tables') {
            return !SYNC_GUARDED_TABLE_SET.has(tableName) || answer.tables.includes(tableName);
        }
        return answer.kind === 'all';
    };
    const kept = plan.entries.map(entry => keep(entry.tableName));
    return { entries: plan.entries.filter((_, index) => kept[index]), params: plan.params.filter((_, index) => kept[index]) };
}
