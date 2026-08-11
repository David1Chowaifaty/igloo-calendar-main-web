import { Host, h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
import { _formatTime } from "../../ir-booking-details/functions";
const STATUS_LABEL = {
    scheduled: 'Scheduled',
    upcoming: 'Upcoming',
    'in-progress': 'In Progress',
};
const GUEST_NAME_CROP_SIZE = 16;
export class IglDayUseBookings {
    /** Day-use bookings for whatever calendar window has been loaded (from `getDayUseBookingsForCalendar`) — same source `igl-cal-body` uses for its cell markers. */
    dayUseBookings = [];
    calendarData;
    selectedDate = '';
    optionEvent;
    showBookingPopup;
    componentWillLoad() {
        this.selectDefaultDate();
    }
    handleDayUseBookingsChange() {
        if (!this.orderedDates.includes(this.selectedDate)) {
            this.selectDefaultDate();
        }
    }
    selectDefaultDate() {
        const today = moment().format('YYYY-MM-DD');
        const dates = this.orderedDates;
        this.selectedDate = dates.includes(today) ? today : (dates[0] ?? today);
    }
    get orderedDates() {
        const today = moment().format('YYYY-MM-DD');
        return Array.from(new Set(this.dayUseBookings.map(booking => booking.target_date)))
            .filter(date => date >= today)
            .sort();
    }
    get bookingsForSelectedDate() {
        return this.dayUseBookings.filter(booking => booking.target_date === this.selectedDate);
    }
    getUnitName(unitId) {
        for (const roomType of this.calendarData?.roomsInfo ?? []) {
            const unit = roomType.physicalrooms?.find(room => room.id === unitId);
            if (unit) {
                return unit.name;
            }
        }
        return '';
    }
    getRoomTypeName(roomTypeId) {
        return this.calendarData?.roomsInfo?.find(roomType => roomType.id === roomTypeId)?.name ?? '';
    }
    getGuestName(booking) {
        const name = [booking.guest_first_name, booking.guest_last_name].filter(Boolean).join(' ').trim();
        if (name) {
            return name;
        }
        const bookingEvent = (this.calendarData?.bookingEvents ?? []).find(event => event.BOOKING_NUMBER?.toString() === booking.book_nbr?.toString());
        return bookingEvent?.NAME ?? '';
    }
    getPrice(amount) {
        const symbol = this.calendarData?.currency?.symbol ?? '';
        return `${symbol}${Number(amount ?? 0).toFixed(2)}`;
    }
    getStatus(booking) {
        if (booking.target_date !== moment().format('YYYY-MM-DD')) {
            return 'scheduled';
        }
        const from = moment(`${booking.target_date} ${booking.from_time}`, 'YYYY-MM-DD HH:mm');
        return moment().isBefore(from) ? 'upcoming' : 'in-progress';
    }
    formatTime(time) {
        const [hour, minute] = time.split(':');
        return _formatTime(hour, minute);
    }
    groupByRoomType(bookings) {
        const grouped = new Map();
        bookings.forEach(booking => {
            const list = grouped.get(booking.room_type_id) ?? [];
            list.push(booking);
            grouped.set(booking.room_type_id, list);
        });
        return grouped;
    }
    openBookingDetails(booking) {
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                BOOKING_NUMBER: booking.book_nbr,
                event_type: 'EDIT_BOOKING',
                TITLE: `${locales.entries.Lcz_EditBookingFor ?? 'Edit Booking For'} ${this.getGuestName(booking)}`,
            },
        });
    }
    handleOptionEvent(key) {
        this.optionEvent.emit({ key, data: '' });
    }
    renderBooking(booking) {
        const guestName = this.getGuestName(booking);
        const guestNameId = `dub-guest-${booking.bh_id}`;
        const status = this.getStatus(booking);
        return (h("button", { type: "button", class: "dub-booking", key: `booking-${booking.bh_id}`, onClick: () => this.openBookingDetails(booking) }, h("div", { class: "dub-booking__main" }, h("ir-unit-tag", { unit: this.getUnitName(booking.unit_id) }), h("span", { class: "dub-booking__time" }, this.formatTime(booking.from_time), " \u2013 ", this.formatTime(booking.to_time)), h("span", { class: "dub-booking__price" }, this.getPrice(booking.gross_amount))), h("div", { class: "dub-booking__meta" }, h("span", { class: "dub-booking__number" }, "#", booking.book_nbr), guestName && (h("span", { class: "dub-booking__guest", id: guestNameId }, guestName)), guestName && guestName.length > GUEST_NAME_CROP_SIZE && (h("wa-tooltip", { for: guestNameId, placement: "top" }, guestName)), h("span", { class: `dub-status dub-status--${status}` }, STATUS_LABEL[status]))));
    }
    renderCategory(roomTypeId, bookings) {
        return (h("div", { class: "dub-category", key: `category-${roomTypeId}` }, h("h5", { class: "dub-category__title" }, this.getRoomTypeName(roomTypeId)), h("div", { class: "dub-category__list" }, bookings.sort((a, b) => a.from_time.localeCompare(b.from_time)).map(booking => this.renderBooking(booking)))));
    }
    render() {
        const bookings = this.bookingsForSelectedDate;
        const grouped = this.groupByRoomType(bookings);
        const hasDates = this.orderedDates.length > 0;
        const isEmpty = bookings.length === 0;
        return (h(Host, { key: '81ee5ce958a46cb10abab30bce29530c26091ffa' }, h("div", { key: '386c2b0541a4c9e5194e56c06b3b6c458d38356e', class: "dub-panel" }, h("div", { key: 'c8dac5b33b4e060c573c788373fb1fe07718f28a', class: "dub-panel__head" }, h("header", { key: '07e95fc8ac2c763d8050def20f49c08513a081ea', class: "dub-panel__header" }, h("h2", { key: '1d2a37306bc80c57728a8d762b6ba9489edb17cb', class: "dub-panel__title", id: "day-use-bookings-title" }, "Day Use Bookings"), h("ir-custom-button", { key: '029b5967f5fc99081c28cc61de7d4bbd392ddd27', size: "m", appearance: "plain", variant: "neutral", onClickHandler: () => this.handleOptionEvent('closeSideMenu') }, h("wa-icon", { key: 'd87e10e6aba3baa361589cb493c13db7ded6772d', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), hasDates && (h("div", { key: '662849902f734a15f385d24bf98fa98d17c7f99a', class: "dub-panel__toolbar" }, h("wa-select", { key: '3b14ae2ea450205734025a4c0b138878474e8b7a', size: "s", "aria-label": "Date", value: this.selectedDate, defaultValue: this.selectedDate, onchange: evt => (this.selectedDate = evt.target.value) }, this.orderedDates.map(date => (h("wa-option", { value: date }, moment(date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')))))))), h("div", { key: 'c02e745d51719c61566961467b615b7dd7e844f7', class: "dub-panel__body" }, isEmpty ? (h("ir-empty-state", { message: "No day-use bookings for this date." })) : (Array.from(grouped.entries()).map(([roomTypeId, roomTypeBookings]) => this.renderCategory(roomTypeId, roomTypeBookings)))))));
    }
    static get is() { return "igl-day-use-bookings"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-day-use-bookings.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-day-use-bookings.css"]
        };
    }
    static get properties() {
        return {
            "dayUseBookings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DayUseBookings[]",
                    "resolved": "DayUseBookings[]",
                    "references": {
                        "DayUseBookings": {
                            "location": "import",
                            "path": "@/services/property/types",
                            "id": "src/services/property/types.ts::DayUseBookings",
                            "referenceLocation": "DayUseBookings"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Day-use bookings for whatever calendar window has been loaded (from `getDayUseBookingsForCalendar`) \u2014 same source `igl-cal-body` uses for its cell markers."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "calendarData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
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
            "selectedDate": {}
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "showBookingPopup",
                "name": "showBookingPopup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "dayUseBookings",
                "methodName": "handleDayUseBookingsChange"
            }];
    }
}
