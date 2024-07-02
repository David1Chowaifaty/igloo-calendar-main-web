import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: 'cbfe958730de566817f32fd3fed1f4d996f69dfd', class: "room-type-container" }, h("aside", { key: '091528f220213e23bc79f94933fa9a2ec5060607', class: "hidden md:block" }, h("ir-property-gallery", { key: '97fef51bc466e285af9fbbad2f662793636c77a2', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'b8d08b0cfe099f42670e5b4f94e82ff975d5d7f1', class: "w-full flex-1 space-y-2" }, h("h3", { key: '30f7de26a023b5a1f1cba1a33fc5cf47e01afc6f', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: 'f68046bc83a752190381a460c616c3b0f88272d3', class: "md:hidden" }, h("ir-property-gallery", { key: 'e3f8da7ebc9ebb76a7c5376ddf9b4f753ef12ee8', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '4fdd0e1912dcf3992fd641a10a56038b67239fb0', class: "hidden md:block" }, h("ir-accomodations", { key: '661ecac9313244aa632fd0aba2f8a91f09f90fe6', bookingAttributes: {
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
