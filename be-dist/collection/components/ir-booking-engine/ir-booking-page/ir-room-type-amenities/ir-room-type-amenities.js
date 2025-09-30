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
        return (h("div", { key: '79ca99cddc41754d6612a8fc0f38c2afb2d09d66', class: "space-y-3" }, h("div", { key: '89aeb386761f47d0b65ca4b868d07e347f33cad7', class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, h("div", { key: '21c4fdd801b5d802793a83e5f9f1a4b94c71a481', class: " flex items-center gap-6" }, this.roomType.size > 0 && (h("div", { key: '546be8d679e1c81bb3bfbc76136aabfaaff07e5a', class: "flex items-center gap-1" }, h("ir-icons", { key: 'da0fb4ba71bdeb8c7379eccc39c0eec30de9852a', name: "dimensions" }), h("p", { key: '507d12faaf380b517d5c3187afaa46351beb5c15' }, this.roomType.size, ' ', h("span", { key: '85c05972d9848bc17286eaddb9b663e084b28b07' }, "m", h("sup", { key: 'bbeff3cfdcbf47814908028bd836a639bcd61d9d' }, "2"))))), ' ', freeWifi && (h("div", { key: '763acccb8cefc50b24f2afecc1885ef0e8968907', class: "flex items-center gap-1" }, h("ir-icons", { key: 'ed60fd55cf16f0f55e36c41adc334804abf7bfc6', name: "wifi" }), h("p", { key: '61d22063f42bd3fe032ebdede95901b290abaf27' }, freeWifi.description)))), h("div", { key: '0c91d4cd95daf70069004f48da9ee2c8edab78ac', class: "flex items-center gap-4" }, h("div", { key: '14a6bd1c8555c304bcf690b09361bf2ab587d23a', class: "flex items-center gap-1" }, h("ir-icons", { key: 'c0634644e3a8dd710c9a37b44224a5da359c77e0', name: "bed" }), (_b = (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.bedding_setup) === null || _b === void 0 ? void 0 :
            _b.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.count > 0 ? `${bed_setup.count} ` : '', bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - "))))))), this.roomType.images.length === 0 && (h("div", { key: '742438dc8321530e8f2a3c1f50bb594786a2ac7c', class: "flex flex-1 items-center gap-4" }, h("div", { key: 'fc38343fe437791e7413d25d9e67adb721681054', class: "flex items-center gap-2" }, this.renderOccupancyView()))), h("p", { key: '0ec81f6ebb36ca1440a918ee1e13c530f8610940', innerHTML: (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.description, class: "py-2" }), h("h3", { key: '27ff64d3457ded394d93fdecacc7cabf9100dff8', class: "text-lg font-medium text-gray-800" }, localizedWords.entries.Lcz_Amenities), h("ul", { key: 'faf608406779a216d14b8ab09542604001f967b9', class: "grid grid-cols-2 gap-1 pb-6 text-xs sm:text-sm lg:grid-cols-3" }, (_d = this._amenities) === null || _d === void 0 ? void 0 : _d.map(aminity => {
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
