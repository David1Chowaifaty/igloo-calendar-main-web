import { EventEmitter } from '../../../../stencil-public-runtime';
import { DuplicateSibling, EntrySavedDetail, TranslationEntry, TranslationLanguage } from '../../types';
/**
 * Owns the create/edit draft for a single translation key and saves it directly —
 * the drawer around this form is a dumb open/close shell.
 */
export declare class IrTranslationsEntryForm {
    formId: string;
    languages: TranslationLanguage[];
    /** The entry being edited. Null puts the form in create mode. */
    entry: TranslationEntry | null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys: string[];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder: number;
    tableName: string;
    ownerId: number;
    entryUserId: number;
    /** Rows in other used tables sharing `entry`'s description — language changes are written to them in the same batch. */
    duplicateSiblings: DuplicateSibling[];
    /** Fired after the write lands, with what was saved — the manager propagates language changes to the row's duplicates from it. */
    entrySaved: EventEmitter<EntrySavedDetail>;
    submitDisabledChange: EventEmitter<boolean>;
    isSubmittingChange: EventEmitter<boolean>;
    key: string;
    values: Record<string, string>;
    isSubmitting: boolean;
    private keyInputRef?;
    private setupService;
    /** Key the copied row was last applied for — so backspacing and retyping it doesn't re-fill and re-toast. */
    private filledFromCopiedKey;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private get isEditing();
    private get trimmedKey();
    private get isDuplicateKey();
    private get isValid();
    private get translatedCount();
    private get sourceLanguage();
    private get targetLanguages();
    private get missingLanguages();
    private get canCopyPrompt();
    private get canPasteTranslations();
    private buildTranslationPrompt;
    private handleCopyPrompt;
    private handlePasteTranslations;
    private handleKeyChange;
    /**
     * The other half of the table's "Copy row": a new entry given the copied row's
     * key inherits its translations. Only blanks are filled, so anything already
     * typed into a language field stays.
     */
    private fillFromCopiedEntry;
    private handleSubmit;
    render(): any;
}
