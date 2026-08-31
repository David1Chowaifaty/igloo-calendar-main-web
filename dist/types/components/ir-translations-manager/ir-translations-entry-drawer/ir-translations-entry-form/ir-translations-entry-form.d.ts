import { EventEmitter } from '../../../../stencil-public-runtime';
import { TranslationEntry, TranslationLanguage } from '../../types';
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
    entrySaved: EventEmitter<void>;
    submitDisabledChange: EventEmitter<boolean>;
    isSubmittingChange: EventEmitter<boolean>;
    key: string;
    values: Record<string, string>;
    isSubmitting: boolean;
    private keyInputRef?;
    private setupService;
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
    private handleSubmit;
    render(): any;
}
