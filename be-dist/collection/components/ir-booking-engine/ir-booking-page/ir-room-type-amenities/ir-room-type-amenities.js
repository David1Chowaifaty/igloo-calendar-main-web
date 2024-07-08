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
        return (h("div", { key: '6ef9b671224f70369543d79aa71c22418a0e528f', class: "space-y-3" }, h("div", { key: 'd76e0a2d47d534be9066bed0f7f3a0ea12d55e37', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '02acc3a8597ec88c79eca461d2c75fff674ffd9c', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: 'cd8d796c0939bfdb355c9e7a126e4c4dfbe8e5e2', class: "flex items-center gap-2" }, h("ir-icons", { key: '9144db339a401764093f29f716aec13eea68a9bd', name: "dimensions" }), h("p", { key: 'fc795a1dfb888557b22deacbabc1ed3a6fd508f6' }, this.roomType.size, ' ', h("span", { key: '67b51f0359e2e5f70fe0f0e34514e1608c37c171', class: "ordinal" }, "m", h("sup", { key: 'ecceeb57ba9f63c9e88bfa95df724583a1561dcb' }, "2"))))), ' ', h("div", { key: '5845455c0edf28b7ff8ad0259b6bdd4e869c66fa', class: "flex items-center gap-2" }, h("ir-icons", { key: 'fa0ccdf0ea3de0065735b18676d5056751ef573c', name: "wifi" }), h("p", { key: '98464d3153ade4ab61caabe5557dceed6a590cf6' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: 'e3425e647b09ad929741811f5962855d4b489a34', class: "flex items-center gap-4" }, h("div", { key: 'c1093429d422be4ac27c70748e48aad5a529160c', class: "flex items-center gap-2" }, h("ir-icons", { key: 'f67a695b23c1ea44a50731c45d8b68ab8b196ba6', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'af1af80f66818ecd2c6b14b6c4eb33353f1adda9', class: "flex flex-1 items-center gap-4" }, h("div", { key: '5654e3c15640f4c80b161e235822637774c3a1f9', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '1adf66da1615657172537833a05b8eb6500dc183', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '45b9c7c8d186e42c1215e02f30f9fd624fa373ad', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '0cb2d8c82de2a5efebb94a18a1705e0232b5b44a', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
