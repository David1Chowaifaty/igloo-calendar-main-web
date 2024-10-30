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
        return (h("section", { key: '2a539ad63e8845a6007943410ab42ea224eac457', class: `room-type-container p-0 ${this.display === 'default' ? 'md:p-4' : 'h-full'}` }, this.display === 'default' && (h("aside", { key: '2efee4ea3b485a5bfe57c49ca55387dbb65eddb2', class: "hidden md:block" }, h("ir-property-gallery", { key: '31c423b66435eb79dbb3fa8f4004679fb8d65a5f', property_state: "carousel", roomType: this.roomtype }))), h("div", { key: '404c6baa0f89c0a30dffe98779d009cab854486b', class: `w-full  ${this.display === 'default' ? 'md:space-y-2' : 'rp-container-grid '}` }, this.display === 'default' && h("h3", { key: '58b3a9f60915f88e44c452908cdaaf056178e8fd', class: "hidden text-start  text-lg font-medium text-slate-900 md:block " }, this.roomtype.name), h("div", { key: '7ce99633928815b6f86de8a03b3e24b75f3a0911', class: this.display === 'default' ? 'md:hidden' : '' }, h("ir-property-gallery", { key: 'e5ffe94ab634bd8c51c3c1781b5eaccfc8f1964d', display: this.display, property_state: "carousel", roomType: this.roomtype })), h("div", { key: 'cac751defa8d49f5200996851294a93fa8b57f42', class: `p-4 pt-2 ${this.display === 'default' ? 'md:p-0' : 'rp-container-grid '}` }, h("div", { key: '61b77141bea1f8bcbc7d671c362c21f57a62bbd0' }, h("h3", { key: 'a93746b5d2429f03037d1c23cbda60d8c60bbdd8', class: `text-start  text-lg font-medium text-slate-900 ${this.display === 'default' ? 'md:hidden' : ''} ` }, this.roomtype.name), h("div", { key: 'd7fe0a65c02e5db6a6f902aa51a9728fa7e5a0a0', class: `flex  flex-wrap  gap-2 py-2 text-sm font-normal text-gray-700 ${this.display === 'default' ? 'md:hidden' : '  '}` }, h("ir-accomodations", { key: 'b31a6f8a6e9d343cf8400bedf4487f98012609da', bookingAttributes: {
                max_occupancy: this.roomtype.occupancy_max.adult_nbr,
                bedding_setup: this.roomtype.bedding_setup,
            }, amenities: app_store.property.amenities })), this.display === 'default' && (h("div", { key: '5f2382493e90f6ae16120da5d20c2125edeefc81', class: 'hidden md:block' }, h("ir-accomodations", { key: '33d2e05d82e67f0328f528f7a1fc79ab4af793b0', bookingAttributes: {
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
