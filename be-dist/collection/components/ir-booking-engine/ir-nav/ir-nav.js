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
        return (h(Fragment, { key: 'bf7f7e4203bc1706293304c062ac67d41b8726b3' }, h("nav", { key: 'c64e38175fe14f908598f65195397717a27f2b81', class: "ir-nav" }, h("div", { key: 'e251cb416e6889287e36d2d7b0d161bb950cf3bb', class: "ir-nav-container", "data-state": isInjected ? 'injected' : 'default' }, !isInjected && (h("div", { key: '1f4a28b3f74d9c12b123a22ff43c813635cd7694', class: "ir-nav-left" }, h("a", { key: '9944441d69d4bec3ace6147de4ab9a22ed57f95e', "aria-label": "home", target: "_blank", href: `https://${this.website}` }, h("img", { key: '58f5d384b5e896eb6ca33c57f55dd13b1b87928b', src: ((_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.affiliate) ? (_c = (_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate.sites[0]) === null || _c === void 0 ? void 0 : _c.logo : this.logo, alt: `${(_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name}, ${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name}`, class: "ir-nav-logo" })), !this.logoOnly && (h("div", { key: '1c30ec18a51247c2b628aafa7f07424e8aca1cfd', class: "ir-nav-property-details" }, h("h3", { key: 'fea38ee76c646f92515a26b4f697a983b63e837a', class: "ir-property-name" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.name), h("button", { key: '30e9f5ef81f0b4d0599dd408430d28fba90e3d54', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, renderPropertyLocation(), h("span", { key: '9e374cb810fac1beac4796026cec126f6086e6eb', class: 'mx-1' }), h("svg", { key: '168ca8581493d775a4f598c9d13c8022d4085331', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: 'fa6d558bdfaecdadf85f24eb4853fda7f1dfda3f', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: 'b8b53303f2b4c9416d6001d5841d283652803b14' }, localizedWords.entries.Lcz_Location))))))), !this.logoOnly && (h("div", { key: 'd34e2a3eda7e5c4f9ed8174e52f07304057782bb', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h(Fragment, null, h("div", { class: "hidden md:block" }, h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })), h("div", { class: "md:hidden" }, h("ir-button", { class: "ir-sheet-button", variants: "icon", iconName: "circle-user", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })))) : (this.menuShown && (h("ir-menu", { data: [
                { id: 1, item: localizedWords.entries.Lcz_MyBookings },
                { id: 3, item: localizedWords.entries.Lcz_PersonalProfile },
                { id: 2, item: localizedWords.entries.Lcz_SignOut },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))), this.showBookingCode && this.showCurrency && h("ir-button", { key: '0a37aaa1c679b72918701a8bcf3216ae2db4cd6b', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() }))), !this.logoOnly && (h("ul", { key: 'c18caf86e08bbd48fa7f6fe0f81aa7d6000ca176', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: '7fb3917b8daa92a4db1f3dcb86b0551fa743f5c8' }, h("ir-button", { key: 'a752482a9aae22c43e223ac463e791c5058cddff', variants: "ghost", haveLeftIcon: true, title: localizedWords.entries.Lcz_Home, onButtonClick: () => window.open(`https://${this.website}`, '_blank') }, h("p", { key: 'eb6141a04d91905e378b4b865d77198eda69b3aa', slot: "left-icon", class: "sr-only" }, localizedWords.entries.Lcz_Home), h("ir-icons", { key: 'decc3454afaee2f542895ec255cf4d57e6c57031', slot: "left-icon", name: 'home', svgClassName: "ir-icon-size" })))), this.showAgentCode() && (h("li", { key: '061f55ab02b84f3709ba5c3f916380a1c7c348af' }, !!booking_store.bookingAvailabilityParams.agent ? (h("div", { class: 'flex items-center' }, h("p", null, booking_store.bookingAvailabilityParams.agent_code), h("button", { title: localizedWords.entries.Lcz_Clear, class: 'ir-language-trigger', onClick: () => {
                this.bookingCodeRef.clearAgent();
            } }, h("ir-icons", { name: "xmark" })))) : (h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), this.showCurrency && h("li", { key: '161f3e45a64785d7c806c5a7d35ece79b541d142' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: this.handleSignIn.bind(this) }))) : (this.menuShown && (h("li", null, h("ir-menu", { data: [
                { id: 1, item: localizedWords.entries.Lcz_MyBookings },
                { id: 3, item: localizedWords.entries.Lcz_PersonalProfile },
                { id: 2, item: localizedWords.entries.Lcz_SignOut },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" }))))))))), !this.logoOnly && (h("ir-sheet", { key: '42f83bb50e7194c941e7f5bd2e958d938751d9ed', ref: el => (this.sheetRef = el) }, h("ul", { key: '0693ee07212df943e2d933987add0e8d579a31f9', slot: "sheet-content", class: "ir-sheet-content" }, !isInjected && (h("li", { key: 'e8be82a82f696a0230ca164c45fadf64ff682cf5' }, h("ir-button", { key: '628f8dbf0bac0c01d6785807ec2fd65dff4f4efb', onButtonClick: () => window.open(`https://${this.website}`), class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: localizedWords.entries.Lcz_Home, name: "home" }))), !app_store.is_signed_in && (h("li", { key: '2e40658c18d62f3e9f3e5f4fdabaa96d7276a527' }, h("ir-button", { key: 'fa6ff14a8de50ff1e4bff5eb1b26a549be83cd70', buttonClassName: "justify-start", class: "ir-sheet-button", variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: this.handleSignIn.bind(this) }))), h("li", { key: '8d84d9515d78e134afc0d9681a8ed7d89e7ae6e1' }, h("ir-button", { key: 'aa6fa89dba1366697fd9d2dda68b97b8eee92f74', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.currency, name: "home" })), h("li", { key: 'c6892b11b75103a5b32afd4dd3e23ab8c286fe10' }, h("ir-button", { key: '6314811227a632464a5ec9a1d6f2b84b94e436d0', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.language, name: "home" })), this.showAgentCode() && (h("li", { key: '98f2707cc427890516821c8307d8605c66ef3999' }, !!booking_store.bookingAvailabilityParams.agent ? (h("div", { class: 'booking-code flex items-center gap-1.5' }, h("p", { class: 'text-sm ' }, booking_store.bookingAvailabilityParams.agent_code), h("div", null, h("button", { title: localizedWords.entries.Lcz_Clear, class: 'ir-language-trigger', onClick: () => {
                this.bookingCodeRef.clearAgent();
            } }, h("ir-icons", { name: "xmark" }))))) : (h("ir-button", { class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))))))), !app_store.is_signed_in && h("ir-modal", { key: '0a9fccf60e04dc0e8916cbff562d53a08f58771e', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: 'fd8d32fdebaf360617ab2e05ba53725848b8d1aa', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
