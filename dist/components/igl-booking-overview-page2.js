import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { h as hooks } from './moment.js';
import { b as booking_store } from './booking.store.js';
import { d as defineCustomElement$c } from './igl-book-property-footer2.js';
import { d as defineCustomElement$b } from './igl-book-property-header2.js';
import { d as defineCustomElement$a } from './igl-date-range2.js';
import { d as defineCustomElement$9 } from './igl-rate-plan2.js';
import { d as defineCustomElement$8 } from './igl-room-type2.js';
import { d as defineCustomElement$7 } from './ir-autocomplete2.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-date-range2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-price-input2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const iglBookingOverviewPageCss = ".sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}";
const IglBookingOverviewPageStyle0 = iglBookingOverviewPageCss;

const IglBookingOverviewPage = /*@__PURE__*/ proxyCustomElement(class IglBookingOverviewPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.roomsDataUpdate = createEvent(this, "roomsDataUpdate", 7);
        this.bookingData = undefined;
        this.propertyId = undefined;
        this.message = undefined;
        this.showSplitBookingOption = undefined;
        this.eventType = undefined;
        this.currency = undefined;
        this.adultChildConstraints = undefined;
        this.ratePricingMode = undefined;
        this.dateRangeData = undefined;
        this.defaultDaterange = undefined;
        this.selectedRooms = undefined;
        this.adultChildCount = undefined;
        this.sourceOptions = undefined;
        this.bookedByInfoData = undefined;
        this.initialRoomIds = undefined;
    }
    getSplitBookings() {
        return (this.bookingData.hasOwnProperty('splitBookingEvents') && this.bookingData.splitBookingEvents) || [];
    }
    isEventType(event) {
        return event === this.eventType;
    }
    setMinDate() {
        if (!this.isEventType('EDIT_BOOKING')) {
            return;
        }
        const from_date = hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        var _a;
        return (h(Host, { key: 'b149601d0138600cbb20a9c3f577b85246ca3660' }, h("igl-book-property-header", { key: '6aec6ccf96001b3a478a1ee83d3a083a97b9bfe4', bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            adultChildCount: this.adultChildCount, splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, sourceOptions: this.sourceOptions, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), h("div", { key: '75b76ec416d05336f7ad94f68f1e04ce4bf08687', class: " text-left" }, isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (h("div", { class: "loading-container" }, h("div", { class: "loader" }))) : (h(Fragment, null, (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => (h("igl-room-type", { initialRoomIds: this.initialRoomIds, isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-type-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", "data-testid": `room_type_${roomType.id}`, id: roomType.id.toString(), roomInfoId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null, onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) })))))), h("igl-book-property-footer", { key: 'b12d6b4eb25a8e0c5fe950e7d727e98277207873', class: 'p-0 mb-1 mt-3', eventType: this.bookingData.event_type })));
    }
    static get style() { return IglBookingOverviewPageStyle0; }
}, [2, "igl-booking-overview-page", {
        "bookingData": [8, "booking-data"],
        "propertyId": [2, "property-id"],
        "message": [1],
        "showSplitBookingOption": [4, "show-split-booking-option"],
        "eventType": [1, "event-type"],
        "currency": [8],
        "adultChildConstraints": [16],
        "ratePricingMode": [8, "rate-pricing-mode"],
        "dateRangeData": [8, "date-range-data"],
        "defaultDaterange": [16],
        "selectedRooms": [16],
        "adultChildCount": [16],
        "sourceOptions": [16],
        "bookedByInfoData": [8, "booked-by-info-data"],
        "initialRoomIds": [8, "initial-room-ids"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-booking-overview-page", "igl-book-property-footer", "igl-book-property-header", "igl-date-range", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-button", "ir-date-range", "ir-icons", "ir-price-input", "ir-select", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookingOverviewPage);
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBookingOverviewPage as I, defineCustomElement as d };

//# sourceMappingURL=igl-booking-overview-page2.js.map