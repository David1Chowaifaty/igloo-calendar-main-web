import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '21773cd84d78bcd1b68eebfb335b8c355016ce63', class: "mb-4 flex flex-col justify-start gap-4 md:flex-row" }, h("aside", { key: '6a4d29ead9f2f5d26ad9c14c245fec8d7381d2cd', class: "hidden md:block" }, h("ir-property-gallery", { key: 'c98747237c5f21a476a31a2968de6756f0aeb9f1', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '27a83fe0da85fdffd041c3da75da782d959ba263', class: "w-full flex-1 space-y-1 py-2" }, h("h3", { key: '1a4d1b5f689c0fdcb69b8b9ea3d081f7cb219a07', class: "text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '59ced6e0bdc5f5906578f464232b8efa839ce62a', class: "md:hidden" }, h("ir-property-gallery", { key: '526b4c0e8454d6cd1cbc8a7c5b4b281922c27841', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'baeeb738acbab3248301eb7dc179b668f58a46fd', class: "hidden md:block" }, h("ir-accomodations", { key: '4ae7d1cfff8432a166a118cfb811849fe00c8882', bookingAttributes: {
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
        })) : (h("div", { class: "app_container flex w-full flex-1 flex-col justify-between space-y-1 rounded-[var(--radius,8px)] bg-gray-100 p-2 text-sm md:flex-row" }, h("p", null, this.roomtype.description))))));
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
