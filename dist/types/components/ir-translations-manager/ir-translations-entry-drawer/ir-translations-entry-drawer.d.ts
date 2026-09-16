import { EventEmitter } from '../../../stencil-public-runtime';
import { DuplicateSibling, EntrySavedDetail, TranslationEntry, TranslationLanguage } from '../types';
/**
 * Dumb open/close shell — the nested ir-translations-entry-form owns the
 * draft, validation, and the actual save call.
 */
export declare class IrTranslationsEntryDrawer {
    open: boolean;
    formId: string;
    languages: TranslationLanguage[];
    /** The entry being edited. Null puts the drawer in create mode. */
    entry: TranslationEntry | null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys: string[];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder: number;
    tableName: string;
    ownerId: number;
    entryUserId: number;
    /** Passed through to the form — rows in other tables that share `entry`'s description. */
    duplicateSiblings: DuplicateSibling[];
    closeDrawer: EventEmitter<void>;
    entrySaved: EventEmitter<EntrySavedDetail>;
    saveDisabled: boolean;
    isSubmitting: boolean;
    render(): any;
}
