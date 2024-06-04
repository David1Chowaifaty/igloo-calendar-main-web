import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: 'd7127cfc210e3b2691850a2edab6546c03af18ff', class: "room-type-container" }, h("aside", { key: 'c72c5f6e17a9531b10c6fde7c88ade3e5aa0bf10', class: "hidden md:block" }, h("ir-property-gallery", { key: 'a7af3e86f0934cb6a8558c476115541bd736c4c2', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '9b5527131c2ae638876aa56a6dd12bb02274331e', class: "w-full flex-1 space-y-2" }, h("h3", { key: '6db2b00f4fe9b7638a1b6a24bda4d913445187f9', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '7a19ea99d4d52b32b068c5a70ea8380c2a5d8ae8', class: "md:hidden" }, h("ir-property-gallery", { key: 'dbd293b294fe97bc5afcf4d33185737039f55d4c', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '78105c8b2ce178be312b7d74f0fd23b586952f0f', class: "hidden md:block" }, h("ir-accomodations", { key: 'b17bfb87b487ce340b4b5c4f34f59c4eb45df61d', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), booking_store.enableBooking ? (this.roomtype.rateplans.map(ratePlan => {
            if (!ratePlan.is_active) {
                return null;
            }
            if (!ratePlan.variations) {
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
