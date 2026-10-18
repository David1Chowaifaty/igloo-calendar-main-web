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
        return (h(Fragment, { key: '1393be0555a33cc4c55d54b69a49b48fc1a545ad' }, h("div", { key: 'fdab6914f6d07f5b694a764ef96dff22ac8d78b2', class: "booking-editor__header" }, h("span", { key: 'aae384eaea35ea19cf2ab74f52b3ceb31bc6d87b', class: "booking-editor__dates" }, formatDate(dates.checkIn, 'DD MMM YYYY')), h("div", { key: '95d6ee8f973da02056a2b880e2b9d24643503241', class: "booking-editor__total" }, h("span", { key: '9c0f7412cd73ba1eef1dc9e215bda533506363ac', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: '36167082e71099c8d6b6019def31f5e3a4f7fab3', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: 'a51bab3374efe219a0c4bddaa9c3602d8a343380', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '503aeec73a666921dce49e39820dacb6bfe2928c', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' }))), dayStatus && dayStatusIcon && (h("span", { key: '26650f16d124de6b65658e05aff1de5226fbe667', class: "booking-editor__day-use-status" }, h("wa-icon", { key: '0847248171718da2de7a23a3ecadc63e4f45d600', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: '8e9250d394e9738f487c49c7eb0afbcefb3b4e5d', class: "booking-editor__day-use-hours" }, h("div", { key: '3765cf62460da108b20e58861b136612c231fa86', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '344f8625b43c10327953ad702d05097aaa0db8ff', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '3c2ba3dced16c5521840a02701391e75d417ec28', label: t('Lcz_TimePeriod', { fallback: 'Time period' }), mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'd43b6f9ef9abcaec7265f299cd0041f98ec02d83', class: "booking-editor__day-use-hours-connector ir-flip-rtl", name: "arrow-right" }), h("ir-validator", { key: 'd6f15e179f72c9aa735d09ae40b624c9fa294d12', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '21098e00dcaae26eeb475727b1e40a673e966b48', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: '379c5280c356831c69ce2e4560a6d83ab0b2f80c', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, t('Lcz_DurationColon', { fallback: 'Duration:' }), " ", this.getDayUseDuration(dayUseHours)))))));
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
