import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '0460d7ad407faa90d3494ef403cb6cb45ef3efd7', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '4ab37d68ca796a7dd67b07ca1a8822919f87f3bf', class: "hidden md:block" }, h("ir-property-gallery", { key: 'c8a58eab9222003ef4bf30104c6c4db88ca298d5', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: 'db66672f0715072841de944b5d696e1da965ed30', class: `w-full flex-1 ${this.display === 'default' ? 'md:space-y-2' : ''}` }, this.display === 'default' && h("h3", { key: 'e6a40e30e5ad80ebdba1a0392e564e0f460df409', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '4d75b2fdcd5b5c94b9bd03abdbff631aace635a6', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: '53ddcf571d6c11cd7731cb63c662c3f12f188f85', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'db10e8a16304256434af3e52143fbbe539d19c6f', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : ''}` }, h("h3", { key: 'd09197bda153e5b8a2a41981b32aadb81880f910', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: 'ce177a356bc4da61f8c0aa35ee6afb6a332c27ec', class: `flex flex-wrap items-center gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : ''}` }, h("ir-accomodations", { key: '7085f732bbb445b27d919696abeeb88ccfd2aa80', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: '8891238c7f7da5a36d8f130bd7cf4e682e28a287', class: 'hidden md:block' }, h("ir-accomodations", { key: '1b3d86c3c189e6364fd6f5cfffe398d9e4e4c0d4', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities }))), booking_store.enableBooking ? (this.roomtype.rateplans.map(ratePlan => {
            console.log(ratePlan);
            if (!ratePlan.is_active || !ratePlan.is_booking_engine_enabled || !ratePlan.variations) {
                return null;
            }
            const visibleInventory = getVisibleInventory(this.roomtype.id, ratePlan.id);
            return (h("ir-rateplan", { display: this.display, key: ratePlan.id, ratePlan: ratePlan, visibleInventory: visibleInventory, roomTypeId: this.roomtype.id, roomTypeInventory: this.roomtype.inventory }));
        })) : (h("div", { class: "app_container flex w-full flex-1 flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", null, this.roomtype.description)))))));
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
