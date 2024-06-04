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
        return (h("div", { key: '70dcc41fc038d6bb4c35a56aa3b9fb327095cb05', class: "space-y-3" }, h("div", { key: 'bcc0d9536ae8e71f7227d0739d2ba41ccdcf2950', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: 'c016a44f6204b91e40b5ad17959159cf78181db2', class: " flex items-center gap-4" }, h("div", { key: '0f91f44df62aee8f1db7960f69ed1f45a48bb1fa', class: "flex items-center gap-2" }, h("ir-icons", { key: 'e2879133c94963167b060ab54128a6e214125736', name: "dimensions" }), h("p", { key: '96bf7fbcba5281eb56da496c7e41141642b359f9' }, this.roomType.size, ' ', h("span", { key: '6b3b115c00d91693e2800ad8bbd4bc52311ed08a', class: "ordinal" }, "m", h("sup", { key: 'a67bad516664a5f8498d878dfeb1bb6bd2b90eb6' }, "2")))), ' ', h("div", { key: '0593e7c6366ed101f97467c03881f36ab59d2599', class: "flex items-center gap-2" }, h("ir-icons", { key: '2b41b0cebe1d9d61c3c3b5940af4c7a7899ccf44', name: "wifi" }), h("p", { key: '97fa661fb65032c2f0a41b2fdc49510164322166' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? localizedWords.entries.Lcz_wifi : '', " "))), h("div", { key: 'bba93927cc89f0872e39618f855593e185bbd5a6', class: "flex items-center gap-4" }, h("div", { key: '443a222cf539ccf4a3a71c5b1446c31a39db987a', class: "flex items-center gap-2" }, h("ir-icons", { key: '2f183681126647dbddf6805813dcab2baeb92001', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { class: "flex flex-1 items-center gap-4" }, h("div", { class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '4d48b25686d28cef091def5bc095584a5a0d9444', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: 'bdbda06cae31531a76ced3808720b4647a7032f6', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'c99a9377cb0a0a9ebaf375a5199b3fed4e48b3a4', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
