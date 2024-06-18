import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: 'da7441a9af3b483f28912c1d59668383edb0c5ca', class: "room-type-container" }, h("aside", { key: '2ed2743d66a6401843ac54a9ece7012fffd77ca9', class: "hidden md:block" }, h("ir-property-gallery", { key: 'fb9ef1565d83b68c708686e4bb0c870aa4b7883d', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '697eb7593994cf3eec67a0762440e19601ccb0eb', class: "w-full flex-1 space-y-2" }, h("h3", { key: '38ce97ab460222a954dc41222ef41c1e8d98d0c0', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '0f304cf4ddb922b2f199f365f48ce3644c9e5ce9', class: "md:hidden" }, h("ir-property-gallery", { key: 'e2721171d241e3208b39318c6fc9dad9b5c679a5', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'b252731f73c23c77612c1741a9766178dd2b9d5a', class: "hidden md:block" }, h("ir-accomodations", { key: 'b0e51e9e7d2dc9e62d2f76c862683b4a6fdc1124', bookingAttributes: {
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
