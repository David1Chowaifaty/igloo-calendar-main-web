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
        return (h("div", { key: '357c8c1e6bb7e050d71c362d39155aed4bedb4e7', class: "space-y-2 pb-2 text-xs font-normal text-gray-700" }, ((_a = this.bookingAttributes) === null || _a === void 0 ? void 0 : _a.bedding_setup.length) > 0 && (h("div", { class: "flex flex-wrap items-center gap-2.5" }, h("ir-icons", { name: "bed" }), h("div", { class: "flex items-center" }, (_c = (_b = this.bookingAttributes) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 : _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.bookingAttributes.bedding_setup.length - 1 && h("span", null, "-\u00A0"))))))), this.renderAmeneties()));
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