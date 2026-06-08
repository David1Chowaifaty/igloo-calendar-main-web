import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService, b as booking_store } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { o as getDaysArray, p as formatDate } from './utils.js';
import { h as hooks } from './moment.js';
import { z } from './index2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-spinner2.js';
import { d as defineCustomElement$2 } from './ir-unit-tag2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const iglRateExtenderFormCss = ".sc-igl-rate-extender-form-h{display:block;height:100%}.rate-form__body.sc-igl-rate-extender-form{text-align:left;padding-inline:0.25rem;padding-top:0;display:grid}.rate-extender-form.sc-igl-rate-extender-form{display:grid;gap:1rem}.rate-form__booking-number.sc-igl-rate-extender-form{font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet);margin:0}.rate-form__checking-availability.sc-igl-rate-extender-form{margin-top:0.5rem;font-size:0.875rem;color:var(--wa-color-text-quiet)}.rate-form__date-range.sc-igl-rate-extender-form{font-size:var(--wa-font-size-m);font-weight:600;line-height:1.3;color:#111827;margin:0;margin-top:0.5rem}.rate-form__rate-plan.sc-igl-rate-extender-form{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet);margin:0;margin-top:0.375rem}.rate-form__availability-callout.sc-igl-rate-extender-form{margin-top:1rem}.rate-form__custom-text.sc-igl-rate-extender-form{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);line-height:1.4;margin:0;margin-top:0.625rem}.rate-form__tax-callout.sc-igl-rate-extender-form{margin-top:1.25rem}.rate-form__dates.sc-igl-rate-extender-form{margin:0;margin-top:1.5rem;display:grid;gap:1rem}.rate-form__date-row.sc-igl-rate-extender-form{display:flex;align-items:center;margin:0;margin-top:0.25rem}.rate-form__date-label.sc-igl-rate-extender-form{flex:0 0 16.666%;margin:0;padding:0;font-size:0.8125rem;color:#6b7280}.rate-form__input-wrapper.sc-igl-rate-extender-form{flex:0 0 25%;margin-left:0.25rem;position:relative;margin-top:0;margin-bottom:0;padding:0}.rate-form__readonly-value.sc-igl-rate-extender-form{flex:0 0 75%;margin-left:0.25rem;margin-top:0;margin-bottom:0;padding:0}.rate-extender-input.sc-igl-rate-extender-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.rate-extender-input.sc-igl-rate-extender-form::part(label){width:80px;margin:0}.rate-extender-input.sc-igl-rate-extender-form:disabled::part(label){opacity:0.5}.rate-extender-input.sc-igl-rate-extender-form::part(wa-input){grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}@media (min-width: 640px){.rate-extender-input.sc-igl-rate-extender-form::part(base){max-width:180px}}";
const IglRateExtenderFormStyle0 = iglRateExtenderFormCss;

