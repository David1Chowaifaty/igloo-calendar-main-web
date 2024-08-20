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
        return (h("div", { key: '0ee79f7d56f7b27b69c6856382097508c39f7915', class: "space-y-3" }, h("div", { key: 'f49f05e4207ce894bb552d7e4500ff4cd4927d74', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: '6463f05872986e4a7e2bff867840e1f905ef0891', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: 'c9308d2dc854256918dfb11ab16c8040c6995a7c', class: "flex items-center gap-1" }, h("ir-icons", { key: '61037ad6b4ea9ebb749036706cd7f80d3fb01663', name: "dimensions" }), h("p", { key: '298f230010d66aaff6f22374348da44203c52c5c' }, this.roomType.size, ' ', h("span", { key: 'e2f91582c01ca6eaff26617ffaae24f1d59ef2bc', class: "ordinal" }, "m", h("sup", { key: '182f967c1beb86f2bbe602fb18f0a483ed6693ca' }, "2"))))), ' ', h("div", { key: 'f54b2e443ebbc474befd99bbc1959ddaf99063dd', class: "flex items-center gap-1" }, h("ir-icons", { key: 'a19075bd3deaa3268e158c4cfd1b1ed2ca8b8d93', name: "wifi" }), h("p", { key: 'beb724c53fade969435290204990dd083c6e4a3a' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: 'ca1ac2e64f3c5a02c94145903a3cfdfb4d48ce5d', class: "flex items-center gap-4" }, h("div", { key: '8b8a03b2804cf35f617bc8f62f48e803c60a9564', class: "flex items-center gap-1" }, h("ir-icons", { key: '2093041d1d8556de70e6a9b43ef0fdf72d312c4d', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '2d16499c7b0349b003c396c35cbab0339497e078', class: "flex flex-1 items-center gap-4" }, h("div", { key: '56d7edc7c316a3bbe870d66240e951d922960edc', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: 'f12f59efc9dff1a1ce8d83643558a7dc2763d8cf', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'f4562c3e2ea9b8432a103d46820f8218fa7f89ce', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '2abaacab6fad56bf9850722e9747e809665d75eb', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
