import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '0a6d701de0a84407516c378e6fe625f16c2cfe88', class: "mb-4 flex flex-col justify-start gap-4 md:flex-row" }, h("aside", { key: '8b338beb22a12f3370ce338085ad69e3e2418331', class: "hidden md:block" }, h("ir-property-gallery", { key: 'd3ade5762d595ff474228d34bfba80b615471a88', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'f5b87c6316d37e409fe51934dbd08f62aab40abe', class: "w-full flex-1 space-y-1 py-2" }, h("h3", { key: '29fef88d5eb9f9719bb68e6cff56d98149907dc0', class: "text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '5ebfefe8323d2de20fd566e71590a7d21f642b72', class: "md:hidden" }, h("ir-property-gallery", { key: '0d3cc0533e6109867c8d686794e5714ae414f7fa', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'd4014875c52bc3723b9a804389f71bb63c547913', class: "hidden md:block" }, h("ir-accomodations", { key: '0a3878f8c87f4384a4bc10999b5f279078874dad', bookingAttributes: {
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
