import { h } from "@stencil/core";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '10dfb8e3e5dcc47110585d67162b085bedaa871e', class: "space-y-3" }, h("div", { key: '60605049e49411e03b3078d3aefb9bcff701e53c', class: "flex flex-col sm:flex-row sm:items-center gap-4" }, h("div", { key: '6b031c518021c1fd974510ae909dd6ed206a1685', class: " gap-4 flex items-center" }, h("div", { key: 'eb9f43b69e6b9b94b0463cce975ed368d1a0c22e', class: "flex items-center gap-2" }, h("ir-icons", { key: 'fde5bc73e8bc46528f2e5b26b650dbadad0f5c93', name: "dimensions" }), h("p", { key: 'fb89b31d38f06e487dfbb4c19f670958f999ffd4' }, this.roomType.size, ' ', h("span", { key: 'a816bed4d33de1d9c01adca12be34b6abed7555f', class: "ordinal" }, "m", h("sup", { key: '4c6f8ac075e1ce4e9870ea0591ddf5ede9f5ac70' }, "2")))), ' ', h("div", { key: '6a98e9af31e908e4e0c3d5f84a679d70944259e5', class: "flex items-center gap-2" }, h("ir-icons", { key: 'afd0800aabbc4a9dd0101b748fc1dfc46398e19c', name: "wifi" }), h("p", { key: '55ac96b9d399f4d7a75b016cb709d43d052048bc' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: '1d475428c0e5d6c951e251c7a09037916ab1a87a', class: "flex items-center gap-4" }, h("div", { key: '921204a1e8847745cf339a445a151d3768b0d76a', class: "flex items-center gap-2" }, h("ir-icons", { key: '74f19c8b9d1974933714f46d88c25e6afa031bd9', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: '0748997d3212731edb762b70d9035c864adcad6a', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'd0d5a4067732ec9631088d128de1adc96fb17706', class: "text-lg text-gray-800 font-medium" }, "Amenities"), h("ul", { key: '7e31b1f16e553a63fd3d4ad53060ff132fa5e0a5', class: "grid grid-cols-2 gap-4 text-xs sm:text-sm lg:grid-cols-3 " }, this.aminities.map(aminity => {
            if (aminity.amenity_type !== 'room') {
                return null;
            }
            return (h("li", { class: "list-disc ml-4", key: aminity.code }, aminity.description));
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
