import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '582c043d181ec03fc217315b0e80c3335511dba1', class: "room-type-container" }, h("aside", { key: 'a0b8009f6b180bbfb28963a500fa32600cf5b44e', class: "hidden md:block" }, h("ir-property-gallery", { key: '4f2d400f7aad30169b85ef90b7434bb863c9d26f', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'dc54385b640adce0636bc5df7e12a2edf0c560e3', class: "w-full flex-1 space-y-2" }, h("h3", { key: '084b570a3d037ceb285f291c94112ece79f90a76', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '5b922e2c21677f01af73f5f6f02f2eafb5de54ba', class: "md:hidden" }, h("ir-property-gallery", { key: '3da3ad4a10f44d259c61e5ed7fd9e4a392cd3e07', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'd8fe4486ae071b4548174ea2d31a8c2d1419f17d', class: "hidden md:block" }, h("ir-accomodations", { key: 'a2d9eafc56b30f5741adeb3155aacb8ae825cd05', bookingAttributes: {
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
