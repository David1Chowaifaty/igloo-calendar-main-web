import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: 'b13c373e1cbd369579321989c5e12b0d5c176def', class: "room-type-container" }, h("aside", { key: '5c361aa15dee2ac1a744df8ec9d1c3b62f94d385', class: "hidden md:block" }, h("ir-property-gallery", { key: '81705d1de76e43a5b6a9dd6c7a2a618085ec6f3c', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '8ac531343aebc1a13ff954bba4efc4dc19dafd4b', class: "w-full flex-1 space-y-2" }, h("h3", { key: '7fd284bddc4b03d6fe72037b70afa429672926fb', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '500dc000e620cc4f9c88539e75ce54c2169c7bee', class: "md:hidden" }, h("ir-property-gallery", { key: '1a362d86395da9d5b81ffb983817bbb4c9aaed4b', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '2af106e3a8c6f7a8ae83cfbc43f1bf573aa1807f', class: "hidden md:block" }, h("ir-accomodations", { key: 'c8547ad49d356170f013f6f2cb14ecf33852fa9f', bookingAttributes: {
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
