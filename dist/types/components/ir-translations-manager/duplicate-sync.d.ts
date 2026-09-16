import { type EditSetupParams, SetupService } from "../../services/setup/index";
import { DuplicateSibling, TranslationEntry } from './types';
export interface DuplicateSyncPlan {
    /** One write per sibling that actually needs to change, ready to append to an Edit_Setup_Many batch. */
    params: EditSetupParams[];
    /** The same siblings as `TranslationEntry`s with the new values applied, for patching any that are on screen. */
    entries: TranslationEntry[];
}
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
export declare function planDuplicateSync(service: SetupService, { siblings, changedValues, ownerId, entryUserId, touch, }: {
    siblings: DuplicateSibling[];
    changedValues: Record<string, string>;
    ownerId: number;
    entryUserId: number;
    touch: boolean;
}): Promise<DuplicateSyncPlan>;
