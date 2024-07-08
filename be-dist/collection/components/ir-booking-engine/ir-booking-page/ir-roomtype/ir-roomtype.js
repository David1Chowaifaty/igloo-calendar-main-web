import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '5c3e0e88f1b21bc70fc4b339c26ddd7653764631', class: "room-type-container" }, h("aside", { key: 'b6414639b4237e5b96b364163b04561124cf7b68', class: "hidden md:block" }, h("ir-property-gallery", { key: 'bc21c5d91eae6c6e560eb50dd362b3d3ebe9cefd', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '7e420b12c3c0d5a8f9a421a3efb78f8a5d7faae8', class: "w-full flex-1 space-y-2" }, h("h3", { key: '6efa7c89d968d0054971174914ed56d9f9c6e34c', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '42ca60af0d3929953fafe27c4d8764d58e68c6b3', class: "md:hidden" }, h("ir-property-gallery", { key: '84a136b33a39d46a2e121baeb681541fce72ec76', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '140c0105678ac2b559b511fc16d0d883a1fda1e8', class: "hidden md:block" }, h("ir-accomodations", { key: '21609b75952758909532ec451511a26922532c2b', bookingAttributes: {
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
