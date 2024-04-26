import { Fragment, h } from "@stencil/core";
import app_store from "../../../stores/app.store";
export class IrNav {
    constructor() {
        this.currencies = undefined;
        this.languages = undefined;
        this.logo = undefined;
        this.website = undefined;
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
        var _a, _b, _c, _d, _e, _f;
        return (h(Fragment, { key: '5a99b8f95c45f6f6c524834bd058169e5e7e9f0b' }, h("nav", { key: '5e53488a8d6b45419503439fd5b94cad408c64f9', class: "w-full bg-white" }, h("div", { key: 'f5641b28f9b8f07c80d5c2f6a1bd7b1d04e1735f', class: "max-w-6xl h-14 mx-auto flex items-center justify-between px-4 lg:px-0" }, h("div", { key: '4fd6c800a1e5708a05fb31fe58f884022d0751fa', class: "flex items-center space-x-4 " }, h("a", { key: 'd1dd11316e40c5a4caa854325d004e9c096bf85c', "aria-label": "home", href: `${(_a = this.website) === null || _a === void 0 ? void 0 : _a.replace('www.', 'https://')}` }, h("img", { key: '29e5f8aa0f6149a76112562a98c809f8cf022b39', src: this.logo, alt: "logo", class: "object-fill h-10  w-auto" })), h("div", { key: '4f5ce1b7bab889760201c0e065662af7cc17bfff', class: "hidden md:block" }, h("h3", { key: '7adcbf812eb82245cd6474cb1b5d6e5f6adeb9a1', class: "font-medium text-lg" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name), h("p", { key: 'b64d616284bf161ed9dc6d88f883ba32e8cb0aa4', class: "text-sm text-slate-700 flex items-center" }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.country.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.city.name), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.area), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.postal)))), h("div", { key: 'cf7e11d450d8f878888cd911bf53036ed8dc5572', class: "md:hidden" }, h("ir-button", { key: '7c7beda715ef0a922b62c2d6463feacaa1d7a9a8', variants: "icon", onClick: () => this.sheetRef.openSheet() }, h("p", { key: 'aeab99b1ebd103b8a0cc717eb6f9e38759ff78e3', slot: "btn-icon", class: "sr-only" }, "burger menu"), h("ir-icons", { key: '386f3581b7d5babd2d4d33601639bd2101ccc28a', slot: "btn-icon", name: "burger_menu" }))), h("ul", { key: 'c06a97d2e4eb91776cae51cacd83cd641c9cc952', class: "hidden md:flex items-center gap-2" }, h("li", { key: 'dcf79ef8c3c4327e027903399f71ce359d0f0838' }, h("ir-button", { key: '34820efb038725ac016cb29e68114c75730db270', variants: "outline", haveLeftIcon: true }, h("p", { key: 'e30c90ec06ee4b2edf5fc82da700ba7edd3b4f91', slot: "left-icon", class: "sr-only" }, "home"), h("ir-icons", { key: '0ade43a01e1a2a0d0906011e09017440714615db', slot: "left-icon", name: "home", svgClassName: "h-4 w-4" }))), h("li", { key: '3da69329f4176e40525f4942813ecd53cd5fcdeb' }, h("ir-button", { key: 'ca8ff247c47fce34b4969c085abf845bf3ddfdd6', variants: "outline", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: '62fdfe99b29e3d3351ca96e339fed7b4432371d6' }, h("ir-button", { key: '80b6e108eb2b86638298c70a980bb41fd432f3a0', variants: "outline", label: "Cur / Flag", name: "language", onButtonClick: e => this.handleButtonClick(e, 'language') })), h("li", { key: '1faaa315180ab4f3e91609e22a275de5565d729a' }, h("ir-button", { key: '7d768990d89637705430c2cddd9b2f15d6fcb6e1', variants: "outline", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') }))))), h("ir-sheet", { key: 'fa62742724b5faa4d13db2ece7c803a76043c103', ref: el => (this.sheetRef = el) }, h("ul", { key: 'e04fe0819a8374f1613af22264e1b9e1a4b56c8a', slot: "sheet-content", class: "flex  flex-col p-4 py-6 md:hidden gap-2" }, h("li", { key: '81e003dda1f5cdb1a3cff9f719d35934300c47a6' }, h("ir-button", { key: '684c7ebe51f928989374d318cbce80c2477b1120', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Home", name: "home" })), h("li", { key: '48382feb2082b23ebdb4c3625ed727f3fe4b5c3e' }, h("ir-button", { key: 'f12ea38eb63e358a4f3e9eaa333defa32074da42', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Booking code", name: "booking_code", onButtonClick: e => this.handleButtonClick(e, 'booking_code') })), h("li", { key: 'db4cecee89f9007d422147c8b03498bee9bd5365' }, h("ir-button", { key: '65e6047a04fe22a5e92175e1b61f3ed67d824155', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Cur / Flag", name: "language", onButtonClick: e => this.handleButtonClick(e, 'language') })), h("li", { key: '76fee2fb34cde2d71cb67e98b8c5ededad84a956' }, h("ir-button", { key: 'ac275f610890141603fd126353cde0c10a7f7d14', class: "w-full", buttonClassName: "justify-start", variants: "ghost", label: "Sign in", name: "auth", onButtonClick: e => this.handleButtonClick(e, 'auth') })))), h("ir-dialog", { key: '315b15279129edff881d9e32245c2c66a0240b6a', ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
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
