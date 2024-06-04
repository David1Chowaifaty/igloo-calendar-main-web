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
        var _a, _b, _c, _d, _e, _f, _g;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: '5937c719cec97595fb8df675c59814b03f306344' }, h("nav", { key: '8be2f3fd916b90fc163b59aca91b0a3958dfe9ff', class: "ir-nav" }, h("div", { key: 'a5ce0f40529fad6dbf7ce0356f7c3456c026e287', class: "ir-nav-container" }, !isInjected && (h("div", { class: "ir-nav-left" }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: `${(_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name}, ${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name}`, class: "ir-nav-logo" })), h("div", { class: "ir-nav-property-details" }, h("h3", { class: "ir-property-name" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name), h("button", { onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area, false), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.city.name), this.renderLocationField((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.country.name), h("span", { class: 'mx-1' }), h("svg", { slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", null, "Location")))))), h("div", { key: '313ab9ea925493af5bfd26eceec3e4cf69fb752e', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, h("ir-button", { key: 'eabdc21bd1e61d9c2fc992708d8908cad5f97920', class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }), h("ir-button", { key: '4fcef3f67876651eeb4f001f192286c3e00729f0', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() })), h("ul", { key: '4c7f1fa7ec3e659574d9fc837c6f1270922bb1a3', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: 'ce204fdef500ec3300adfe6de5db96fe190af70e' }, this.renderLanguageTrigger()), !this.isBookingListing && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })))))), h("ir-sheet", { key: '7c3dab903c238ff1ad9ab3ed3aecaa683d4f18d5', ref: el => (this.sheetRef = el) }, h("ul", { key: '4f36d53389712138e326466412938de87e336fa4', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: 'efb8eca3ff5b1e3b9ad5cbeb044ba2a365320852' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'c5af3cf9118eeb566a81389a9eb21323a2bad860' }, h("ir-button", { key: 'e777b441fb11269cb4a56d3b2bce5a07a69b2804', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), h("ir-modal", { key: '063b5764861a9c88a2cbabde95d188de402655e3', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: 'bedf915e27227876d274d5f4fc702b388be41cd8', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
