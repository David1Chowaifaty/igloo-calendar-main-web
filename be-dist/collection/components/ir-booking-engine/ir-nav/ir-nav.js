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
        return (h(Fragment, { key: '5ddea1dbcb77e9f2a24959cb19f546907f7ca468' }, h("nav", { key: '47c23337d63d71258d5c6ea1c5e5ae2a5e766d87', class: "ir-nav" }, h("div", { key: '4742ebc9276e72cb5b74af5fed861cf9eeddd8aa', class: "ir-nav-container" }, !isInjected && (h("div", { key: 'b99e41cff396b981a39242c6fb901a37bb6c9f0d', class: "ir-nav-left" }, h("a", { key: 'af61d3ce5029c87983a993172eeb2b8c6fe53d1b', "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { key: '3401b704a432b5e47b55a4e77bd42bf6abe507ff', src: ((_b = app_store.app_data) === null || _b === void 0 ? void 0 : _b.affiliate) ? (_d = (_c = app_store.app_data) === null || _c === void 0 ? void 0 : _c.affiliate.sites[0]) === null || _d === void 0 ? void 0 : _d.logo : this.logo, alt: `${(_e = app_store.property) === null || _e === void 0 ? void 0 : _e.name}, ${(_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name}`, class: "ir-nav-logo" })), h("div", { key: 'bf3b773eb8f0f19999e0e62caf175e69744b0782', class: "ir-nav-property-details" }, h("h3", { key: '9c21487b00615947cbc3c895474d5873ebe8ca50', class: "ir-property-name" }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.name), h("button", { key: '296ad32436ba23dfc4f1409f9da5eb4c293e119d', onClick: () => this.handleButtonClick(undefined, 'map'), class: "ir-property-location" }, this.renderLocation(), h("span", { key: '6d8937e052e4441c759c5cd0a6077e274070d628', class: 'mx-1' }), h("svg", { key: '31b9245b0b8036e3d89586e0558cdfe1ed618674', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 384 512" }, h("path", { key: 'a5632b2fc893fe1387499a0c3fed4242451ff3b3', fill: "currentColor", d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }), h("title", { key: '48b2fdf47c57b2adf87b99c988fec08e8f121c9a' }, "Location")))))), h("div", { key: '6205b0a188b31fc1989923cc9ece7509e2a272f8', class: `ir-burger-menu ${isInjected ? 'ir-nav-injected' : ''}` }, !app_store.is_signed_in ? (h("ir-button", { class: "ir-sheet-button", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })) : (h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" }))), this.showBookingCode && this.showCurrency && (h("ir-button", { key: 'e8dc3ab1e15ffed0f7bc6c91435daee438b9a5a4', variants: "icon", iconName: "burger_menu", onClick: () => this.sheetRef.openSheet() }))), h("ul", { key: '2b84d52f2ee57d7e00434a9de98372705dcf11d1', class: cn('ir-nav-links', { 'ir-nav-links-injected': isInjected }) }, !isInjected && currentPage !== 'checkout' && (h("li", { key: 'b82379599eebb0335593188ec6ca119966175a30' }, h("ir-button", { key: '5abf3416953896fcc3e5bbdf6fd9d34c6eee7d5b', variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { key: '5b2a5735d8e1c06ab531774ccfd9fab17f1c6ab8', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: '5690a7dc9259198f4e632e88ce54440940fda3cb', slot: "left-icon", name: "home", svgClassName: "ir-icon-size" })))), currentPage === 'booking' && this.showBookingCode && (h("li", { key: 'aa37eb2a43e9a9d08d54c15170ea67546c22d7cb' }, h("ir-button", { key: 'ab7d79b9749641b908dc891b6e27ef04d105e75c', variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), this.showCurrency && h("li", { key: '73584bf31a6671b3c73a760ff03b235924666b4e' }, this.renderLanguageTrigger()), !app_store.is_signed_in ? (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } }))) : (h("li", null, h("ir-menu", { data: [
                { id: 1, item: 'My bookings' },
                { id: 3, item: 'Personal profile' },
                { id: 2, item: 'Sign out' },
            ], onMenuItemClick: this.handleItemSelect.bind(this) }, h("ir-user-avatar", { slot: "menu-trigger" }))))))), h("ir-sheet", { key: '48edc3b8b4d4052e47c916e0bee326aea001327f', ref: el => (this.sheetRef = el) }, h("ul", { key: '6071825bd532b7e6f6469eb4f5838c78b6cb845a', slot: "sheet-content", class: "ir-sheet-content" }, h("li", { key: '992696c00376c6ea8237e8fb82167baf132811f7' }, this.renderLanguageTrigger()), !isInjected && (h("li", { key: 'f14ac34e5b2f8abffd45811a41565ff4fe7729fd' }, h("ir-button", { key: '76979930d48bdfdcbfe93a95d3d1dab2c4cb799f', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'd9f87615f9eba85c3ab4d9c680acdd9f583fdef2' }, h("ir-button", { key: '285fd2c9cc8ebd7a377fd8abc4258d2fb0623e83', class: "ir-sheet-button", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })))), !app_store.is_signed_in && h("ir-modal", { key: '173b29c914485fe72432190f330b74f72115a578', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '32rem' } }), h("ir-dialog", { key: '65f49ad142e8569886744a4f78e83ebb592750aa', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': this.currentPage === 'map' ? '80%' : '32rem' } }, this.renderDialogBody())));
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
