import { Fragment, Host, h } from "@stencil/core";
import booking_store, { calculateTotalCost, getVisibleInventory, reserveRooms, updateRoomParams } from "../../stores/booking";
import app_store, { onAppDataChange } from "../../stores/app.store";
import { cn, formatAmount, getDateDifference } from "../../utils/utils";
// import { roomtypes } from '@/data';
export class IrBookingPage {
    constructor() {
        this.selectedLocale = undefined;
        this.property = undefined;
        this.currencies = undefined;
        this.languages = undefined;
    }
    componentWillLoad() {
        this.property = Object.assign({}, app_store.property);
        onAppDataChange('property', (newValue) => {
            console.log(newValue);
            this.property = Object.assign({}, newValue);
        });
    }
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    render() {
        var _a, _b, _c, _d;
        return (h(Host, { key: 'b0d7c7fbb14b1e651c91b6e68762c3f730a6e4bf' }, h("div", { key: '294b22f44c96b45af24bf9a129f89ce3fe31426f', class: "space-y-5" }, h("div", { key: 'fef4fccaf99fb328a6cb732058dbc042f21d58ac' }, h("ir-property-gallery", { key: '0b6d6322ec8ea910ca0e400df3e93d1d04c33638', exposed_property: this.property })), h("div", { key: 'cd0c1b552531371b4c72f01374a8f29edbe2ebd0' }, h("ir-availibility-header", { key: '81f60a7a19d048c6088a50735557bf289e27105c' })), h("section", { key: '0ab0dd376ec8ec03e171463c35ad207084a28962', class: "relative rounded-md gap-4 justify-between " }, h("div", { key: '80caae2a425ab8faf1d17a4bde63c77702ef4f50', class: "divide-y flex-1 py-2" }, (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => {
            if (!roomType.is_active || roomType.images.length <= 0 || (roomType.inventory <= 0 && booking_store.enableBooking)) {
                return null;
            }
            return (h("section", { class: "flex flex-col  justify-start gap-4 mb-4   md:flex-row" }, h("aside", { class: "hidden md:block" }, h("ir-property-gallery", { property_state: "carousel", roomType: roomType, exposed_property: this.property })), h("div", { class: "space-y-1 w-full flex-1 py-2" }, h("h3", { class: "text-slate-900  font-medium text-lg " }, roomType.name), h("div", { class: "md:hidden" }, h("ir-property-gallery", { property_state: "carousel", roomType: roomType, exposed_property: this.property })), h("div", { class: "hidden lg:block" }, h("ir-accomodations", { bookingAttributes: {
                    max_occupancy: roomType.occupancy_max.adult_nbr,
                    bedding_setup: roomType.bedding_setup,
                }, amenities: this.property.amenities })), booking_store.enableBooking ? (roomType.rateplans.map(ratePlan => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (!ratePlan.is_active) {
                    return null;
                }
                if (!ratePlan.variations) {
                    return null;
                }
                const visibleInventory = getVisibleInventory(roomType.id, ratePlan.id);
                return (h("div", { key: ratePlan.id, class: "bg-gray-100 app_container w-full p-2 flex flex-col lg:grid lg:grid-cols-7 lg:gap-4 space-y-1 text-sm" }, h("div", { class: cn('flex justify-between md:justify-start w-full md:w-fit', {
                        'lg:col-span-1 xl:col-span-2': !ratePlan.custom_text,
                    }) }, h("p", { class: "line-clamp-3 font-semibold" }, ratePlan.short_name, h("span", { class: "hidden md:inline text-slate-700 text-sm" }, ratePlan.custom_text)), visibleInventory.reserved > 0 && (h("div", { class: "flex items-start gap-1 md:hidden" }, h("p", { class: "font-medium" }, formatAmount((_a = visibleInventory.selected_variation) === null || _a === void 0 ? void 0 : _a.amount, app_store.userPreferences.currency_id)), h("p", { class: "font-medium line-through text-red-500" }, formatAmount((_b = visibleInventory.selected_variation) === null || _b === void 0 ? void 0 : _b.total_before_discount, app_store.userPreferences.currency_id))))), h("p", { class: "md:hidden line-clamp-3 text-slate-700 text-xs" }, ratePlan.custom_text), h("div", { class: cn('w-full space-y-2  flex flex-col md:space-y-0  md:justify-between md:flex-row md:items-start lg:grid lg:grid-cols-5 lg:col-span-5 lg:gap-4', {
                        'lg:col-span-6 xl:col-span-5': !ratePlan.custom_text,
                        'md:justify-normal md:gap-4': visibleInventory.reserved === 0,
                    }) }, h("div", { class: cn('lg:col-span-2', {
                        'md:w-full': visibleInventory.reserved === 0,
                    }) }, h("ir-select", { class: "w-full md:w-auto", label: "Travelers", value: (_c = visibleInventory.selected_variation) === null || _c === void 0 ? void 0 : _c.adult_child_offering, onValueChange: e => this.handleVariationChange(e, ratePlan.variations, ratePlan.id, roomType.id), data: ratePlan.variations.map(v => ({
                        id: v.adult_child_offering,
                        value: `${v.adult_nbr} adults - ${v.child_nbr} children`,
                    })) }), h("div", { class: "hidden md:flex items-center gap-4" }, h("p", null, "Cancelation conditions"), h("ir-tooltip", { class: "text-gray-700 flex items-center justify-center", message: ratePlan.cancelation }))), visibleInventory.reserved > 0 && (h("div", { class: "hidden md:flex items-center gap-1 flex-col justify-between" }, h(Fragment, null, h("p", { class: "font-medium line-through" }, formatAmount((_d = visibleInventory.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)), h("p", { class: "font-medium  text-red-500" }, "%", (_e = visibleInventory.selected_variation) === null || _e === void 0 ? void 0 :
                    _e.discount_pct)))), visibleInventory.reserved > 0 && (h("div", { class: "hidden md:flex items-center  flex-col justify-between" }, h(Fragment, null, h("p", { class: "font-medium text-lg" }, formatAmount((_f = visibleInventory.selected_variation) === null || _f === void 0 ? void 0 : _f.amount, app_store.userPreferences.currency_id)), h("p", { class: "font-medium text-xs" }, (_g = visibleInventory.selected_variation) === null || _g === void 0 ? void 0 : _g.amount_per_night)))), h("ir-select", { onValueChange: e => reserveRooms(roomType.id, ratePlan.id, Number(e.detail)), label: "Rooms", value: visibleInventory.reserved, class: cn('w-full  md:w-auto', {
                        'md:w-full lg:col-span-2': visibleInventory.reserved === 0,
                    }), data: (_h = [...new Array(roomType.inventory + 1)]) === null || _h === void 0 ? void 0 : _h.map((_, i) => {
                        var _a;
                        return ({
                            id: i,
                            value: `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_a = visibleInventory.selected_variation) === null || _a === void 0 ? void 0 : _a.amount) * i, app_store.userPreferences.currency_id)}`,
                            disabled: i >= visibleInventory.visibleInventory + 1,
                            html: true,
                        });
                    }) }))));
            })) : (h("div", { class: "bg-gray-100 app_container w-full p-2 flex-1  flex flex-col md:flex-row justify-between space-y-1 text-sm rounded-[var(--radius,8px)]" }, h("p", null, roomType.description))))));
        }))), h("section", { key: 'fc6abe82a5efcdf5b6621137c8a2039830ff93d2', class: 'text-sm' }, h("h2", { key: 'a954b8ded2fd35bef44339bf210a53b7f5a00d4a', class: "text-lg font-medium mb-5" }, "Facilities and services"), h("ir-facilities", { key: '2723c4af62a02e757f7d0b20a6229819e22885d3', properties: this.property }), h("p", { key: 'fddc7a11967b2a28bb59fe8e2ee39540a3b8d212', innerHTML: (_b = this.property) === null || _b === void 0 ? void 0 : _b.description.location_and_intro, class: "py-2" }))), booking_store.enableBooking && calculateTotalCost() > 0 && (h("div", { class: "z-40 text-lg mt-14 lg:text-2xl rounded-md  sticky bottom-2 text-gray-200 gap-10  flex w-full items-center justify-end  bg-gray-700/80" }, h("div", { class: "" }, h("p", null, getDateDifference((_c = booking_store.bookingAvailabilityParams.from_date) !== null && _c !== void 0 ? _c : new Date(), (_d = booking_store.bookingAvailabilityParams.to_date) !== null && _d !== void 0 ? _d : new Date()), " nights")), calculateTotalCost() > 0 && h("div", null, formatAmount(calculateTotalCost(), app_store.userPreferences.currency_id)), h("ir-button", { onButtonClick: () => this.routing.emit('checkout'), label: "BOOK NOW", size: "lg", class: "w-60", buttonStyles: {
                height: '64px',
                borderRadius: '0',
                borderTopRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderBottomRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderTopLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
                borderBottomLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
            } })))));
    }
    static get is() { return "ir-booking-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-page.css"]
        };
    }
    static get states() {
        return {
            "selectedLocale": {},
            "property": {},
            "currencies": {},
            "languages": {}
        };
    }
    static get events() {
        return [{
                "method": "routing",
                "name": "routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "pages",
                    "resolved": "\"booking\" | \"checkout\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-page.js.map
