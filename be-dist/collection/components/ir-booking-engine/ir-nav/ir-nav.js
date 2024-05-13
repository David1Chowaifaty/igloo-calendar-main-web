import { Fragment, h } from "@stencil/core";
import app_store from "../../../stores/app.store";
import { cn } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
export class IrNav {
    constructor() {
        this.currencies = undefined;
        this.languages = undefined;
        this.logo = undefined;
        this.website = undefined;
        this.isBookingListing = false;
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
        if (this.isBookingListing) {
            return;
        }
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
        return (h(Fragment, { key: 'e7bb8dbb7e069668126677e51fa20546f2debad2' }, h("nav", { key: '9b7df7465710b27e06d09d911b5797ff712f3b1f', class: "w-full bg-white" }, h("div", { key: '01f82b9d5ab83e18e5a4003a84cc558d2febba45', class: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6 xl:px-0" }, !isInjected && (h("div", { class: "flex items-center space-x-4 " }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: "logo", class: "h-10 w-auto  object-fill" })), h("div", { class: "hidden md:block" }, h("h3", { class: "text-lg font-medium" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name), h("p", { class: "flex items-center text-sm text-slate-700" }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.city.name), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.postal))))), h("div", { key: '454d0e01201490caef0449a0dca4a19db8b3ab53', class: cn('md:hidden', {
                'hidden ': isInjected,
            }) }, h("ir-button", { key: '03482c9e6ae30c7f1dd747aed5c4f3f9c513077a', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: '3b5889dda7fe64390155228d8b8beccb0ffd8cda', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: '217504686a0ddb2e595cf1c59afe024fd9d61dda', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: '5205ac56a1e30600736146d9dc2346b7d1df967f', class: cn('items-center gap-2 md:inline-flex', {
                'hidden md:inline-flex': !isInjected,
                'flex flex-1 justify-end': isInjected,
            }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "h-4 w-4" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: 'db4d7e9fd740f60c6cfcd6921e44ed741af1eb49' }, this.renderLanguageTrigger()), !this.isBookingListing && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))))), h("ir-sheet", { key: '951f4f16f42cd65c3cb8d560083994040d3a36fd', ref: el => (this.sheetRef = el) }, h("ul", { key: 'b9cfacb22904e3745e8d50cd31946abeeb4c3e21', slot: "sheet-content", class: "flex flex-col gap-2 p-4 py-6" }, h("li", { key: 'a8b20ada0c3d88579513f99e6090eff618e0334d' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'd1e7e843bc094468fd7545522e21a8306f4670a9' }, h("ir-button", { key: '2a6651a04d7cdfabbd276ded71474934b8768a53', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: 'f49d3f5e7ae22791d9dc7f52526b30e6cc514d4a' }, h("ir-button", { key: 'b4cbd5215191b679ee9cf61342bdb9adb0a01e9e', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-dialog", { key: '2766eeb4a072ec1dc0e2fcbdd8cf99c27748ecf1', ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
    }
    static get is() { return "ir-nav"; }
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
            },
            "isBookingListing": {
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
                "attribute": "is-booking-listing",
                "reflect": false,
                "defaultValue": "false"
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
