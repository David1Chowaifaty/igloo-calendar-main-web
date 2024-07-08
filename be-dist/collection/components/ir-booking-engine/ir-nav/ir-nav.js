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
        this.menuShown = true;
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
                return (h("ir-user-profile", { class: 'flex-1', user_data: {
                        email: checkout_store.userFormData.email,
                        first_name: checkout_store.userFormData.firstName,
                        last_name: checkout_store.userFormData.lastName,
                        country_id: checkout_store.userFormData.country_id,
                        mobile: checkout_store.userFormData.mobile_number,
                        country_phone_prefix: checkout_store.userFormData.country_phone_prefix.toString(),
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
    async handleItemSelect(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        switch (id) {
            case 1:
                return this.routing.emit('booking-listing');
            case 2:
                await new AuthService().signOut();
                this.signOut.emit(null);
                return;
            case 3: {
                this.routing.emit('user-profile');
            }
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: '7f22922c5323065ce7520c0594b3487c68d3cbbb' }, h("nav", { key: '762b135eca77a968e74e4edcccb8d45d9122706c', class: "ir-nav" }, h("div", { key: '85b99bc3a73e35c3ac34d77207c8ea67c5fe2b7c', class: "ir-nav-container" }, !isInjected && (h("div", { key: 'e2a1700b434b96d65d1a5a1623ea00624d9e264b', class: "ir-nav-left" }, h("a", { key: 'cffd1e2e8b0b7f71c5e8586ed0a7fe70a941b051', "aria-label": "home", target: "_blank", href: `https://${this.website}` }, h("img", { key: '7c191a3457c43925c55ebe83ce6de0d9c874f6f1', src: ((_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.affiliate) ? (_c = (_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate.sites[0]) === null || _c === void 0 ? void 0 : _c.logo : this.logo, alt: `${(_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name}, ${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name}`, class: "ir-nav-logo" })), h("div", { key: '42e757817bcf5d23a9f2f9a66f2519574260d300', class: "ir-nav-property-details" }, h("h3", { key: 'ec79d9d4ea7de98fcfcfc8e36e91e6b129121f0d', class: "ir-property-name" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.name), h("button", { key: '5b1bbdb05ced9923cdc3ee09df80600f97a2556b', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocation(), h("span", { key: 'c44cedcc400ab3eb9d31c79adf4b4ddc43ccbe4d', class: 'mx-1' }), h("svg", { key: 'd0aabc6cb6a8c4c356615a3a3dcfd87aeb17d1c1', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: '3ad99a9d0fe6de755efb5084deee125de2c3bf92', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: '70b7156f4e56d8cf7b1b669b51ed44035b40d667' }, "Location")))))), h("div", { key: '26e49d2334c224aff993f435671a3bc11b820424', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })) : (this.menuShown && (h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))), this.showBookingCode && this.showCurrency && (h("ir-button", { key: '3e1871e45a6da125b67daaa1b8bb07580b85d093', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() }))), h("ul", { key: 'aa9266269fd0b9a7bcbbf63218a7545e51fb6d11', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: 'd223229560b10583efc4f5a9711519c873e566f3' }, h("ir-button", { key: 'b653f96fb55f61a2fd54f6be0b4c7255b4ccb6cf', variants: "ghost", haveLeftIcon: true, title: "home", onButtonClick: () => window.open(`https://${this.website}`, '_blank') }, h("p", { key: '132fb19e1fe0245e241367055dc56e9ebd21896c', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: 'c5582a456138abb50dcfbf5bdd6cf7365568ce38', slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && this.showBookingCode && (h("li", { key: '76febfba72f931ab0cf99d4b83a3fbc94ebac93e' }, h("ir-button", { key: '72676a2d33ce7cf0bd59e4a8f89cae4db239f3b6', variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), this.showCurrency && h("li", { key: '9acc06fb87f14eebe20b56946015dfbe0841f11f' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }))) : (this.menuShown && (h("li", null, h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))))))), h("ir-sheet", { key: '3b20722c138890f545a21f9f04d775b96870987b', ref: el => (this.sheetRef = el) }, h("ul", { key: '84cd5ca36b1bf4eec4559cb3dbab7517d10c0fc7', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: 'dec6616bdce267b7fff2baf4e47b769aac33bfb0' }, this.renderLanguageTrigger()), !isInjected && (h("li", { key: 'a31ad088fa7fb7c3bc289bdb589a35bce2482a55' }, h("ir-button", { key: 'a3b208b5a3ecb61b7487e64c8e32eed9baa758e1', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: '1fda2d2f0508e529a13db7fdcae3a606a1468755' }, h("ir-button", { key: '2759d4e0aa7427dd5a5f9a562415843ca8e6916c', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), !app_store.is_signed_in && h("ir-modal", { key: 'dacd18d665e932e202e0b859a59f443ca5de4389', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '92d679ccc49049f9a3b87c95876c6fc6027a45df', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
            },
            "menuShown": {
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
                "attribute": "menu-shown",
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
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\" | \"user-profile\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }, {
                "method": "signOut",
                "name": "signOut",
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
