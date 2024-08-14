import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: 'a39cde9b68a0d0fab1b73ca830227b790e70fbfa', class: "room-type-container" }, h("aside", { key: '58e64071c5d33fb0c3118ffa4e0c2b0aca3a5c97', class: "hidden md:block" }, h("ir-property-gallery", { key: '47ce024bfb137b294a22043a7d4fc6b0d5cb0137', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'a6ea5f3a631ee8d22dc825647a83fc906aaaac0b', class: "w-full flex-1 space-y-2" }, h("h3", { key: '93ddbb893ff500f8886ae1e7dcf9c471efe52e26', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '18336d73b27ee72f3046c16be15862d68220f688', class: "md:hidden" }, h("ir-property-gallery", { key: '9cf5a01d6fcb4f9086fd24b84f1ef4a09ea729ce', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'b56ceae7ac3bf5c1c62eaec77496d6adcd4daafb', class: "hidden md:block" }, h("ir-accomodations", { key: '43f5c10be5f576254bb646b5d0ff916616fc9430', bookingAttributes: {
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
