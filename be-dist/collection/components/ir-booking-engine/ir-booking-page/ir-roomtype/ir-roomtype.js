import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: 'a5d11317e31454d295a2e75d89a0f993756a4382', class: "room-type-container" }, h("aside", { key: '4c7ea28664aaafe7213566459ad02e15d47af79d', class: "hidden md:block" }, h("ir-property-gallery", { key: '79e874403fa8a600f8545cb63444c630a3ad3a4e', property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'e4485fd3b375958c9cf6758d580da8236f5d12f8', class: "w-full flex-1 space-y-2" }, h("h3", { key: '916e0c363898668e93f857712f3cb544b7f02766', class: "text-start text-lg  font-medium text-slate-900 " }, this.roomtype.name), h("div", { key: '65c6ee2d8793af58cbe2b3e22a72b5b3f042081e', class: "md:hidden" }, h("ir-property-gallery", { key: '4acc25f092eacce171b200fd6e7e34ad4696dd6f', property_state: "carousel", roomType: this.roomtype })), h("div", { key: '69d55fd5c352cf47cbdd00bc2769a5bb5fdb3e7c', class: "hidden md:block" }, h("ir-accomodations", { key: '09737eb65ab7a395b83e1600853a68ad40cc3556', bookingAttributes: {
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
