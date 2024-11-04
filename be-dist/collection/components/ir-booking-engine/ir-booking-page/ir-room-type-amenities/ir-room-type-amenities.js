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
        return (h("div", { key: '5c9ca404e2f1553888a3b5e00954df213651b900', class: "space-y-3" }, h("div", { key: '224eef468d84306d74f6a9abb01baafe2f63e471', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: 'de63732b254fbe8d926f5b0f2d47bca010d94ccb', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: '70c65a16436e2a673b2e01bed81624fd129db859', class: "flex items-center gap-1" }, h("ir-icons", { key: '4dcbc7bf71940e1f0a65fcd72230cc1f47f78be7', name: "dimensions" }), h("p", { key: '8433c42303425e363c338e6d9c15912e85558ad7' }, this.roomType.size, ' ', h("span", { key: 'baddf791f07ce62fa589d58ce95189700710af7b' }, "m", h("sup", { key: 'c7bf05f7ebbead5a189af42128fa6f6c57875f57' }, "2"))))), ' ', freeWifi && (h("div", { key: '1aebe699242dc54ec55e4795bf7c90a3b653d1d6', class: "flex items-center gap-1" }, h("ir-icons", { key: '626a895a384feb7c8d1ae59271a22a4bf3737951', name: "wifi" }), h("p", { key: 'e0e84d1d15ba0334b193cd28511270729ca204ff' }, freeWifi.description)))), h("div", { key: 'e8218eaabc0478bbe50236793c0e9e4889b76bfb', class: "flex items-center gap-4" }, h("div", { key: 'eec5022da3860ae938f9588117dbcb7b86cb97d1', class: "flex items-center gap-1" }, h("ir-icons", { key: 'ec58ff9b85071c77934c3b99ecb145f56e2f6de3', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.count > 0 ? `${bed_setup.count} ` : '', bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '2b12e6c478627dda0bdc4aed170167de62090409', class: "flex flex-1 items-center gap-4" }, h("div", { key: 'ebd96983feed63d075f46b2ee84bd7ad3857a76a', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: 'cc653e5d7e2d5da633aace508b9d2efdefb76031', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-4" }), h("h3", { key: 'f1481a9c13591e2ff3a74b3e3ba573eaadd15be1', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '0c64576cbdc6d6a461119ecf7291ccc5af6c7131', class: "grid grid-cols-2 gap-2 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, this.aminities.map(aminity => {
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
