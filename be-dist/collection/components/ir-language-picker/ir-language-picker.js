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
        this.selectedOptions = Object.assign(Object.assign({}, this.selectedOptions), { language: this.languages.find(l => l.code === id) });
    }
    handleCurrencyChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        this.selectedOptions = Object.assign(Object.assign({}, this.selectedOptions), { currency: this.currencies.find(l => l.code === id) });
    }
    handleConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        changeLocale(this.selectedOptions.language.direction, matchLocale(this.selectedOptions.language.code));
        updateUserPreference({
            currency_id: this.selectedOptions.currency.code,
            language_id: this.selectedOptions.language.code,
        });
        localStorage.setItem('user_prefernce', JSON.stringify({
            currency_id: this.selectedOptions.currency.code,
            language_id: this.selectedOptions.language.code,
            direction: this.selectedOptions.language.direction,
        }));
        this.closeDialog.emit(null);
    }
    render() {
        return (h("div", { key: 'eda1d14fb7a55c93cbf1620771f99763fa6c2138', class: "p-4 sm:px-6 space-y-[0.75rem]" }, h("p", { key: 'fe6965625b4385001010ca3014d1f29644edd92f', class: "mb-5 w-[30rem]  title" }, "Display settings"), h("ir-select", { key: 'b94d33899cffe64715deb20b607e0de0769e5396', variant: "double-line", value: app_store.userPreferences.language_id, onValueChange: this.handleLanguageChange.bind(this), label: "Language", select_id: "language_selector", data: this.languages.map(language => ({
                id: language.code,
                value: language.description,
            })) }), h("ir-select", { key: 'a88f54c2e04771f3655cc76b97312790eb345b9d', variant: "double-line", value: app_store.userPreferences.currency_id, onValueChange: this.handleCurrencyChange.bind(this), label: "Currency", select_id: "currency_selector", data: this.currencies.map(currency => ({
                id: currency.code,
                value: `${currency.code} ${currency.symbol}`,
            })) }), h("div", { key: '0dd5e19d4d1e5869779a8d277c541863781fe46c', class: "flex flex-col-reverse  w-full gap-4 justify-end sm:flex-row mt-8" }, h("ir-button", { key: '84e47eff77e55f29a9494ab155ba3d1957e5f027', onButtonClick: () => this.closeDialog.emit(null), size: "md", label: "Cancel", variants: "outline", class: "w-full sm:w-fit" }), h("ir-button", { key: '58f11a27fbd865c8e9cf914f744a8aafbc36ccd9', size: "md", label: "Confirm", class: "w-full sm:w-fit", onClick: this.handleConfirm.bind(this) }))));
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
