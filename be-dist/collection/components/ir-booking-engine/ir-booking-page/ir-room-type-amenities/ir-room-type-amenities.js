import { h } from "@stencil/core";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: 'fa140baaaf58fc1f01ae06ed383a6bfead742a4f', class: "space-y-3" }, h("div", { key: '9c70e765d49e1e9faa2100349848d28362dc7bad', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '7c33cffe372b68ee3106cc09e40e5cace77d0ab6', class: " flex items-center gap-4" }, h("div", { key: '052115cb2eb4274f278586003078f350bef32b0f', class: "flex items-center gap-2" }, h("ir-icons", { key: 'bc7d7f6879ee35d66af4d79e38a93c8b23978904', name: "dimensions" }), h("p", { key: '6fd22f99bf327e043dcb49d3cd424114152be492' }, this.roomType.size, ' ', h("span", { key: '3d45487c3961f90d5f01391fa47929a69d657754', class: "ordinal" }, "m", h("sup", { key: '308ca5b7660021fda515aa624b5702fc829102e3' }, "2")))), ' ', h("div", { key: '9fd045a9ba8f76a94c8c9965fafa96f38b839239', class: "flex items-center gap-2" }, h("ir-icons", { key: '31a60b8e1fa7820aba138f4bc6e4df1958687044', name: "wifi" }), h("p", { key: 'd305d9187f52c4d0575205bd6e9b93a96f284c7e' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: '65f01358680376fe2a72860aa20a038d0cc45f87', class: "flex items-center gap-4" }, h("div", { key: 'c47df8b040f768d72ee479a2c75ad149dfe93107', class: "flex items-center gap-2" }, h("ir-icons", { key: 'f9a0ed2d40adef1f3ef2295bcf89de43486aee99', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: 'e259df12a8752483142226cfd7d74ea45590ca02', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'f9942f57adae5dcd17b640c3a974ed0850535616', class: "text-lg font-medium text-gray-800" }, "Amenities"), h("ul", { key: '722e606e7a5596719ef59edd43c4b34859e82e90', class: "grid grid-cols-2 gap-4 text-xs sm:text-sm lg:grid-cols-3 " }, this.aminities.map(aminity => {
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
