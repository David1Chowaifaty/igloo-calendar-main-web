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
    checkAmenity(code) {
        return this.aminities.find(a => a.code === code);
    }
    render() {
        var _a, _b, _c;
        const freeWifi = this.checkAmenity('freewifi');
        return (h("div", { key: '5c9ca404e2f1553888a3b5e00954df213651b900', class: "space-y-3" }, h("div", { key: '224eef468d84306d74f6a9abb01baafe2f63e471', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: 'de63732b254fbe8d926f5b0f2d47bca010d94ccb', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: '70c65a16436e2a673b2e01bed81624fd129db859', class: "flex items-center gap-1" }, h("ir-icons", { key: '4dcbc7bf71940e1f0a65fcd72230cc1f47f78be7', name: "dimensions" }), h("p", { key: '8433c42303425e363c338e6d9c15912e85558ad7' }, this.roomType.size, ' ', h("span", { key: '822853ece73653d2bdf4b1ee6c22da553723b3e8', class: "ordinal" }, "m", h("sup", { key: '9019956ef0d0ee2f8818c33c4fed7a266913734b' }, "2"))))), ' ', freeWifi && (h("div", { key: '0abab40a49aea41510fbb63644a408443b190e6f', class: "flex items-center gap-1" }, h("ir-icons", { key: '79fa190a82c507faf792929bcce3dd3a23161da3', name: "wifi" }), h("p", { key: 'ff875a55e8c421a77184b0b2425d55e71292f69e' }, freeWifi.description)))), h("div", { key: '43991fd24d113a0eee92eafdea505cf3f1fc32be', class: "flex items-center gap-4" }, h("div", { key: 'ec28e7e842e076b7a8fca609087e9cc74a5b0cc8', class: "flex items-center gap-1" }, h("ir-icons", { key: 'e831088acd61c8860523e650e1ef96105c47906b', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '71c086ab37cb5a7e560c4f47b47342c371d869a1', class: "flex flex-1 items-center gap-4" }, h("div", { key: '96c809c3a637a960a42a79607ad8bc6048dc5da6', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '10cba621bcc6933edcb21398a58e0409a8b28244', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-4" }), h("h3", { key: '81a4d2a95fdd78eef05d212aa18911efcb6c8f58', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'f06c135b5da57d10f201637bf29295d72e645add', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
