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
        return (h("div", { key: 'e0b6a0e509834f152da3e8c88650b392980fde29', class: "space-y-3" }, h("div", { key: 'c465576e703ff617408a811ff8b36720ef9c1f88', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: 'e2caa983757c87f4db862af53a0dc535cb6af4dc', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: 'bd1295a3a7ed8d976d2a532f20905bba5e01a6a7', class: "flex items-center gap-1" }, h("ir-icons", { key: 'ba8a85df8c24ed4ae6fb49c9e85487574021a065', name: "dimensions" }), h("p", { key: 'bb8f4120b2eacbe2b20f225b7143c1dc04bf0725' }, this.roomType.size, ' ', h("span", { key: '896fbc5306fe87a0e225a73db2fee364c4bbad41' }, "m", h("sup", { key: '4f5efa8f261ac78c2bd9a536291de9542852fe2f' }, "2"))))), ' ', freeWifi && (h("div", { key: '5e69a56413367680bcb036d7ef0a21f07840d2db', class: "flex items-center gap-1" }, h("ir-icons", { key: '24308fd60eb3d09f6678993c7087a71639d8e957', name: "wifi" }), h("p", { key: '8ab07b4aae8a29b7b72bf5cf0d0d8f3b15616dc7' }, freeWifi.description)))), h("div", { key: 'e7b80dadb766b21f698f69992af22e4b62ecdc54', class: "flex items-center gap-4" }, h("div", { key: '600941a153e459819f618459321095d8af15acd6', class: "flex items-center gap-1" }, h("ir-icons", { key: '4905c0c24bae78d21e256efdfb706b6985c814a4', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.count > 0 ? `${bed_setup.count} ` : '', bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'b371ac0e4e21f655b1a3bde4d21759b08ccffdfe', class: "flex flex-1 items-center gap-4" }, h("div", { key: '1078bcae1353e367db46eae4097f1bb2f8399867', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '26a7079816712357df4ab0a42976ad83f9dd12c6', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-4" }), h("h3", { key: '9f253c5672e444f993640bc24cdb162d8018113e', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '3a500838c87926650f411454ac20dc252d9ef407', class: "grid grid-cols-2 gap-2 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
