import type WaTextarea from '@awesome.me/webawesome/dist/components/textarea/textarea';
import { EventEmitter } from '../../../../stencil-public-runtime';
import type { TranslatableLanguage, TranslatableTextareaLabels, TranslationMap } from '../types';
export interface TranslationInputDetail {
    language: string;
    text: string;
}
/**
 * Side-by-side translation editor: a language selector, the default-language text as a read-only reference,
 * and a textarea for the selected language. Stateless about edits — it shows `value` and reports keystrokes
 * through `translationInput`; the owner decides when to save.
 */
export declare class IrTranslationEditor {
    /** Text per language to display (saved text merged with any unsaved edits). */
    value: TranslationMap;
    /** All languages; the default language is shown as the reference and excluded from the selector. */
    languages: TranslatableLanguage[];
    defaultLanguage: string;
    /** The language being edited. Updated when the user picks another one. */
    language: string;
    /** Field label, used in the textarea's accessible name. */
    label: string;
    rows: number;
    maxlength: number;
    withCount: boolean;
    size: WaTextarea['size'];
    appearance: WaTextarea['appearance'];
    readonly: boolean;
    /** Locale used to display language names. */
    displayLocale: string;
    labels: Partial<TranslatableTextareaLabels>;
    /** Emitted on every keystroke in the translation textarea. */
    translationInput: EventEmitter<TranslationInputDetail>;
    /** Emitted when the user selects another language. */
    translationLanguageChange: EventEmitter<string>;
    private textareaEl?;
    /** Focuses the translation textarea. */
    focusInput(): Promise<void>;
    private get text();
    private languageName;
    private languageDir;
    private handleLanguageChange;
    private handleInput;
    render(): any;
}
