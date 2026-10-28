import { Fragment, h } from "@stencil/core";
import booking_store, { setBookingDraft } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { DAY_USE_STATUS_ICON, formatDayUseStatusText, getDayUseUnitAvailability } from "../../../../utils/booking";
import { createTimeToMask } from "../../../ui/ir-input/masks";
import { DayUseHoursSchema } from "../types";
import moment from "moment";
import { formatDate } from "../../../../utils/date/index";
import { t } from "../../../../services/locale/t";
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
        return (h(Fragment, { key: '2a5c87039ecda3ae7ca16e77d3e5c3af6281799c' }, h("div", { key: 'b33886155ddbd13a30782e35c4a4b7815b760d72', class: "booking-editor__header" }, h("span", { key: 'cea362857f51a26e6137ec28161f23d13a8d316c', class: "booking-editor__dates" }, formatDate(dates.checkIn, 'DD MMM YYYY')), h("div", { key: '5481e2b7c76f23c5c6e9530e9cc4e60a32a1eaf2', class: "booking-editor__total" }, h("span", { key: '7b8f43be3e89bc05905b30e07433a7c6f2e96dd5', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: 'ec1980cefd5038d7a57e72e043a3c90fe417ae29', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: '69ad555d287e581569ee24c189c66da9e7aa1050', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '7bb087c22fb2226e2c059fc36a83977aba7ee0e5', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' }))), dayStatus && dayStatusIcon && (h("span", { key: '43abe1a5a043c55f5496e4bb04e933596a54ecbd', class: "booking-editor__day-use-status" }, h("wa-icon", { key: '25ce845f9512c7b1599c3609bbad1afd01645009', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: 'ee959c4885bbbea43818fb2fd12a7162e3243823', class: "booking-editor__day-use-hours" }, h("div", { key: '164cea4c041ed8783824e3b9b9bd9c05e124aa58', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '5cbc46a0fc4c33b0f25ef1d91fb2fcec31d2c311', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: 'd66935b8788fffedf1a7b006c83759fc6eba35c9', label: t('Lcz_TimePeriod', { fallback: 'Time period' }), mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: '4ee48a0aee05a22ef8d5963782d2a059a70acad2', class: "booking-editor__day-use-hours-connector ir-flip-rtl", name: "arrow-right" }), h("ir-validator", { key: '323bce2300f6ecff2eb220420e95566e068da859', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '78e876305aa9a4f507b80588fa4cb2cf4c746b70', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'a0b1f348de7695786a383494707eddd15ea75c62', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, t('Lcz_DurationColon', { fallback: 'Duration:' }), " ", this.getDayUseDuration(dayUseHours)))))));
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
