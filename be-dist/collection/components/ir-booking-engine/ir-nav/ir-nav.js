import { Fragment, h } from "@stencil/core";
import app_store from "../../../stores/app.store";
import { cn, renderPropertyLocation } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
import { AuthService } from "../../../services/api/auth.service";
import { checkout_store } from "../../../stores/checkout.store";
export class IrNav {
    constructor() {
        this.preferences = { currency: null, language: null };
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
    componentWillLoad() {
        var _a;
        this.website = app_store.app_data.affiliate ? (_a = app_store.app_data.affiliate.sites[0]) === null || _a === void 0 ? void 0 : _a.url : this.website;
    }
    handleWebsiteChange(newValue, oldValue) {
        var _a;
        if (newValue !== oldValue) {
            this.website = app_store.app_data.affiliate ? (_a = app_store.app_data.affiliate.sites[0]) === null || _a === void 0 ? void 0 : _a.url : newValue;
        }
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
    renderLanguageTrigger() {
        if (this.isBookingListing) {
            return;
        }
        const currency = app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase());
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        if (!currency || !country) {
            return null;
        }
        const c = (0).toLocaleString('en-US', { style: 'currency', currency: currency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim();
        this.preferences = {
            currency: `${currency.code} ${c}`,
            language: country === null || country === void 0 ? void 0 : country.description,
        };
        return (h("div", { class: "flex" }, h("button", { type: "button", class: "ir-language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("p", null, c)), h("button", { type: "button", class: "ir-language-trigger", onClick: () => this.handleButtonClick(undefined, 'language') }, h("p", null, country === null || country === void 0 ? void 0 : country.description))));
    }
    handleSignIn(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (app_store.app_data.injected) {
            return (window.location.href = `https://${app_store.property.perma_link}.bookingmystay.com/bookings`);
        }
        this.currentPage = 'auth';
        this.modalRef.openModal();
    }
    async handleItemSelect(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        switch (id) {
            case 1:
                this.screenChanged.emit('booking-listing');
                return this.routing.emit('booking-listing');
            case 2:
                await new AuthService().signOut();
                this.signOut.emit(null);
                return;
            case 3: {
                this.screenChanged.emit('user-profile');
                this.routing.emit('user-profile');
            }
            default:
                return null;
        }
    }
    showAgentCode() {
        const currentPage = app_store.currentPage;
        return (currentPage === 'booking' &&
            this.showBookingCode &&
            app_store.property.agents &&
            app_store.property.roomtypes.filter(rt => rt.rateplans.some(rp => rp.is_targeting_travel_agency)).length > 0);
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: '827e1c9dfa3cd46f91502ea50587ee882b6969b0' }, h("nav", { key: 'e5b15c0b5bd01d738d56ba266cfc73d3e34b59a3', class: "ir-nav" }, h("div", { key: '919526c544417ddd7a243fccb2187807a6f763cb', class: "ir-nav-container", "data-state": isInjected ? 'injected' : 'default' }, !isInjected && (h("div", { key: '7e75e584432265e0c1dca4c0c974d7dbd3a69017', class: "ir-nav-left" }, h("a", { key: '6469406cc352392717943708228754a25e6c6187', "aria-label": "home", target: "_blank", href: `https://${this.website}` }, h("img", { key: 'fc96291460b5939710ffeadf2470381b9017dffd', src: ((_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.affiliate) ? (_c = (_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate.sites[0]) === null || _c === void 0 ? void 0 : _c.logo : this.logo, alt: `${(_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name}, ${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name}`, class: "ir-nav-logo" })), h("div", { key: '267df5451025ac2769b4c2768b1d9374889f53de', class: "ir-nav-property-details" }, h("h3", { key: '51bb1b3eb178df5097b294b719b6c283a3ffd9d3', class: "ir-property-name" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.name), h("button", { key: '71f48f499ebfed5dd237e2a6a7960fbad44451de', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, renderPropertyLocation(), h("span", { key: '9811a4d00d46974369dc80e23b02696c0349a5f6', class: 'mx-1' }), h("svg", { key: '2607c0ee697e1d3a1df20b60bdb683b05895de9d', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: '9244f2b0934a7f5684ee47665f5cf40f83a07ba1', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: '18c7cee564a735a6393f76d5c9fafe57a0934cbb' }, "Location")))))), h("div", { key: '0854b996ac5e3204945bd35922c8d5bab0baf472', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h(Fragment, null, h("div", { class: "hidden md:block" }, h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })), h("div", { class: "md:hidden" }, h("ir-button", { class: "ir-sheet-button", variants: "icon", iconName: "circle-user", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })))) : (this.menuShown && (h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))), this.showBookingCode && this.showCurrency && h("ir-button", { key: '63cfcef43de323101a821e79a02046aa9d72f0fc', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() })), h("ul", { key: 'c1241c467c29e490add96a349226e8da7b062bd6', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: '5b87febc03aedd9238a2066c104502983ebe0983' }, h("ir-button", { key: 'e11812b7f5413421c482b0bbcec1450cc4f93946', variants: "ghost", haveLeftIcon: true, title: "home", onButtonClick: () => window.open(`https://${this.website}`, '_blank') }, h("p", { key: 'debe07bcef45dd752b596633ca310eed8a8daa4e', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: '8328dd415b01b91faa2dccd96f57ab7d07bf85c2', slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), this.showAgentCode() && (h("li", { key: 'a18bc059c78e85a0cda7e8adee2418579bcfa03b' }, h("ir-button", { key: '4bf285cab8710743cabf06e1d411e417cf99aa31', variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), this.showCurrency && h("li", { key: 'bb3b502e69fd32ad5b51426744d4b26687fd620a' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: this.handleSignIn.bind(this) }))) : (this.menuShown && (h("li", null, h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))))))), h("ir-sheet", { key: '23528405b0741153fe9dc0d5429ffbf88d9c35d5', ref: el => (this.sheetRef = el) }, h("ul", { key: 'd7bea25fc6e3d9309b9f3c549f684490d10e20bc', slot: "sheet-content", class: "ir-sheet-content" }, !isInjected && (h("li", { key: '04acd5839f983860772a699a91471718a37f0a74' }, h("ir-button", { key: 'e2c3a65810c964b72cb4c6a80eb59f3230cf267b', onButtonClick: () => window.open(`https://${this.website}`), class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), !app_store.is_signed_in && (h("li", { key: '06cba8246154184f482b05590355fda09ef0cbea' }, h("ir-button", { key: 'c04f14c1c7d4cc9cf825df2cf795deab3e2a37de', buttonClassName: "justify-start", class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) }))), h("li", { key: 'c61b08e1df1c888db45071c0a10edaa7261e6d8c' }, h("ir-button", { key: 'a7feb034d18e241ce66f6d281f806507bf12740e', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.currency, name: "home" })), h("li", { key: '5b88dfc776d7e02f60076af35672181fb02f4ccc' }, h("ir-button", { key: '893da5b846fafe06d094370fdb67df14493ded16', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.language, name: "home" })), this.showAgentCode() && (h("li", { key: '665020c02cd2ea2a01fd83954d16d0cb6b6afc5a' }, h("ir-button", { key: '7a4c5a106a51ab8ddedc0455afbc70e4d29da543', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))))), !app_store.is_signed_in && h("ir-modal", { key: 'a317bb80e8fd16d0d80310cfa00f5e0d5624b1fd', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '425dd32ec49508ca5a8ca6309f67e17bed9c358d', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
                "mutable": true,
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
                            "path": "@/models/commun",
                            "id": "src/models/commun.ts::pages"
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
            }, {
                "method": "screenChanged",
                "name": "screenChanged",
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
                            "path": "@/models/commun",
                            "id": "src/models/commun.ts::pages"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "website",
                "methodName": "handleWebsiteChange"
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
