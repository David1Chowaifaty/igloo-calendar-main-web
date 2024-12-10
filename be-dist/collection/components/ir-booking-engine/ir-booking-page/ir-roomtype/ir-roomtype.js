import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
        this.roomtype = undefined;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("section", { key: '3fd4a7fbdbe9a734901d0d181d114237d000016f', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '2651b9f5d3c85c2b0edb300fbf4638e69d0f7d03', class: "hidden md:block" }, h("ir-property-gallery", { key: '361872bbd665d2b27628445fe2a2ff35da9697dc', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: '571d468cea3c8765d761b8d6018db24145968e5b', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: 'fca3a69007baf2ea43c927eb3641b6786a8bd933', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: 'dfc71a09062a2420cc00395b1830457389154b8d', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: 'b51bed09beaa14b5de5a0b90c816b5bfded3472f', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '945665b125c7f36b8746969245b78d66f57926ac', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid '}` }, h("div", { key: 'a0eb80e04db0509b151ae565ef48377882094995' }, h("h3", { key: '3e5288a1cf361a5ed33c29b70f971195637781e8', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '3a1935e415f4f551ada886ba3d23658906062070', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: '5d15b9017a1ab7a0d19556eb6f8f38dfec1a270e', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: '030c7fae175712bfa909c337cc231aea88789613', class: 'hidden md:block' }, h("ir-accomodations", { key: '517af10221903f2b832125b25b8ef061e4413ac3', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })))), booking_store.enableBooking ? (this.roomtype.is_available_to_book ||
            (!this.roomtype.is_available_to_book && ((_b = (_a = this.roomtype) === null || _a === void 0 ? void 0 : _a.rateplans) === null || _b === void 0 ? void 0 : _b.some(rp => { var _a; return !rp.is_available_to_book && ((_a = rp.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS')); }))) ? (h("div", null, (_d = (_c = this.roomtype) === null || _c === void 0 ? void 0 : _c.rateplans) === null || _d === void 0 ? void 0 : _d.map(ratePlan => {
            var _a;
            if (!ratePlan.is_available_to_book && !((_a = ratePlan.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS'))) {
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
                }
            }
        };
    }
}
//# sourceMappingURL=ir-roomtype.js.map
