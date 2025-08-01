import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { l as locales } from './locales.store.js';
import { b as booking_store } from './booking.store.js';
import { d as defineCustomElement$9 } from './igl-application-info2.js';
import { d as defineCustomElement$8 } from './igl-property-booked-by2.js';
import { d as defineCustomElement$7 } from './ir-autocomplete2.js';
import { d as defineCustomElement$6 } from './ir-combobox2.js';
import { d as defineCustomElement$5 } from './ir-country-picker2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-phone-input2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const iglBookingFormCss = ".sc-igl-booking-form-h{display:flex;flex-direction:column}";
const IglBookingFormStyle0 = iglBookingFormCss;

const IglBookingForm = /*@__PURE__*/ proxyCustomElement(class IglBookingForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.selectedUnits = {};
    }
    componentWillLoad() {
        this.initializeGuestData();
        this.selectedBookedByData = this.bookedByInfoData;
    }
    initializeGuestData() {
        let total = 0;
        const newSelectedUnits = Object.assign({}, this.selectedUnits);
        const getRate = (rate, totalNights, isRateModified, preference) => {
            if (isRateModified && preference === 2) {
                return rate * totalNights;
            }
            return rate;
        };
        this.selectedUnits = newSelectedUnits;
        this.guestData = [];
        this.selectedRooms.forEach((room, key) => {
            room.forEach(rate_plan => {
                newSelectedUnits[key] = rate_plan.selectedUnits;
                total += rate_plan.totalRooms * getRate(rate_plan.rate, this.dateRangeData.dateDifference, rate_plan.isRateModified, rate_plan.rateType);
                for (let i = 1; i <= rate_plan.totalRooms; i++) {
                    this.guestData.push(Object.assign({ guestName: '', roomId: '', preference: '' }, rate_plan));
                }
            });
        });
        this.bookingData.TOTAL_PRICE = total;
    }
    handleOnApplicationInfoDataUpdateEvent(event, index) {
        const opt = event.detail;
        const categoryIdKey = `c_${opt.data.roomCategoryId}`;
        const updatedUnits = [...(this.selectedUnits[categoryIdKey] || [])];
        updatedUnits[index] = opt.data.roomId;
        this.selectedUnits = Object.assign(Object.assign({}, this.selectedUnits), { [categoryIdKey]: updatedUnits });
        this.dataUpdateEvent.emit({
            key: 'applicationInfoUpdateEvent',
            value: event.detail,
        });
    }
    handleEventData(event, key, index) {
        if (key === 'application-info') {
            this.handleOnApplicationInfoDataUpdateEvent(event, index);
        }
        else {
            this.selectedBookedByData = event.detail.data;
            this.dataUpdateEvent.emit({
                key: 'propertyBookedBy',
                value: event.detail,
            });
        }
    }
    isGuestDataIncomplete() {
        if (this.selectedGuestData.length !== this.guestData.length) {
            return true;
        }
        for (const data of this.selectedGuestData) {
            if (data.guestName === '' || data.preference === '' || data.roomId === '') {
                return true;
            }
        }
        return false;
    }
    isButtonDisabled(key) {
        const isValidProperty = (property, key, comparedBy) => {
            if (!property) {
                return true;
            }
            if (property === this.selectedGuestData) {
                return this.isGuestDataIncomplete();
            }
            if (key === 'selectedArrivalTime') {
                if (property[key] !== undefined) {
                    return property[key].code === '';
                }
                else {
                    return true;
                }
            }
            return property[key] === comparedBy || property[key] === undefined;
        };
        return (this.isLoading === key ||
            isValidProperty(this.selectedGuestData, 'guestName', '') ||
            isValidProperty(this.selectedBookedByData, 'isdCode', '') ||
            isValidProperty(this.selectedBookedByData, 'contactNumber', '') ||
            isValidProperty(this.selectedBookedByData, 'firstName', '') ||
            isValidProperty(this.selectedBookedByData, 'lastName', '') ||
            isValidProperty(this.selectedBookedByData, 'countryId', -1) ||
            isValidProperty(this.selectedBookedByData, 'selectedArrivalTime', '') ||
            isValidProperty(this.selectedBookedByData, 'email', ''));
    }
    render() {
        return (h("div", { key: 'b8b51a3909346a246bea6ddcd5072cd01eda922a', class: "d-flex flex-column h-100" }, h("div", { key: '26a8787bdab1f2e4528032989b16ffe853fa9f74', class: "d-flex flex-wrap" }, h("ir-date-view", { key: '965d5edac399183cd59056e91b5eab87373704e0', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate), dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (h("div", { key: '0f4e646ff3481fbfd2a67ef2ca2ba8d41c06ab3b', class: "mt-1 mt-md-0 text-right" }, locales.entries.Lcz_TotalPrice, " ", h("span", { key: '1520bda2e4f6df121353d6410c559827016a4ce3', class: "font-weight-bold font-medium-1" }, formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
            const rp = ratePlan;
            if (rp.reserved === 0) {
                return null;
            }
            return [...new Array(rp.reserved)].map((_, i) => (h("igl-application-info", { totalNights: Number(this.dateRangeData.dateDifference), bedPreferenceType: this.bedPreferenceType, currency: this.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.bookingData.event_type, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.bookingData.event_type === 'EDIT_BOOKING'
                    ? {
                        roomtypeId: this.bookingData.currentRoomType.roomtype.id,
                        unit: this.bookingData.currentRoomType.unit,
                    }
                    : undefined })));
        })), this.isEditOrAddRoomEvent || this.showSplitBookingOption ? null : (h("igl-property-booked-by", { propertyId: this.propertyId, countries: this.countries, language: this.language, showPaymentDetails: this.showPaymentDetails, defaultData: this.bookedByInfoData, onDataUpdateEvent: event => {
                this.handleEventData(event, 'propertyBookedBy', 0);
            } }))));
    }
    static get style() { return IglBookingFormStyle0; }
}, [2, "igl-booking-form", {
        "showPaymentDetails": [4, "show-payment-details"],
        "currency": [16],
        "isEditOrAddRoomEvent": [516, "is-edit-or-add-room-event"],
        "dateRangeData": [16],
        "bookingData": [16],
        "showSplitBookingOption": [4, "show-split-booking-option"],
        "language": [1],
        "bookedByInfoData": [16],
        "propertyId": [2, "property-id"],
        "bedPreferenceType": [8, "bed-preference-type"],
        "selectedRooms": [16],
        "isLoading": [513, "is-loading"],
        "countries": [16],
        "selectedGuestData": [8, "selected-guest-data"],
        "defaultGuestData": [16],
        "selectedBookedByData": [32],
        "guestData": [32],
        "selectedUnits": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-booking-form", "igl-application-info", "igl-property-booked-by", "ir-autocomplete", "ir-combobox", "ir-country-picker", "ir-date-view", "ir-input-text", "ir-phone-input", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookingForm);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-phone-input":
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

export { IglBookingForm as I, defineCustomElement as d };

//# sourceMappingURL=igl-booking-form2.js.map