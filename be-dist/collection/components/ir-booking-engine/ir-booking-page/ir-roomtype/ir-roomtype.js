import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '1c9940e5f238e24c3a79f15468462f1167eaa6c5', class: "mb-4 flex flex-col justify-start gap-4 md:flex-row" }, h("aside", { key: '13d02e9d2532ca36c5174ec377f34893504350b1', class: "hidden md:block" }, h("ir-property-gallery", { key: '2cad8de4aa202f64246e96418eb376f2f721d348', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'd451e56b0b0d18ca7b348e8a2f328f16a30b77f1', class: "w-full flex-1 space-y-2 py-2" }, h("h3", { key: '43db93f902540ea977e345e70218389da1c8150f', class: "text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: 'b5a3cc8b9f43367bd1268e7fa0db3abd5556f9fc', class: "md:hidden" }, h("ir-property-gallery", { key: 'cb02926854c9b8b72a0732ef914c31b4e6461d1a', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '8f8446cbb4a2fe44ce26a3d858ba5ec845fe1392', class: "hidden md:block" }, h("ir-accomodations", { key: '3243112587144ca03898e30b1a62e8af53e67685', bookingAttributes: {
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
        })) : (h("div", { class: "app_container flex w-full flex-1 flex-col justify-between space-y-1 rounded-md bg-gray-100 p-2 text-sm md:flex-row" }, h("p", null, this.roomtype.description))))));
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
