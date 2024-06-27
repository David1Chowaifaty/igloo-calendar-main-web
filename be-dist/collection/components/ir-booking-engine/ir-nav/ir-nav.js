import { Fragment, h } from "@stencil/core";
import app_store from "../../../stores/app.store";
import { cn } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
import { AuthService } from "../../../services/api/auth.service";
import { checkout_store } from "../../../stores/checkout.store";
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
            case 'profile':
                return (h("ir-user-profile", { user_data: {
                        email: checkout_store.userFormData.email,
                        first_name: checkout_store.userFormData.firstName,
                        last_name: checkout_store.userFormData.lastName,
                        country_id: checkout_store.userFormData.country_id,
                        mobile: checkout_store.userFormData.mobile_number,
                    }, slot: "modal-body" }));
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
            return [(_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.city.name) !== null && _b !== void 0 ? _b : null, (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name) !== null && _d !== void 0 ? _d : null].filter(f => f !== null).join(', ');
        }
        return [(_f = (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area) !== null && _f !== void 0 ? _f : null, (_h = (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.city.name) !== null && _h !== void 0 ? _h : null, (_k = (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.country.name) !== null && _k !== void 0 ? _k : null].filter(f => f !== null).join(', ');
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
    handleItemSelect(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        console.log('id', id);
        switch (id) {
            case 1:
                return this.routing.emit('booking-listing');
            case 2:
                return new AuthService().signOut();
            case 3: {
                this.currentPage = 'profile';
                this.dialogRef.openModal();
            }
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: '97e27d1467567ae87a801c5db89a70e5fa719467' }, h("nav", { key: '864e007378e509ae64cb6e19c16324944a46c7c7', class: "ir-nav" }, h("div", { key: 'baba5106a5b6d614aaf525c7574380e3c7309a00', class: "ir-nav-container" }, !isInjected && (h("div", { key: '38d40d79f2f8aa252764e8718589991339d96b54', class: "ir-nav-left" }, h("a", { key: 'bf6bf88bac55104d34578226321ca1148574b6a7', "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { key: '27b769e868823aec94a125c86758f6483396fc0d', src: ((_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate) ? (_d = (_c = app_store.app_data) === null || _c === void 0 ? void 0 : _c.affiliate.sites[0]) === null || _d === void 0 ? void 0 : _d.logo : this.logo, alt: `${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.name}, ${(_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name}`, class: "ir-nav-logo" })), h("div", { key: 'ce0e25d5d3a74c6716f552b88f34b760a8f4e5db', class: "ir-nav-property-details" }, h("h3", { key: 'ca9670640a45ed1b4d60d27a102fd1e9b28fd917', class: "ir-property-name" }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.name), h("button", { key: '468c3602be71e8c724e281d34c1709fc04e0caf4', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocation(), h("span", { key: '69a0880810051809f63aa516b9fe8ff10a3a9a74', class: 'mx-1' }), h("svg", { key: 'f497bca07b2562d1bf977b3a8e8daaad526ac732', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: '6d0778e93bb2671c6a1c0ce15e798e0ee1e4dcbc', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: 'a41e98b91cb1571151c6f7c692de796ebdb05dce' }, "Location")))))), h("div", { key: '97aa5242326c8275623bd0f8b23dea1bc215a2ba', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })) : (h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" }))), this.showBookingCode && this.showCurrency && (h("ir-button", { key: '83b20779a3fe910174f864d1eada03b41cb55d37', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() }))), h("ul", { key: 'c4031ef0aec4051f43cb8bbd5649c58ef973a5fe', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: '8e98daa3e3369392593a98f19d2999f94a1c2487' }, h("ir-button", { key: '508e8bd39077f243086fdc8015ccee00a3593c3e', variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { key: 'f4b26b1fdf8a2ec5a531d1f0ac966f2994e30835', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: 'b279fdf847acec2260ca8e734dcf00810c149634', slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && this.showBookingCode && (h("li", { key: 'e870287c2f88219c4e44d15a7e5951489e9c13a2' }, h("ir-button", { key: '4a29930081db060e8f41e45a6e0775b9426963a7', variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), this.showCurrency && h("li", { key: 'b410e336c09fa2eeb43165a28044cdb69a545811' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }))) : (h("li", null, h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" }))))))), h("ir-sheet", { key: 'da436f31548caf3f8472668fa5e66eb08885bfbd', ref: el => (this.sheetRef = el) }, h("ul", { key: '1152696682aac688e04015d40d210832ef7746b4', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: '0106f7077ad5e5261518e8943de6f25fcb7f2c7e' }, this.renderLanguageTrigger()), !isInjected && (h("li", { key: '262f339bc74db6b00d1efd0d02d06cc669b3323e' }, h("ir-button", { key: 'd2b44fb54cf3d190f9895a1033cd27a2273aa641', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'a40c031a009c1b60b458fd84ff18fda4540f9c98' }, h("ir-button", { key: 'be186f42345a6c9a27683a91c03349cd1ab87153', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), !app_store.is_signed_in && h("ir-modal", { key: 'ab05d17b039d75a09e5b687f02435cd5c4ac8fd8', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: 'd834ceacde2d06a5a4e22ba93a9c1217223129c0', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
    static get events() {
        return [{
                "method": "routing",
                "name": "routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "pages",
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }];
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
