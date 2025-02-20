import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
import { h } from "@stencil/core";
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
        return (h("section", { key: '1e54bd43e5a148dad087e7ee704023476f0f567b', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '01b44ec1659c41256b1cf52d4dd3086290f2a746', class: "hidden md:block" }, h("ir-property-gallery", { key: '7136c7ff7cfe96d98b2b0525b79a4878b5fa6c23', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: 'bec89380e4a7f51e0c997737fa3622443c421fd0', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: 'f6b14a97cadd9380b75bb7ac72451b252a484ed4', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '4b3d59814297939b7602e6f3fe18cbada7915b04', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: '0cd7d49cf2bf61cebd0271b572614e67158d2548', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'd126c7b392a85283066f1dcc05456569f71cb354', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid '}` }, h("div", { key: 'a087e85c1030c6d39886bd78cd4b01dfd48e73ec' }, h("h3", { key: 'd59a715b8399fb2135f2e8f02aa536e0d69680ae', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '328ec1b0ef10bcdda1deb98318cf8c2fdf7df985', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: 'c9a22b5720ffb4def4185f197cdfaa4c25f806ef', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: 'eed7e8409663e9d6ab6ca4d6c6766d2a53522d64', class: 'hidden md:block' }, h("ir-accomodations", { key: 'fa4bd78ce099aedf09de01652369f4acd79be76a', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })))), booking_store.enableBooking ? (this.roomtype.is_available_to_book ||
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
        }))) : (h("p", { class: `unavailable-roomtype text-base ${this.display === 'default' ? '' : 'pt-4'}` }, localizedWords.entries.Lcz_NotAvailable))) : (h("div", { class: "app_container flex w-full  flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", null, this.roomtype.description)))))));
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
