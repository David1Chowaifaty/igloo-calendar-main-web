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
        return (h(Fragment, { key: '565cf204ba33025add0d09e7e60e7a3e8b06df49' }, h("div", { key: '7236b4b05e79556e338e2a3a53c140e5d0c4c759', class: "booking-editor__header" }, h("span", { key: '629d34ec3ec2ec2ee7be3d71652f015bfe6768fd', class: "booking-editor__dates" }, formatDate(dates.checkIn, 'DD MMM YYYY')), h("div", { key: 'c7348326ef2548bde6c8a69b7bbd447a1757bab1', class: "booking-editor__total" }, h("span", { key: '9c88b6c77c4027d475325aa6337a1f10fc179626', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: '47e051095ab75470d717d0422f311d0c81639e10', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: 'd63898f1ce72700a135f6c1fb77d7841f6806360', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '53c5855d01ea7a1b6c06921bb6bfe567e7d6c455', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' }))), dayStatus && dayStatusIcon && (h("span", { key: '2757b43142f7adfcfb699308c522d12ec00f5305', class: "booking-editor__day-use-status" }, h("wa-icon", { key: '1d1a8bb7ff36c3c5fdb50afa481e1c61935ba48b', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: 'aa5127e81b9df32ceed0f2bd9b2fbc5f82fc01e0', class: "booking-editor__day-use-hours" }, h("div", { key: 'ed2702b63df8af2ac5e39cc13d3299459d46f176', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '50524c26a4aa8a80f5456673b8c625ca237ea7a5', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '49c4f54570534f9201b5ce8a67dbe00d4707c82b', label: t('Lcz_TimePeriod', { fallback: 'Time period' }), mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: '265ec1e8105adde494dce10286593b8f29249ce3', class: "booking-editor__day-use-hours-connector ir-flip-rtl", name: "arrow-right" }), h("ir-validator", { key: '7b589cf3dc438b4aa8541650da4192f1a06fa0de', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '15c641f4de2c05df4f556081a17c5b2d043c675c', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: '206925f7a39222dc637e6f31a75ac9c1a014d209', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, t('Lcz_DurationColon', { fallback: 'Duration:' }), " ", this.getDayUseDuration(dayUseHours)))))));
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
