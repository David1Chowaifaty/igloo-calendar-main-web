import { EventEmitter } from '../../../stencil-public-runtime';
import { TranslationEntry, TranslationLanguage } from '../types';
export declare class IrTranslationsLanguageDialog {
    open: boolean;
    languages: TranslationLanguage[];
    /** Every language this property exposes and Setup can persist — the picker offers whichever of these aren't already shown. */
    catalog: TranslationLanguage[];
    /** Every entry across every table, used to report per-language coverage. */
    entries: TranslationEntry[];
    addLanguage: EventEmitter<TranslationLanguage>;
    /** Hides a language from this manager's view. Every CODE_VALUE_* column always exists in Setup, so nothing is deleted. */
    removeLanguage: EventEmitter<string>;
    setSourceLanguage: EventEmitter<string>;
    closeDialog: EventEmitter<void>;
    pendingCode: string;
    private dialogRef;
    handleOpenChange(open: boolean): void;
    private get availableLanguages();
    private handleAdd;
    private renderLanguageRow;
    render(): any;
}
