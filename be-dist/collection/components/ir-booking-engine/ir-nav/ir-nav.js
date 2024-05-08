import { Fragment, h } from "@stencil/core";
import app_store from "../../../stores/app.store";
import { cn } from "../../../utils/utils";
export class IrNav {
    constructor() {
        this.currencies = undefined;
        this.languages = undefined;
        this.logo = undefined;
        this.website = undefined;
        this.currentPage = null;
    }
    handleButtonClick(e = undefined, page) {
        if (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        this.currentPage = page;
        setTimeout(() => {
            this.dialogRef.openModal();
        }, 50);
    }
    handleCloseDialog(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.dialogRef.closeModal();
    }
    renderDialogBody() {
        switch (this.currentPage) {
            case 'language':
                return h("ir-language-picker", { slot: "modal-body", currencies: this.currencies, languages: this.languages });
            case 'auth':
                return h("ir-auth", { slot: "modal-body" });
            case 'booking_code':
                return h("ir-booking-code", { slot: "modal-body" });
            default:
                return null;
        }
    }
    renderLocationField(fieled, withComma = true) {
        if (!fieled) {
            return '';
        }
        return withComma ? `, ${fieled}` : fieled;
    }
    renderLanguageTrigger() {
        const currency = app_store.currencies.find(currency => currency.code.toString() === app_store.userPreferences.currency_id);
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        if (!currency || !country) {
            return null;
        }
        return (h("button", { type: "button", class: "button-outline w-full", onClick: () => this.handleButtonClick(undefined, 'language') }, h("ir-icons", { name: "globe" }), h("p", null, country === null || country === void 0 ? void 0 : country.description)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: 'cd0a57d25149dea9ee0aa707eb695311279404ea' }, h("nav", { key: '8b9bf9caf59ce68df7bcd691cfdd039a433a193e', class: "w-full bg-white" }, h("div", { key: 'fb0c8693b82dd41c6862dcadb08a713145f72fc1', class: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6 xl:px-0" }, !isInjected && (h("div", { class: "flex items-center space-x-4 " }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: "logo", class: "h-10 w-auto  object-fill" })), h("div", { class: "hidden md:block" }, h("h3", { class: "text-lg font-medium" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name), h("p", { class: "flex items-center text-sm text-slate-700" }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.city.name), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.postal))))), h("div", { key: '5e695af6280cc52e14a3b0f51d646421ccaad7e0', class: cn('md:hidden', {
                'hidden ': isInjected,
            }) }, h("ir-button", { key: 'b1002eed012153408cfbfc56806f3556310bca87', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: 'bed9685d5a4d4f5b964b55f715375ebdf6c3a022', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: '8b32bbdb2821cd5fdb1c681d1c62585e45b63284', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: '2c6d26a3cf38889c6ee45c56610ae3856f0dee1b', class: cn('items-center gap-2 md:inline-flex', {
                'hidden md:inline-flex': !isInjected,
                'flex flex-1 justify-end': isInjected,
            }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "h-4 w-4" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: '1fd3b004462e874c126a094d7fe999329ab2f79e' }, this.renderLanguageTrigger()), h("li", { key: 'bb3bdce7eab3019b7876a37c8d6f5531a8539d93' }, h("ir-button", { key: 'ca78b38b8243b908f35f3875398092b2a259e547', variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') }))))), h("ir-sheet", { key: 'f9bc9ba66800efdacbc45941fc1ce21148ad8d54', ref: el => (this.sheetRef = el) }, h("ul", { key: 'cc58788123b8dc36711655bf4436e3c931b12c68', slot: "sheet-content", class: "hidden flex-col gap-2 p-4 py-6" }, h("li", { key: '86e22dd1586c909d97a5c45156216f9bd873a22d' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'a6f8ba696d857a798b4b2d1d6855aa1b08684e21' }, h("ir-button", { key: '0edb53819ebe723c07783c79651b7f9f64d0e83c', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: 'ed983b743a40a8783daad471109a1a023c8179c7' }, h("ir-button", { key: 'a9072c5d50ebc3a4b8371df41c460ab2bd56e5d7', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-dialog", { key: '9d1443d50b4cece0ba2a1a93385e9d989c20fcba', ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
    }
    static get is() { return "ir-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-nav.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-nav.css"]
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
            },
            "logo": {
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
                "attribute": "logo",
                "reflect": false
            },
            "website": {
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
                "attribute": "website",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "currentPage": {}
        };
    }
    static get listeners() {
        return [{
                "name": "closeDialog",
                "method": "handleCloseDialog",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-nav.js.map
