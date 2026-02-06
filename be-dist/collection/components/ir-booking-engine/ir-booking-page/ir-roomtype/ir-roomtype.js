import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
// import { passedBookingCutoff } from '@/utils/utils';
import { Fragment, h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
    }
    componentWillLoad() {
        this.checkRateplans();
    }
    handleRoomTypeChange() {
        this.checkRateplans();
    }
    checkRateplans() {
        this.shouldHideMlsRateplans =
            this.roomtype.rateplans.some(rp => { var _a; return (_a = rp.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS'); }) && // Check for MLS issues
                this.roomtype.rateplans.some(rp => rp.is_available_to_book); // Check for available rate plans
    }
    render() {
        var _a, _b, _c, _d;
        return (h("section", { key: '0734156a82f95f48c3650583c377b9b6a2d70375', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '26e6e88e7b43809fc4d35d4ae5c82f90e2d90f1a', class: "hidden md:block" }, h("ir-property-gallery", { key: '6e4d925a9be7c30fdbbc1ef6cf16c951594268a8', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: 'aa4b693ae781b3907df36e9e2724dc44deaa796a', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: '8455a50c92d079ca39099455e93823f82709ca7a', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: 'f796711a50a1e290c6849eb85ef2b66a2f133263', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: '70e6f095ab543cfa3f6deb8b5eeeb8cd76e69339', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '11b4f014d83d11eeb77a4f409cff97893d644d4b', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid '}` }, h("div", { key: '860b48a084c5a36f66029930f232a48a80713b45' }, h("h3", { key: '4340dc01bfef1135832d5b219f8ff18ad4fb5253', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '8c12525fb21f2d22ec3ccfc99a352673332e87d0', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: '7b33fb04853ffa8005557d4ca347d7db215954b7', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: 'e849679beaa1e8d82e3040cec249006fd710d74c', class: 'hidden md:block' }, h("ir-accomodations", { key: '9a5cdf832c1c315e38eade85ce58ff34681b63df', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })))), h(Fragment, { key: 'e5413fd1d812821bc150bcaf6ff8eaa476d9f0b8' }, booking_store.enableBooking ? (this.roomtype.is_available_to_book ||
            (!this.roomtype.is_available_to_book && ((_b = (_a = this.roomtype) === null || _a === void 0 ? void 0 : _a.rateplans) === null || _b === void 0 ? void 0 : _b.some(rp => { var _a; return !rp.is_available_to_book && ((_a = rp.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS')); }))) ? (h("div", null, (_d = (_c = this.roomtype) === null || _c === void 0 ? void 0 : _c.rateplans) === null || _d === void 0 ? void 0 : _d.map(ratePlan => {
            var _a, _b;
            if (!ratePlan.is_available_to_book && !((_a = ratePlan.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS'))) {
                return null;
            }
            if (((_b = ratePlan.not_available_reason) === null || _b === void 0 ? void 0 : _b.includes('MLS')) && this.shouldHideMlsRateplans) {
                return null;
            }
            const visibleInventory = getVisibleInventory(this.roomtype.id, ratePlan.id);
            return (h("ir-rateplan", { display: this.display, key: ratePlan.id, ratePlan: ratePlan, visibleInventory: visibleInventory, roomTypeId: this.roomtype.id, roomTypeInventory: this.roomtype.inventory }));
        }))) : (h("p", { class: `unavailable-roomtype text-base ${this.display === 'default' ? '' : 'pt-4'}` }, localizedWords.entries.Lcz_NotAvailable))) : (h("div", { class: "app_container flex w-full  flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", { innerHTML: this.roomtype.description }))))))));
    }
    static get is() { return "ir-roomtype"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-roomtype.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-roomtype.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'grid' | 'default'",
                    "resolved": "\"default\" | \"grid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "roomtype": {
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
            "shouldHideMlsRateplans": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "roomtype",
                "methodName": "handleRoomTypeChange"
            }];
    }
}
//# sourceMappingURL=ir-roomtype.js.map
