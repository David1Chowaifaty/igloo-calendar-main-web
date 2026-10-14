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
        return (h(Fragment, { key: '763968cbd26cb69da1965d8c07fdc53b0074abc0' }, h("div", { key: 'e037e388e603bae9e63addf4f2ee725b9d41bf44', class: "booking-editor__header" }, h("span", { key: 'e5355b3580871690bd4e5d01537639c246dd1ebc', class: "booking-editor__dates" }, formatDate(dates.checkIn, 'DD MMM YYYY')), h("div", { key: '696750d05a652a6dc6e17086fb962e44d9f0a00f', class: "booking-editor__total" }, h("span", { key: 'e4d5b628375f4bb036ece3f79a878113f5d2c897', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: '0e069054faad5bd2840a9728c2e9ca0b9515b4fb', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: '6d808c31f99f144f8fc20d0fdfdcda3fa963e464', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: 'bd5792e0a78ce8139392a8bbae34e7bef8f19df9', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' }))), dayStatus && dayStatusIcon && (h("span", { key: 'b9eb853e70917df71a51fef470e43de950ab9e41', class: "booking-editor__day-use-status" }, h("wa-icon", { key: 'fa7c307ec6ace09daeb903302dae3dcfe3585de5', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: '4d0be12015c3a76c61b986384340779bd1751409', class: "booking-editor__day-use-hours" }, h("div", { key: '8ca0ad6d369a3794f31b9d98dbe6d60d38c6bf0d', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '29774988a502edc57cb63752344b723a3757c124', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '7e54e273becca9af46f2cfa43a0a12c415733e5a', label: t('Lcz_TimePeriod', { fallback: 'Time period' }), mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'c7f156aa583edd70e3f33f920bc92a5c10bd4843', class: "booking-editor__day-use-hours-connector ir-flip-rtl", name: "arrow-right" }), h("ir-validator", { key: 'cb0eccf6eb79b876d1507eaf78d7d41b1693e2c1', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '8234198ae54f428f4c59170a685d5c5acee0286f', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: '7c1bc7013bb467765c0a0ad333081d8ab3578191', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, t('Lcz_DurationColon', { fallback: 'Duration:' }), " ", this.getDayUseDuration(dayUseHours)))))));
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
