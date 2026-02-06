import { h } from "@stencil/core";
import localizedWords from "../../../../stores/localization.store";
export class IrRoomTypeAmenities {
    constructor() {
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
    // private setupAmenities() {
    //   this._amenities = [...this.roomType.amenities, ...(this.amenities ?? [])]
    //     .filter(aminity => aminity.amenity_type === 'room')
    //     ?.sort((a, b) => {
    //       if (a.description < b.description) return -1;
    //       if (a.description > b.description) return 1;
    //       return 0;
    //     });
    // }
    setupAmenities() {
        var _a, _b, _c, _d;
        const merged = [...((_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.amenities) !== null && _b !== void 0 ? _b : []), ...((_c = this.amenities) !== null && _c !== void 0 ? _c : [])].filter(Boolean).filter(aminity => aminity.amenity_type === 'room');
        const seen = new Set();
        const deduped = [];
        for (const item of merged) {
            const code = ((_d = item === null || item === void 0 ? void 0 : item.code) !== null && _d !== void 0 ? _d : '').toLowerCase();
            if (!code || seen.has(code))
                continue;
            seen.add(code);
            deduped.push(item);
        }
        deduped.sort((a, b) => {
            if (a.description < b.description)
                return -1;
            if (a.description > b.description)
                return 1;
            return 0;
        });
        this._amenities = deduped;
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
        return this.amenities.find(a => a.code === code);
    }
    render() {
        var _a, _b, _c, _d;
        const freeWifi = this.checkAmenity('freewifi');
        return (h("div", { key: '4aeaf678e0ced0c1f74276e8e0400912980f3d43', class: "space-y-3" }, h("div", { key: '0f1cfd90419e89b892bff935ca0fe13c3ecb1f11', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: '661e4b4feabcce194d9933bc3117d96fba8e96e6', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: 'db505bf2bc8fa6482a55bdba680ec6f508473d71', class: "flex items-center gap-1" }, h("ir-icons", { key: 'e51a3629ee5d9eb833e4ec213ed3ecf1c13c50b1', name: "dimensions" }), h("p", { key: '902ab1e45fd2613b716eb5706c6956164deec97c' }, this.roomType.size, ' ', h("span", { key: '53e0a686051495f10ddcf1f6d06d66bb7d737a59' }, "m", h("sup", { key: 'ff7e949d0998bdfced812ff4a1158703246414d6' }, "2"))))), ' ', freeWifi && (h("div", { key: 'c51cd8b66546406c161a5de583f502ed3012ad80', class: "flex items-center gap-1" }, h("ir-icons", { key: '1774d2b45367c19b55570d8c8b22ff0cb81b0e63', name: "wifi" }), h("p", { key: '780c8e833ee82494fc340a23cb05815092c7dd78' }, freeWifi.description)))), h("div", { key: '6c0f11338fec3b6e464e3edff71e98029c8c0d47', class: "flex items-center gap-4" }, h("div", { key: '5425820f14fb8dd254315d4e95c90927b56e6672', class: "flex items-center gap-1" }, h("ir-icons", { key: 'dd43d1822c0d8d28f36c8f2cf17eea6512856006', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.count > 0 ? `${bed_setup.count} ` : '', bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: 'e5e9751863f9134c052b3996902f89cb887eba89', class: "flex flex-1 items-center gap-4" }, h("div", { key: 'f27c89abee10190365ae43ab05bb08f17277c533', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '62d735b00a936d1dfb545b8c25d0eb07e5dd0aed', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-2" }), h("h3", { key: '2ad49cf82192a079a75044fbdf987584bfef4614', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: '5a0a7fef45aa80fe9c3b40ff7eae30891763ca5f', class: "grid grid-cols-2 gap-1 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, (_d = this._amenities) === null || _d === void 0 ? void 0 : _d.map(aminity => {
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
            "amenities": {
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
                },
                "getter": false,
                "setter": false
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
                },
                "getter": false,
                "setter": false
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
                "propName": "amenities",
                "methodName": "handleAmenitiesChange"
            }, {
                "propName": "roomType",
                "methodName": "handleRoomTypeChange"
            }];
    }
}
//# sourceMappingURL=ir-room-type-amenities.js.map
