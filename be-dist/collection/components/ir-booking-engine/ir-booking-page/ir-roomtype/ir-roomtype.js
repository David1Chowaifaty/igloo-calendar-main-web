import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '3430b5f6411963d28db455525bbdaef297354024', class: "room-type-container" }, h("aside", { key: 'd86aeca923b1d310a28ce98f0009b7cd354f095f', class: "hidden md:block" }, h("ir-property-gallery", { key: '072c301cb5947476abcd99ee2a9da13ebd385344', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '7d4dac1d7f219de7b8b52bdbd156ffa14281e6db', class: "w-full flex-1 space-y-2" }, h("h3", { key: '2a2dc33b8dc286827a442ed99fb8cba2b69cc0bc', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: 'd0e2f693b6348ebb107fccd62b779e8486771b40', class: "md:hidden" }, h("ir-property-gallery", { key: 'badbfabc39f59504820db5488b1aa6cdb498d4e2', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '1cfe356c0a47747b4883f932865025e693dd8745', class: "hidden md:block" }, h("ir-accomodations", { key: '8e549237507a268f046169bc7e12a3d4d7192051', bookingAttributes: {
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
