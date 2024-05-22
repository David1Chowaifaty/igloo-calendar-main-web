import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '21773cd84d78bcd1b68eebfb335b8c355016ce63', class: "mb-4 flex flex-col justify-start gap-4 md:flex-row" }, h("aside", { key: '6a4d29ead9f2f5d26ad9c14c245fec8d7381d2cd', class: "hidden md:block" }, h("ir-property-gallery", { key: 'c98747237c5f21a476a31a2968de6756f0aeb9f1', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '27a83fe0da85fdffd041c3da75da782d959ba263', class: "w-full flex-1 space-y-2 py-2" }, h("h3", { key: '5fbc642e60b81abf5a74bc00d155a78c3ed7e221', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '8ef7f0b00b84bfb6750da447facb910834d5ff57', class: "md:hidden" }, h("ir-property-gallery", { key: '99006cbccc4188d35ba817c8a3f9255e6b3a765a', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '77da3707d4e4f273cc00088c6ce5137791dea1d2', class: "hidden md:block" }, h("ir-accomodations", { key: '05f1c036baff275e5422a203bc191784d08f644c', bookingAttributes: {
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
