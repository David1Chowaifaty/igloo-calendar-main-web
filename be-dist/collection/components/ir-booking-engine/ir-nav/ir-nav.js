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
            case 'map':
                return h("ir-google-maps", { slot: "modal-body" });
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
        const currency = app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase());
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        if (!currency || !country) {
            return null;
        }
        return (h("div", { class: "flex" }, h("button", { type: "button", class: "ir-language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("p", null, (0).toLocaleString('en-US', { style: 'currency', currency: currency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim())), h("button", { type: "button", class: "ir-language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("p", null, country === null || country === void 0 ? void 0 : country.description))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: '801b7f113a9dce02d789b22df35a0a70bdc35217' }, h("nav", { key: '6b1ded29c721ae422b1fae5c93c07f680530b0a2', class: "ir-nav" }, h("div", { key: 'a935a9351371ed023f45e94e6a911fa5bef71800', class: "ir-nav-container" }, !isInjected && (h("div", { class: "ir-nav-left" }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: `${(_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name}, ${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name}`, class: "ir-nav-logo" })), h("div", { class: "ir-nav-property-details" }, h("h3", { class: "ir-property-name" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name), h("button", { onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name, false), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.area), this.renderLocationField((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.city.name), this.renderLocationField((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.postal), h("span", { class: 'mx-1' }), h("svg", { slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", null, "Location")))))), h("div", { key: 'db8681122256b9e1e97df0c910f39e8e80def8bd', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, h("ir-button", { key: 'd4df93b8a49e1e3db3ef1a7030d00837638803de', class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }), h("ir-button", { key: '9fb74e2b18bd9a69f5d3a25d2e6399d09601a2af', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() })), h("ul", { key: 'bd18a4a098002a70f9588838a701966eb5acd77a', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: 'faa83f7340f8f6ce0753acf2597ad9b1cf3c1122' }, this.renderLanguageTrigger()), !this.isBookingListing && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })))))), h("ir-sheet", { key: '07735b506af3ffb0653810d15d8709dba7b19532', ref: el => (this.sheetRef = el) }, h("ul", { key: 'd5be6018193a594d94afae431cbb2bc918d641b8', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: '66a6e83568f441ffcfb603643df0ece96e9b5e5a' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: '8930606a28db73ddc99c84775ca317719701811b' }, h("ir-button", { key: 'c43f832ffb5c6d702980aaa9bd308ef690ac0154', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), h("ir-modal", { key: '167a5b2fe76ef3031d3da685d43eb1ef87b2a20b', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '46869d49834a9cfa5013184ccdf3b777dbd2c033', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
    }
    static get is() { return "ir-nav"; }
    static get encapsulation() { return "scoped"; }
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
