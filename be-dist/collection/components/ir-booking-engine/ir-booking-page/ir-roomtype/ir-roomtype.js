import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
        this.roomtype = undefined;
    }
    render() {
        return (h("section", { key: '9d7bfec12a70f648cc6d5e82d28484dec26f3a2d', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '6ed79ff6329a95fb9ab4989cc93ac07ac523ce5c', class: "hidden md:block" }, h("ir-property-gallery", { key: 'debf1441d16f8a8c0f9a84d5f1018d0a6d1668ad', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: 'f30ed54d075ad5fdaa67fdc95a3cb7600008f57a', class: `w-full flex-1 ${this.display === 'default' ? 'md:space-y-2' : ''}` }, this.display === 'default' && h("h3", { key: 'f6493a983d03b4b557ccc35daaef1c37e2900fce', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '39f0f899bfef8acb3b8b599e0efa8af46d51486c', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: 'c512e8c018e881f7943918660111e94f195701aa', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '208f20099b399ce1d3700405e7d62eb99e36e704', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : ''}` }, h("h3", { key: '2c6a2f5067db2709e371718045404768facf74b9', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '6131a46ea8cf4b4b2d498f79476759d16ee92618', class: `flex flex-wrap items-center gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : ''}` }, h("ir-accomodations", { key: '7d29aedc8291d6f8d861b24377e618ebf787fd1e', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: 'e13c53ac464f1ea0407f59a438130c7d8a2e76d9', class: 'hidden md:block' }, h("ir-accomodations", { key: 'bdde3d1547283a29fd14689fe29ac024ba4d459a', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities }))), booking_store.enableBooking ? (this.roomtype.rateplans.map(ratePlan => {
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
