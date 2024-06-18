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
        this.showBookingCode = true;
        this.showCurrency = true;
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
        console.log('close dialog');
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
    renderLocation() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const affiliate = app_store.app_data.affiliate;
        if (affiliate) {
            return [(_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.city.name) !== null && _b !== void 0 ? _b : null, (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name) !== null && _d !== void 0 ? _d : null].join(', ');
        }
        return [(_f = (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area) !== null && _f !== void 0 ? _f : null, (_h = (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.city.name) !== null && _h !== void 0 ? _h : null, (_k = (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.country.name) !== null && _k !== void 0 ? _k : null].join(', ');
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
        console.log((_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.affiliate);
        return (h(Fragment, { key: '628c2bb201e7ffc4b6ec33c147f2b85ffba08ffa' }, h("nav", { key: '69d68ea999630dc6797d5d33fa226b7ea66004ee', class: "ir-nav" }, h("div", { key: '379d7060e096d82336af3cd43d543dfcace1a105', class: "ir-nav-container" }, !isInjected && (h("div", { class: "ir-nav-left" }, h("a", { "aria-label": "home", href: `${(_b = this.website) === null || _b === void 0 ? void 0 : _b.replace('www.', 'https://')}` }, h("img", { src: ((_c = app_store.app_data) === null || _c === void 0 ? void 0 : _c.affiliate) ? (_e = (_d = app_store.app_data) === null || _d === void 0 ? void 0 : _d.affiliate.sites[0]) === null || _e === void 0 ? void 0 : _e.logo : this.logo, alt: `${(_f = app_store.property) === null || _f === void 0 ? void 0 : _f.name}, ${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.country.name}`, class: "ir-nav-logo" })), h("div", { class: "ir-nav-property-details" }, h("h3", { class: "ir-property-name" }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.name), h("button", { onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocation(), h("span", { class: 'mx-1' }), h("svg", { slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", null, "Location")))))), h("div", { key: '05ac1435687c58df871befa9d1fb9eff28115224', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })) : (h("ir-menu", { data: [
                { id: 1, item: 'View Bookings' },
                { id: 2, item: 'Sign out' },
            ] }, h("ir-user-avatar", { slot: "menu-trigger" }))), this.showBookingCode && this.showCurrency && (h("ir-button", { variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() }))), h("ul", { key: '0ecc8e0d2228897c8c5e315b89221f66ce51b062', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && this.showBookingCode && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), this.showCurrency && h("li", null, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }))) : (h("li", null, h("ir-menu", { data: [
                { id: 1, item: 'View Bookings' },
                { id: 2, item: 'Sign out' },
            ] }, h("ir-user-avatar", { slot: "menu-trigger" }))))))), h("ir-sheet", { key: '909196e44383f7bc2374c23ce8258344bbbfd156', ref: el => (this.sheetRef = el) }, h("ul", { key: '917013e9fd1b82cf7243b9d5779dbd311ebaa983', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: 'ecbc1c4b11b6cf69ffbaca9940bc1fd39fd21f29' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: '336fe1397aeb2de62053bca3e1e5e421d58e7af9' }, h("ir-button", { key: '7f535f5bd60db69a08246f7c2f4a31d708d1d1dc', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), !app_store.is_signed_in && h("ir-modal", { ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: 'a4e678a11276ba2b7472ead96ceb770faaf8349b', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
            },
            "showBookingCode": {
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
                "attribute": "show-booking-code",
                "reflect": false,
                "defaultValue": "true"
            },
            "showCurrency": {
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
                "attribute": "show-currency",
                "reflect": false,
                "defaultValue": "true"
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