const IglRateExtenderForm = /*@__PURE__*/ proxyCustomElement(class IglRateExtenderForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog", 7);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
    }
    bookingNumber;
    propertyId;
    language;
    identifier;
    toDate;
    fromDate;
    pool;
    defaultDates;
    booking;
    selectedRoom;
    rates = [];
    isLoading = false;
    initialLoading = true;
    inventory = null;
    isEndDateBeforeFromDate = false;
    defaultTotalNights = 0;
    dates = { from_date: new Date(), to_date: new Date() };
    closeRoomNightsDialog;
    loadingChanged;
    bookingService = new BookingService();
    componentWillLoad() {
        this.dates = { from_date: new Date(this.fromDate), to_date: new Date(this.toDate) };
        this.init();
    }
    async init() {
        try {
            this.initialLoading = true;
            const { from_date } = this.defaultDates;
            if (hooks(from_date, 'YYYY-MM-DD').isBefore(hooks(this.fromDate, 'YYYY-MM-DD'))) {
                this.dates.from_date = new Date(from_date);
            }
            else {
                this.dates.from_date = new Date(this.fromDate);
            }
            this.dates.to_date = new Date(this.toDate);
            this.booking = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            if (this.booking) {
                const filteredRooms = this.booking.rooms.filter(room => room.identifier === this.identifier);
                this.selectedRoom = filteredRooms[0];
                const lastDay = this.selectedRoom?.days[this.selectedRoom.days.length - 1];
                if (!hooks(this.selectedRoom.to_date, 'YYYY-MM-DD').isBefore(hooks(this.toDate, 'YYYY-MM-DD'))) {
                    const variation = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
                    this.isEndDateBeforeFromDate = true;
                    let dates = {};
                    variation.nights.forEach(n => (dates[n.night] = n));
                    this.rates = [
                        ...newDatesArr.map(day => ({
                            amount: dates[day].discounted_amount,
                            date: day,
                            cost: null,
                        })),
                        ...this.selectedRoom.days,
                    ];
                    this.defaultTotalNights = this.rates.length - this.selectedRoom.days.length;
                }
                else {
                    const variation = await this.fetchBookingAvailability(this.selectedRoom.to_date, hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(lastDay.date, this.toDate);
                    let dates = {};
                    variation.nights.forEach(n => (dates[n.night] = n));
                    this.rates = [
                        ...this.selectedRoom.days,
                        ...newDatesArr.map(day => ({
                            amount: dates[day].discounted_amount,
                            date: day,
                            cost: null,
                        })),
                    ];
                }
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.initialLoading = false;
        }
    }
    handleInput(event, index) {
        let inputValue = event;
        let days = [...this.rates];
        inputValue = inputValue.replace(/[^0-9.]/g, '');
        if (inputValue === '') {
            days[index].amount = -1;
        }
        else {
            if (!isNaN(Number(inputValue))) {
                days[index].amount = Number(inputValue);
            }
        }
        this.rates = days;
    }
    async fetchBookingAvailability(from_date, to_date, rate_plan_id) {
        try {
            const bookingAvailability = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyId,
                adultChildCount: {
                    adult: this.selectedRoom.rateplan.selected_variation.adult_nbr,
                    child: this.selectedRoom.rateplan.selected_variation.child_nbr,
                },
                language: this.language,
                currency: this.booking.currency,
                room_type_ids: [this.selectedRoom.roomtype.id],
                rate_plan_ids: [rate_plan_id],
            });
            this.inventory = bookingAvailability[0].inventory;
            const rate_plan = bookingAvailability[0].rateplans.find(rate => rate.id === rate_plan_id);
            if (!rate_plan || !rate_plan.variations) {
                this.inventory = null;
                return null;
            }
            const selected_variation = rate_plan.variations?.find(variation => variation.adult_nbr === this.selectedRoom.rateplan.selected_variation.adult_nbr && variation.child_nbr === this.selectedRoom.rateplan.selected_variation.child_nbr);
            if (!selected_variation) {
                return null;
            }
            return selected_variation;
        }
        catch (error) {
            console.error(error);
        }
    }
    disabled(index) {
        if (this.inventory === 0 || this.inventory === null) {
            return true;
        }
        if (this.isEndDateBeforeFromDate) {
            return !(index < this.defaultTotalNights);
        }
        return index < this.selectedRoom.days.length;
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            this.loadingChanged.emit(true);
            let oldRooms = [...this.booking.rooms];
            let selectedRoomIndex = oldRooms.findIndex(room => room.identifier === this.identifier);
            if (selectedRoomIndex === -1) {
                throw new Error('Invalid Pool');
            }
            oldRooms[selectedRoomIndex] = {
                ...oldRooms[selectedRoomIndex],
                days: this.rates,
                to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'),
                from_date: hooks(this.dates.from_date).format('YYYY-MM-DD'),
            };
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.booking.pickup_info,
                extra_services: this.booking.extra_services,
                agent: this.booking.agent,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: hooks(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'),
                    remark: this.booking.remark,
                    property: this.booking.property,
                    source: this.booking.source,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                    rooms: oldRooms,
                },
            };
            await this.bookingService.doReservation(body);
            this.closeRoomNightsDialog.emit({ type: 'confirm', pool: this.pool });
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
            this.loadingChanged.emit(false);
        }
    }
    render() {
        if (this.initialLoading) {
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        const currency_symbol = this.booking.currency.symbol;
        return (h("form", { id: "rate-extender-form", class: "rate-extender-form", onSubmit: e => {
                e.preventDefault();
                this.handleRoomConfirmation();
            } }, h("section", { class: "rate-form__body" }, h("p", { class: "rate-form__booking-number" }, `${locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), h("p", { class: "rate-form__rate-plan" }, this.selectedRoom.roomtype.name, " ", `${this.selectedRoom?.rateplan?.short_name}`, " ", this.selectedRoom?.rateplan?.custom_text, ' ', h("ir-unit-tag", { unit: (this.selectedRoom?.unit).name }), this.selectedRoom?.rateplan?.is_non_refundable && h("span", { class: 'irfontgreen' }, locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && (h("wa-callout", { size: "small", variant: "warning", class: "rate-form__availability-callout" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), locales.entries.Lcz_NoAvailabilityForAdditionalNights)), this.inventory !== 0 && this.inventory !== null && booking_store.roomTypes?.length > 0 && (h("wa-callout", { size: "small", variant: "neutral", appearance: "filled", class: "rate-form__tax-callout booking-editor-header__tax_statement" }, calendar_data.tax_statement))), h("p", { class: "rate-form__date-range" }, formatDate(hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD'), " ", h("wa-icon", { name: "arrow-right" }), ' ', formatDate(hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')), this.rates?.map((day, index) => {
            return (h("ir-validator", { key: day.date, value: day.amount, schema: z.number().min(0) }, h("ir-input", { disabled: this.disabled(index), class: "rate-extender-input", "aria-describedby": "rate cost", "aria-label": "rate", "onText-change": e => this.handleInput(e.detail, index), value: day.amount.toString(), defaultValue: day.amount.toString(), mask: 'price', label: hooks(day.date).format('ddd, MMM D') }, h("span", { slot: "start" }, currency_symbol))));
        })));
    }
    static get style() { return IglRateExtenderFormStyle0; }
}, [2, "igl-rate-extender-form", {
        "bookingNumber": [1, "booking-number"],
        "propertyId": [2, "property-id"],
        "language": [1],
        "identifier": [1],
        "toDate": [1, "to-date"],
        "fromDate": [1, "from-date"],
        "pool": [1],
        "defaultDates": [16],
        "booking": [32],
        "selectedRoom": [32],
        "rates": [32],
        "isLoading": [32],
        "initialLoading": [32],
        "inventory": [32],
        "isEndDateBeforeFromDate": [32],
        "defaultTotalNights": [32],
        "dates": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-rate-extender-form", "ir-input", "ir-spinner", "ir-unit-tag", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-rate-extender-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglRateExtenderForm);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-unit-tag":
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

export { IglRateExtenderForm as I, defineCustomElement as d };

//# sourceMappingURL=igl-rate-extender-form2.js.map