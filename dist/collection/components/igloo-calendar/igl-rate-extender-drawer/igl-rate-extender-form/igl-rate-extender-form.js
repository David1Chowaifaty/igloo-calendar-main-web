import { BookingService } from "../../../../services/booking-service/booking.service";
import booking_store from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { formatDate, getDaysArray } from "../../../../utils/utils";
import { h } from "@stencil/core";
import moment from "moment";
import { z } from "zod";
export class IglRateExtenderForm {
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
            if (moment(from_date, 'YYYY-MM-DD').isBefore(moment(this.fromDate, 'YYYY-MM-DD'))) {
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
                if (!moment(this.selectedRoom.to_date, 'YYYY-MM-DD').isBefore(moment(this.toDate, 'YYYY-MM-DD'))) {
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
                    const variation = await this.fetchBookingAvailability(this.selectedRoom.to_date, moment(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
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
                to_date: moment(this.dates.to_date).format('YYYY-MM-DD'),
                from_date: moment(this.dates.from_date).format('YYYY-MM-DD'),
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
                    from_date: moment(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: moment(this.dates.to_date).format('YYYY-MM-DD'),
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
            } }, h("section", { class: "rate-form__body" }, h("p", { class: "rate-form__booking-number" }, `${locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), h("p", { class: "rate-form__rate-plan" }, this.selectedRoom.roomtype.name, " ", `${this.selectedRoom?.rateplan?.short_name}`, " ", this.selectedRoom?.rateplan?.custom_text, ' ', h("ir-unit-tag", { unit: (this.selectedRoom?.unit).name }), this.selectedRoom?.rateplan?.is_non_refundable && h("span", { class: 'irfontgreen' }, locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && (h("wa-callout", { size: "small", variant: "warning", class: "rate-form__availability-callout" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), locales.entries.Lcz_NoAvailabilityForAdditionalNights)), this.inventory !== 0 && this.inventory !== null && booking_store.roomTypes?.length > 0 && (h("wa-callout", { size: "small", variant: "neutral", appearance: "filled", class: "rate-form__tax-callout booking-editor-header__tax_statement" }, calendar_data.tax_statement))), h("p", { class: "rate-form__date-range" }, formatDate(moment(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD'), " ", h("wa-icon", { name: "arrow-right" }), ' ', formatDate(moment(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')), this.rates?.map((day, index) => {
            return (h("ir-validator", { key: day.date, value: day.amount, schema: z.number().min(0) }, h("ir-input", { disabled: this.disabled(index), class: "rate-extender-input", "aria-describedby": "rate cost", "aria-label": "rate", "onText-change": e => this.handleInput(e.detail, index), value: day.amount.toString(), defaultValue: day.amount.toString(), mask: 'price', label: moment(day.date).format('ddd, MMM D') }, h("span", { slot: "start" }, currency_symbol))));
        })));
    }
    static get is() { return "igl-rate-extender-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-rate-extender-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-rate-extender-form.css"]
        };
    }
    static get properties() {
        return {
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "booking-number",
                "reflect": false
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "property-id",
                "reflect": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false
            },
            "identifier": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "identifier",
                "reflect": false
            },
            "toDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "to-date",
                "reflect": false
            },
            "fromDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "from-date",
                "reflect": false
            },
            "pool": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "pool",
                "reflect": false
            },
            "defaultDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from_date: string; to_date: string }",
                    "resolved": "{ from_date: string; to_date: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "booking": {},
            "selectedRoom": {},
            "rates": {},
            "isLoading": {},
            "initialLoading": {},
            "inventory": {},
            "isEndDateBeforeFromDate": {},
            "defaultTotalNights": {},
            "dates": {}
        };
    }
    static get events() {
        return [{
                "method": "closeRoomNightsDialog",
                "name": "closeRoomNightsDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IRoomNightsDataEventPayload",
                    "resolved": "IRoomNightsDataEventPayload",
                    "references": {
                        "IRoomNightsDataEventPayload": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::IRoomNightsDataEventPayload"
                        }
                    }
                }
            }, {
                "method": "loadingChanged",
                "name": "loadingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=igl-rate-extender-form.js.map
