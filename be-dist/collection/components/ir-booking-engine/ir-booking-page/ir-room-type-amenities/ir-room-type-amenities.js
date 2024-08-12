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
        return (h("div", { key: '777c4f9c0e6d07ab9a2b0a6a718f7782cffbc94e', class: "space-y-3" }, h("div", { key: 'fe63cc2e2b1bac6064499b686600d403d27e264e', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: 'f7b666d255972803c4fc6c85fc2a7d6ca24979d6', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: 'd250373ad0029f3b9d5a01b2fa8a16f0a24c24c2', class: "flex items-center gap-2" }, h("ir-icons", { key: '760cbdc35bc8b46ecd88462f0daa69fbf40ffee5', name: "dimensions" }), h("p", { key: 'b3026d0e3b856150aa496a13995ebfce8383c72e' }, this.roomType.size, ' ', h("span", { key: 'fc759dfdd4036768985d0763172e9f038d605adb', class: "ordinal" }, "m", h("sup", { key: 'a4701c7655c62ebca59d61b97e716a1f49b74675' }, "2"))))), ' ', h("div", { key: '07046213ac1ee930b76821d4d60b5bed045e88ba', class: "flex items-center gap-2" }, h("ir-icons", { key: 'c051269bd44dbd0d9061d8522032f362f7ca7195', name: "wifi" }), h("p", { key: '5ed1020f144e95b7ba86d50e1681cf480633642b' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: 'c39cd6ff9a2d0642b7d2de7a74de20700b4787ea', class: "flex items-center gap-4" }, h("div", { key: 'f7c0aa643462da2d2b12cefb69ad6564a15a2c6a', class: "flex items-center gap-2" }, h("ir-icons", { key: 'f143b16da16ad0fc70ce272a0e81edab96197369', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '19144ef3fd2b02cdc5b853b3413b311f04183d05', class: "flex flex-1 items-center gap-4" }, h("div", { key: 'e0a56651a370496b16b39fe2edaaf136ef809a79', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: 'db00de739410d8e62707e661882403bc51d3e123', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '6f4f4d1882782495b3598425b842d117a9f17e37', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '5a981ec065cd1d72335abe17ed626f71ce3c5891', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
