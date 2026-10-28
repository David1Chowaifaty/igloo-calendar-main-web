'use strict';

var index = require('./index-IDeZZwEK.js');
var utils = require('./utils-DfCzEAC7.js');

const irTranslationEditorCss = () => `:host{display:flex;flex-direction:column;gap:var(--wa-space-m)}.language{max-inline-size:18rem}.columns{display:grid;grid-template-columns:1fr;gap:var(--wa-space-m)}@media (min-width: 768px){.columns{grid-template-columns:1fr 1fr}}.column{display:flex;flex-direction:column;gap:var(--wa-space-xs);min-inline-size:0}.column-header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--wa-space-s)}.column-title{margin:0;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600)}.column-language{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-xs)}.reference{flex:1;min-block-size:8rem;max-block-size:24rem;overflow-y:auto;padding-block:var(--wa-form-control-padding-block, 0.5rem);padding-inline:var(--wa-form-control-padding-inline, 0.75rem);border-radius:var(--wa-form-control-border-radius);background-color:var(--wa-color-surface-lowered);color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);line-height:var(--wa-line-height-normal, 1.6);white-space:pre-wrap;overflow-wrap:anywhere}.reference--empty{color:var(--wa-color-text-quiet);font-style:italic}.textarea::part(label){position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}`;

const IrTranslationEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.translationInput = index.createEvent(this, "translationInput");
        this.translationLanguageChange = index.createEvent(this, "translationLanguageChange");
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
        return { ...utils.DEFAULT_LABELS, ...this.labels };
    }
    languageName(code) {
        return utils.resolveLanguageName(code, utils.findLanguage(this.languages, code).label, this.displayLocale);
    }
    languageDir(code) {
        return utils.resolveDir(code, utils.findLanguage(this.languages, code).dir);
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
        const targets = utils.targetLanguages(this.languages ?? [], this.defaultLanguage);
        const code = this.language ?? targets[0]?.code;
        const source = this.value?.[this.defaultLanguage] ?? '';
        return (index.h(index.Host, { key: 'a5108c78cb0e122e684d0cc1089ce2bf82671f5a' }, index.h("wa-select", { key: '1d65ebd9aefaf41fe38064f57922864ffbc343ac', class: "language", size: "s", label: this.text.language, value: code, onChange: this.handleLanguageChange }, targets.map(language => {
            const name = this.languageName(language.code);
            return (index.h("wa-option", { key: language.code, value: language.code, label: name }, name));
        })), index.h("div", { key: '84b3066facbfd74c9904c1c58d50c49b25e76286', class: "columns" }, index.h("section", { key: '200e313231e1863c8d493ff3f9df8547b59e8dda', class: "column", "aria-labelledby": "reference-heading" }, index.h("header", { key: '6cbad8c0f570f9e8431158c95014b60fd1d70243', class: "column-header" }, index.h("h3", { key: '51d2aa766f2b5d1389bef0cf578c931868f05f29', id: "reference-heading", class: "column-title" }, this.text.reference), index.h("span", { key: '3e31f57c97d245342ba27d8c5975e43f8ccb2460', class: "column-language" }, this.languageName(this.defaultLanguage))), index.h("div", { key: '00c04f3490228c896812982c52f73ddc193e24ba', class: { 'reference': true, 'reference--empty': !utils.isFilled(source) }, lang: this.defaultLanguage, dir: this.languageDir(this.defaultLanguage) }, utils.isFilled(source) ? source : this.text.emptyReference)), code && (index.h("section", { key: '6461c462a6a03a982bb0a417ed8a2e26d00c4692', class: "column", "aria-labelledby": "target-heading" }, index.h("header", { key: '6c6f7a12002a31aa903721e26aafd0e97503c63b', class: "column-header" }, index.h("h3", { key: 'd5b1b15e1facc502307ba15c962c4e0b733e75bf', id: "target-heading", class: "column-title" }, this.languageName(code))), index.h("wa-textarea", { key: `translation-${code}`, ref: el => {
                this.textareaEl = el;
                utils.applyLanguageAttributes(el, code, this.languageDir(code));
            }, class: "textarea", label: this.label ? `${this.label} (${this.languageName(code)})` : this.languageName(code), value: this.value?.[code] ?? '', rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: "vertical", size: this.size, appearance: this.appearance, readonly: this.readonly, onInput: this.handleInput }))))));
    }
};
IrTranslationEditor.style = irTranslationEditorCss();

exports.ir_translation_editor = IrTranslationEditor;
