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
        return (h(Fragment, { key: '0ac013dd94ce472a7a18cf6a0b42e821f4db2d8b' }, h("div", { key: 'bd65b2e8d5d2268844fa39e923a6e4e388909acc', class: "booking-editor__header" }, h("span", { key: 'fd38b4318967732149d638c81b7437b6751a0133', class: "booking-editor__dates" }, dates.checkIn.format('DD MMM YYYY')), h("div", { key: '9f0595860ea609e7deb549426012d3341ea6e037', class: "booking-editor__total" }, h("span", { key: '3e20eed35b21ba37614195109164769f47db012d', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: '77f6a199e664ba7ce983acbcb20df015b930f937', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: 'dac3a223755f6816d15e7679d8598f8d1e278d00', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '7506ae89161e83f7227ccdd60f16a9633f7f3268', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees")), dayStatus && dayStatusIcon && (h("span", { key: 'b9d0a87fd9a92fe6c17028fcfee4887d27dc1bbc', class: "booking-editor__day-use-status" }, h("wa-icon", { key: 'c719a5f9c1454f8fd60ab48bd21df335420619cc', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: '86a40fe62f852e5ed1c8a56c31ca791172561de5', class: "booking-editor__day-use-hours" }, h("div", { key: '1f4023ce07c79fc66073cc131e96567a81636fa7', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '6011e0db1c4493824a26f961a8dbe0abbd20960b', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '45d781d727aca4923f3f351d1cde69bcbaa5873e', label: "Time period", mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'fe5cff062be3a618e620f816c217e5df132a0edb', class: "booking-editor__day-use-hours-connector", name: "arrow-right" }), h("ir-validator", { key: 'a8acf7241dbbbff3491692db9aa9587aa3b88719', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '83f6c79b43843fe0880bd2e0f2df557f6a69d276', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'b658d601098103ac8c4b701288dbee6a071fb8a3', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, "Duration: ", this.getDayUseDuration(dayUseHours)))))));
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
