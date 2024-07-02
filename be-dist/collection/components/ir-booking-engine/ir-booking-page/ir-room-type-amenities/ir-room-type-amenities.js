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
        return (h("div", { key: '0ed91ab461cc526fea26e660adb859bbcd161968', class: "space-y-3" }, h("div", { key: 'f5ed15602d4f1dc48c88a91f50e0b9ca9d5ebdbd', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: '314d21acb3e794261376941f34999b307514bb9d', class: " flex items-center gap-4" }, this.roomType.size > 0 && (h("div", { key: '8673008bfddf95df51c33450e7d49f88b52b4b4d', class: "flex items-center gap-2" }, h("ir-icons", { key: '8b2eb2f1b353757d96b6bc84caa80d2b8253c04c', name: "dimensions" }), h("p", { key: 'f3e7ce07fa84a2ac7da72a097a29becdbe2bd6a8' }, this.roomType.size, ' ', h("span", { key: '4091a5b2d7bf81f54188aaa7b7955dabdd7b161e', class: "ordinal" }, "m", h("sup", { key: 'f1cfbd5fcffd04fd29ac0e85a7514f4240b42821' }, "2"))))), ' ', h("div", { key: 'cd56384a4c7348aa88ae16a2e5bc482cabc2c9e6', class: "flex items-center gap-2" }, h("ir-icons", { key: '12eb56b50d7f168e415609507b92624614bd76bc', name: "wifi" }), h("p", { key: 'cda6c414f2fd096240dc8de7b999f9846f7832db' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: '40fdeb3564b74c1b12ac70d7dbd0912978e1e151', class: "flex items-center gap-4" }, h("div", { key: '0e4a150c4b78361980e6b043fbea1a609e667e1c', class: "flex items-center gap-2" }, h("ir-icons", { key: 'bfc254bc6dd95becdc3c15ba4e5af1c6f402d3ec', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'a55d84729d91b360097b4cc39d50efdb85653501', class: "flex flex-1 items-center gap-4" }, h("div", { key: '5c1985974418d35cf0349c596e0fe728cfa786a6', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '53b01b11b7d7a09368ad50738588cba5f15cd49e', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'a82678c32f0432958dbc77bba6cd896dbd7005b6', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '0a994160e9549c30faea165ff0e087cb0a2205a6', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
