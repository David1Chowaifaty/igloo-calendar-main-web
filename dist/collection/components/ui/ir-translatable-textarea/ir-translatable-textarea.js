import { Host, h } from "@stencil/core";
import { DEFAULT_LABELS, applyDraft, applyLanguageAttributes, findLanguage, format, isFilled, resolveDir, resolveLanguageName, targetLanguages } from "./utils";
/**
 * A multilingual textarea modelled on Shopify's translation flow: the field itself is edited in the default
 * language (English unless overridden), which is required. Translations are made in a separate side-by-side
 * editor (`ir-translation-editor`, inside a dialog) and are only committed when the user saves.
 *
 * Value is a map keyed by BCP-47 code. Form-associated: submits `JSON.stringify(value)` under `name`, and
 * blocks submission while the default language is blank.
 */
export class IrTranslatableTextarea {
    internals;
    el;
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
        return (h("ir-dialog", { ref: el => (this.dialogEl = el), class: "editor", label: format(this.text.editorTitle, { field: this.label ?? '' }).trim(), open: this.editorOpen, lightDismiss: false, onIrDialogHide: this.handleDialogHide, onIrDialogAfterShow: this.handleDialogAfterShow }, this.editorOpen && (h("ir-translation-editor", { ref: el => (this.editorEl = el), value: { ...this.value, ...this.draft }, languages: this.languages, defaultLanguage: this.defaultLanguage, language: this.editingLanguage, label: this.label, rows: Math.max(this.rows, 6), maxlength: this.maxlength, withCount: this.withCount, size: this.size, appearance: this.appearance, readonly: this.readonly, displayLocale: this.uiLocale, labels: this.text, onTranslationInput: this.handleTranslationInput, onTranslationLanguageChange: (event) => (this.editingLanguage = event.detail) })), h("wa-button", { slot: "footer", appearance: "outlined", variant: "neutral", onClick: () => this.closeEditor() }, dirty ? this.text.discard : this.text.cancel), h("wa-button", { slot: "footer", variant: "brand", disabled: !dirty || this.readonly, onClick: this.save }, this.text.save)));
    }
    render() {
        const defaultName = this.languageName(this.defaultLanguage);
        const errorMessage = this.showError ? format(this.text.required, { language: defaultName }) : null;
        return (h(Host, { key: '80616e013cd0dc91c907472f494b6fc4abb901cf' }, h("div", { key: '8064d43e1ed0439ac6181c6d0e79a7147b516f94', class: { 'field': true, 'field--invalid': this.showError } }, h("div", { key: '4c6aefd50ff186fe06bc6373d2b22898b40cef3e', class: "field__header" }, h("span", { key: '39a914abe693e421d851c7dc7e95a59d85cb8cce', id: "field-label", class: "field__label", part: "label" }, this.label, h("span", { key: '6cd8ea4fe1ffee230de56445ec7abb29558a8adf', class: "field__required", "aria-hidden": "true" }, "*")), this.targets.length > 0 && (h("wa-button", { key: '1f082e6f3f61bc6b5fdae6cdd0648ab66f8979a3', class: "translate-trigger", size: "s", appearance: "plain", variant: "neutral", disabled: this.disabled, onClick: () => this.openEditor() }, h("wa-icon", { key: '40c1b3f866c9e925ec10717457368525d4b7aa61', slot: "start", name: "language" }), this.text.translate))), h("wa-textarea", { key: '6adf9217eed0a818d35ea360d88dc764fc6d8389', ref: el => {
                this.sourceTextareaEl = el;
                applyLanguageAttributes(el, this.defaultLanguage, resolveDir(this.defaultLanguage, findLanguage(this.languages, this.defaultLanguage).dir));
            }, class: errorMessage ? 'textarea textarea--source textarea--invalid' : 'textarea textarea--source', label: this.label || defaultName, hint: errorMessage ?? this.hint ?? '', value: this.value?.[this.defaultLanguage] ?? '', placeholder: this.placeholder, rows: this.rows, maxlength: this.maxlength, withCount: this.withCount, resize: this.resize, size: this.size, appearance: this.appearance, disabled: this.disabled, readonly: this.readonly, onInput: this.handleSourceInput, onBlur: this.handleSourceBlur })), this.renderEditor()));
    }
    static get is() { return "ir-translatable-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translatable-textarea.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translatable-textarea.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "TranslationMap",
                    "resolved": "{ [x: string]: string; }",
                    "references": {
                        "TranslationMap": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslationMap",
                            "referenceLocation": "TranslationMap"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text per language, e.g. `{ en: '\u2026', fr: '\u2026' }`. Blank translations are never stored."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{}"
            },
            "languages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslatableLanguage[]",
                    "resolved": "TranslatableLanguage[]",
                    "references": {
                        "TranslatableLanguage": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslatableLanguage",
                            "referenceLocation": "TranslatableLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Languages the field can be translated into. The default language may be listed; it is skipped as a target."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "defaultLanguage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The source language: edited inline and required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default-language",
                "defaultValue": "'en'"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Field label. Also used in the translation editor's title."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "hint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Help text under the inline textarea."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder for the inline textarea."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Form field name. The submitted value is the JSON-encoded translation map."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "rows": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rows",
                "defaultValue": "4"
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum characters per language."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "maxlength"
            },
            "withCount": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows a character count (remaining characters when `maxlength` is set)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "with-count",
                "defaultValue": "false"
            },
            "resize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "WaTextarea['resize']",
                    "resolved": "\"auto\" | \"both\" | \"horizontal\" | \"none\" | \"vertical\"",
                    "references": {
                        "WaTextarea": {
                            "location": "global",
                            "id": "global::WaTextarea"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resize",
                "defaultValue": "'auto'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "WaTextarea['size']",
                    "resolved": "\"l\" | \"large\" | \"m\" | \"medium\" | \"s\" | \"small\" | \"xl\" | \"xs\"",
                    "references": {
                        "WaTextarea": {
                            "location": "global",
                            "id": "global::WaTextarea"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'s'"
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "WaTextarea['appearance']",
                    "resolved": "\"filled\" | \"filled-outlined\" | \"outlined\"",
                    "references": {
                        "WaTextarea": {
                            "location": "global",
                            "id": "global::WaTextarea"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "appearance",
                "defaultValue": "'outlined'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "readonly",
                "defaultValue": "false"
            },
            "displayLocale": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Locale used to display language names. Defaults to the nearest `lang` attribute, then the browser locale."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "display-locale"
            },
            "labels": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<TranslatableTextareaLabels>",
                    "resolved": "TranslatableTextareaLabels",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "TranslatableTextareaLabels": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslatableTextareaLabels",
                            "referenceLocation": "TranslatableTextareaLabels"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Overrides for the built-in English UI strings."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{}"
            }
        };
    }
    static get states() {
        return {
            "editorOpen": {},
            "draft": {},
            "editingLanguage": {},
            "userInteracted": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChange",
                "name": "valueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the default-language text is edited, and when the translation editor is saved."
                },
                "complexType": {
                    "original": "TranslatableValueChangeDetail",
                    "resolved": "TranslatableValueChangeDetail",
                    "references": {
                        "TranslatableValueChangeDetail": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslatableValueChangeDetail",
                            "referenceLocation": "TranslatableValueChangeDetail"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "openTranslations": {
                "complexType": {
                    "signature": "(code?: string) => Promise<void>",
                    "parameters": [{
                            "name": "code",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the translation editor, optionally on a specific language.",
                    "tags": []
                }
            },
            "checkValidity": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "reportValidity": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Like `checkValidity()`, but also shows the error and focuses the field.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "name",
                "methodName": "handleConfigChange"
            }, {
                "propName": "defaultLanguage",
                "methodName": "handleConfigChange"
            }, {
                "propName": "labels",
                "methodName": "handleConfigChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "invalid",
                "method": "handleInvalid",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
