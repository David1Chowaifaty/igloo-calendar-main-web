import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService, c as calculateTotalRooms, l as getBookingTotalPrice, s as setBookingDraft, a as updateBookedByGuest, b as booking_store, n as bookedByGuestBaseData } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { f as formatAmount } from './utils.js';
import { c as calculateDaysBetweenDates } from './booking.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { i as isAgentMode } from './functions.js';
import { I as IRBookingEditorService } from './ir-booking-editor.service.js';
import { d as defineCustomElement$c } from './igl-application-info2.js';
import { d as defineCustomElement$b } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$a } from './ir-country-picker2.js';
import { d as defineCustomElement$9 } from './ir-custom-button2.js';
import { d as defineCustomElement$8 } from './ir-date-view2.js';
import { d as defineCustomElement$7 } from './ir-input2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-mobile-input2.js';
import { d as defineCustomElement$4 } from './ir-picker2.js';
import { d as defineCustomElement$3 } from './ir-picker-item2.js';
import { d as defineCustomElement$2 } from './ir-service-assignee-select2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingEditorFormCss = ".sc-ir-booking-editor-form-h{display:flex;flex-direction:column;height:100%}.booking-editor__guest-form.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;height:100%}.booking-editor__header.sc-ir-booking-editor-form{width:100%;align-items:flex-center;display:flex}.booking-editor__dates.sc-ir-booking-editor-form{line-height:1.2}.booking-editor__total.sc-ir-booking-editor-form{display:flex;align-items:center;white-space:nowrap}.booking-editor__total-label.sc-ir-booking-editor-form{margin-right:4px}.booking-editor__total-amount.sc-ir-booking-editor-form{white-space:nowrap}.booking-editor__booked-by.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}.booking-editor__heading.sc-ir-booking-editor-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}@media (min-width: 768px){.booking-editor__booked-by.sc-ir-booking-editor-form{flex-direction:row;align-items:center}.booking-editor__booked-by-picker.sc-ir-booking-editor-form{max-width:40rem}}";
const IrBookingEditorFormStyle0 = irBookingEditorFormCss;

const IrBookingEditorForm = /*@__PURE__*/ proxyCustomElement(class IrBookingEditorForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.doReservation = createEvent(this, "doReservation", 7);
    }
    mode = 'PLUS_BOOKING';
    room;
    booking;
    guests;
    totalCost = 0;
    assignee = 'guest';
    doReservation;
    bookingService = new BookingService();
    bookingEditorService;
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
        this.bookingEditorService = new IRBookingEditorService(this.mode);
        if (this.bookingEditorService.isEventType(['ADD_ROOM', 'SPLIT_BOOKING']) && isAgentMode(this.booking)) {
            this.assignee = 'agent';
            setBookingDraft({ roomAssignee: 'agent' });
        }
    }
    async handleRecalculation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
    }
    async fetchGuests(email) {
        try {
            if (!email) {
                return;
            }
            this.guests = await this.bookingService.fetchExposedGuest(email, calendar_data.property.id);
        }
        catch (error) {
            console.log(error);
        }
    }
    handleComboboxSelect(e) {
        const guest = this.guests?.find(guest => guest.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        updateBookedByGuest({
            id: guest.id,
            email: guest.email,
            firstName: guest.first_name,
            lastName: guest.last_name,
            mobile: guest.mobile_without_prefix,
            countryId: guest.country_id?.toString(),
            phone_prefix: guest['country_phone_prefix'],
        });
    }
    render() {
        const { dates } = booking_store.bookingDraft;
        let hasBookedByGuestController = false;
        return (h("form", { key: '46886970a835a2e35eb0fe5e4960293a17d58fa5', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, h("div", { key: 'e37e0f41a2ee16cdb416b1fdb6ed3910565d2847', class: "booking-editor__header" }, h("ir-date-view", { key: 'e690871e3b3a293ffc815155a1fea357486891da', class: "booking-editor__dates mr-1 flex-fill font-weight-bold font-medium-1", from_date: dates.checkIn, to_date: dates.checkOut, dateOption: "DD MMM YYYY" }), this.totalRooms > 1 && (h("div", { key: '36e73a6f4d76c87f1234950ef326ea6b918225a4', class: "booking-editor__total mt-1 mt-md-0 text-right" }, h("span", { key: '36c908a51fbd6153c2b1b8c980bf41f8420e72c4', class: "booking-editor__total-label" }, locales.entries.Lcz_TotalPrice), ' ', h("span", { key: '0243664d7e19a7a6d635dd56ad85651ca35c9dc0', class: "booking-editor__total-amount font-weight-bold font-medium-1" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
            const rp = ratePlan;
            if (rp.reserved === 0) {
                return null;
            }
            return [...new Array(rp.reserved)].map((_, i) => {
                const shouldAutoFillGuest = ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) &&
                    booking_store.bookedByGuest.id === -1 &&
                    !hasBookedByGuestController &&
                    !booking_store.bookedByGuestManuallyEdited;
                if (shouldAutoFillGuest) {
                    hasBookedByGuestController = true;
                }
                return (h("igl-application-info", { autoFillGuest: shouldAutoFillGuest, totalNights: calculateDaysBetweenDates(dates.checkIn.format('YYYY-MM-DD'), dates.checkOut.format('YYYY-MM-DD')), bedPreferenceType: booking_store.selects.bedPreferences, currency: calendar_data.property.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.mode, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.mode === 'EDIT_BOOKING'
                        ? {
                            roomtypeId: this.room.roomtype.id,
                            unit: this.room.unit,
                        }
                        : undefined }));
            });
        })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (h("section", { key: '25bf2a9a99a72dd146550ab50907f89c0aec8ba4', class: 'mt-2' }, h("div", { key: 'e06f527e0835e9a8f0daf6f507fc142716a76b87', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: '63f824a8bb6116940a90063407c0e30d667b75e1', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), booking_store.bookingDraft?.agent ? (h("span", null, booking_store.bookingDraft?.agent.name)) : (h(Fragment, null, h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))))), h("ir-booking-editor-guest-form", { key: '3cc0ec3cacd8b72836a0e10030165b5d15e090dd' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && isAgentMode(this.booking) && (h("ir-service-assignee-select", { key: '757ebc4ee792d33696df6dfdd52f8818611d4bf3', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
                setBookingDraft({ roomAssignee: e.detail });
            } }))));
    }
    static get style() { return IrBookingEditorFormStyle0; }
}, [2, "ir-booking-editor-form", {
        "mode": [1],
        "room": [16],
        "booking": [16],
        "guests": [32],
        "totalCost": [32],
        "assignee": [32]
    }, [[0, "recalculateTotalCost", "handleRecalculation"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-editor-form", "igl-application-info", "ir-booking-editor-guest-form", "ir-country-picker", "ir-custom-button", "ir-date-view", "ir-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-service-assignee-select", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEditorForm);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-service-assignee-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingEditorForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-editor-form2.js.map