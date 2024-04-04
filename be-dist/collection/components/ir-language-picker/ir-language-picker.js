import app_store, { changeLocale, updateUserPreference } from "../../stores/app.store";
import { matchLocale } from "../../utils/utils";
import { h } from "@stencil/core";
export class IrLanguagePicker {
    constructor() {
        this.currencies = undefined;
        this.languages = undefined;
        this.selectedOptions = undefined;
    }
    async componentWillLoad() {
        await this.init();
    }
    async init() {
        if (this.languages && this.currencies) {
            this.selectedOptions = {
                language: this.languages[0],
                currency: this.currencies[0],
            };
        }
    }
    handleLanguageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        this.selectedOptions = Object.assign(Object.assign({}, this.selectedOptions), { language: this.languages.find(l => l.id === Number(id)) });
    }
    handleCurrencyChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        this.selectedOptions = Object.assign(Object.assign({}, this.selectedOptions), { currency: this.currencies.find(l => l.id === Number(id)) });
    }
    handleConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        changeLocale(this.selectedOptions.language.direction, matchLocale(this.selectedOptions.language.code));
        updateUserPreference({
            currency_id: this.selectedOptions.currency.code,
            language_id: this.selectedOptions.language.code,
        });
        this.closeDialog.emit(null);
    }
    render() {
        return (h("div", { key: 'a0391d424b8e696fc2508c8c082fa119a00b6b80', class: "p-4 sm:px-6 space-y-[0.75rem]" }, h("p", { key: 'a9b42ca75e61e1c1281d8c99cab4454e8ecbbe61', class: "mb-5 w-[30rem]  title" }, "Display settings"), h("ir-select", { key: 'd7fd78bbfbe1045fb8ec4a2bf058337c8add417f', value: app_store.userPreferences.language_id, onValueChange: this.handleLanguageChange.bind(this), label: "Language", select_id: "language_selector", data: this.languages.map(language => ({
                id: language.id,
                value: language.description,
            })) }), h("ir-select", { key: 'a046fe286063f7b7024924b214acbcb2fd00b8e4', value: app_store.userPreferences.currency_id, onValueChange: this.handleCurrencyChange.bind(this), label: "Currency", select_id: "currency_selector", data: this.currencies.map(currency => ({
                id: currency.id,
                value: `${currency.code} ${currency.symbol}`,
            })) }), h("div", { key: 'ddb93b9cca1a422f92a22afd3e68ae32034e9a85', class: "flex flex-col-reverse  w-full gap-4 justify-end sm:flex-row mt-8" }, h("ir-button", { key: 'cc26f55013d87664ef38ca9ce9b68c7f7751e2ea', onButtonClick: () => this.closeDialog.emit(null), size: "md", label: "Cancel", variants: "outline", class: "w-full sm:w-fit" }), h("ir-button", { key: '1de1285e765c9ad54fe1692547d3b3eaf0580ef0', size: "md", label: "Confirm", class: "w-full sm:w-fit", onClick: this.handleConfirm.bind(this) }))));
    }
    static get is() { return "ir-language-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-language-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-language-picker.css"]
        };
    }
    static get properties() {
        return {
            "currencies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency[]",
                    "resolved": "ICurrency[]",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::ICurrency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "languages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedLanguages[]",
                    "resolved": "IExposedLanguages[]",
                    "references": {
                        "IExposedLanguages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::IExposedLanguages"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "selectedOptions": {}
        };
    }
    static get events() {
        return [{
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
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-language-picker.js.map
