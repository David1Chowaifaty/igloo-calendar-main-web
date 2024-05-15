import { Host, h } from "@stencil/core";
import booking_store, { calculateTotalCost } from "../../../stores/booking";
import app_store, { onAppDataChange } from "../../../stores/app.store";
import { cn, formatAmount, getDateDifference } from "../../../utils/utils";
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
    handleBookingAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.checkoutContainerRef) {
            this.checkoutContainerRef.classList.add('bounce-twice');
            this.checkoutContainerRef.addEventListener('animationend', () => {
                this.checkoutContainerRef.classList.remove('bounce-twice');
            });
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (!this.property) {
            return null;
        }
        const { totalAmount } = calculateTotalCost();
        const isInjected = app_store.app_data.injected;
        return (h(Host, null, h("div", { class: "space-y-5 " }, !isInjected && (h("div", null, h("ir-property-gallery", null))), h("div", null, h("ir-availibility-header", null)), h("section", { class: "relative justify-between gap-4 rounded-md " }, h("div", { class: " flex-1 py-2" }, (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => {
            if (!roomType.is_active ||
                roomType.images.length <= 0 ||
                (roomType.inventory <= 0 && booking_store.enableBooking) ||
                (isInjected && roomType.id !== app_store.app_data.roomtype_id)) {
                return null;
            }
            return h("ir-roomtype", { roomtype: roomType, key: roomType.id });
        }))), h("section", { class: cn('text-sm', { 'pb-5': isInjected }) }, h("h2", { class: "mb-5 text-lg font-medium" }, "Facilities and services"), h("ir-facilities", null), !isInjected && h("p", { innerHTML: (_c = (_b = this.property) === null || _b === void 0 ? void 0 : _b.description) === null || _c === void 0 ? void 0 : _c.location_and_intro, class: "px-6 py-8" }))), booking_store.enableBooking && totalAmount > 0 && (h("div", { ref: el => (this.checkoutContainerRef = el), class: "sticky bottom-2 z-40 mt-14 flex w-full items-center justify-end gap-4 rounded-md bg-gray-700/80 text-base text-gray-200 md:text-lg lg:gap-10  lg:text-2xl" }, h("div", { class: "" }, h("p", null, getDateDifference((_d = booking_store.bookingAvailabilityParams.from_date) !== null && _d !== void 0 ? _d : new Date(), (_e = booking_store.bookingAvailabilityParams.to_date) !== null && _e !== void 0 ? _e : new Date()), " nights")), totalAmount > 0 && h("div", null, formatAmount(totalAmount, app_store.userPreferences.currency_id)), h("ir-button", { onButtonClick: () => this.routing.emit('checkout'), label: "BOOK NOW", size: "lg", class: "w-auto lg:w-60", buttonStyles: {
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
    static get listeners() {
        return [{
                "name": "animateBookingButton",
                "method": "handleBookingAnimation",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-page.js.map
