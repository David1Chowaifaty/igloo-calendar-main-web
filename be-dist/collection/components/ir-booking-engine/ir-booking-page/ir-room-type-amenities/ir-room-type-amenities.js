import { h } from "@stencil/core";
import localizedWords from "../../../../stores/localization.store";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: 'c230393ca3c42e5075f4581f22be6fa33956adcf', class: "space-y-3" }, h("div", { key: 'f85e35f09c0167f616610d9a900488c5240c4b0d', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '6de25340907a0d84349e163453e38e18a7be1eac', class: " flex items-center gap-4" }, h("div", { key: 'b6d932f7acfa0e7d0f10629a6272cbeaaf22d1b8', class: "flex items-center gap-2" }, h("ir-icons", { key: '9101fbb9eb4837ae6e0d59ff3c3248d1ea1d73db', name: "dimensions" }), h("p", { key: 'ab4c5212e5ebc1d7537d27d12c2a08d7b43ba90a' }, this.roomType.size, ' ', h("span", { key: '6c1996aa8679ceeffd6d53f768b36e739305c267', class: "ordinal" }, "m", h("sup", { key: '6c60331d2f714164b01929bffa33bc102d739443' }, "2")))), ' ', h("div", { key: 'a14ebf742659b78dbbcae9fbdc971b59ca0e5e8f', class: "flex items-center gap-2" }, h("ir-icons", { key: '126be709d48eb9aeb566fdfa52f31ccb84554a3b', name: "wifi" }), h("p", { key: 'fd6558b3b560962ff00031cdca7be0f1fb7af8c4' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: '61e3524c0cb5a554bd46dc247a17a8fbd64304ee', class: "flex items-center gap-4" }, h("div", { key: 'ed70201ebbb87094b8a3a84c20dcd8a7d666d147', class: "flex items-center gap-2" }, h("ir-icons", { key: 'b9dd6e2228aa691d057d906a61c0ea7ee8354887', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: '2312d472b1d0e34c52871b142b8bc38bcf4a9d87', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '8145528c6b5d17b354e5795a171c7192fedc2aaf', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '8e667b4bf8c7b07690979998e8305627c55abd9e', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
