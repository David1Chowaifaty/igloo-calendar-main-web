import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { E as getDaysArray, F as convertDatePrice, G as formatDate } from './utils.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-loading-screen2.js';
import { d as defineCustomElement$2 } from './ir-price-input2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const irRoomNightsCss = ".sc-ir-room-nights-h{display:block;box-sizing:border-box;margin:0;position:relative}.loading-container.sc-ir-room-nights{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.close-icon.sc-ir-room-nights{position:absolute;top:18px;right:33px;outline:none}.close.sc-ir-room-nights{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.card.sc-ir-room-nights{top:0;z-index:1000}.card-title.sc-ir-room-nights{border-bottom:1px solid #e4e5ec;width:100%}.irfontgreen.sc-ir-room-nights{color:#0e930e}.currency.sc-ir-room-nights{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-ir-room-nights{font-size:14px;line-height:0;padding:0;height:0;border-left:0;border-radius:0.25rem !important}.rate-input-container.sc-ir-room-nights{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-ir-room-nights{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-ir-room-nights span[data-state='focus'].sc-ir-room-nights{border-color:var(--blue)}.input-group-prepend.sc-ir-room-nights span[data-disabled].sc-ir-room-nights{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.rateInputBorder.sc-ir-room-nights{padding-left:5px !important;padding-right:5px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}";
const IrRoomNightsStyle0 = irRoomNightsCss;

const sheetCss = ".sc-ir-room-nights-h{height:100%}.sheet-container.sc-ir-room-nights{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-room-nights{height:-webkit-fill-available;height:100vh}@supports (height: 100svh){.sheet-container.sc-ir-room-nights{height:100svh}}.sheet-footer.sc-ir-room-nights{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-nights{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-nights{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-nights{flex-direction:row;align-items:center}}";
const IrRoomNightsStyle1 = sheetCss;

