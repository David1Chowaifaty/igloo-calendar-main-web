import { Fragment, h } from "@stencil/core";
import app_store from "../../../stores/app.store";
import { cn, renderPropertyLocation } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
import { AuthService } from "../../../services/api/auth.service";
import { checkout_store } from "../../../stores/checkout.store";
import booking_store from "../../../stores/booking";
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
        this.logoOnly = false;
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
                return h("ir-booking-code", { ref: el => (this.bookingCodeRef = el), slot: "modal-body" });
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
        if (this.isBookingListing || app_store.currentPage === 'checkout') {
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
            return (window.location.href = `https://${app_store.property.perma_link}.bookingmystay.com/signin?lang=${app_store.userPreferences.language_id.toLowerCase()}`);
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
        return (h(Fragment, { key: 'df7b36b77cba0abe66dd4d3fb409e1e8950198dd' }, h("nav", { key: 'cfb6d3cc3d3a124d52345c443827a62360e5775f', class: "ir-nav" }, h("div", { key: '1bdc476d2464bf004ca903d92937c424a9ade005', class: "ir-nav-container", "data-state": isInjected ? 'injected' : 'default' }, !isInjected && (h("div", { key: 'aaa58db7f4f17413f9312e178dd8c043501b3096', class: "ir-nav-left" }, h("a", { key: '11c5a8e12d4a53dc5fd444d3bb78347ddffd057a', "aria-label": "home", target: "_blank", href: `https://${this.website}` }, h("img", { key: '3e53909ea04fc65f8c73fc44ca71cdfa1e74f5a1', loading: "lazy", src: ((_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.affiliate) ? (_c = (_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate.sites[0]) === null || _c === void 0 ? void 0 : _c.logo : this.logo, alt: `${(_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name}, ${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name}`, class: "ir-nav-logo" })), !this.logoOnly && (h("div", { key: '8d85838dc8ba58d9a75bedae6f64bb2d4d1bd0e3', class: "ir-nav-property-details" }, h("h3", { key: 'ffeb25a5eae2c12245a4680cbb607874b92284d0', class: "ir-property-name" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.name), h("button", { key: 'dec0b6bc536a57a8f40aeb0c1452439197549be4', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, renderPropertyLocation(), h("span", { key: 'c404c2fea8409c0ae72e9cb2f4e5f61ddd91955b', class: 'mx-1' }), h("svg", { key: 'b4049b9efd64bd88ebae1d452f27c0219ffa1463', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: 'b5186a775fe6b83131678af1c3bf74df9d7ebdfc', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: 'b36b4ca283b33a61d8b1dff843adec35560efe5e' }, localizedWords.entries.Lcz_Location))))))), !this.logoOnly && (h("div", { key: '200528dda7fc9e9d37ef93e01bdd074405fd6826', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h(Fragment, null, h("div", { class: "hidden md:block" }, h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })), h("div", { class: "md:hidden" }, h("ir-button", { class: "ir-sheet-button", variants: "icon", iconName: "circle-user", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })))) : (this.menuShown && (h("ir-menu", { data: [
                { id: 1, item: localizedWords.entries.Lcz_MyBookings },
                { id: 3, item: localizedWords.entries.Lcz_PersonalProfile },
                { id: 2, item: localizedWords.entries.Lcz_SignOut },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))), this.showBookingCode && this.showCurrency && h("ir-button", { key: 'bb2f17630bd4650a23826868a8b437e1f352e788', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() }))), !this.logoOnly && (h("ul", { key: '4293b6552c49023b65827942ae53dd6529bb61f0', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: '416f9e748abe1bdb8768491276aa63c5cf897e51' }, h("ir-button", { key: '006da2e144de3ef504d0f99e006cbac4beb1624c', variants: "ghost", haveLeftIcon: true, title: localizedWords.entries.Lcz_Home, onButtonClick: () => window.open(`https://${this.website}`, '_blank') }, h("p", { key: '0640373c19864ac37864cfceb9a8aaee1364f3bc', slot: "left-icon", class: "sr-only" }, localizedWords.entries.Lcz_Home), h("ir-icons", { key: '8b15e2179c64dfe313a35898780458dee192132c', slot: "left-icon", name: 'home', svgClassName: "ir-icon-size" })))), this.showAgentCode() && (h("li", { key: '90f68e1a9df19b1dfef1cca796f0910ee17dc9aa' }, !!booking_store.bookingAvailabilityParams.agent ? (h("div", { class: 'flex items-center' }, h("p", null, booking_store.bookingAvailabilityParams.agent_code), h("button", { title: localizedWords.entries.Lcz_Clear, class: 'ir-language-trigger', onClick: () => {
                this.bookingCodeRef.clearAgent();
            } }, h("ir-icons", { name: "xmark" })))) : (h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), this.showCurrency && h("li", { key: '05d90b7d63dcb86921d9cca964e45f391823b102' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: this.handleSignIn.bind(this) }))) : (this.menuShown && (h("li", null, h("ir-menu", { data: [
                { id: 1, item: localizedWords.entries.Lcz_MyBookings },
                { id: 3, item: localizedWords.entries.Lcz_PersonalProfile },
                { id: 2, item: localizedWords.entries.Lcz_SignOut },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" }))))))))), !this.logoOnly && (h("ir-sheet", { key: '8aab1459d49c9e285dbd0d00a78186fa54e7385b', ref: el => (this.sheetRef = el) }, h("ul", { key: '7dc6301d9a69bf947635e7ac61c83328272844b3', slot: "sheet-content", class: "ir-sheet-content" }, !isInjected && (h("li", { key: '68889c604b308feec49787e0b060ee5a4a62c82e' }, h("ir-button", { key: '96902d66bfaa1562acfa4042b0852df66a869f5b', onButtonClick: () => window.open(`https://${this.website}`), class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: localizedWords.entries.Lcz_Home, name: "home" }))), !app_store.is_signed_in && (h("li", { key: '2310fef1088503b7c256a975392eb3695b6c04fc' }, h("ir-button", { key: '09e24e165087a248f73c4a7a604851ee598532ea', buttonClassName: "justify-start", class: "ir-sheet-button", variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: this.handleSignIn.bind(this) }))), h("li", { key: '1ca204379bd5d2158d391011c50a630d7e82aca0' }, h("ir-button", { key: '9825da1ecbe50442e107947a26be6e2ed258f90f', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.currency, name: "home" })), h("li", { key: '80551aa73ee037f5b0fd11eb96eb0a20ad2f367e' }, h("ir-button", { key: '5a095fa09d33f7fb7e4516d8bea0b231134d9363', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.language, name: "home" })), this.showAgentCode() && (h("li", { key: '7b5a60d32cdf1ff663956e540df6d3fea41f3a8b' }, !!booking_store.bookingAvailabilityParams.agent ? (h("div", { class: 'booking-code flex items-center gap-1.5' }, h("p", { class: 'text-sm ' }, booking_store.bookingAvailabilityParams.agent_code), h("div", null, h("button", { title: localizedWords.entries.Lcz_Clear, class: 'ir-language-trigger', onClick: () => {
                this.bookingCodeRef.clearAgent();
            } }, h("ir-icons", { name: "xmark" }))))) : (h("ir-button", { class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))))))), !app_store.is_signed_in && h("ir-modal", { key: 'f2a54adb694e51305e100a23bae6a6847175d2f8', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '79adee2e4d67176eff46050b50d7bf65fe0fac62', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
            },
            "logoOnly": {
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
                "attribute": "logo-only",
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
