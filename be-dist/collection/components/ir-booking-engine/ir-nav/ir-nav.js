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
            case 'booking_code':
                return h("ir-booking-code", { slot: "modal-body" });
            default:
                return null;
        }
    }
    renderLocationField(field, withComma = true) {
        if (!field) {
            return '';
        }
        return withComma ? `, ${field}` : field;
    }
    renderLanguageTrigger() {
        if (this.isBookingListing) {
            return;
        }
        const currency = app_store.currencies.find(currency => currency.code.toString() === app_store.userPreferences.currency_id);
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        console.log(currency, country);
        if (!currency || !country) {
            return null;
        }
        return (h("button", { type: "button", class: "language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("ir-icons", { name: "globe" }), h("p", null, country === null || country === void 0 ? void 0 : country.description)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: 'a410d94e5a7d0f8ac2741dc6150e5c76e437cd5f' }, h("nav", { key: '59a6fe22e28825dc2b38d39f88fbde2601c0e9c1', class: "nav" }, h("div", { key: '97c176b10064e91b15c6b8c9fef7394305056a46', class: "nav-container" }, !isInjected && (h("div", { class: "nav-left" }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: `${(_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name}, ${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name}`, class: "nav-logo" })), h("div", { class: "nav-property-details" }, h("h3", { class: "property-name" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name), h("p", { class: "property-location" }, this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name, false), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.city.name), this.renderLocationField((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.area), this.renderLocationField((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.postal))))), h("div", { key: '138607a6c2639c270f549fc5afea6f1a64294f31', class: `burger-menu ${isInjected ? 'nav-injected' : ''}` }, h("ir-button", { key: '884a5106c579122f573c2ce195c20349b7fadbdc', class: "sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }), h("ir-button", { key: '8ea37961dd1a807ab62ebf4891ec9dcb5d80e8cf', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: '031be1dfc1daed1211f1f1a7b80687c11eea83a1', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: '855b599dbc5e4b409a72e72faa012cd1a0f9df4a', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: 'e336429ca1371239f4be4b164780ec53ca0a38b1', class: cn('nav-links', { 'nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "icon-size" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: 'bc1b84e7f14bf4ac65ac0a0c319c3e73f12865e3' }, this.renderLanguageTrigger()), !this.isBookingListing && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })))))), h("ir-sheet", { key: 'aa7e499895480a6e9235fc9bdb530b6fdfaf50a0', ref: el => (this.sheetRef = el) }, h("ul", { key: 'a8e62acb79627d1e1021bfe7342c1b3be1d02714', slot: "sheet-content", class: "sheet-content" }, h("li", { key: 'c33dbb4e4278d9b886ae3e8e7f95523651dc9eb7' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'be7d3092d6c089726f438d745e23c80a22baefb2' }, h("ir-button", { key: 'd9d079a0f35fdb00b88b239fd7493311b2070d12', class: "sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), h("ir-modal", { key: '6a5a2155feec0e2fb5295b6dda22039b023ced40', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '5f0c26ef5222c7b8846d8378adaedbeb8422fd5c', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': '32rem' } }, this.renderDialogBody())));
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
