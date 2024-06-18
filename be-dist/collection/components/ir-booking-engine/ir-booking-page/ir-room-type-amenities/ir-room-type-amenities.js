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
        return (h("div", { key: '0b277a931bd3197f79733ccec7a1c679131d75e7', class: "space-y-3" }, h("div", { key: '298ea012787dd6565f2f1e612489513059116abe', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '23227476ed5a5b754505da2237b6e3391a2daeff', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { class: "flex items-center gap-2" }, h("ir-icons", { name: "dimensions" }), h("p", null, this.roomType.size, ' ', h("span", { class: "ordinal" }, "m", h("sup", null, "2"))))), ' ', h("div", { key: '860604203c09fa7f9504407118d15fb37776082f', class: "flex items-center gap-2" }, h("ir-icons", { key: 'cc93b83d862b08222438cdb526017ae1fd5438d2', name: "wifi" }), h("p", { key: '6e48d1601ac1e57d2390dd17f5abccd0f721541e' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: 'e029467f38f1f648e3676b4c4911d2d77fe34bbf', class: "flex items-center gap-4" }, h("div", { key: 'c8c36fe78320ce0e6a75cb7eca2d30a1d1a033e4', class: "flex items-center gap-2" }, h("ir-icons", { key: '112d5cbc66e01517cf0f2a9c21bc9f2260c3ed79', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { class: "flex flex-1 items-center gap-4" }, h("div", { class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '7bafe2a20e824498a687dd8cdd3ecc084537394d', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '4692ddea7e0aadf705ffe63d66046086fd008a55', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '1d9563ed26314622205b153762b24a85c273c812', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
