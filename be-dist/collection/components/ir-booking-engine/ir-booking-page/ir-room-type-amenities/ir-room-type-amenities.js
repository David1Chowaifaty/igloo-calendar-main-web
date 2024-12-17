import { h } from "@stencil/core";
import localizedWords from "../../../../stores/localization.store";
export class IrRoomTypeAmenities {
    constructor() {
        this.aminities = undefined;
        this.roomType = undefined;
        this._amenities = [];
    }
    componentWillLoad() {
        this.setupAmenities();
    }
    handleAmenitiesChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setupAmenities();
        }
    }
    handleRoomTypeChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setupAmenities();
        }
    }
    setupAmenities() {
        var _a, _b;
        this._amenities = (_b = [...this.roomType.amenities, ...((_a = this.aminities) !== null && _a !== void 0 ? _a : [])]) === null || _b === void 0 ? void 0 : _b.sort((a, b) => {
            if (a.description < b.description)
                return -1;
            if (a.description > b.description)
                return 1;
            return 0;
        });
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
        var _a, _b, _c, _d;
        const freeWifi = this.checkAmenity('freewifi');
        return (h("div", { key: 'e7ac2f26a315ea32a5d6fe9406d4e57aaac3e394', class: "space-y-3" }, h("div", { key: '5e41844ce513290c7e29f0099a49f6cda2f39158', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: 'c0b660e7da90c02ab233974b3b72c737c9b2754c', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: 'a7ebf33054dfc7102b6b405a91907f630e077e43', class: "flex items-center gap-1" }, h("ir-icons", { key: '4bc32bc90f981e47093bee5a58e4fb6e86f9e525', name: "dimensions" }), h("p", { key: 'a1cccb3ac0f292459686d5eae79840582f6f12a2' }, this.roomType.size, ' ', h("span", { key: 'c309edeae7ec6c834b58c817fd91e158c0065c25' }, "m", h("sup", { key: '7f47797e946793c4926f29b26c33d809ddda9066' }, "2"))))), ' ', freeWifi && (h("div", { key: '8f2dd190cfd7522ac96cf856dcbccefd170d2fb7', class: "flex items-center gap-1" }, h("ir-icons", { key: 'c3305773db5264ad1e37b6a2cef5dc2891f4927c', name: "wifi" }), h("p", { key: '614aaac5a69148d25d1358ac23dbaa2a74465fe3' }, freeWifi.description)))), h("div", { key: '34479e6d7488548b42ac71566f92a655935a7057', class: "flex items-center gap-4" }, h("div", { key: '6b6e7e97dcc4e3fd22c232ca1352c3000df82018', class: "flex items-center gap-1" }, h("ir-icons", { key: 'ff3c884c29a15c438571d6d0f3960a1c6245ad49', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.count > 0 ? `${bed_setup.count} ` : '', bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '06f5ae5d4dabe7f2649e12e640d6c1e1bb2499d3', class: "flex flex-1 items-center gap-4" }, h("div", { key: '5cf8bb61100725b85d3825a0327302ec74363e0f', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: 'b03a61badb83d9d9bacd56185d2d3cdc6ef89819', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-2" }), h("h3", { key: 'ad8858fe7072ad9fb35dc1cbb55897d01f714b91', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '2247be359584df065cbd6ba1bc9ee2acb3bcd157', class: "grid grid-cols-2 gap-1 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, (_d = this._amenities) === null || _d === void 0 ? void 0 : _d.map(aminity => {
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
    static get states() {
        return {
            "_amenities": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "aminities",
                "methodName": "handleAmenitiesChange"
            }, {
                "propName": "roomType",
                "methodName": "handleRoomTypeChange"
            }];
    }
}
//# sourceMappingURL=ir-room-type-amenities.js.map
