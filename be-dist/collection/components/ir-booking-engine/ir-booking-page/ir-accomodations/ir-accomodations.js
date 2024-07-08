import { h } from "@stencil/core";
export class IrAccomodations {
    constructor() {
        this.amenities = undefined;
        this.bookingAttributes = undefined;
    }
    checkAmenity(code) {
        return this.amenities.find(a => a.code === code);
    }
    renderAmeneties() {
        const wifi = this.checkAmenity('freewifi');
        const climatecontrol = this.checkAmenity('climatecontrol');
        const balcony = this.checkAmenity('balcony');
        return (h("ul", { class: "flex flex-wrap items-center  gap-2 text-xs" }, wifi && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "wifi", svgClassName: "size-4" }), " ", h("span", null, wifi.description))), climatecontrol && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "snowflake", svgClassName: "size-4" }), " ", h("span", null, climatecontrol.description))), balcony && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "sun", svgClassName: "size-4" }), " ", h("span", null, balcony.description)))));
    }
    render() {
        var _a, _b, _c;
        return (h("div", { key: '302abc0648af92dddef51ca3528a7bcae2a0f90b', class: "space-y-2 pb-2 text-xs font-normal text-gray-700" }, ((_a = this.bookingAttributes) === null || _a === void 0 ? void 0 : _a.bedding_setup.length) > 0 && (h("div", { key: '1d9e8792f468643caf6363fa3b4295a79301bd83', class: "flex flex-wrap items-center gap-2.5" }, h("ir-icons", { key: '1b77a389b3b941225b7f46f4218e725ebc37237c', name: "bed" }), h("div", { key: 'ca68bc1ccfbfd8ef96c4f917ec4f6c6f722540ed', class: "flex items-center" }, (_c = (_b = this.bookingAttributes) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 : _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.bookingAttributes.bedding_setup.length - 1 && h("span", null, "-\u00A0"))))))), this.renderAmeneties()));
    }
    static get is() { return "ir-accomodations"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-accomodations.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-accomodations.css"]
        };
    }
    static get properties() {
        return {
            "amenities": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Amenity[]",
                    "resolved": "Amenity[]",
                    "references": {
                        "Amenity": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::Amenity"
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
            "bookingAttributes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\r\n    max_occupancy: number;\r\n    bedding_setup: BeddingSetup[];\r\n  }",
                    "resolved": "{ max_occupancy: number; bedding_setup: BeddingSetup[]; }",
                    "references": {
                        "BeddingSetup": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::BeddingSetup"
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
}
//# sourceMappingURL=ir-accomodations.js.map
