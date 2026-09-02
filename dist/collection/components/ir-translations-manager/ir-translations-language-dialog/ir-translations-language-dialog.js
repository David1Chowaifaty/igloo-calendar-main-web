import { Fragment, h } from "@stencil/core";
import { completionFor } from "../utils";
export class IrTranslationsLanguageDialog {
    open = false;
    languages = [];
    /** Every language this property exposes and Setup can persist — the picker offers whichever of these aren't already shown. */
    catalog = [];
    /** Every entry across every table, used to report per-language coverage. */
    entries = [];
    addLanguage;
    /** Hides a language from this manager's view. Every CODE_VALUE_* column always exists in Setup, so nothing is deleted. */
    removeLanguage;
    setSourceLanguage;
    closeDialog;
    pendingCode = '';
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            this.pendingCode = '';
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    get availableLanguages() {
        return this.catalog.filter(language => !this.languages.some(shown => shown.code === language.code));
    }
    handleAdd = () => {
        const language = this.catalog.find(item => item.code === this.pendingCode);
        if (!language) {
            return;
        }
        this.addLanguage.emit({ code: language.code, name: language.name });
        this.pendingCode = '';
    };
    renderLanguageRow(language) {
        const percent = completionFor(this.entries, language.code);
        const isSource = !!language.isSource;
        return (h("li", { key: language.code, class: "language-dialog__item" }, h("span", { class: "language-dialog__code" }, language.code.toUpperCase()), h("span", { class: "language-dialog__name" }, language.name, isSource && h("span", { class: "language-dialog__source-tag" }, "Source")), h("span", { class: "language-dialog__coverage" }, h("wa-progress-bar", { class: "language-dialog__bar", value: percent, label: `${language.name} coverage` }), h("span", { class: "language-dialog__percent" }, percent, "%")), h("wa-dropdown", { "onwa-select": (e) => {
                if (e.detail.item.value === 'source') {
                    this.setSourceLanguage.emit(language.code);
                }
                else if (e.detail.item.value === 'remove') {
                    this.removeLanguage.emit(language.code);
                }
            } }, h("ir-custom-button", { slot: "trigger", appearance: "plain", variant: "neutral", iconBtn: true }, h("wa-icon", { name: "ellipsis", label: `Actions for ${language.name}` })), h("wa-dropdown-item", { value: "source", disabled: isSource }, h("wa-icon", { slot: "icon", name: "star" }), "Set as source"), h("wa-dropdown-item", { value: "remove", disabled: isSource }, h("wa-icon", { slot: "icon", name: "eye-slash" }), "Hide from view"))));
    }
    render() {
        const availableLanguages = this.availableLanguages;
        return (h("ir-dialog", { key: '90a053add7efd2e3124b44115470185ffc1b92d8', label: "Languages", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, h("div", { key: 'ffbfaaa0d1ea3599356736b573385ced7439b2eb', class: "language-dialog__body" }, this.languages.length === 0 ? (h("ir-empty-state", { message: "No languages shown. Add one below." })) : (h("ul", { class: "language-dialog__list" }, this.languages.map(language => this.renderLanguageRow(language)))), h("div", { key: 'd969194e2253f717308599097661b2aab0d6868b', class: "language-dialog__add" }, availableLanguages.length === 0 ? (h("p", { class: "language-dialog__hint" }, "All exposed languages are shown.")) : (h(Fragment, null, h("h3", { class: "language-dialog__add-title" }, "Show a language"), h("div", { class: "language-dialog__add-row" }, h("wa-select", { label: "Language", size: "s", class: "language-dialog__select", value: this.pendingCode, onchange: (e) => (this.pendingCode = e.target.value) }, availableLanguages.map(language => (h("wa-option", { key: language.code, value: language.code }, language.name, " (", language.code.toUpperCase(), ")")))), h("ir-custom-button", { appearance: "filled", variant: "brand", disabled: !this.pendingCode, onClickHandler: this.handleAdd }, "Add")))))), h("div", { key: 'acfaa16455464619a0723af19c66484b413d2af5', slot: "footer", class: "language-dialog__footer" }, h("ir-custom-button", { key: '353b903648fd2f16ddd0aa8b6815f0b91acd186d', appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Done"))));
    }
    static get is() { return "ir-translations-language-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-language-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-language-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                "attribute": "open",
                "defaultValue": "false"
            },
            "languages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationLanguage[]",
                    "resolved": "TranslationLanguage[]",
                    "references": {
                        "TranslationLanguage": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationLanguage",
                            "referenceLocation": "TranslationLanguage"
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
                "defaultValue": "[]"
            },
            "catalog": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationLanguage[]",
                    "resolved": "TranslationLanguage[]",
                    "references": {
                        "TranslationLanguage": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationLanguage",
                            "referenceLocation": "TranslationLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Every language this property exposes and Setup can persist \u2014 the picker offers whichever of these aren't already shown."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "entries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationEntry[]",
                    "resolved": "TranslationEntry[]",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Every entry across every table, used to report per-language coverage."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "pendingCode": {}
        };
    }
    static get events() {
        return [{
                "method": "addLanguage",
                "name": "addLanguage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationLanguage",
                    "resolved": "TranslationLanguage",
                    "references": {
                        "TranslationLanguage": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationLanguage",
                            "referenceLocation": "TranslationLanguage"
                        }
                    }
                }
            }, {
                "method": "removeLanguage",
                "name": "removeLanguage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Hides a language from this manager's view. Every CODE_VALUE_* column always exists in Setup, so nothing is deleted."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "setSourceLanguage",
                "name": "setSourceLanguage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "closeDialog",
                "name": "closeDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
