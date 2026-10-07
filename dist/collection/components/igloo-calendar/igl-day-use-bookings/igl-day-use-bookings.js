import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { _formatTime } from "../../ir-booking-details/functions";
import { formatDate } from "../../../utils/date/index";
import { formatAmount, formatBookingNumber } from "../../../utils/number";
import { t } from "../../../services/locale/t";
function getStatusLabel(status) {
    switch (status) {
        case 'scheduled':
            return t('Lcz_Scheduled', { fallback: 'Scheduled' });
        case 'upcoming':
            return t('Lcz_Upcoming', { fallback: 'Upcoming' });
        case 'in-progress':
            return t('Lcz_InProgress', { fallback: 'In Progress' });
    }
}
const GUEST_NAME_CROP_SIZE = 16;
const MOVEMENT_ICON = {
    departure: 'plane-departure',
    arrival: 'plane-arrival',
};
function getMovementLabel(kind) {
    return kind === 'departure' ? t('Lcz_Departure', { fallback: 'Departure' }) : t('Lcz_Arrival', { fallback: 'Arrival' });
}
/** `_DEPARTURE_TIME` code meaning the guest never picked one — the property's standard check-out applies. */
const UNSET_DEPARTURE_TIME_CODE = '000';
/** `_ARRIVAL_TIME` code for "Not sure yet" — same idea, the property's standard check-in applies. */
const UNSET_ARRIVAL_TIME_CODE = '001';
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
        return formatAmount(this.calendarData?.currency?.symbol ?? '', Number(amount ?? 0));
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
                TITLE: `${t('Lcz_EditBookingFor', { fallback: 'Edit Booking For' })} ${this.getGuestName(booking)}`,
            },
        });
    }
    handleOptionEvent(key) {
        this.optionEvent.emit({ key, data: '' });
    }
    /**
     * Stays sitting on the same unit — day-use rows are extra services and never appear in `bookingEvents`,
     * and blocks are filtered out since they carry no booking number.
     */
    getStayEvents(unitId) {
        return (this.calendarData?.bookingEvents ?? []).filter((event) => event.PR_ID === unitId && !!event.BOOKING_NUMBER);
    }
    /** `FROM_DATE`/`TO_DATE` are clamped to the loaded window, so the untouched `defaultDates` win when present. */
    getStayDates(event) {
        return {
            from: event.defaultDates?.from_date ?? event.FROM_DATE,
            to: event.defaultDates?.to_date ?? event.TO_DATE,
        };
    }
    getStayRoom(event) {
        return (event.ROOMS ?? []).find(room => room.identifier === event.IDENTIFIER);
    }
    /** Accepts both `HH:mm` values (formatted to `hh:mm A`) and plain setup labels such as "Not sure yet". */
    formatClockTime(value) {
        if (!value) {
            return null;
        }
        const match = value.match(/^(\d{1,2}):(\d{2})/);
        return match ? _formatTime(match[1], match[2]) : value.trim() || null;
    }
    getDepartureTime(event) {
        const departure = event.DEPARTURE_TIME ?? this.getStayRoom(event)?.departure_time;
        const requested = departure?.code && departure.code !== UNSET_DEPARTURE_TIME_CODE ? departure.description : null;
        return requested
            ? { time: this.formatClockTime(requested), isStandard: false }
            : { time: this.formatClockTime(calendar_data.property?.time_constraints?.check_out_till), isStandard: true };
    }
    getArrivalTime(event) {
        const arrival = this.getStayRoom(event)?.arrival_time;
        const requested = arrival?.code && arrival.code !== UNSET_ARRIVAL_TIME_CODE ? arrival.description : null;
        return requested
            ? { time: this.formatClockTime(requested), isStandard: false }
            : { time: this.formatClockTime(calendar_data.property?.time_constraints?.check_in_from), isStandard: true };
    }
    toStayMovement(kind, event) {
        const { time, isStandard } = kind === 'departure' ? this.getDepartureTime(event) : this.getArrivalTime(event);
        return { kind, bookingNumber: event.BOOKING_NUMBER, guestName: event.NAME ?? '', time, isStandard };
    }
    /**
     * The same-day movements the day use has to fit around: the stay leaving that morning, the stay
     * arriving that evening, or — when both exist — the turnover between the two.
     */
    getStayMovements(booking) {
        const events = this.getStayEvents(booking.unit_id);
        const movements = [];
        const departing = events.find(event => this.getStayDates(event).to === booking.target_date);
        if (departing) {
            movements.push(this.toStayMovement('departure', departing));
        }
        const arriving = events.find(event => this.getStayDates(event).from === booking.target_date);
        if (arriving) {
            movements.push(this.toStayMovement('arrival', arriving));
        }
        return movements;
    }
    /** Movement chips plus the tooltip spelling out the stay(s) behind them — both bookings when it's a turnover. */
    renderStayMovements(booking, movements) {
        const movementsId = `dub-movements-${booking.bh_id}`;
        const isTurnover = movements.length > 1;
        return (h(Fragment, null, h("div", { class: "dub-booking__movements", id: movementsId }, isTurnover && (h("span", { class: "dub-movement dub-movement--turnover" }, h("wa-icon", { name: "rotate", class: "dub-movement__icon" }), t('Lcz_Turnover', { fallback: 'Turnover' }))), movements.map(movement => (h("span", { class: `dub-movement dub-movement--${movement.kind}`, key: `${movementsId}-${movement.kind}` }, h("wa-icon", { name: MOVEMENT_ICON[movement.kind], class: "dub-movement__icon" }), getMovementLabel(movement.kind), movement.time && h("span", { class: "dub-movement__time" }, movement.time))))), h("wa-tooltip", { for: movementsId, placement: "top" }, h("span", { class: "dub-movement-tip" }, movements.map(movement => (h("span", { class: "dub-movement-tip__line", key: `${movementsId}-tip-${movement.kind}` }, h("span", { class: "dub-movement-tip__label" }, getMovementLabel(movement.kind)), h("span", null, "#", formatBookingNumber(movement.bookingNumber), movement.guestName ? ` \u00b7 ${movement.guestName}` : ''), movement.time && (h("span", { class: "dub-movement-tip__time" }, movement.time, movement.isStandard ? ` ${t('Lcz_StandardSuffix', { fallback: '(standard)' })}` : '')))))))));
    }
    renderBooking(booking) {
        const guestName = this.getGuestName(booking);
        const guestNameId = `dub-guest-${booking.bh_id}`;
        const status = this.getStatus(booking);
        const movements = this.getStayMovements(booking);
        return (h("button", { type: "button", class: "dub-booking", key: `booking-${booking.bh_id}`, onClick: () => this.openBookingDetails(booking) }, h("div", { class: "dub-booking__main" }, h("ir-unit-tag", { unit: this.getUnitName(booking.unit_id) }), h("span", { class: "dub-booking__time" }, this.formatTime(booking.from_time), " \u2013 ", this.formatTime(booking.to_time)), h("span", { class: "dub-booking__price" }, this.getPrice(booking.gross_amount))), h("div", { class: "dub-booking__meta" }, h("span", { class: "dub-booking__number" }, "#", booking.book_nbr), guestName && (h("span", { class: "dub-booking__guest", id: guestNameId }, guestName)), guestName && guestName.length > GUEST_NAME_CROP_SIZE && (h("wa-tooltip", { for: guestNameId, placement: "top" }, guestName)), h("span", { class: `dub-status dub-status--${status}` }, getStatusLabel(status))), movements.length > 0 && this.renderStayMovements(booking, movements)));
    }
    renderCategory(roomTypeId, bookings) {
        return (h("div", { class: "dub-category", key: `category-${roomTypeId}` }, h("h5", { class: "dub-category__title" }, this.getRoomTypeName(roomTypeId)), h("div", { class: "dub-category__list" }, bookings.sort((a, b) => a.from_time.localeCompare(b.from_time)).map(booking => this.renderBooking(booking)))));
    }
    render() {
        const bookings = this.bookingsForSelectedDate;
        const grouped = this.groupByRoomType(bookings);
        const hasDates = this.orderedDates.length > 0;
        const isEmpty = bookings.length === 0;
        return (h(Host, { key: 'fd395f77f6021f14bc24600f297e50ba843bdb85' }, h("div", { key: '1a9c2db047e4061263172a99e0b6aa1777b4d830', class: "dub-panel" }, h("div", { key: '1b466344158932113d3168ea8794e660b1004df4', class: "dub-panel__head" }, h("header", { key: '516463cb0cd47f61904d03b2880a3c7c2d35d315', class: "dub-panel__header" }, h("h2", { key: 'f550e5c33bb445267d3062af1651bdc738d5214c', class: "dub-panel__title", id: "day-use-bookings-title" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: 'c850276a04ae2f18e7e42ea97d3729f2b7d4a408', size: "m", appearance: "plain", variant: "neutral", onClickHandler: () => this.handleOptionEvent('closeSideMenu') }, h("wa-icon", { key: '96be69cb4c1e1c769c36e6ee48746ea83ec41508', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), hasDates && (h("div", { key: '2f1b91cab50e4882573627fa1108ce3bb5601af5', class: "dub-panel__toolbar" }, h("wa-select", { key: '06b84a16bf95dbd56d61899fc8723b91bbb5d9b3', size: "s", "aria-label": t('Lcz_DateLabel', { fallback: 'Date' }), value: this.selectedDate, defaultValue: this.selectedDate, onchange: evt => (this.selectedDate = evt.target.value) }, this.orderedDates.map(date => (h("wa-option", { value: date }, formatDate(date, 'ddd, DD MMM YYYY')))))))), h("div", { key: '4bbd4246bb738c58e599f8361d92bf4b63eed920', class: "dub-panel__body" }, isEmpty ? (h("ir-empty-state", { message: t('Lcz_NoDayUseBookingsForDate', { fallback: 'No day-use bookings for this date.' }) })) : (Array.from(grouped.entries()).map(([roomTypeId, roomTypeBookings]) => this.renderCategory(roomTypeId, roomTypeBookings)))))));
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
