import { Host, h } from "@stencil/core";
import { DEFAULT_LABELS, applyLanguageAttributes, findLanguage, isFilled, resolveDir, resolveLanguageName, targetLanguages } from "../utils";
/**
 * Side-by-side translation editor: a language selector, the default-language text as a read-only reference,
 * and a textarea for the selected language. Stateless about edits — it shows `value` and reports keystrokes
 * through `translationInput`; the owner decides when to save.
 */
export class IrTranslationEditor {
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
    static get is() { return "ir-translation-editor"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translation-editor.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translation-editor.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationMap",
                    "resolved": "{ [x: string]: string; }",
                    "references": {
                        "TranslationMap": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslationMap",
                            "referenceLocation": "TranslationMap"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text per language to display (saved text merged with any unsaved edits)."
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
                            "path": "../types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslatableLanguage",
                            "referenceLocation": "TranslatableLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "All languages; the default language is shown as the reference and excluded from the selector."
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default-language",
                "defaultValue": "'en'"
            },
            "language": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The language being edited. Updated when the user picks another one."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language"
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
                    "text": "Field label, used in the textarea's accessible name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
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
                "defaultValue": "6"
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
                    "text": ""
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "with-count",
                "defaultValue": "false"
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
                "reflect": false,
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
                    "text": "Locale used to display language names."
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
                            "path": "../types",
                            "id": "src/components/ui/ir-translatable-textarea/types.ts::TranslatableTextareaLabels",
                            "referenceLocation": "TranslatableTextareaLabels"
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
                "defaultValue": "{}"
            }
        };
    }
    static get events() {
        return [{
                "method": "translationInput",
                "name": "translationInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on every keystroke in the translation textarea."
                },
                "complexType": {
                    "original": "TranslationInputDetail",
                    "resolved": "TranslationInputDetail",
                    "references": {
                        "TranslationInputDetail": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-translatable-textarea/ir-translation-editor/ir-translation-editor.tsx",
                            "id": "src/components/ui/ir-translatable-textarea/ir-translation-editor/ir-translation-editor.tsx::TranslationInputDetail"
                        }
                    }
                }
            }, {
                "method": "translationLanguageChange",
                "name": "translationLanguageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user selects another language."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "focusInput": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focuses the translation textarea.",
                    "tags": []
                }
            }
        };
    }
}
