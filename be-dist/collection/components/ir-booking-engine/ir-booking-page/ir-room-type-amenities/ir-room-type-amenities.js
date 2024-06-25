import { h } from "@stencil/core";
import localizedWords from "../../../../stores/localization.store";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    renderOccupancyView() {
        const { adult_nbr, children_nbr } = this.roomType.occupancy_max;
        const maxNumber = adult_nbr + children_nbr;
        const renderOccupancy = () => (h("div", { class: "flex items-end" }, h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "user" }), h("p", null, adult_nbr)), children_nbr > 0 && (h("div", { class: "flex items-center gap-2" }, h("ir-icons", { svgClassName: "size-3", name: "child" }), h("p", null, children_nbr)))));
        if (maxNumber > 7) {
            return (h("div", { class: "flex w-full items-center justify-between text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), renderOccupancy())));
        }
        return (h("div", { class: "flex w-full items-center justify-between text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), h("div", { class: "flex items-center" }, [...Array(adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" })))))));
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '093cf01ad40c9a2fea0dd05ebf0a982c9760c641', class: "space-y-3" }, h("div", { key: '2f8c01c3417a7143632eabfc33ad217cc417e191', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '3762d743062370bf851f6391bf30d9f55c519a0c', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: '31c0d6287241b2602426cd12ed2135549f922cde', class: "flex items-center gap-2" }, h("ir-icons", { key: '2ec10386a0e5dd7cd93c6beeb19f516c72e3e317', name: "dimensions" }), h("p", { key: '592baf80703ed2a4ed2bb8243d66f186fe74b7a5' }, this.roomType.size, ' ', h("span", { key: 'b511f40839d323dc3f39b5475792c80bab06e1bc', class: "ordinal" }, "m", h("sup", { key: '6413862843d6f623839d1639ec52fc7f4c7abcf7' }, "2"))))), ' ', h("div", { key: '1c44f6cdd73f21b85e2764b91162d632171dad3d', class: "flex items-center gap-2" }, h("ir-icons", { key: '6fdfba9a1275310234246c89182b590ca9a7e72f', name: "wifi" }), h("p", { key: '75870353b7ac2aa6e9bab72e6613bec2eeeb9747' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: '622f7fa9f130517aee4fb6c2f887c8b7bc0f9cd8', class: "flex items-center gap-4" }, h("div", { key: 'fe09f9381ea796f6594257bf60630b942990985a', class: "flex items-center gap-2" }, h("ir-icons", { key: 'f08264dd9fa883d3927a0fc9c843c1cb916fd163', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'b3adcba2608331e62fe1f45bf381ddb4eaff082f', class: "flex flex-1 items-center gap-4" }, h("div", { key: 'bc861934b9eb39d431f9d715af474396cc862135', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '17a1e74d9e98a368ca9253164154a2d35a5b7506', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'a3d81112b83840717e72d5da4f4dd21c76bba3ee', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'fa0933a74b902c6adae4a6f257605c3c2224c835', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
            if (aminity.amenity_type !== 'room') {
                return null;
            }
            return (h("li", { class: "ml-4 flex items-center gap-4", key: aminity.code }, h("ir-icons", { name: "check", svgClassName: "size-3" }), h("span", null, aminity.description)));
        }))));
    }
    static get is() { return "ir-room-type-amenities"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room-type-amenities.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room-type-amenities.css"]
        };
    }
    static get properties() {
        return {
            "aminities": {
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
            "roomType": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType",
                    "resolved": "RoomType",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RoomType"
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
//# sourceMappingURL=ir-room-type-amenities.js.map
