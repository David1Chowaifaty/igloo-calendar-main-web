import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '35cfebcc67b04c651b684e77e471d071b2706fcb', class: "room-type-container" }, h("aside", { key: 'ae97d6d0340be1dd2c1154687a99190709437814', class: "hidden md:block" }, h("ir-property-gallery", { key: '853e5edd2e6d6b3e05dc4dd3040e4ca3c1d4a1e4', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '4b208e67effb6726db4efe0073e88e04cd325b18', class: "w-full flex-1 space-y-2" }, h("h3", { key: '27d93a206fe8939915520e3295dbc584ea76425b', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '371d7d54604e137f47744e4382c7cabb05cfa9e4', class: "md:hidden" }, h("ir-property-gallery", { key: '1cec286caf50236ca88d065811e91fbf78a64b2b', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '6bca0c11fcf54156ac604a2e9c942b14d96097b1', class: "hidden md:block" }, h("ir-accomodations", { key: 'a5e7b0e9926fdf24c8d9c941dae0e20a813c895d', bookingAttributes: {
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
