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
        return (h("div", { key: '6944c4d301a3f9b1e6a532c58516a4c7bbd17a58', class: "space-y-3" }, h("div", { key: '0efda03bbd6e21ad15d72d77d0732541c57bb0fa', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: 'e4bcdb8122052d92a77b7c71f605c2244903782d', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: '7e06e86f889a1e2109492ea65f9453e414432acb', class: "flex items-center gap-1" }, h("ir-icons", { key: '0155794fc08b3d4cf7e24d7e1121f7fd03a37cc1', name: "dimensions" }), h("p", { key: '079eccc9402cb9d63cbb9777c248754a8595af8e' }, this.roomType.size, ' ', h("span", { key: 'd224ea0e39be380c84c113bf24ee67027a9bd06a' }, "m", h("sup", { key: 'e7085e7397cf9d111a841d5fb93db0deb797c25b' }, "2"))))), ' ', freeWifi && (h("div", { key: '4ed591ed7c1a32b1b6e0e401b4efb1b24d46179f', class: "flex items-center gap-1" }, h("ir-icons", { key: '605af36ffb20471bfb83c8e44873cd8ff635f7cf', name: "wifi" }), h("p", { key: 'e8e760c3d9d059cf46f580664f89ef9d4be5b0f8' }, freeWifi.description)))), h("div", { key: '79ee18e2dc081f1046563dd7928c49ea37b78bab', class: "flex items-center gap-4" }, h("div", { key: 'b0c3607fa011f748466116ee24520ec63a9e1c35', class: "flex items-center gap-1" }, h("ir-icons", { key: '5ad3fe7113025435405dfbba02507a0647835634', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.count > 0 ? `${bed_setup.count} ` : '', bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '4724475dbab16a22499b85ad8a8999f859410646', class: "flex flex-1 items-center gap-4" }, h("div", { key: 'ba81ab44843744ce06e0d9e7f9dec7bbefd9a6c8', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: 'adafe6f8f486befbacfa11b0265d1148d417ecbd', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-4" }), h("h3", { key: '5ff7499ca1fd4cc865fc1e62d702920b6b3c68cd', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'b30e3e5fb09b0eae1fbd49983a7bba411b65e97e', class: "grid grid-cols-2 gap-2 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
