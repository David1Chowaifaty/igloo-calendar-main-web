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
        return (index.h(index.Host, { key: '4aa830bd558699fb544314e78763c43b7edfa7c2' }, index.h("wa-select", { key: 'ada3430cd70b7294e1b891b83b2ce75a745eb53e', class: "language", size: "s", label: this.text.language, value: code, onChange: this.handleLanguageChange }, targets.map(language => {
            const name = this.languageName(language.code);
            return (index.h("wa-option", { key: language.code, value: language.code, label: name }, name));
        })), index.h("div", { key: '58507940b299a1e4adfc18cd741fa63eb58f8471', class: "columns" }, index.h("section", { key: 'b916db241d257ebb6f9810a2cf021b01a3e7efde', class: "column", "aria-labelledby": "reference-heading" }, index.h("header", { key: '2cde7e96bd7468089c287f69fc8209035e2b070b', class: "column-header" }, index.h("h3", { key: 'f8ba89ddfba719c611006aebf0281bda77c0e9ba', id: "reference-heading", class: "column-title" }, this.text.reference), index.h("span", { key: 'e454d2731546994299d03544b533c2c186754489', class: "column-language" }, this.languageName(this.defaultLanguage))), index.h("div", { key: 'e23460b41ae85b4920bb8ac8cbc988706af144e3', class: { 'reference': true, 'reference--empty': !utils.isFilled(source) }, lang: this.defaultLanguage, dir: this.languageDir(this.defaultLanguage) }, utils.isFilled(source) ? source : this.text.emptyReference)), code && (index.h("section", { key: '9e18deed07401fc084859cb2654970ca1102288b', class: "column", "aria-labelledby": "target-heading" }, index.h("header", { key: 'db9887f60d57c27fa2f5b32cbb2d1a008f010ec5', class: "column-header" }, index.h("h3", { key: 'c36c680a37979136c844de370504000416a22f9c', id: "target-heading", class: "column-title" }, this.languageName(code))), index.h("wa-textarea", { key: `translation-${code}`, ref: el => {
                this.textareaEl = el;
                utils.applyLanguageAttributes(el, code, this.languageDir(code));
            }, class: "textarea", label: this.label ? `${this.label} (${this.languageName(code)})` : this.languageName(code), value: this.value?.[code] ?? '', rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: "vertical", size: this.size, appearance: this.appearance, readonly: this.readonly, onInput: this.handleInput }))))));
    }
};
IrTranslationEditor.style = irTranslationEditorCss();

exports.ir_translation_editor = IrTranslationEditor;
