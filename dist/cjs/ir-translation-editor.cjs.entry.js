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
        return (index.h(index.Host, { key: '1e08a8a3fb6d9865c58af32213e04a8a1d9402d9' }, index.h("wa-select", { key: '842e6287f7c91f5b7fe2f2bde1204168f9218c22', class: "language", size: "s", label: this.text.language, value: code, onChange: this.handleLanguageChange }, targets.map(language => {
            const name = this.languageName(language.code);
            return (index.h("wa-option", { key: language.code, value: language.code, label: name }, name));
        })), index.h("div", { key: '357f74da1c359e97354984f8345ec212306a2875', class: "columns" }, index.h("section", { key: '4b8a495a3cd6350b4e407517c2baf855ad371bde', class: "column", "aria-labelledby": "reference-heading" }, index.h("header", { key: 'f487178ff1a649694c0269c07d3007193763800f', class: "column-header" }, index.h("h3", { key: '68996cbc733e2971411f323f55d5f54b224b17a0', id: "reference-heading", class: "column-title" }, this.text.reference), index.h("span", { key: 'd0c67f12fed9e82dd07ec087f2efb75a88c9bf66', class: "column-language" }, this.languageName(this.defaultLanguage))), index.h("div", { key: 'd3913a45d765c44c8ee511b7f6bc7090e6ef7f33', class: { 'reference': true, 'reference--empty': !utils.isFilled(source) }, lang: this.defaultLanguage, dir: this.languageDir(this.defaultLanguage) }, utils.isFilled(source) ? source : this.text.emptyReference)), code && (index.h("section", { key: 'bb2ec1bc9539e93a4b37411acde8db401de498a0', class: "column", "aria-labelledby": "target-heading" }, index.h("header", { key: '7cd58be917ac2946222470289f9692759871ce1a', class: "column-header" }, index.h("h3", { key: '7a6f2221ba9c3b7ebc58d7255ad070663597853d', id: "target-heading", class: "column-title" }, this.languageName(code))), index.h("wa-textarea", { key: `translation-${code}`, ref: el => {
                this.textareaEl = el;
                utils.applyLanguageAttributes(el, code, this.languageDir(code));
            }, class: "textarea", label: this.label ? `${this.label} (${this.languageName(code)})` : this.languageName(code), value: this.value?.[code] ?? '', rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: "vertical", size: this.size, appearance: this.appearance, readonly: this.readonly, onInput: this.handleInput }))))));
    }
};
IrTranslationEditor.style = irTranslationEditorCss();

exports.ir_translation_editor = IrTranslationEditor;
