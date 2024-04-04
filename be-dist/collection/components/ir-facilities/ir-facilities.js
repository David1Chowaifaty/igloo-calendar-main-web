import { Host, h } from "@stencil/core";
export class IrFacilities {
    constructor() {
        this.properties = undefined;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (!this.properties) {
            return null;
        }
        return (h(Host, null, h("div", { class: "bg-gray-50 rounded-md p-4 space-y-5" }, h("div", { class: "flex  items-center gap-4" }, h("ir-icons", { name: "clock" }), h("p", null, "Check-in: from ", (_a = this.properties) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from, " until ", (_b = this.properties) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_in_till), h("p", null, "Check-out:", (_c = this.properties) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "wifi" }), h("p", null, "Public areas: ", h("span", { class: "text-green-500" }, (_d = this.properties) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", null, "Rooms: ", h("span", { class: "text-green-500" }, ((_e = this.properties) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "car" }), h("p", null, (_f = this.properties) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " at ", (_g = this.properties) === null || _g === void 0 ? void 0 :
            _g.parking_offering.pricing)), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "pets" }), h("p", null, (_h = this.properties) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "bed" }), h("p", null, (_j = this.properties) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { class: "flex flex-col md:flex-row md:items-start gap-4 flex-wrap" }, h("div", { class: "flex gap-4" }, h("ir-icons", { name: "home" }), h("ul", null, h("li", { class: "font-medium" }, "Property facilies"), this.properties.amenities.map(aminity => {
            if (aminity.amenity_type !== 'property') {
                return null;
            }
            return h("li", { key: aminity.code }, aminity.description);
        }))), h("div", { class: "flex gap-4" }, h("ir-icons", { name: "football" }), h("ul", null, h("li", { class: "font-medium" }, "Activities"), this.properties.amenities.map(aminity => {
            if (aminity.amenity_type !== 'activity') {
                return null;
            }
            return h("li", { key: aminity.code }, aminity.description);
        }))), h("div", { class: "flex gap-4" }, h("ir-icons", { name: "bell" }), h("ul", null, h("li", { class: "font-medium" }, "Services"), this.properties.amenities.map(aminity => {
            if (aminity.amenity_type !== 'service') {
                return null;
            }
            return h("li", { key: aminity.code }, aminity.description);
        })))), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, "Food and beverage: "), this.properties.description.food_and_beverage)), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "credit_card" }), h("p", null, h("span", { class: "font-medium" }, "Accepted credit cards at the property: "), (_k = this.properties) === null || _k === void 0 ? void 0 :
            _k.allowed_cards.map((card, index) => {
                return (h("span", { key: card.id }, card.name, index < this.properties.allowed_cards.length - 1 && h("span", null, " - ")));
            }))), ((_l = this.properties) === null || _l === void 0 ? void 0 : _l.description.important_info) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger", svgClassName: "text-red-500" }), h("div", null, h("p", null, (_m = this.properties) === null || _m === void 0 ? void 0 : _m.description.important_info), h("p", null, (_o = this.properties) === null || _o === void 0 ? void 0 : _o.description.non_standard_conditions)))))));
    }
    static get is() { return "ir-facilities"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-facilities.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-facilities.css"]
        };
    }
    static get properties() {
        return {
            "properties": {
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
}
//# sourceMappingURL=ir-facilities.js.map
