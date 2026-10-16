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
        return (h(Fragment, { key: 'c2f3fe104356d644f0746c69f4f1f8e4aa8bcba5' }, h("div", { key: '7775e053b334cccf18a0e5648f18cb09f75f2c86', class: "booking-editor__header" }, h("span", { key: '88d9b8f2e5b46295a816308664c9db5b2b5d2448', class: "booking-editor__dates" }, dates.checkIn.format('DD MMM YYYY')), h("div", { key: '8efeeb24e4a3c067ef0f41c3726d555e97806c61', class: "booking-editor__total" }, h("span", { key: 'eb57c2682f05bf027312b33fb927e6119a02fbbd', class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { key: '2815c12e0c561913c28e8f6bb717ddf586918a39', unit: dayUseSelection?.unit?.name })), ' ', h("span", { key: '6acd6d8a2db88f9ec84884a875602f3a75503a9e', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { key: '19dd944ea3f39a6d0b962a23a34ec70b1017c375', style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees")), dayStatus && dayStatusIcon && (h("span", { key: 'cd7f468ecd8b7a9c005d4eb579390b25e913da38', class: "booking-editor__day-use-status" }, h("wa-icon", { key: '028a001b74722481f46706313938a6744dd4ac7f', name: dayStatusIcon, class: `booking-editor__day-use-status-icon booking-editor__day-use-status-icon--${dayStatus}` }), formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))), h("section", { key: 'dc0ebd5bd29d2db489edc9718757375f23d7ee56', class: "booking-editor__day-use-hours" }, h("div", { key: '8bf1a3a95916f8e981fcaaf8d1940f548c8d2576', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '9f7fb80a038c2079ddd90100ba21be29cf4fb1ca', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '5508410da6c011d54c982a4113d67b9eb6bd17fe', label: "Time period", mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: '20642ba3ec3b1a5fbe5b855f9e5eecc47a4b288f', class: "booking-editor__day-use-hours-connector", name: "arrow-right" }), h("ir-validator", { key: 'e72a58fd4b6ce29c5eb6a231e5c6d1a3e863939b', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '9686cb7555f02a9426753ff198154f77e192be7a', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: '9839b7527ec9b960154470695c9572c8c5125d46', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, "Duration: ", this.getDayUseDuration(dayUseHours)))))));
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
