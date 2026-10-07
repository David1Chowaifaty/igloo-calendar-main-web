import type WaTextarea from '@awesome.me/webawesome/dist/components/textarea/textarea';
import { EventEmitter } from '../../../stencil-public-runtime';
import type { TranslatableLanguage, TranslatableTextareaLabels, TranslatableValueChangeDetail, TranslationMap } from './types';
/**
 * A multilingual textarea modelled on Shopify's translation flow: the field itself is edited in the default
 * language (English unless overridden), which is required. Translations are made in a separate side-by-side
 * editor (`ir-translation-editor`, inside a dialog) and are only committed when the user saves.
 *
 * Value is a map keyed by BCP-47 code. Form-associated: submits `JSON.stringify(value)` under `name`, and
 * blocks submission while the default language is blank.
 */
export declare class IrTranslatableTextarea {
    internals: ElementInternals;
    el: HTMLIrTranslatableTextareaElement;
    /** Text per language, e.g. `{ en: '…', fr: '…' }`. Blank translations are never stored. */
    value: TranslationMap;
    /** Languages the field can be translated into. The default language may be listed; it is skipped as a target. */
    languages: TranslatableLanguage[];
    /** The source language: edited inline and required. */
    defaultLanguage: string;
    /** Field label. Also used in the translation editor's title. */
    label: string;
    /** Help text under the inline textarea. */
    hint: string;
    /** Placeholder for the inline textarea. */
    placeholder: string;
    /** Form field name. The submitted value is the JSON-encoded translation map. */
    name: string;
    rows: number;
    /** Maximum characters per language. */
    maxlength: number;
    /** Shows a character count (remaining characters when `maxlength` is set). */
    withCount: boolean;
    resize: WaTextarea['resize'];
    size: WaTextarea['size'];
    appearance: WaTextarea['appearance'];
    disabled: boolean;
    readonly: boolean;
    /** Locale used to display language names. Defaults to the nearest `lang` attribute, then the browser locale. */
    displayLocale: string;
    /** Overrides for the built-in English UI strings. */
    labels: Partial<TranslatableTextareaLabels>;
    editorOpen: boolean;
    /** Unsaved translator edits, keyed by language. Only languages touched in the editor are present. */
    draft: TranslationMap;
    editingLanguage: string;
    userInteracted: boolean;
    /** Emitted when the default-language text is edited, and when the translation editor is saved. */
    valueChange: EventEmitter<TranslatableValueChangeDetail>;
    private dialogEl?;
    private editorEl?;
    private sourceTextareaEl?;
    private initialValue;
    private silentCheck;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleValueChange(next: TranslationMap): void;
    handleConfigChange(): void;
    /** Fired by the browser on form submit and by `checkValidity()`/`reportValidity()` when the default language is blank. */
    handleInvalid(): void;
    /** Opens the translation editor, optionally on a specific language. */
    openTranslations(code?: string): Promise<void>;
    checkValidity(): Promise<boolean>;
    /** Like `checkValidity()`, but also shows the error and focuses the field. */
    reportValidity(): Promise<boolean>;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    private get text();
    private get targets();
    private get uiLocale();
    private languageName;
    private get isDirty();
    private get isValid();
    private get showError();
    private syncFormState;
    private syncStates;
    private revealError;
    private handleSourceInput;
    private handleSourceBlur;
    private openEditor;
    private closeEditor;
    private save;
    /** ir-dialog closes itself (Escape, close button) and cannot be vetoed — unsaved edits are discarded. */
    private handleDialogHide;
    private handleDialogAfterShow;
    private handleTranslationInput;
    private renderEditor;
    render(): any;
}
