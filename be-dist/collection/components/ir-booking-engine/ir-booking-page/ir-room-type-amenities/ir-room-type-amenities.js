import { h } from "@stencil/core";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '60cd23027abfc8bbb4b3cd93bb89da3b4591acbb', class: "space-y-3" }, h("div", { key: '3e9326824cd7ee8a955058f0a0cffcb981f5e962', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '7006bd27ce2580c8e5630f11f9476fca2a13b858', class: " flex items-center gap-4" }, h("div", { key: '7aaf89b56da68a18a15a001cf48ee42ccd1039f1', class: "flex items-center gap-2" }, h("ir-icons", { key: '9161c9c6307692e25c4c36e44ef247b5cb8b3117', name: "dimensions" }), h("p", { key: 'df69ce8b10763eb0fae3f850724a2b7e8a5c95b5' }, this.roomType.size, ' ', h("span", { key: '9f6bc44d16e876f09aa0d7276a312244c6100900', class: "ordinal" }, "m", h("sup", { key: '2faa939bd675b06df4cee671ad35abb9fda01939' }, "2")))), ' ', h("div", { key: '2996f9fadf49e859403331a6e6efa0a71c35e5c0', class: "flex items-center gap-2" }, h("ir-icons", { key: '684b7cf36e978a49c62f3db4011074859926d63a', name: "wifi" }), h("p", { key: '1d51784e50a75a6da2d7ff30123cea249b074711' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: 'f314d523f205e08154ed2299f561bb217201fa33', class: "flex items-center gap-4" }, h("div", { key: '9813d9aa46f7b466ac5a290ae087b294b6e0b244', class: "flex items-center gap-2" }, h("ir-icons", { key: 'd7c128e3037d901a7fc0936228c29fc4a76610b1', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: '0707d84ad3f66d5c08014c8e397d50bc74ecf5d0', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'aeb7ca2ce3b41b032ced9537be32836de246de3f', class: "text-lg font-medium text-gray-800" }, "Amenities"), h("ul", { key: '6ee9701676f17f4523fcd3f7fd066ce1252b47f6', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
