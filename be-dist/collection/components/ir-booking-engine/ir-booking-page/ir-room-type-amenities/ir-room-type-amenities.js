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
        const renderOccupancy = () => (h("div", { class: "flex items-end" }, h("div", { class: "flex items-center gap-1" }, h("ir-icons", { svgClassName: "size-3", name: "user" }), h("p", null, adult_nbr)), children_nbr > 0 && (h("div", { class: "flex items-center " }, h("ir-icons", { svgClassName: "size-3", name: "child" }), h("p", null, children_nbr)))));
        if (maxNumber > 5) {
            return (h("div", { class: "flex w-full items-center justify-between text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), renderOccupancy())));
        }
        return (h("div", { class: "flex w-full items-center justify-between text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), h("div", { class: "flex items-center" }, [...Array(adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" }))), [...Array(children_nbr)].map((_, i) => (h("ir-icons", { key: i, svgClassName: "size-3", name: "child" })))))));
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '882265c7b93b321139faa5a4fd963c0e1189db34', class: "space-y-3" }, h("div", { key: '7fc4b6a1887f37ce1d3e8504db1ceba04c4aaa66', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '3b7b910037ed2d57abf49c9f0d68e67f1e5791c0', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: '0646695238adb092c8ada0bcf32f4113682c8ce2', class: "flex items-center gap-2" }, h("ir-icons", { key: '5b8d29486ad0dfa40abf36932e12bc393209342c', name: "dimensions" }), h("p", { key: '07c7121019a49774772ce0193e1da6e379972d57' }, this.roomType.size, ' ', h("span", { key: '99b8c9d760e384634120532f7f9a7b5fbd13ddac', class: "ordinal" }, "m", h("sup", { key: 'd6dadc606f89d954a652f5c3419654330e2450cd' }, "2"))))), ' ', h("div", { key: 'ac2f782d3df0627d23f5320ef9856669fa769236', class: "flex items-center gap-2" }, h("ir-icons", { key: '66a49020ac0fe8a4f9faadd58b502c180dbfc590', name: "wifi" }), h("p", { key: 'fab70a472ee9c16eaf99ed080cca71ccac9b8d8e' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: '4f0ffea9ae3059f48ba2ce053c341bbcbd4f7db3', class: "flex items-center gap-4" }, h("div", { key: '6e6c2f2054b35febbf2e32b97ba48262a227f292', class: "flex items-center gap-2" }, h("ir-icons", { key: 'ac85b4a26d73ee34a2f33f73dccf1e7b6cc1d234', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'c2545c3288ecb7a7d308c3fe562a8d3f9c115f50', class: "flex flex-1 items-center gap-4" }, h("div", { key: '16c3e281b2eed1c3ce8446039c3420a761d4f178', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: 'e5978f7980f743211419675665faee1614f5062b', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '88c77b026318b0604cf3d4908b6f6ae6a37df20a', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'b61551e0396944eac97aac6c99798293b63331d7', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