const IrRoomNights = /*@__PURE__*/ proxyCustomElement(class IrRoomNights extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog", 7);
        this.rates = [];
        this.isLoading = false;
        this.initialLoading = false;
        this.inventory = null;
        this.isEndDateBeforeFromDate = false;
        this.defaultTotalNights = 0;
        this.isInputFocused = -1;
        this.dates = { from_date: new Date(), to_date: new Date() };
        this.bookingService = new BookingService();
    }
    componentWillLoad() {
        this.dates = { from_date: new Date(this.fromDate), to_date: new Date(this.toDate) };
        this.init();
    }
    isButtonDisabled() {
        return this.isLoading || this.rates.some(rate => rate.amount === -1) || this.inventory === 0 || this.inventory === null;
    }
    async init() {
        var _a;
        try {
            const { from_date } = this.defaultDates;
            if (hooks(from_date, 'YYYY-MM-DD').isBefore(hooks(this.fromDate, 'YYYY-MM-DD'))) {
                this.dates.from_date = new Date(from_date);
            }
            else {
                this.dates.from_date = new Date(this.fromDate);
            }
            this.dates.to_date = new Date(this.toDate);
            this.bookingEvent = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            if (this.bookingEvent) {
                const filteredRooms = this.bookingEvent.rooms.filter(room => room.identifier === this.identifier);
                this.selectedRoom = filteredRooms[0];
                const lastDay = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.days[this.selectedRoom.days.length - 1];
                //let first_rate = this.selectedRoom.days[0].amount;
                if (hooks(this.toDate).add(-1, 'days').isSame(hooks(lastDay.date))) {
                    console.log('here1');
                    const amount = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
                    this.isEndDateBeforeFromDate = true;
                    this.rates = [
                        ...newDatesArr.map(day => ({
                            amount: amount / newDatesArr.length,
                            date: day,
                            cost: null,
                        })),
                        ...this.selectedRoom.days,
                    ];
                    this.defaultTotalNights = this.rates.length - this.selectedRoom.days.length;
                }
                else {
                    console.log('here2');
                    console.log(lastDay);
                    const amount = await this.fetchBookingAvailability(this.bookingEvent.to_date, hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(lastDay.date, this.toDate);
                    this.rates = [
                        ...this.selectedRoom.days,
                        ...newDatesArr.map(day => ({
                            amount: amount / newDatesArr.length,
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
        var _a;
        try {
            this.initialLoading = true;
            const bookingAvailability = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyId,
                adultChildCount: {
                    adult: this.selectedRoom.rateplan.selected_variation.adult_nbr,
                    child: this.selectedRoom.rateplan.selected_variation.child_nbr,
                },
                language: this.language,
                currency: this.bookingEvent.currency,
                room_type_ids: [this.selectedRoom.roomtype.id],
                rate_plan_ids: [rate_plan_id],
            });
            console.log(bookingAvailability[0], rate_plan_id);
            this.inventory = bookingAvailability[0].inventory;
            const rate_plan = bookingAvailability[0].rateplans.find(rate => rate.id === rate_plan_id);
            if (!rate_plan || !rate_plan.variations) {
                this.inventory = null;
                return null;
            }
            const selected_variation = (_a = rate_plan.variations) === null || _a === void 0 ? void 0 : _a.find(variation => variation.adult_nbr === this.selectedRoom.rateplan.selected_variation.adult_nbr && variation.child_nbr === this.selectedRoom.rateplan.selected_variation.child_nbr);
            if (!selected_variation) {
                return null;
            }
            return selected_variation.discounted_gross_amount;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.initialLoading = false;
        }
    }
    renderInputField(index, currency_symbol, day) {
        return (h("div", { class: "col-3 ml-1 position-relative  m-0 p-0 rate-input-container" }, h("ir-price-input", { value: day.amount > 0 ? day.amount.toString() : '', disabled: this.inventory === 0 || this.inventory === null, currency: currency_symbol, "aria-label": "rate", "aria-describedby": "rate cost", onTextChange: e => this.handleInput(e.detail, index) })));
    }
    renderReadOnlyField(currency_symbol, day) {
        return h("p", { class: "col-9 ml-1 m-0 p-0" }, `${currency_symbol}${Number(day.amount).toFixed(2)}`);
    }
    renderRateFields(index, currency_symbol, day) {
        if (this.isEndDateBeforeFromDate) {
            if (index < this.defaultTotalNights) {
                return this.renderInputField(index, currency_symbol, day);
            }
            else {
                return this.renderReadOnlyField(currency_symbol, day);
            }
        }
        else {
            return index < this.selectedRoom.days.length ? this.renderReadOnlyField(currency_symbol, day) : this.renderInputField(index, currency_symbol, day);
        }
    }
    renderDates() {
        var _a;
        const currency_symbol = this.bookingEvent.currency.symbol;
        // const currency_symbol = getCurrencySymbol(this.bookingEvent.currency.code);
        return (h("div", { class: 'mt-2 m-0' }, (_a = this.rates) === null || _a === void 0 ? void 0 : _a.map((day, index) => (h("div", { class: 'row m-0 mt-1 align-items-center' }, h("p", { class: 'col-2 m-0 p-0' }, convertDatePrice(day.date)), this.renderRateFields(index, currency_symbol, day))))));
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            let selectedRoomIndex = oldRooms.findIndex(room => room.identifier === this.identifier);
            if (selectedRoomIndex === -1) {
                throw new Error('Invalid Pool');
            }
            oldRooms[selectedRoomIndex] = Object.assign(Object.assign({}, oldRooms[selectedRoomIndex]), { days: this.rates, to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'), from_date: hooks(this.dates.from_date).format('YYYY-MM-DD') });
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.bookingEvent.pickup_info,
                extra_services: this.bookingEvent.extra_services,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: hooks(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'),
                    remark: this.bookingEvent.remark,
                    property: this.bookingEvent.property,
                    source: this.bookingEvent.source,
                    currency: this.bookingEvent.currency,
                    arrival: this.bookingEvent.arrival,
                    guest: this.bookingEvent.guest,
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
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.bookingEvent) {
            return (h("div", { class: "loading-container" }, h("ir-loading-screen", null)));
        }
        return (h("div", { class: "sheet-container" }, h("ir-title", { class: "p-1 sheet-header", onCloseSideBar: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }), label: `${locales.entries.Lcz_AddingRoomNightsTo} ${(_b = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_c = this.selectedRoom) === null || _c === void 0 ? void 0 : _c.unit).name}`, displayContext: "sidebar" }), h("section", { class: 'text-left px-1 pt-0 sheet-body' }, h("p", { class: 'font-medium-1' }, `${locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), this.initialLoading ? (h("p", { class: 'mt-2 text-secondary' }, locales.entries['Lcz_CheckingRoomAvailability '])) : (h(Fragment, null, h("p", { class: 'font-weight-bold font-medium-1' }, `${formatDate(hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')} - ${formatDate(hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}`), h("p", { class: 'font-medium-1 mb-0' }, `${this.selectedRoom.rateplan.name}`, " ", this.selectedRoom.rateplan.is_non_refundable && h("span", { class: 'irfontgreen' }, locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && h("p", { class: "font-medium-1 text danger" }, locales.entries.Lcz_NoAvailabilityForAdditionalNights), this.selectedRoom.rateplan.custom_text && h("p", { class: 'text-secondary mt-0' }, this.selectedRoom.rateplan.custom_text), this.renderDates()))), h("section", { class: 'sheet-footer' }, h("ir-button", { btn_color: "secondary", btn_disabled: this.isLoading, text: locales === null || locales === void 0 ? void 0 : locales.entries.Lcz_Cancel, class: "full-width", btn_styles: "justify-content-center", onClickHandler: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }), this.inventory > 0 && this.inventory !== null && (h("ir-button", { isLoading: this.isLoading, text: locales === null || locales === void 0 ? void 0 : locales.entries.Lcz_Confirm, btn_disabled: this.isButtonDisabled(), class: "full-width", btn_styles: "justify-content-center", onClickHandler: this.handleRoomConfirmation.bind(this) })))));
    }
    static get style() { return IrRoomNightsStyle0 + IrRoomNightsStyle1; }
}, [2, "ir-room-nights", {
        "bookingNumber": [1, "booking-number"],
        "propertyId": [2, "property-id"],
        "language": [1],
        "identifier": [1],
        "toDate": [1, "to-date"],
        "fromDate": [1, "from-date"],
        "pool": [1],
        "ticket": [1],
        "defaultDates": [16],
        "bookingEvent": [32],
        "selectedRoom": [32],
        "rates": [32],
        "isLoading": [32],
        "initialLoading": [32],
        "inventory": [32],
        "isEndDateBeforeFromDate": [32],
        "defaultTotalNights": [32],
        "isInputFocused": [32],
        "dates": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-room-nights", "ir-button", "ir-icon", "ir-icons", "ir-loading-screen", "ir-price-input", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-room-nights":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRoomNights);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRoomNights as I, defineCustomElement as d };

//# sourceMappingURL=ir-room-nights2.js.map