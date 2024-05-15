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
            // case 'auth':
            //   return <ir-auth slot="modal-body"></ir-auth>;
            case 'booking_code':
                return h("ir-booking-code", { slot: "modal-body" });
            default:
                return null;
        }
    }
    renderLocationField(fieled, withComma = true) {
        if (!fieled) {
            return '';
        }
        return withComma ? `, ${fieled}` : fieled;
    }
    renderLanguageTrigger() {
        if (this.isBookingListing) {
            return;
        }
        const currency = app_store.currencies.find(currency => currency.code.toString() === app_store.userPreferences.currency_id);
        const country = app_store.languages.find(l => l.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase());
        if (!currency || !country) {
            return null;
        }
        return (h("button", { type: "button", class: "button-outline w-full", onClick: () => this.handleButtonClick(undefined, 'language') }, h("ir-icons", { name: "globe" }), h("p", null, country === null || country === void 0 ? void 0 : country.description)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const currentPage = app_store.currentPage;
        const isInjected = app_store.app_data.injected && currentPage === 'booking';
        return (h(Fragment, { key: 'aa12653a71a6f6d78b7a7db871dba7e49c2ec93e' }, h("nav", { key: '4abbadde7d84638e710e49e84639d7bc37fc164d', class: "w-full bg-white" }, h("div", { key: '11f6a8816eae01fe3796c4bc4f9e82b7f5c0278e', class: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6 xl:px-0" }, !isInjected && (h("div", { class: "flex items-center space-x-4 " }, h("a", { "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, alt: "logo", class: "h-10 w-auto  object-fill" })), h("div", { class: "hidden md:block" }, h("h3", { class: "text-lg font-medium" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name), h("p", { class: "flex items-center text-sm text-slate-700" }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.city.name), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.postal))))), h("div", { key: '64be1c61695837da270dd58e2ccf0e8f162bbc8e', class: cn('md:hidden', {
                'hidden ': isInjected,
            }) }, h("ir-button", { key: 'f6770089500e72d51fee12b80df54f0be7c7c5ad', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: '68dce7aead3c4f610a23dbb5bae1be182f9baa84', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: 'fc2b2f48d6ff44759eec18cca0b9f3606eeeb4e0', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: '1349685785a0d9ff7f58540f6854338d53f87fdc', class: cn('items-center gap-2 md:inline-flex', {
                'hidden md:inline-flex': !isInjected,
                'flex flex-1 justify-end': isInjected,
            }) }, !isInjected && currentPage !== 'checkout' && (h("li", null, h("ir-button", { variants: "ghost", haveLeftIcon: true, title: "home" }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "h-4 w-4" })))), currentPage === 'booking' && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_BookingCode, name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') }))), h("li", { key: '9278cbcc9922047a84c36a07d4691afbce50900d' }, this.renderLanguageTrigger()), !this.isBookingListing && (h("li", null, h("ir-button", { variants: "ghost", label: localizedWords.entries.Lcz_SignIn, name: "auth", onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentPage = 'auth';
                this.modalRef.openModal();
            } })))))), h("ir-sheet", { key: 'f5555f3b4a1d1e72cdec7439d9c0cbfbc4b43f14', ref: el => (this.sheetRef = el) }, h("ul", { key: '84225a05f5f0051b9ed441b254f526979d91563f', slot: "sheet-content", class: "flex flex-col gap-2 p-4 py-6" }, h("li", { key: '9499bc75fe30acafe4b9828a709bf035a13a8d43' }, this.renderLanguageTrigger()), !isInjected && (h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" }))), h("li", { key: 'dc86946d8b66372ad3c77fb46d8fca0846ce93a5' }, h("ir-button", { key: 'cd5dd5d1dffd28ad20ef3831cb9ff392ed7990d2', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: 'f7837a8c7d95234d0c364636bb19415ec567e15f' }, h("ir-button", { key: '40bdf2b073364447f4b46aeef98cef41e409853f', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-modal", { key: '9ab0a1ff81dcc8146fbb675542f1800ee6c79e52', ref: el => (this.modalRef = el), style: { '--ir-modal-max-width': '22rem' } }), h("ir-dialog", { key: '7976420272ddf39ca4c4dfce847d0affc92cb616', ref: el => (this.dialogRef = el), style: { '--ir-dialog-max-width': '32rem' } }, this.renderDialogBody())));
    }
    static get is() { return "ir-nav"; }
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
