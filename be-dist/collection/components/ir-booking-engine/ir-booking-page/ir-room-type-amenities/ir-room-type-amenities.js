import { h } from "@stencil/core";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '52cb29ff8c6b2feaeb5ad3f6e3df5ba706306185', class: "space-y-3" }, h("div", { key: '1e33c7bb6f47b349bd783e27357d51831613e240', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: 'ac91b3219fb8e54abfc24a6c2b1a86941dc8bcb2', class: " flex items-center gap-4" }, h("div", { key: 'b8433d4b5a7044aca65e501b289bc481589e695b', class: "flex items-center gap-2" }, h("ir-icons", { key: 'dd47a45aa61a1c83cd6b01ca82fb5c3f6f99835d', name: "dimensions" }), h("p", { key: '6438f44997ba1f9afcca137b34bc30aeec8ff36e' }, this.roomType.size, ' ', h("span", { key: 'edba965f2f87295704c9e82bdd83063109bf46f3', class: "ordinal" }, "m", h("sup", { key: '9cc9393cbdb88ef96220e6f2b5388f7067da74ab' }, "2")))), ' ', h("div", { key: 'ab7730274769192f4c97f7dd9f686ba55b492b93', class: "flex items-center gap-2" }, h("ir-icons", { key: '25e3f655a554fce541946985aa7eec45cfb2246a', name: "wifi" }), h("p", { key: 'a3bdf6177c90b1ebef45d82d17c53ac6ce001168' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: '3b7526be5cfbdba2470f628ece91c4af3ac20a91', class: "flex items-center gap-4" }, h("div", { key: '6474920d1ab4b5ba05460c8c077051ead4929e95', class: "flex items-center gap-2" }, h("ir-icons", { key: '5dd921a8b5f84f80e13f703697043cdb66979581', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), h("p", { key: '230fde75e76c9488490cbf37ada2cd90cf9a8577', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '1d4c092fe2b142a801a478c38098066d4f76418a', class: "text-lg font-medium text-gray-800" }, "Amenities"), h("ul", { key: '30273bfd7a8a4141d072551e03f7d4b6948866fc', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
