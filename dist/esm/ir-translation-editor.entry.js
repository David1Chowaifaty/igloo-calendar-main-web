import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { D as DEFAULT_LABELS, r as resolveLanguageName, f as findLanguage, a as resolveDir, t as targetLanguages, i as isFilled, b as applyLanguageAttributes } from './utils-BHVI6Pwm.js';

const irTranslationEditorCss = () => `:host{display:flex;flex-direction:column;gap:var(--wa-space-m)}.language{max-inline-size:18rem}.columns{display:grid;grid-template-columns:1fr;gap:var(--wa-space-m)}@media (min-width: 768px){.columns{grid-template-columns:1fr 1fr}}.column{display:flex;flex-direction:column;gap:var(--wa-space-xs);min-inline-size:0}.column-header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--wa-space-s)}.column-title{margin:0;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600)}.column-language{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-xs)}.reference{flex:1;min-block-size:8rem;max-block-size:24rem;overflow-y:auto;padding-block:var(--wa-form-control-padding-block, 0.5rem);padding-inline:var(--wa-form-control-padding-inline, 0.75rem);border-radius:var(--wa-form-control-border-radius);background-color:var(--wa-color-surface-lowered);color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);line-height:var(--wa-line-height-normal, 1.6);white-space:pre-wrap;overflow-wrap:anywhere}.reference--empty{color:var(--wa-color-text-quiet);font-style:italic}.textarea::part(label){position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}`;

const IrTranslationEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.translationInput = createEvent(this, "translationInput");
        this.translationLanguageChange = createEvent(this, "translationLanguageChange");
    }
    /** Text per language to display (saved text merged with any unsaved edits). */
    value = {};
    /** All languages; the default language is shown as the reference and excluded from the selector. */
    languages = [];
    defaultLanguage = 'en';
    /** The language being edited. Updated when the user picks another one. */
    language;
    /** Field label, used in the textarea's accessible name. */
    label;
    rows = 6;
    maxlength;
    withCount = false;
    size = 's';
    appearance = 'outlined';
    readonly = false;
    /** Locale used to display language names. */
    displayLocale;
    labels = {};
    /** Emitted on every keystroke in the translation textarea. */
    translationInput;
    /** Emitted when the user selects another language. */
    translationLanguageChange;
    textareaEl;
    /** Focuses the translation textarea. */
    async focusInput() {
        this.textareaEl?.focus();
    }
    get text() {
        return { ...DEFAULT_LABELS, ...this.labels };
    }
    languageName(code) {
        return resolveLanguageName(code, findLanguage(this.languages, code).label, this.displayLocale);
    }
    languageDir(code) {
        return resolveDir(code, findLanguage(this.languages, code).dir);
    }
    handleLanguageChange = (event) => {
        const code = event.target.value;
        if (!code || code === this.language)
            return;
        this.language = code;
        this.translationLanguageChange.emit(code);
    };
    handleInput = (event) => {
        this.translationInput.emit({ language: this.language, text: event.target.value ?? '' });
    };
    render() {
        const targets = targetLanguages(this.languages ?? [], this.defaultLanguage);
        const code = this.language ?? targets[0]?.code;
        const source = this.value?.[this.defaultLanguage] ?? '';
        return (h(Host, { key: '057b423ec64e46087f03f011dfc1a2ad123996c0' }, h("wa-select", { key: '47931c12525aad0deb68c5a499822a844d5a5f2c', class: "language", size: "s", label: this.text.language, value: code, onChange: this.handleLanguageChange }, targets.map(language => {
            const name = this.languageName(language.code);
            return (h("wa-option", { key: language.code, value: language.code, label: name }, name));
        })), h("div", { key: 'dee2eb05c8fde2a3f73ec6131cfda00778dbc19e', class: "columns" }, h("section", { key: '452c8338f55f363e7418c549c25a52c196f08dbc', class: "column", "aria-labelledby": "reference-heading" }, h("header", { key: '4b808fb82649b4e2c32589677c3c8d19c453be9e', class: "column-header" }, h("h3", { key: 'c7c923fb21b6e5cfdcf7425684e1e3b3fd1ce3a3', id: "reference-heading", class: "column-title" }, this.text.reference), h("span", { key: '4bdabea4fafc695c6aa55bd527ef547652c87312', class: "column-language" }, this.languageName(this.defaultLanguage))), h("div", { key: 'b90180bc846da633e4787ee494284c005e8ef1c7', class: { 'reference': true, 'reference--empty': !isFilled(source) }, lang: this.defaultLanguage, dir: this.languageDir(this.defaultLanguage) }, isFilled(source) ? source : this.text.emptyReference)), code && (h("section", { key: 'b15e1437198b57c7c0e32e3f6cc870879c16a96e', class: "column", "aria-labelledby": "target-heading" }, h("header", { key: '4692e0b3b83558bd11ef4bd3247ca87d44a90aff', class: "column-header" }, h("h3", { key: 'f1b3b0e2cef1b4aaf1c95c060e89bdf99524b2de', id: "target-heading", class: "column-title" }, this.languageName(code))), h("wa-textarea", { key: `translation-${code}`, ref: el => {
                this.textareaEl = el;
                applyLanguageAttributes(el, code, this.languageDir(code));
            }, class: "textarea", label: this.label ? `${this.label} (${this.languageName(code)})` : this.languageName(code), value: this.value?.[code] ?? '', rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: "vertical", size: this.size, appearance: this.appearance, readonly: this.readonly, onInput: this.handleInput }))))));
    }
};
IrTranslationEditor.style = irTranslationEditorCss();

export { IrTranslationEditor as ir_translation_editor };
