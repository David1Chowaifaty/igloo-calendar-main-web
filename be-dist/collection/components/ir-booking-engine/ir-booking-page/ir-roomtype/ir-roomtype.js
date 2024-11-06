import app_store from "../../../../stores/app.store";
import booking_store, { getVisibleInventory } from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
import { h } from "@stencil/core";
export class IrRoomtype {
    constructor() {
        this.display = 'default';
        this.roomtype = undefined;
    }
    render() {
        var _a;
        return (h("section", { key: '66135d0bddf074f30bcf87e0eb7364c4631870b1', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '5bd6dfa2f8208761ba821b88fae9a5bfe7e59f47', class: "hidden md:block" }, h("ir-property-gallery", { key: '0a7abe3e049935f4510a7f5a9545b80dc1fb5404', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: '1296be22513b8bc7c8084266b5a8306a2eb5b86a', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: '6ad7b42a42e46fcff38352a7f84a92742024bc33', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '734213dc7da4e2c70c42c0b46035c02f0fc9d736', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: 'fb8cc4dead0f002a3aa40747ad186ee393aed9b7', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: '61fdf951f01213af7f9084b4b276df04754248a1', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid '}` }, h("div", { key: 'b39046f9c0524f086fbea1db0fb020364ccb7b19' }, h("h3", { key: '3a9670228b248e60a7f1e3b917542a0c280013a5', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: '1526bf774d29e2db106a6b21377c341db96ff4ff', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: '14563fa07860003d60309fad905964bcc140c5a5', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: '933933dfc01f4ed0052294b0a29d54ca9e724a8a', class: 'hidden md:block' }, h("ir-accomodations", { key: '096558a96456c8e9d0625ed5198eb82b4551b86b', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })))), booking_store.enableBooking &&
            (!this.roomtype.is_available_to_book ||
                this.roomtype.rateplans.every(ratePlan => { var _a; return !ratePlan.is_available_to_book && !((_a = ratePlan.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS')); })) ? (h("p", { class: `unavailable-roomtype text-base ${this.display === 'default' ? '' : 'pt-4'}` }, localizedWords.entries.Lcz_NotAvailable)) : (h("div", null, booking_store.enableBooking ? ((_a = this.roomtype.rateplans) === null || _a === void 0 ? void 0 : _a.map(ratePlan => {
            if (!ratePlan.is_available_to_book && !ratePlan.not_available_reason.includes('MLS')) {
                return null;
            }
            console.log(ratePlan);
            const visibleInventory = getVisibleInventory(this.roomtype.id, ratePlan.id);
            return (h("ir-rateplan", { display: this.display, key: ratePlan.id, ratePlan: ratePlan, visibleInventory: visibleInventory, roomTypeId: this.roomtype.id, roomTypeInventory: this.roomtype.inventory }));
        })) : (h("div", { class: "app_container flex w-full  flex-col justify-between space-y-1 rounded-md bg-gray-100  text-sm md:flex-row" }, h("p", null, this.roomtype.description)))))))));
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
