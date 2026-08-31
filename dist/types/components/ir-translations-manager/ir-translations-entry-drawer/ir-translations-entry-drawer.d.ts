import { EventEmitter } from '../../../stencil-public-runtime';
import { TranslationEntry, TranslationLanguage } from '../types';
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
    closeDrawer: EventEmitter<void>;
    entrySaved: EventEmitter<void>;
    saveDisabled: boolean;
    isSubmitting: boolean;
    render(): any;
}
