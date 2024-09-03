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
            return (window.location.href = `https://${app_store.property.perma_link}.bookingmystay.com/signin`);
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
        return (h(Fragment, { key: '8ff2830dd042e88126b6a28838f41a7c3c40a6b3' }, h("nav", { key: 'c9de913cf60091c705186659fc9656c24d5a5e8d', class: "ir-nav" }, h("div", { key: 'e278027188f03f681dd22c788b75dd9187df9711', class: "ir-nav-container", "data-state": isInjected ? 'injected' : 'default' }, !isInjected && (h("div", { key: '01d24a4ed4504c74d9278c5c44575754bc0107f8', class: "ir-nav-left" }, h("a", { key: '2904d70390117564949ef8b367e57bfddfb98ff3', "aria-label": "home", target: "_blank", href: `https://${this.website}` }, h("img", { key: '1c7641fbd228a83d0fd1c963f36e9de22fc05005', src: ((_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.affiliate) ? (_c = (_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate.sites[0]) === null || _c === void 0 ? void 0 : _c.logo : this.logo, alt: `${(_d = app_store.property) === null || _d === void 0 ? void 0 : _d.name}, ${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.country.name}`, class: "ir-nav-logo" })), h("div", { key: '82d06d6b67fe5e6b10dc044854d6b3c2e1672f71', class: "ir-nav-property-details" }, h("h3", { key: 'f63453fcc0f8cb7aa8c772c642c5441d610a1639', class: "ir-property-name" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.name), h("button", { key: 'e2f5f57a905076da7452bf5782591416ed78197e', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, renderPropertyLocation(), h("span", { key: '7397e918fa9151152bdad999314848e729687a84', class: 'mx-1' }), h("svg", { key: 'bb82bb238520959b27277196e094c830e4734569', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: 'a439909ddf5e563e76a50913f5605e71aed2c75c', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: '157cd0a5f5ae5ea380631221a5b4f8efb60d27a4' }, localizedWords.entries.Lcz_Location)))))), h("div", { key: 'fa146abd223eb28104d28c114489d24c87bf153c', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h(Fragment, null, h("div", { class: "hidden md:block" }, h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })), h("div", { class: "md:hidden" }, h("ir-button", { class: "ir-sheet-button", variants: "icon", iconName: "circle-user", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) })))) : (this.menuShown && (h("ir-menu", { data: [
                { id: 1, item: localizedWords.entries.Lcz_MyBookings },
                { id: 3, item: localizedWords.entries.Lcz_PersonalProfile },
                { id: 2, item: localizedWords.entries.Lcz_SignOut },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))), this.showBookingCode && this.showCurrency && h("ir-button", { key: 'a4283dd0e80252d874c1aa07b421b19ae4b8fe72', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() })), h("ul", { key: '82c3647bf2da59fe3628ec91e323d2a3354eb9be', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: '106274a75f1f00cfd43dbbbdbb6d0010482aaed4' }, h("ir-button", { key: 'c6fc1854aa41bc691e85d1863e6b7f491d943dc5', variants: "ghost", haveLeftIcon: true, title: localizedWords.entries.Lcz_Home, onButtonClick: () => window.open(`https://${this.website}`, '_blank') }, h("p", { key: 'ce5cbcd9934bcc6bf6ecf19b50072f08bc9dccaa', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: '0008ab8a1f4b4274f687231b5e08a5af98787067', slot: "left-icon", name: 'home', svgClassName: "ir-icon-size" })))), this.showAgentCode() && (h("li", { key: '904152ee1f716d9c4e87c9e78b8b7859d9e20ae2' }, !!booking_store.bookingAvailabilityParams.agent ? (h("div", { class: 'flex items-center' }, h("p", null, booking_store.bookingAvailabilityParams.agent_code), h("button", { title: localizedWords.entries.Lcz_Clear, class: 'ir-language-trigger', onClick: () => {
                this.bookingCodeRef.clearAgent();
            } }, h("ir-icons", { name: "xmark" })))) : (h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), this.showCurrency && h("li", { key: 'f12a7c1c91b04cd1fcf247e72fbeea2eba4b05c2' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: this.handleSignIn.bind(this) }))) : (this.menuShown && (h("li", null, h("ir-menu", { data: [
                { id: 1, item: localizedWords.entries.Lcz_MyBookings },
                { id: 3, item: localizedWords.entries.Lcz_PersonalProfile },
                { id: 2, item: localizedWords.entries.Lcz_SignOut },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" })))))))), h("ir-sheet", { key: '1d22260f6113814c3e143f9b65dc68fdfae08581', ref: el => (this.sheetRef = el) }, h("ul", { key: 'fb6e0290d9f456b13c9c6814a83d291880182efa', slot: "sheet-content", class: "ir-sheet-content" }, !isInjected && (h("li", { key: '65e0ad1563d38b8cb8fa46f0781ef6fb59b37e61' }, h("ir-button", { key: '35a63a7d582de64e1ef05f584674214a02f0083a', onButtonClick: () => window.open(`https://${this.website}`), class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: localizedWords.entries.Lcz_Home, name: "home" }))), !app_store.is_signed_in && (h("li", { key: '402849c60f4d2608ca146bc75b633bb32aff04da' }, h("ir-button", { key: 'ea82ed5641a3fc4ce0972aba8f7b79c89122cca8', buttonClassName: "justify-start", class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: this.handleSignIn.bind(this) }))), h("li", { key: '49db7881bb7013bae21aea068a01fe5c682b818b' }, h("ir-button", { key: 'cb4c4548403041f92a7893efae114fd104ef62f4', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.currency, name: "home" })), h("li", { key: '049a7c34c8bd38166cb728b5209422a30e70adad' }, h("ir-button", { key: 'bcfa997566fb58914fb33a22fe7c19187d6da761', class: "ir-sheet-button", onButtonClick: () => this.handleButtonClick(undefined, 'language'), buttonClassName: "justify-start", variants: "ghost", label: this.preferences.language, name: "home" })), this.showAgentCode() && (h("li", { key: 'e946c3d2e17c412627c4e38ee71a45c3eae39751' }, !!booking_store.bookingAvailabilityParams.agent ? (h("div", { class: 'booking-code flex items-center gap-1.5' }, h("p", { class: 'text-sm ' }, booking_store.bookingAvailabilityParams.agent_code), h("div", null, h("button", { title: localizedWords.entries.Lcz_Clear, class: 'ir-language-trigger', onClick: () => {
                this.bookingCodeRef.clearAgent();
            } }, h("ir-icons", { name: "xmark" }))))) : (h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))))), !app_store.is_signed_in && h("ir-modal", { key: '39518ec6e1b2c629d26aa26cd9245619830c9b70', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: 'd52f15c9b0c6bd2dfa71fc02f4dccc5ab9cd04cd', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
