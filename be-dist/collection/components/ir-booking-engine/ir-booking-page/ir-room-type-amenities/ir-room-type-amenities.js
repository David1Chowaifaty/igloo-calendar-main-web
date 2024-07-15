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
        return (h("div", { key: 'c0531e70905edc3588665cf09a986cc686d4933d', class: "space-y-3" }, h("div", { key: 'd49339d66f9775089142dd839ca92e20aa8b4aec', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: 'e24b264b8794d1c0ea2b05fa7388d86490b536ce', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: '270ba81a76042a26f5a7edc34e98acb80abbf027', class: "flex items-center gap-2" }, h("ir-icons", { key: '69b68de6dc6459abda8d1d30ad98477beb8ab984', name: "dimensions" }), h("p", { key: '07e6c1d8b1df517ff91ee077a0fb9bc1d5be8022' }, this.roomType.size, ' ', h("span", { key: '32e2c7ce696c468d883d6637af8f920ff6383486', class: "ordinal" }, "m", h("sup", { key: '506eda846c5d01cb857e2c50395aad5b6c74c2a1' }, "2"))))), ' ', h("div", { key: '1e92b097a73e8b3eb64244e703403130509f9c9b', class: "flex items-center gap-2" }, h("ir-icons", { key: '311a9174e2b74aaa80dfad947a1b3c7a14e2e9ac', name: "wifi" }), h("p", { key: '07769b27488766fe6fdc07559999f62c517989a3' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: '94c46daa1e31161bdb349b50b434972663b3da78', class: "flex items-center gap-4" }, h("div", { key: 'ddcbac5ad5d1293da849f3ea7a2fd5ed24d8a05b', class: "flex items-center gap-2" }, h("ir-icons", { key: '7cfa145075fa51a5f204ebed204db69e623eb2ec', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'bea52d891f1a6432142d433c15b1c031c2c242e5', class: "flex flex-1 items-center gap-4" }, h("div", { key: '943f6a695de23b6062073128e77b18ead8b08ad9', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '99036fa5c6fab056df0cb211ee65c3043fe778d7', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '128eccbd89a33c8ca52bf93b9eec3f39b8f5fd0d', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '0677871dbf653f1d44b696d8cc9d07ace1fd5a3b', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
