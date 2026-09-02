import { Fragment, h } from "@stencil/core";
import booking_store, { setBookingDraft } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { DAY_USE_STATUS_ICON, formatDayUseStatusText, getDayUseUnitAvailability } from "../../../../utils/booking";
import { createTimeToMask } from "../../../ui/ir-input/masks";
import { DayUseHoursSchema } from "../types";
import moment from "moment";
import { formatDate } from "../../../../utils/date/index";
/**
 * Owns the day-use-only parts of the booking editor form: the selected unit's summary
 * (date, room type, unit, price, same-day movement status) and the hours picker. Rendered
 * by `ir-booking-editor-form` only when `booking_store.bookingDraft.dayUse` is true.
 */
export class IrBookingEditorDayUse {
    isValidDayUseTime(value) {
        return DayUseHoursSchema.shape.from.safeParse(value).success;
    }
    getDayUseHour(value) {
        return this.isValidDayUseTime(value) ? Number(value.slice(0, 2)) : 0;
    }
    handleDayUseFromChange(from, dayUseHours) {
        const fromIsBeforeTo = this.isValidDayUseTime(from) && this.isValidDayUseTime(dayUseHours.to) && this.getDayUseHour(dayUseHours.to) < this.getDayUseHour(from);
        setBookingDraft({ dayUseHours: { from, to: fromIsBeforeTo ? '' : dayUseHours.to } });
    }
    getDayUseDuration(dayUseHours) {
        if (!this.isValidDayUseTime(dayUseHours.from) || !this.isValidDayUseTime(dayUseHours.to)) {
            return '';
        }
        const minutes = moment(dayUseHours.to, 'HH:mm').diff(moment(dayUseHours.from, 'HH:mm'), 'minutes');
        if (minutes <= 0) {
            return '';
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return [hours && `${hours}h`, remainingMinutes && `${remainingMinutes}m`].filter(Boolean).join(' ');
    }
    render() {
        const { dates, dayUseHours } = booking_store.bookingDraft;
        const { dayUseSelection } = booking_store;
        const { dayStatus, checkoutTime, checkinTime } = getDayUseUnitAvailability(dayUseSelection?.unit?.calendar_cell);
        const dayStatusIcon = dayStatus ? DAY_USE_STATUS_ICON[dayStatus] : null;
        return (h(Fragment, { key: '13f8a48c008865e59bbddce91fe27817c258a902' }, h("div", { key: 'ff458dd4ee18b9fd23289ef6d26fbd14ac7d1464', class: "booking-editor__header" }, h("span", { key: 'b9b04b51a609b9742310f80600e0cb7a6522d02a', class: "booking-editor__dates" }, formatDate(dates.checkIn, 'DD MMM YYYY')), h("div", { key: '76eb30e3102262225f33534685b638dddaec917c', class: "booking-editor__total" }, h("span", { key: 'ebfc175542787f6f446169c7f9e13a796159a93a', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: 'c27d821357e9acd068dc35f7f91f4de357bce3a5', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: 'd3ce66b2d1d89b66f6f58c2354b3bb390168b966', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '0a45701d66171cebc1c9ea58dbf4690798c989c3', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees")), dayStatus && dayStatusIcon && (h("span", { key: '177a6c4a36f09cc808725119c4fd739d58ed5288', class: "booking-editor__day-use-status" }, h("wa-icon", { key: 'e6aecf5f00946fccea0901b7c8d52c8451e303ea', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: '7826114534dbcb174034a51b3fc27fb4e4cd2f00', class: "booking-editor__day-use-hours" }, h("div", { key: '28ecc696fc88d831f1d3123168c51807461e8b3d', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: 'cd6f6f00ae4f2f22905a8b291a5ce9e6a3ffe2cf', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '7a065b133d777dc3a8ca0edf6d0f6056369b34e2', label: "Time period", mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'e96d89844689a5008c1bda02679988ba085bffd8', class: "booking-editor__day-use-hours-connector ir-flip-rtl", name: "arrow-right" }), h("ir-validator", { key: '011cde38d82d4f8fa62c68ec39d73ef62e4dd0ba', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '893c85c84a50126798e7e2748f1dcc919a82b933', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'b013e07aa6aeb2f12b7913aa7a21b8c8ab56f272', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, "Duration: ", this.getDayUseDuration(dayUseHours)))))));
    }
    static get is() { return "ir-booking-editor-day-use"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor-day-use.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor-day-use.css"]
        };
    }
}
