import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '0460d7ad407faa90d3494ef403cb6cb45ef3efd7', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '4ab37d68ca796a7dd67b07ca1a8822919f87f3bf', class: "hidden md:block" }, h("ir-property-gallery", { key: 'c8a58eab9222003ef4bf30104c6c4db88ca298d5', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: '720ca04d022aafa620a5ef305af3a1740fb9ff01', class: "w-full flex-1 md:space-y-2" }, this.display === 'default' && h("h3", { key: 'b3274050c8fd943b759f60bac60db83fa32ca7a7', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: 'a5b30c66e19e50ed53c39b2ef7f92809b4e91178', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: '9f027500e3c08dd48f7ef2df1c9238d2bfd948ad', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '93eb5711d560fe68cff17953e467d3a138b3dbe8', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : ''}` }, h("h3", { key: '5c6fc0a47d737a02e7c03ce4b99ce411427eba1d', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: 'c2ac313007af38c50f8d0431be88aeedb99591b6', class: "flex flex-wrap items-center gap-2 py-2 text-sm font-normal text-gray-700 md:hidden" }, h("ir-accomodations", { key: '9904824abf7ee151c471fd5fcacd21956b8f511a', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), h("div", { key: 'ff2a9e10dfe4140a0a3c02345a657a2c6a0c1445', class: "hidden md:block" }, h("ir-accomodations", { key: 'f73a9196d6ba320a8bc6106fb9fbcbbf1968f7fd', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), booking_store.enableBooking ? (this.roomtype.rateplans.map(ratePlan => {
            console.log(ratePlan);
            if (!ratePlan.is_active || !ratePlan.is_booking_engine_enabled || !ratePlan.variations) {
                return null;
            }
            const visibleInventory = getVisibleInventory(this.roomtype.id, ratePlan.id);
            return (h("ir-rateplan", { display: this.display, key: ratePlan.id, ratePlan: ratePlan, visibleInventory: visibleInventory, roomTypeId: this.roomtype.id, roomTypeInventory: this.roomtype.inventory }));
        })) : (h("div", { class: "app_container flex w-full flex-1 flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", null, this.roomtype.description)))))));
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
