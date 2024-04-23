import { h } from "@stencil/core";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b;
        return (h("div", { key: 'b3f25704789e2b0db0f3db9ec92b22bc2e787ca3', class: "space-y-3" }, h("div", { key: '160a442701b0c346e28e5e9a0f1070f457afaf9e', class: "flex flex-col sm:flex-row sm:items-center gap-4" }, h("div", { key: '77a356594d12e0d6b18288603525ebc3da0e8432', class: " gap-4 flex items-center" }, h("div", { key: 'f3fe8259a8f54f326f1285075dff5e08cb3a90c9', class: "flex items-center gap-2" }, h("ir-icons", { key: '3acb7e5b04907940489a071fb5bec937aacc7ab1', name: "dimensions" }), h("p", { key: '7d0c3f12dbdb205cba59be9cd59f6e6e2fdcaa1b' }, this.roomType.size, ' ', h("span", { key: 'f447b9b2bb9c0c4e9bda4173bc3f9580cf90b100', class: "ordinal" }, "m", h("sup", { key: '9411c908e1347a5a93aa9a659282fc843c74a58d' }, "2")))), ' ', h("div", { key: 'e1fd7599d33f27de63d8b3a32bf619166bbae414', class: "flex items-center gap-2" }, h("ir-icons", { key: '5bcdf04ac03c7b58007fc19e95b16c33edd11648', name: "wifi" }), h("p", { key: '45e39270f20142f144ff38a0fded6bfd59434c68' }, "Free Wifi"))), h("div", { key: '0258ca4c27579ba03b7d3e9f332a48a73ef73c4b', class: "flex items-center gap-4" }, h("div", { key: '238d3b2d3400b9007ee3834469dee3d782c5a86e', class: "flex items-center gap-2" }, h("ir-icons", { key: 'b5736b8588bac347e4c935cb11c718cb3e46d0cb', name: "user_group" }), h("p", { key: '2e8821c14145af565ab38a0fde279f795194aa5d' }, "Sleeps ", this.roomType.occupancy_max.adult_nbr)), h("div", { key: '592729ebe601bac01a075da68bf045cc2463b731', class: "flex items-center gap-2" }, h("ir-icons", { key: '9621834d722375a24e384432730dcc87258490dc', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: '3c3fbcc4ac6d2d658c03dc800cc3e49b90f39f86', innerHTML: this.roomType.rateplans[0].cancelation }), h("p", { key: '137bf773c81803c6c95ea19a706e8db62475913b', innerHTML: this.roomType.rateplans[0].guarantee }), h("h3", { key: 'e9984bb3b51ca4fbaf4d815e687c7d6848e0509b', class: "text-lg text-gray-800 font-medium" }, "Room amenities"), h("ul", { key: '3a3b55197993debf8f382abd449583a8fb755caa', class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" }, this.aminities.map(aminity => {
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
