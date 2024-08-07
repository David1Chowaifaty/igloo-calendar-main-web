import app_store, { changeLocale, onAppDataChange, updateUserPreference } from "../../../../stores/app.store";
import { cn, matchLocale } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrLanguagePicker {
    constructor() {
        this.langEl = [];
        this.selectedIndex = 0;
        this.currencies = undefined;
        this.languages = undefined;
        this.selectedCurrency = undefined;
        this.selectedLanguage = undefined;
    }
    async componentWillLoad() {
        this.init();
        onAppDataChange('userPreferences', newValue => {
            this.selectedLanguage = this.languages.find(l => l.code.toLowerCase() === newValue.language_id.toLowerCase());
            this.selectedCurrency = this.currencies.find(c => c.code.toLowerCase() === newValue.currency_id.toLowerCase());
        });
    }
    componentDidLoad() {
        var _a;
        const index = this.languages.findIndex(l => l.code === this.selectedLanguage.code);
        if (index !== -1) {
            (_a = this.langEl[index]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    init() {
        var _a, _b;
        if (this.languages && this.currencies) {
            console.log(this.languages, this.currencies);
            this.selectedLanguage = (_a = this.languages) === null || _a === void 0 ? void 0 : _a.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
            this.selectedCurrency = (_b = this.currencies) === null || _b === void 0 ? void 0 : _b.find(c => c.code.toLowerCase() === app_store.userPreferences.currency_id.toLowerCase());
        }
    }
    handleLanguageChange(id) {
        const selectedLanguage = this.languages.find(l => l.code === id);
        if (selectedLanguage) {
            this.selectedLanguage = selectedLanguage;
        }
    }
    handleCurrencyChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        const selectedCurrency = this.currencies.find(c => c.code === id);
        if (selectedCurrency) {
            this.selectedCurrency = selectedCurrency;
        }
    }
    handleConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        changeLocale(this.selectedLanguage.direction, matchLocale(this.selectedLanguage.code));
        updateUserPreference({
            currency_id: this.selectedCurrency.code,
            language_id: this.selectedLanguage.code,
        });
        localStorage.setItem('user_preference', JSON.stringify({
            currency_id: this.selectedCurrency.code,
            language_id: this.selectedLanguage.code,
            direction: this.selectedLanguage.direction,
        }));
        if (app_store.currentPage === 'checkout') {
            this.resetBooking.emit(null);
        }
        this.closeDialog.emit(null);
    }
    handleKeyDown(e) {
        const index = this.selectedIndex;
        const lastIndex = this.languages.length - 1;
        let itemsPerRow = 4;
        if (window.innerWidth < 640) {
            itemsPerRow = 3;
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = index === lastIndex ? 0 : index + 1;
            this.selectedIndex = nextIndex;
            this.langEl[nextIndex].focus();
        }
        else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = index === 0 ? lastIndex : index - 1;
            this.selectedIndex = prevIndex;
            this.langEl[prevIndex].focus();
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = index < itemsPerRow ? lastIndex - (itemsPerRow - 1 - index) : index - itemsPerRow;
            if (prevIndex >= 0 && prevIndex <= lastIndex) {
                this.selectedIndex = prevIndex;
                this.langEl[prevIndex].focus();
            }
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = index + itemsPerRow > lastIndex ? (index + itemsPerRow) % itemsPerRow : index + itemsPerRow;
            if (nextIndex >= 0 && nextIndex <= lastIndex) {
                this.selectedIndex = nextIndex;
                this.langEl[nextIndex].focus();
            }
        }
    }
    render() {
        var _a;
        return (h("div", { key: '343d931eba7ac47ef43909a17c665e528144d51a', class: "picker-container" }, h("p", { key: '2a21289700e2bc0e0f66cbde2f3bc32460d1b825', class: "picker-title" }, "Display settings"), h("div", { key: '840e3a31d55cfc19af91e040b4bebe4683aeaaf1', role: "radiogroup", "aria-required": "false", "aria-label": "booking engine language", onKeyDown: e => this.handleKeyDown(e), class: "language-grid", tabIndex: 0 }, this.languages.map((language, i) => {
            var _a, _b, _c;
            return (h("button", { ref: el => (this.langEl[i] = el), type: "button", role: "radio", tabIndex: 0, value: language.code, "aria-labelledby": language.description, "aria-checked": ((_a = this.selectedLanguage) === null || _a === void 0 ? void 0 : _a.code) === language.code ? 'true' : 'false', onClick: () => this.handleLanguageChange(language.code), class: cn('language-button', {
                    'language-button-selected': ((_b = this.selectedLanguage) === null || _b === void 0 ? void 0 : _b.code) === language.code,
                }) }, h("img", { src: language['flag'], alt: language.code, class: "language-flag" }), h("span", null, language.description), h("input", { type: "radio", "aria-hidden": "true", tabIndex: -1, checked: ((_c = this.selectedLanguage) === null || _c === void 0 ? void 0 : _c.code) === language.code, value: language.code, class: "hidden-radio" })));
        })), h("ir-select", { key: '1b49a33e90623fb8df563c6cdefdc7245d608c4c', variant: "double-line", value: (_a = this.selectedCurrency) === null || _a === void 0 ? void 0 : _a.code, onValueChange: this.handleCurrencyChange.bind(this), label: "Currency", select_id: "currency_selector", data: this.currencies.map(currency => ({
                id: currency.code,
                value: `${currency.code} ${(0).toLocaleString('en-US', { style: 'currency', currency: currency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim().replace(currency.code, '')}`,
            })) }), h("div", { key: 'c5a160825b253ad6bc3ec7bcb573279e585dc935', class: "actions-container" }, h("ir-button", { key: '3872aec09a2b5048ee63221005c5c3f938a2c3f1', size: "md", label: "Confirm", class: "confirm-button", onClick: this.handleConfirm.bind(this) }), h("ir-button", { key: '59e2f77e7d7d1f1138341eefa01b3799600c34de', onButtonClick: () => this.closeDialog.emit(null), size: "md", label: "Cancel", variants: "outline", class: "cancel-button" }))));
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
                            "path": "@/models/commun",
                            "id": "src/models/commun.ts::ICurrency"
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
                            "path": "@/models/commun",
                            "id": "src/models/commun.ts::IExposedLanguages"
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
            "selectedCurrency": {},
            "selectedLanguage": {}
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
            }, {
                "method": "resetBooking",
                "name": "resetBooking",
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
