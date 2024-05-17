import { h } from "@stencil/core";
import localizedWords from "../../../../stores/localization.store";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: 'e4e0fa8ee7a4ffe6fc51a539ccc1b6a6e3734ff1', class: "space-y-3" }, h("div", { key: 'd18235de0ccc5403731055f86b1fec6ad44201fe', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '5a41e2a1d7e4774812d8957f314a330c8362dfe8', class: " flex items-center gap-4" }, h("div", { key: '5a4e2408433d0118f8523f8887ac2b8d39ac2111', class: "flex items-center gap-2" }, h("ir-icons", { key: 'bd0a70dfeef4fcad36bd8a97e1a0e56222ed4d2a', name: "dimensions" }), h("p", { key: '6502658116c76eda5dd1591989e8cf3c63c0ea34' }, this.roomType.size, ' ', h("span", { key: '973dc25a231775efcc336e773a835297d244ade6', class: "ordinal" }, "m", h("sup", { key: '755c8ff53621bd24ac395b76aaab33374cd03e9b' }, "2")))), ' ', h("div", { key: '8ca7b16c0b7f8696e9e1a816ae28bcc7a00d432e', class: "flex items-center gap-2" }, h("ir-icons", { key: 'd560bacbb493726d63d218a01134001cedeee2de', name: "wifi" }), h("p", { key: 'da49b4755e4ec686cf6f1f5a19c80ce3815775fb' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: 'c076e887a9c571285deafa6dd800d13e35965a56', class: "flex items-center gap-4" }, h("div", { key: '2f6ea2a8dad06d8b75fba47b029525b4c5f704bc', class: "flex items-center gap-2" }, h("ir-icons", { key: '1cda6537a9e6550a25b6a07469086bec0a7123e9', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: 'cc625421b840f6788f5b89e2d7bbc5b7fdaa1987', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '7e97dbda7e949cee19350ca99439064255175675', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'e9b2bb25de7f1e9fe926f6e8f3c98750984fcdd2', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
