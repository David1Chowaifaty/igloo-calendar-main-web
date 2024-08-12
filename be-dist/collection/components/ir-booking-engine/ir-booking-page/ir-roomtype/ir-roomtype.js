import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '2cdffd809e8de1fd37427a7e484e14596a52f8ef', class: "room-type-container" }, h("aside", { key: 'cd301eda851daddb8e2f3d09dbc4045f21a40086', class: "hidden md:block" }, h("ir-property-gallery", { key: 'c612719b69fc482e1d20e3bf28e303c9e9748f7d', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '99ea93db7d07bf15b258348ba14eab5cba8b430e', class: "w-full flex-1 space-y-2" }, h("h3", { key: 'c2d9ed3651b4cba8f8be1a98c9cc04aa3da0d70b', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: 'ec18869d2b17f0ed7ae95deefbebbc1e3689ff1f', class: "md:hidden" }, h("ir-property-gallery", { key: 'dabdba2024d6fc7eb12d43b321b7b0fec0f1b845', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'ad82af1ee839e8b6719e49c205de6aaa457236c8', class: "hidden md:block" }, h("ir-accomodations", { key: 'a967592ca1528641c7c7dc8c7477a0accd46aa22', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), booking_store.enableBooking ? (this.roomtype.rateplans.map(ratePlan => {
            if (!ratePlan.is_active || !ratePlan.is_booking_engine_enabled || !ratePlan.variations) {
                return null;
            }
            const visibleInventory = getVisibleInventory(this.roomtype.id, ratePlan.id);
            return (h("ir-rateplan", { key: ratePlan.id, ratePlan: ratePlan, visibleInventory: visibleInventory, roomTypeId: this.roomtype.id, roomTypeInventory: this.roomtype.inventory }));
        })) : (h("div", { class: "app_container flex w-full flex-1 flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", null, this.roomtype.description))))));
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
