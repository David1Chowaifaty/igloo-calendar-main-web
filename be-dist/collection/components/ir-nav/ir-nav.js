import { Fragment, h } from "@stencil/core";
export class IrNav {
    constructor() {
        this.currencies = undefined;
        this.languages = undefined;
        this.logo = undefined;
        this.website = undefined;
        this.exposed_property = undefined;
        this.currentPage = null;
    }
    handleButtonClick(e, page) {
        e.stopImmediatePropagation();
        e.stopPropagation();
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
            case 'auth':
                return h("ir-auth", { slot: "modal-body" });
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
    render() {
        var _a;
        if (!this.exposed_property) {
            return null;
        }
        return (h(Fragment, null, h("nav", { class: "flex h-14  w-full bg-white items-center justify-between px-4 lg:px-6" }, h("div", { class: "flex items-center space-x-4" }, h("a", { href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { src: this.logo, class: "object-fill h-10  w-auto" })), h("div", { class: "hidden md:block" }, h("h3", { class: "font-medium text-lg" }, this.exposed_property.name), h("p", { class: "text-sm text-slate-700 flex items-center" }, this.renderLocationField(this.exposed_property.country.name, false), this.renderLocationField(this.exposed_property.city.name), this.renderLocationField(this.exposed_property.area), this.renderLocationField(this.exposed_property.postal)))), h("div", { class: "md:hidden" }, h("ir-button", { variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { slot: "btn-icon", name: "burger_menu" }))), h("ul", { class: "hidden md:flex items-center gap-2" }, h("li", null, h("ir-button", { variants: "outline", haveLeftIcon: true }, h("p", { slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { slot: "left-icon", name: "home", svgClassName: "h-4 w-4" }))), h("li", null, h("ir-button", { variants: "outline", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", null, h("ir-button", { variants: "outline", label: "language", name: "language", onButtonClick: e => this.handleButtonClick(e, 'language') })), h("li", null, h("ir-button", { variants: "outline", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-sheet", { ref: el => (this.sheetRef = el) }, h("ul", { slot: "sheet-content", class: "flex flex-col p-4 py-6 md:hidden gap-2" }, h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" })), h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "language", name: "language", onButtonClick: e => this.handleButtonClick(e, 'language') })), h("li", null, h("ir-button", { class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-dialog", { ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
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
            "exposed_property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty",
                    "resolved": "IExposedProperty",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IExposedProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
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
