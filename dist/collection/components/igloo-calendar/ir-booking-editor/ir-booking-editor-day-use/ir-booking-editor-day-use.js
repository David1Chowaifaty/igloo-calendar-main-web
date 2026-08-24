import { Fragment, h } from "@stencil/core";
import booking_store, { setBookingDraft } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { DAY_USE_STATUS_ICON, formatDayUseStatusText, getDayUseUnitAvailability } from "../../../../utils/booking";
import { createTimeToMask } from "../../../ui/ir-input/masks";
import { DayUseHoursSchema } from "../types";
import moment from "moment";
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
        return (h(Fragment, { key: '0a8a5f4848c03d7c1107be30a1b796da966f0550' }, h("div", { key: 'aa5e54b4fe22f8ff00c3ca594fcbcbc903706228', class: "booking-editor__header" }, h("span", { key: '32349fc3dc635ce47ff72a61fd828c2ab9ba909c', class: "booking-editor__dates" }, dates.checkIn.format('DD MMM YYYY')), h("div", { key: '98564303700ec12beca4074feafc0b1cdb7e19f6', class: "booking-editor__total" }, h("span", { key: '59560f56d7b82506c034155e087ce28fd859313d', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: '1e160c6e2ce60202e41fb4651a95cfcfca4f9b7e', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: '4f37f9ea383d993ca898133dd1fec98a0556fd2f', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '4073874b053ca6b6437d102086d81e1110563005', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees")), dayStatus && dayStatusIcon && (h("span", { key: 'c0d507c96caa24b66a2c6d1e5f3591c7e437751b', class: "booking-editor__day-use-status" }, h("wa-icon", { key: '4cd540e188f2fb203c798d06e7ac29aef5136159', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: 'b92c0abd63ee56bc8c621db8c69495165b7d74f5', class: "booking-editor__day-use-hours" }, h("div", { key: '95fabc5ab2f186ee04e507c2d56163354f8bc610', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '92f165d3b5bc37581990cf167768f8e0a24decd9', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: 'd1e9a3a45b9e4ed49cc910378799bf4ce88fc310', label: "Time period", mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'da4281af81e16d0f8a2c0b5cc090b649684855d3', class: "booking-editor__day-use-hours-connector", name: "arrow-right" }), h("ir-validator", { key: '0678ded339a5f580689ff8350726bef11c5a653a', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '99da80b0172b643126210d679ce7d982d15fdda5', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'f10aee8c76d67f82083868e98de595e3a33f312c', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, "Duration: ", this.getDayUseDuration(dayUseHours)))))));
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
