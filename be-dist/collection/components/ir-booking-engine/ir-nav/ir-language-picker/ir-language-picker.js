import app_store, { changeLocale, onAppDataChange, updateUserPreference } from "../../../../stores/app.store";
import { cn, matchLocale } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrLanguagePicker {
    constructor() {
        this.langEl = [];
        this.selectedIndex = 0;
        this.currencies = undefined;
        this.languages = undefined;
        this.selectedOptions = undefined;
    }
    async componentWillLoad() {
        await this.init();
        onAppDataChange('userPreferences', newValue => {
            this.selectedOptions = { language: this.languages.find(l => l.code === newValue.language_id), currency: this.currencies.find(l => l.code === newValue.currency_id) };
        });
    }
    componentDidLoad() {
        var _a;
        const index = this.languages.findIndex(l => l.code === this.selectedOptions.language.code);
        if (index !== -1) {
            (_a = this.langEl[index]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    async init() {
        if (this.languages && this.currencies) {
            this.selectedOptions = {
                language: this.languages[0],
                currency: this.currencies[0],
            };
        }
    }
    handleLanguageChange(id) {
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
        return (h("div", { key: '73220396b3bfbdb24f8fa2649a16ede06ee233e7', class: "p-4 sm:px-6" }, h("p", { key: '6d3fddaefa82388c9ba181cdac061ff5dc0b8206', class: "title mb-5" }, "Display settings"), h("div", { key: '7d0cdc90b1040ce07e0e4f99abc730b669030ae0', role: "radiogroup", "aria-required": "false", "aria-label": "booking engine language", onKeyDown: e => this.handleKeyDown(e), class: "mb-6 grid grid-cols-3 gap-2.5 outline-none sm:grid-cols-4", tabIndex: 0 }, this.languages.map((language, i) => {
            var _a, _b, _c;
            return (h("button", { ref: el => (this.langEl[i] = el), type: "button", role: "radio", tabIndex: 0, value: language.code, "aria-labelledby": language.description, "aria-checked": ((_a = this.selectedOptions) === null || _a === void 0 ? void 0 : _a.language.code) === language.code ? 'true' : 'false', onClick: () => this.handleLanguageChange(language.code), class: cn('flex items-center gap-3 rounded-sm px-2 py-2 pr-4 transition-colors duration-300 ease-in-out hover:bg-[hsla(var(--brand-100),13%)]', {
                    'bg-[hsla(var(--brand-100),8%)]': ((_b = this.selectedOptions) === null || _b === void 0 ? void 0 : _b.language.code) === language.code,
                }) }, h("img", { src: language['flag'], alt: language.code, class: 'size-4 rounded-full' }), h("span", null, " ", language.description), h("input", { type: "radio", "aria-hidden": "true", tabindex: "-1", checked: ((_c = this.selectedOptions) === null || _c === void 0 ? void 0 : _c.language.code) === language.code ? true : false, value: language.code, class: 'hidden' })));
        })), h("ir-select", { key: 'bd568dfb41f2201a0ef0522589926c373f305a6e', variant: "double-line", value: app_store.userPreferences.currency_id, onValueChange: this.handleCurrencyChange.bind(this), label: "Currency", select_id: "currency_selector", data: this.currencies.map(currency => ({
                id: currency.code,
                value: `${currency.code} ${currency.symbol}`,
            })) }), h("div", { key: 'fafdfed283e83ae2c794425b9370e788141cf2e1', class: "mt-8 flex w-full flex-col  gap-4 md:flex-row-reverse" }, h("ir-button", { key: 'f4423a1cadea77cc3f54014d63d79aac03b06310', size: "md", label: "Confirm", class: "w-full md:w-fit", onClick: this.handleConfirm.bind(this) }), h("ir-button", { key: '47c049cf3d614a019066a00de3cc0cfeffe3e0b4', onButtonClick: () => this.closeDialog.emit(null), size: "md", label: "Cancel", variants: "outline", class: "w-full md:w-fit" }))));
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
