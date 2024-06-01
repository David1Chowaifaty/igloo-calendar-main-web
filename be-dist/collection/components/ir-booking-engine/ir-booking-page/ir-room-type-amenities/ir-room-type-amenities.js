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
        return (h("div", { key: '767f1f471dfc78375dbaf72b0cbe7a4dfda6ec42', class: "space-y-3" }, h("div", { key: '4087e18dea1d2bc8855b07b0335140ed06c3655b', class: "flex flex-col gap-4 sm:flex-row sm:items-center" }, h("div", { key: 'cdb386597d50ea6138b67570d4a390c22cacc0c5', class: " flex items-center gap-4" }, h("div", { key: '0a377eaade85f9755239c6f3cb834dcf046e0499', class: "flex items-center gap-2" }, h("ir-icons", { key: '2651b853e4ee811a10a9a417b97e183b48270056', name: "dimensions" }), h("p", { key: 'f0701c6c941e56530a2e46c78824ce7494925667' }, this.roomType.size, ' ', h("span", { key: 'bc438bc96477be57cbf9b40e3e8edb129c260150', class: "ordinal" }, "m", h("sup", { key: 'b5334b2ba8ec7cd96996a3f807a3b60f108afb64' }, "2")))), ' ', h("div", { key: '524f779c62327dd257edee86d35d0a44617782e8', class: "flex items-center gap-2" }, h("ir-icons", { key: 'edae369352bf38b36ea788dcc0ada460b801d2e7', name: "wifi" }), h("p", { key: '6d84bd52bb8cfe1ccdcd5aeaf11976e262ef5209' }, ((_a = this.aminities) === null || _a === void 0 ? void 0 : _a.some(amenity => amenity.amenity_type === 'room' && amenity.code === 'freewifi')) ? 'wifi' : '', " "))), h("div", { key: '1b68fd8e4bb4d0f4cdf57a6c8fe9c7790c79682a', class: "flex items-center gap-4" }, h("div", { key: '94ac9ae65b9692319befa7c97192f30e1915251d', class: "flex items-center gap-2" }, h("ir-icons", { key: 'd233089f9e15a90cfaa02ae8848ba46ca14ccc84', name: "bed" }), (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup) === null || _c === void 0 ? void 0 :
            _c.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { class: "flex flex-1 items-center gap-4" }, h("div", { class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '852dde701ed08959389683740fc09883feca4dc1', innerHTML: (_d = this.roomType) === null || _d === void 0 ? void 0 : _d.description, class: "py-4" }), h("h3", { key: '6ccbed04f214c6dfe58b913de24387fd47900dfd', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '8647f9ad775c1909b6263d690b0023b886421d0b', class: "grid grid-cols-2 gap-4 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
