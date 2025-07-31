import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
import { passedBookingCutoff } from "../../../../utils/utils";
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
        return (h("section", { key: '5ec2c94791e64bbe0c5c50700ebd9a9a0c501435', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '311ead210814e95e4c17403c464465a5b39adb1b', class: "hidden md:block" }, h("ir-property-gallery", { key: 'b856f2efc8e01961b9a1a4a4f04e557a302c24fe', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: '9b28c29c8b42795cf83303977648988803b581af', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: 'ca7e02e60a21a44dd7e2530ab7637f0bdb4ec6aa', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '680da9be019c9993ca41b634a28893b9385ff743', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: '51ff336332a1cd3ecf2f5c917d8b5088308414cf', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '00881dd33a37bd60a1699b3e1737ed13e8bc76a6', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid '}` }, h("div", { key: 'f8dbf65ad91406e7fb5d45e997eb7a89dd0a5d7e' }, h("h3", { key: '7b18959a21c29e10b3a9165a4f12599990e71173', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '64b6a542e3fa06c248ddf53c51a8d38589a4afb3', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: 'e5636f3934b72ddc18e5a94c2fc9873abb2189d4', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: '7fe4f42c918f9682072c26978ad6f86125ee8b8a', class: 'hidden md:block' }, h("ir-accomodations", { key: 'f4815038f909350b4d23cb31aea70e35ffc1088d', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })))), passedBookingCutoff() ? (h("p", { class: `unavailable-roomtype text-base ${this.display === 'default' ? '' : 'pt-4'}` }, localizedWords.entries.Lcz_NotAvailable)) : (h(Fragment, null, booking_store.enableBooking ? (this.roomtype.is_available_to_book ||
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
        }))) : (h("p", { class: `unavailable-roomtype text-base ${this.display === 'default' ? '' : 'pt-4'}` }, localizedWords.entries.Lcz_NotAvailable))) : (h("div", { class: "app_container flex w-full  flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", { innerHTML: this.roomtype.description })))))))));
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
