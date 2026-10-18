'use strict';

var moment = require('./moment-CdViwxPQ.js');

/** `_ARRIVAL_TIME` code for "Not sure yet": the guest gave no arrival time. */
const UNSET_ARRIVAL_TIME_CODE = '001';
/** `_DEPARTURE_TIME` code meaning the guest never picked a departure time. */
const UNSET_DEPARTURE_TIME_CODE = '000';
/** Minutes after midnight of a setup entry's clock-time label (`14:00`, `2:00 PM`), or `null` when it isn't one. */
function toMinutes(description) {
    if (!description) {
        return null;
    }
    const time = moment.hooks(description.trim(), ['HH:mm', 'H:mm', 'h:mm A', 'h:mmA', 'h A'], true);
    return time.isValid() ? time.hours() * 60 + time.minutes() : null;
}
/** The room's requested arrival time in minutes after midnight, or `null` when the guest gave none. */
function roomArrivalMinutes(room) {
    const arrival = room?.arrival_time;
    if (!arrival?.code || arrival.code === UNSET_ARRIVAL_TIME_CODE) {
        return null;
    }
    return toMinutes(arrival.description);
}
/** The room's requested departure time in minutes after midnight, or `null` when the guest gave none. */
function roomDepartureMinutes(room) {
    const departure = room?.departure_time;
    if (!departure?.code || departure.code === UNSET_DEPARTURE_TIME_CODE) {
        return null;
    }
    return toMinutes(departure.description);
}
/**
 * Splits bookings into one-room bookings ordered by each room's time: rooms without a time first, then earliest to latest.
 * The sort is stable, so rooms with the same time keep their original order.
 */
function sortRoomsByTime(bookings, minutesOf) {
    const rooms = (bookings ?? []).flatMap(booking => (booking.rooms ?? []).map(room => ({ booking, room, minutes: minutesOf(room) })));
    rooms.sort((a, b) => {
        if (a.minutes === b.minutes) {
            return 0;
        }
        if (a.minutes === null) {
            return -1;
        }
        if (b.minutes === null) {
            return 1;
        }
        return a.minutes - b.minutes;
    });
    return rooms.map(({ booking, room }) => ({ ...booking, rooms: [room] }));
}

exports.roomArrivalMinutes = roomArrivalMinutes;
exports.roomDepartureMinutes = roomDepartureMinutes;
exports.sortRoomsByTime = sortRoomsByTime;
