'use strict';

var index = require('./index-CQkpA5n3.js');
var OverflowLock = require('./OverflowLock-DvMmdLl9.js');

const irDialogCss = () => `.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDialogShow = index.createEvent(this, "irDialogShow");
        this.irDialogHide = index.createEvent(this, "irDialogHide");
        this.irDialogAfterShow = index.createEvent(this, "irDialogAfterShow");
        this.irDialogAfterHide = index.createEvent(this, "irDialogAfterHide");
    }
    get el() { return index.getElement(this); }
    /**
     * The dialog's label as displayed in the header.
     * You should always include a relevant label, as it is required for proper accessibility.
     * If you need to display HTML, use the label slot instead.
     */
    label;
    /**
     * Indicates whether or not the dialog is open.
     * Toggle this attribute to show and hide the dialog.
     */
    open;
    /**
     * Disables the header.
     * This will also remove the default close button.
     */
    withoutHeader;
    /**
     * When enabled, the dialog will be closed when the user clicks outside of it.
     */
    lightDismiss = true;
    /**
     * Emitted when the dialog opens.
     */
    irDialogShow;
    /**
     * Emitted when the dialog is requested to close.
     * Calling event.preventDefault() will prevent the dialog from closing.
     * You can inspect event.detail.source to see which element caused the dialog to close.
     * If the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.
     * Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
     */
    irDialogHide;
    /**
     * Emitted after the dialog opens and all animations are complete.
     */
    irDialogAfterShow;
    /**
     * Emitted after the dialog closes and all animations are complete.
     */
    irDialogAfterHide;
    slotState = new Map();
    slotObserver;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    async openModal() {
        this.open = true;
    }
    async closeModal() {
        this.open = false;
    }
    /**
     * Nested Web Awesome components (dropdowns, selects, tooltips) emit their own
     * composed `wa-show`/`wa-hide`, which bubble through the slot into these
     * handlers. Acting on them would close the dialog when a menu closes, so only
     * the dialog's own events count.
     */
    isOwnEvent(e) {
        return e.target === e.currentTarget;
    }
    handleWaHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.open = false;
        this.irDialogHide.emit(e.detail);
    }
    handleWaShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.open = true;
        this.irDialogShow.emit();
    }
    handleWaAfterHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterHide.emit();
    }
    handleWaAfterShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterShow.emit();
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        return (index.h("wa-dialog", { key: '91ca07a45d8ce9ae59fe06fb31e6667cb0616c6e', "onwa-hide": (e) => this.isOwnEvent(e) && this.handleWaHide(e), "onwa-show": (e) => this.isOwnEvent(e) && this.handleWaShow(e), "onwa-after-hide": (e) => this.isOwnEvent(e) && this.handleWaAfterHide(e), "onwa-after-show": (e) => this.isOwnEvent(e) && this.handleWaAfterShow(e), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && index.h("slot", { key: '704d565c9e9dcb2b06a258a4d7b8face2583e5c6', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && index.h("slot", { key: 'f1ffeda635356a9219adfe7d4524f58dcc9eea55', name: "label", slot: "label" }), index.h("slot", { key: '5e7b87435de2153b9488b36c4dc92593a79bdc75' }), this.slotState.get('footer') && index.h("slot", { key: '124db1faa59bf816fc1c5d957d9daaa238ddd573', name: "footer", slot: "footer" })));
    }
};
__decorate([
    OverflowLock.OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate([
    OverflowLock.OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
IrDialog.style = irDialogCss();

const DEFAULT_LABELS = {
    translate: 'Translate',
    editorTitle: 'Translate {field}',
    language: 'Language',
    reference: 'Reference',
    required: '{language} text is required.',
    emptyReference: 'No text in the default language yet.',
    save: 'Save',
    cancel: 'Cancel',
    discard: 'Discard changes',
};
/** Fallback for engines without `Intl.Locale#getTextInfo` / `textInfo` (Firefox). Matched on the primary subtag. */
const RTL_LANGUAGES = new Set(['ar', 'arc', 'ckb', 'dv', 'fa', 'he', 'ks', 'ps', 'sd', 'ug', 'ur', 'yi']);
/** Replaces `{key}` placeholders. Unknown keys are left as-is. */
function format(template, params) {
    return template.replace(/\{(\w+)\}/g, (match, key) => (key in params ? String(params[key]) : match));
}
function isFilled(text) {
    return typeof text === 'string' && text.trim() !== '';
}
function resolveLanguageName(code, label, displayLocale) {
    if (label)
        return label;
    try {
        const name = new Intl.DisplayNames(displayLocale ? [displayLocale] : undefined, { type: 'language' }).of(code);
        if (name && name !== code)
            return name.charAt(0).toLocaleUpperCase(displayLocale) + name.slice(1);
    }
    catch {
        // Invalid code or no Intl.DisplayNames support — fall through.
    }
    return code.toUpperCase();
}
function resolveDir(code, dir) {
    if (dir)
        return dir;
    try {
        const locale = new Intl.Locale(code);
        const direction = locale.getTextInfo?.().direction ?? locale.textInfo?.direction;
        if (direction === 'rtl' || direction === 'ltr')
            return direction;
    }
    catch {
        // Invalid code — fall through.
    }
    const normalized = code.toLowerCase();
    return RTL_LANGUAGES.has(normalized) || RTL_LANGUAGES.has(normalized.split('-')[0]) ? 'rtl' : 'ltr';
}
/** The translation targets: every available language except the default one, in the given order, without duplicates. */
function targetLanguages(available, defaultLanguage) {
    const seen = new Set([defaultLanguage]);
    return available.filter(language => !seen.has(language.code) && seen.add(language.code));
}
function findLanguage(languages, code) {
    return languages?.find(language => language.code === code) ?? { code };
}
/**
 * Web Awesome redeclares `lang`/`dir` as non-reflecting properties, so binding them in JSX never reaches the
 * attributes — and WA reads direction and locale from the attributes on the component itself. Set them directly.
 */
