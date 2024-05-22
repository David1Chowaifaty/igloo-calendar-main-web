import { h } from "@stencil/core";
import localizedWords from "../../../../stores/localization.store";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '304d2abcb3e07841970f81aaa6dde54d4ab40926', class: "space-y-3" }, h("div", { key: '6dce503df4b88c074c83742cc41cd1225e1fea84', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: 'd864a8507245545e40761bff95bb151904ab4d67', class: " flex items-center gap-4" }, h("div", { key: 'd8f610d2138865c71af7d5d67ec6a8eb7ec895fb', class: "flex items-center gap-2" }, h("ir-icons", { key: '9c08b9d251b840454f7d48d0fe1a942930a08419', name: "dimensions" }), h("p", { key: 'd9ef0d9d8458314ad74187b172f1af600698d08d' }, this.roomType.size, ' ', h("span", { key: 'eff82737e295cbd275d5fee1e965119c141770ac', class: "ordinal" }, "m", h("sup", { key: 'bf16d82d448fd987b5a74706f6839cdae46e042e' }, "2")))), ' ', h("div", { key: '546ad073f3070441b62b556d3f94dd8b1a5becce', class: "flex items-center gap-2" }, h("ir-icons", { key: 'a7583307beede4b17ce68cfb9aea6d495ae72c31', name: "wifi" }), h("p", { key: '3c07ba531671741c408d34a479121aa32e2770a4' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: 'e070ad1947e6eb30227940d2ff1c0001d52312c4', class: "flex items-center gap-4" }, h("div", { key: '0e13bb5bbb3521b743b3dea2e7102d9a874e949b', class: "flex items-center gap-2" }, h("ir-icons", { key: '03ba5c3ab47172e43c5bfc4541398ae75aced880', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: '0356c30c6a3c5f63f03a0f8a22e8881e8bffc71c', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'd18d01445f1b60f73ec728926bd9abb635685509', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'cd91d4ac483ff63bb4e525f486740dc1ad38c1a4', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
