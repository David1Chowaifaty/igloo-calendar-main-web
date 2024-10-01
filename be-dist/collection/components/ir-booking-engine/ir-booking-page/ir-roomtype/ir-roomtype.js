import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '9d7bfec12a70f648cc6d5e82d28484dec26f3a2d', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '6ed79ff6329a95fb9ab4989cc93ac07ac523ce5c', class: "hidden md:block" }, h("ir-property-gallery", { key: 'debf1441d16f8a8c0f9a84d5f1018d0a6d1668ad', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: '5a6466791364ffbe9e95e0e43f65e1b06b0e3925', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: '660fef519bd97b254a4a2b8612ba7b3840d603c1', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '569dd2466d99b3e5a4466904628780e46b05ce58', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: '45ef1ff6005ff7073b76422308d4515647be964a', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '5fddf44203434bc2ee1644120219d6b4d74167e7', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid justify-between'}` }, h("div", { key: '1ab5dded1e59503dbf8c10536af39a6e008372ef' }, h("h3", { key: '1d1fcaf44a4c90fd14aa294a7baf7b767387945f', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '38b41c03341da36f2d343298f785b55091563f1c', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: '7831353f935c9ad1f2a423635bbd77eb73b7fc9c', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: 'deeeb97b11da5abd29edfec9664a04fc1548bee0', class: 'hidden md:block' }, h("ir-accomodations", { key: '3f1520998d00d2fc923f8506f18bdbb36fbdc7c7', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })))), h("div", { key: '210d7ca25c9fc749a21e1b6df1eb721ea0fb09d6' }, booking_store.enableBooking ? (this.roomtype.rateplans.map(ratePlan => {
            if (!ratePlan.is_active || !ratePlan.is_booking_engine_enabled || !ratePlan.variations) {
                return null;
            }
            const visibleInventory = getVisibleInventory(this.roomtype.id, ratePlan.id);
            return (h("ir-rateplan", { display: this.display, key: ratePlan.id, ratePlan: ratePlan, visibleInventory: visibleInventory, roomTypeId: this.roomtype.id, roomTypeInventory: this.roomtype.inventory }));
        })) : (h("div", { class: "app_container flex w-full flex-1 flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", null, this.roomtype.description))))))));
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
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'grid' | 'default'",
                    "resolved": "\"default\" | \"grid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'default'"
            },
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