function applyLanguageAttributes(el, code, dir) {
    if (!el)
        return;
    if (el.getAttribute('lang') !== code)
        el.setAttribute('lang', code);
    if (el.getAttribute('dir') !== dir)
        el.setAttribute('dir', dir);
}
/**
 * Merges edited translations into the saved value. Blank translations are dropped so the map only holds real text;
 * the default language is never touched here.
 */
function applyDraft(value, draft, defaultLanguage) {
    const next = { ...value };
    const changed = [];
    for (const [code, text] of Object.entries(draft)) {
        if (code === defaultLanguage)
            continue;
        const before = value[code] ?? '';
        const after = isFilled(text) ? text : '';
        if (before === after)
            continue;
        changed.push(code);
        if (after)
            next[code] = after;
        else
            delete next[code];
    }
    return { next, changed };
}

const irTranslatableTextareaCss = () => `:host{display:block}:host([hidden]){display:none}.field{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.field__header{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s);min-block-size:1.75rem}.field__label{color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);font-size:var(--wa-font-size-s)}.field__required{color:var(--wa-form-control-required-content-color);margin-inline-start:var(--wa-form-control-required-content-offset, 0.1em)}.translate-trigger::part(base){padding-inline:var(--wa-space-xs)}.textarea--source::part(label){position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.textarea--invalid{--wa-form-control-border-color:var(--wa-color-danger-border-loud)}.textarea--invalid::part(hint){color:var(--wa-color-danger-on-quiet)}.editor{--ir-dialog-width:min(64rem, 100vw - 2rem)}`;

const IrTranslatableTextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChange = index.createEvent(this, "valueChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return index.getElement(this); }
    /** Text per language, e.g. `{ en: '…', fr: '…' }`. Blank translations are never stored. */
    value = {};
    /** Languages the field can be translated into. The default language may be listed; it is skipped as a target. */
    languages = [];
    /** The source language: edited inline and required. */
    defaultLanguage = 'en';
    /** Field label. Also used in the translation editor's title. */
    label;
    /** Help text under the inline textarea. */
    hint;
    /** Placeholder for the inline textarea. */
    placeholder;
    /** Form field name. The submitted value is the JSON-encoded translation map. */
    name;
    rows = 4;
    /** Maximum characters per language. */
    maxlength;
    /** Shows a character count (remaining characters when `maxlength` is set). */
    withCount = false;
    resize = 'auto';
    size = 's';
    appearance = 'outlined';
    disabled = false;
    readonly = false;
    /** Locale used to display language names. Defaults to the nearest `lang` attribute, then the browser locale. */
    displayLocale;
    /** Overrides for the built-in English UI strings. */
    labels = {};
    editorOpen = false;
    /** Unsaved translator edits, keyed by language. Only languages touched in the editor are present. */
    draft = {};
    editingLanguage;
    userInteracted = false;
    /** Emitted when the default-language text is edited, and when the translation editor is saved. */
    valueChange;
    dialogEl;
    editorEl;
    sourceTextareaEl;
    initialValue = {};
    silentCheck = false;
    componentWillLoad() {
        this.value = this.value ?? {};
        this.initialValue = { ...this.value };
    }
    componentDidLoad() {
        this.syncFormState();
    }
    handleValueChange(next) {
        if (!next) {
            this.value = {};
            return;
        }
        this.syncFormState();
    }
    handleConfigChange() {
        this.syncFormState();
    }
    /** Fired by the browser on form submit and by `checkValidity()`/`reportValidity()` when the default language is blank. */
    handleInvalid() {
        if (!this.silentCheck)
            this.revealError();
    }
    /** Opens the translation editor, optionally on a specific language. */
    async openTranslations(code) {
        this.openEditor(code);
    }
    async checkValidity() {
        this.silentCheck = true;
        try {
            return this.internals.checkValidity();
        }
        finally {
            this.silentCheck = false;
        }
    }
    /** Like `checkValidity()`, but also shows the error and focuses the field. */
    async reportValidity() {
        // checkValidity() dispatches `invalid`, which reveals the error via handleInvalid().
        return this.internals.checkValidity();
    }
    // Form-associated lifecycle callbacks.
    formResetCallback() {
        this.value = { ...this.initialValue };
        this.userInteracted = false;
        this.closeEditor();
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    get text() {
        return { ...DEFAULT_LABELS, ...this.labels };
    }
    get targets() {
        return targetLanguages(this.languages ?? [], this.defaultLanguage);
    }
    get uiLocale() {
        return this.displayLocale || this.el.closest('[lang]')?.getAttribute('lang') || undefined;
    }
    languageName(code) {
        return resolveLanguageName(code, findLanguage(this.languages, code).label, this.uiLocale);
    }
    get isDirty() {
        return applyDraft(this.value ?? {}, this.draft, this.defaultLanguage).changed.length > 0;
    }
    get isValid() {
        return isFilled(this.value?.[this.defaultLanguage]);
    }
    get showError() {
        return this.userInteracted && !this.isValid;
    }
    syncFormState() {
        if (!this.internals)
            return;
        this.internals.setFormValue(this.name ? JSON.stringify(this.value ?? {}) : null);
        if (this.isValid) {
            this.internals.setValidity({});
        }
        else {
            const message = format(this.text.required, { language: this.languageName(this.defaultLanguage) });
            this.internals.setValidity({ valueMissing: true }, message, this.sourceTextareaEl);
        }
        this.syncStates();
    }
    syncStates() {
        try {
            // The bundled DOM lib types CustomStateSet without its Set methods.
            const states = this.internals.states;
            this.isValid ? states.delete('invalid') : states.add('invalid');
            this.showError ? states.add('user-invalid') : states.delete('user-invalid');
        }
        catch {
            // CustomStateSet unsupported — styling falls back to the internal classes.
        }
    }
    revealError() {
        this.userInteracted = true;
        this.syncStates();
        this.sourceTextareaEl?.focus();
    }
    handleSourceInput = (event) => {
        const text = event.target.value ?? '';
        this.value = { ...this.value, [this.defaultLanguage]: text };
        this.valueChange.emit({ value: this.value, languages: [this.defaultLanguage] });
    };
    handleSourceBlur = () => {
        if (this.userInteracted)
            return;
        this.userInteracted = true;
        this.syncStates();
    };
    openEditor(code) {
        const targets = this.targets;
        if (!targets.length)
            return;
        const requested = targets.find(language => language.code === code);
        // Start where there is work to do: the first language without a translation.
        const firstMissing = targets.find(language => !isFilled(this.value?.[language.code]));
        this.editingLanguage = (requested ?? firstMissing ?? targets[0]).code;
        this.draft = {};
        this.editorOpen = true;
    }
    closeEditor() {
        this.draft = {};
        this.editorOpen = false;
    }
    save = () => {
        const { next, changed } = applyDraft(this.value ?? {}, this.draft, this.defaultLanguage);
        if (changed.length) {
            this.value = next;
            this.valueChange.emit({ value: next, languages: changed });
        }
        this.closeEditor();
    };
    /** ir-dialog closes itself (Escape, close button) and cannot be vetoed — unsaved edits are discarded. */
    handleDialogHide = (event) => {
        if (event.target !== this.dialogEl)
            return;
        this.closeEditor();
    };
    handleDialogAfterShow = (event) => {
        if (event.target !== this.dialogEl)
            return;
        this.editorEl?.focusInput();
    };
    handleTranslationInput = (event) => {
        const { language, text } = event.detail;
        this.draft = { ...this.draft, [language]: text };
    };
    renderEditor() {
        if (!this.targets.length)
            return null;
        const dirty = this.isDirty;
        return (index.h("ir-dialog", { ref: el => (this.dialogEl = el), class: "editor", label: format(this.text.editorTitle, { field: this.label ?? '' }).trim(), open: this.editorOpen, lightDismiss: false, onIrDialogHide: this.handleDialogHide, onIrDialogAfterShow: this.handleDialogAfterShow }, this.editorOpen && (index.h("ir-translation-editor", { ref: el => (this.editorEl = el), value: { ...this.value, ...this.draft }, languages: this.languages, defaultLanguage: this.defaultLanguage, language: this.editingLanguage, label: this.label, rows: Math.max(this.rows, 6), maxlength: this.maxlength, withCount: this.withCount, size: this.size, appearance: this.appearance, readonly: this.readonly, displayLocale: this.uiLocale, labels: this.text, onTranslationInput: this.handleTranslationInput, onTranslationLanguageChange: (event) => (this.editingLanguage = event.detail) })), index.h("wa-button", { slot: "footer", appearance: "outlined", variant: "neutral", onClick: () => this.closeEditor() }, dirty ? this.text.discard : this.text.cancel), index.h("wa-button", { slot: "footer", variant: "brand", disabled: !dirty || this.readonly, onClick: this.save }, this.text.save)));
    }
    render() {
        const defaultName = this.languageName(this.defaultLanguage);
        const errorMessage = this.showError ? format(this.text.required, { language: defaultName }) : null;
        return (index.h(index.Host, { key: '2adaee46bcf4c1a3809463eb51ddf96fc72e4d80' }, index.h("div", { key: '6965dd59dc611ccf2c06d03998a0c198da809da2', class: { 'field': true, 'field--invalid': this.showError } }, index.h("div", { key: '0f61c106d9f7a3366eb601bf9f0666150b2b75ea', class: "field__header" }, index.h("span", { key: '450b4e7f6a4b2c8342a587385ac11071a4c2e20a', id: "field-label", class: "field__label", part: "label" }, this.label, index.h("span", { key: 'd2173ef3b7db73e5bf79d5d2eacbfcd910c5995d', class: "field__required", "aria-hidden": "true" }, "*")), this.targets.length > 0 && (index.h("wa-button", { key: '2caf752341a8a4760bb5542318ad1280e560abcf', class: "translate-trigger", size: "s", appearance: "plain", variant: "neutral", disabled: this.disabled, onClick: () => this.openEditor() }, index.h("wa-icon", { key: '9f671720b39dd51638e242ef6a2d4f640d589b0e', slot: "start", name: "language" }), this.text.translate))), index.h("wa-textarea", { key: '34f38613c2db61b4ac33e4ddf8ecd43c54cd2352', ref: el => {
                this.sourceTextareaEl = el;
                applyLanguageAttributes(el, this.defaultLanguage, resolveDir(this.defaultLanguage, findLanguage(this.languages, this.defaultLanguage).dir));
            }, class: errorMessage ? 'textarea textarea--source textarea--invalid' : 'textarea textarea--source', label: this.label || defaultName, hint: errorMessage ?? this.hint ?? '', value: this.value?.[this.defaultLanguage] ?? '', placeholder: this.placeholder, rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: this.resize, size: this.size, appearance: this.appearance, disabled: this.disabled, readonly: this.readonly, onInput: this.handleSourceInput, onBlur: this.handleSourceBlur })), this.renderEditor()));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "handleValueChange": 0
            }],
        "name": [{
                "handleConfigChange": 0
            }],
        "defaultLanguage": [{
                "handleConfigChange": 0
            }],
        "labels": [{
                "handleConfigChange": 0
            }]
    }; }
};
IrTranslatableTextarea.style = irTranslatableTextareaCss();

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
        return (index.h(index.Host, { key: 'fe8aecdc1e9a5ebf6d3a49e8f0df434f8c5c309c' }, index.h("wa-select", { key: '38a23aa0ba2b57a173d9c20e11c39bc3dde3a555', class: "language", size: "s", label: this.text.language, value: code, onChange: this.handleLanguageChange }, targets.map(language => {
            const name = this.languageName(language.code);
            return (index.h("wa-option", { key: language.code, value: language.code, label: name }, name));
        })), index.h("div", { key: '3acf158eb2eb1ee116a019c28be774dda7b7a2fa', class: "columns" }, index.h("section", { key: '2a2e5c049d4a665229189dd12b3f1fa5ced50988', class: "column", "aria-labelledby": "reference-heading" }, index.h("header", { key: '73b4ed704a93a8ce2a3852bf0ce06e4854b8dc37', class: "column-header" }, index.h("h3", { key: 'fff7efec303fd079d9fdbbc3cb6b79636da15685', id: "reference-heading", class: "column-title" }, this.text.reference), index.h("span", { key: 'a36202f2130598029fc69f486421862bc5ce8be0', class: "column-language" }, this.languageName(this.defaultLanguage))), index.h("div", { key: '8c99b26dc9eba1e4e28795ad803203bdc22ee04a', class: { 'reference': true, 'reference--empty': !isFilled(source) }, lang: this.defaultLanguage, dir: this.languageDir(this.defaultLanguage) }, isFilled(source) ? source : this.text.emptyReference)), code && (index.h("section", { key: '93979ec37e24973e8997a1b64a42cd9bcc0c7475', class: "column", "aria-labelledby": "target-heading" }, index.h("header", { key: '73e9ba672cc03d1b204888e8de45ae4a74132403', class: "column-header" }, index.h("h3", { key: 'b34ed8942e44a75ccf5a021af25131a5ce12c611', id: "target-heading", class: "column-title" }, this.languageName(code))), index.h("wa-textarea", { key: `translation-${code}`, ref: el => {
                this.textareaEl = el;
                applyLanguageAttributes(el, code, this.languageDir(code));
            }, class: "textarea", label: this.label ? `${this.label} (${this.languageName(code)})` : this.languageName(code), value: this.value?.[code] ?? '', rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: "vertical", size: this.size, appearance: this.appearance, readonly: this.readonly, onInput: this.handleInput }))))));
    }
};
IrTranslationEditor.style = irTranslationEditorCss();

exports.ir_dialog = IrDialog;
exports.ir_translatable_textarea = IrTranslatableTextarea;
exports.ir_translation_editor = IrTranslationEditor;
