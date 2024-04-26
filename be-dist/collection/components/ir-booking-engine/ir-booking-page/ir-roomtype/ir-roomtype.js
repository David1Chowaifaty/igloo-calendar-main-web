import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '379b5d07313adecf9e554cb415bee2cdb381bd28', class: "flex flex-col justify-start gap-4 mb-4 md:flex-row" }, h("aside", { key: '41accfd9fed8ea5f38cec531dc38d3539b7cb6d4', class: "hidden md:block" }, h("ir-property-gallery", { key: '62b670f02b7164e151124b27a07d109eca250b4a', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '5383ec3a818dadc354d61e47359e603875d37fc5', class: "space-y-1 w-full flex-1 py-2" }, h("h3", { key: 'e74b818fe0dea83fce404073c1d78f7dd932fbe2', class: "text-slate-900  font-medium text-lg " }, this.roomtype.name), h("div", { key: '0058975ec5ccc8206c82ab46708b9edeb95a0f5a', class: "md:hidden" }, h("ir-property-gallery", { key: '092ef68d635e6de118cfcd2c47a1d721870b5d18', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '57f14830e792b6a0ec2d77b05d9197d6482d643c', class: "hidden md:block" }, h("ir-accomodations", { key: 'e078e7418cf0c9980bc09508a9d53bf7bb981da7', bookingAttributes: {
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
        })) : (h("div", { class: "bg-gray-100 app_container w-full p-2 flex-1 flex flex-col md:flex-row justify-between space-y-1 text-sm rounded-[var(--radius,8px)]" }, h("p", null, this.roomtype.description))))));
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
