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
        return (h("div", { key: '829d8edd86a57b56e88e8d3be7ad3f01ba809b32', class: "space-y-3" }, h("div", { key: '0c20b50507224f4341389f97c8bc25f675277400', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '127653070b36d110a28412d3506e686b62535f31', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: '6542dc69665e6e52285b18d98f9115f437e10795', class: "flex items-center gap-2" }, h("ir-icons", { key: 'c224f2277a1cbaf86b08a31e8c0f4e60aab79799', name: "dimensions" }), h("p", { key: 'cfba0263a58f51f75a4a7e956ac07c3f9749cde6' }, this.roomType.size, ' ', h("span", { key: '010c8f5d2e9013826e8c135f1b5ae361b4413807', class: "ordinal" }, "m", h("sup", { key: '7a6de9781658a7fd4f497270a9e8d5487331a3ed' }, "2"))))), ' ', h("div", { key: '2ac53347df5ad2ece5ed36598632429f777fbcef', class: "flex items-center gap-2" }, h("ir-icons", { key: '7e6474a530a2ae6a5a5da5950c04e5ba8da4ffd5', name: "wifi" }), h("p", { key: '5d91eed100325dc6e097c705ef526970d78487d6' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: '83593e3edc92fa1f0848d0d6c1a55fb0dbc2e94b', class: "flex items-center gap-4" }, h("div", { key: '1e15a61b855cab8645d00f51c70b3eca095144cf', class: "flex items-center gap-2" }, h("ir-icons", { key: '45d7286759228a7112ae1eb7b1db491f26d25864', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'bf8ce3ac66f4258546eb9ac6aa81787fb22e0aaf', class: "flex flex-1 items-center gap-4" }, h("div", { key: '8cfab80de6f167bbd8d0dd53b5932d6c529e1f82', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '720433865bc9afa61bfc4454a05a946909f9a323', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '81d731b3aad4089f7876bfca5b738f3ebd0718cd', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'd97f063c66dde4f5c9d9be107b5e878264869125', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
