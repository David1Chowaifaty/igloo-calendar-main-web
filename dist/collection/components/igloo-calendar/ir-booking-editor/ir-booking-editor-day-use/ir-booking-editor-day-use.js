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
        return (h(Fragment, { key: '01d129a7be8d18d3a754614fd958701b38e96b02' }, h("div", { key: 'e02fcf9c9d6bc215446ddcf948f8e6aabbea2919', class: "booking-editor__header" }, h("span", { key: '5dbd834fc8d47eb73fe52bcc626a4ca72d023dfb', class: "booking-editor__dates" }, formatDate(dates.checkIn, 'DD MMM YYYY')), h("div", { key: 'cfa0b3707f29c8f92f223bc23820374635b6b1a2', class: "booking-editor__total" }, h("span", { key: '5e2c38caa9b55faff4de849cb2b1e13543681857', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: 'e8317fffde1978a512575ccaa7df466eee24345a', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: '8f581e4e0fbe89608efa342250bea5d8573ee64a', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '977257face4e18bec80474a28410c45e767dd7eb', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' }))), dayStatus && dayStatusIcon && (h("span", { key: '54a26ff415456c3974ab6b6e80c675491137286c', class: "booking-editor__day-use-status" }, h("wa-icon", { key: '728591a5744ae90325df76c9b8baa3965843bf14', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: '127e44b6d2268010ee06281d5b585ee13c15d364', class: "booking-editor__day-use-hours" }, h("div", { key: '83a60d949e5457258e4b043cc5c8b6e6b2a4ced5', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: 'af8988b836564b7f3453523881aa3c5b0e942274', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '0d19ef5cfc819b7d3a85ee56b048920ce401c9f1', label: t('Lcz_TimePeriod', { fallback: 'Time period' }), mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: '3443a37b8d91109f63d553a02b9a1529941b455c', class: "booking-editor__day-use-hours-connector ir-flip-rtl", name: "arrow-right" }), h("ir-validator", { key: '9702af73936cc8a18405338154cdd59aad9a2595', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: 'e442bc30954cc1a00dc4c37772fbc7d6f1a6c9e2', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'e8cf3e182901491e91cdf51698e4d986bebd84da', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, t('Lcz_DurationColon', { fallback: 'Duration:' }), " ", this.getDayUseDuration(dayUseHours)))))));
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
