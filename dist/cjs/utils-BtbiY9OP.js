'use strict';

var utils = require('./utils-CVHsag7R.js');
var booking = require('./booking-CTTU8QIq.js');
var calendarData = require('./calendar-data-HgC39-BR.js');

/** The API identifies room types by id only; the name comes from the property's cached room-type map. */
function groupIntoCategories(roomTypes) {
    return roomTypes.map(group => ({
        roomTypeId: group.id,
        roomTypeName: calendarData.getRoomTypeName(group.id),
        rooms: group.unassigned_rooms,
    }));
}
function guestName(room) {
    return booking.formatName(room.first_name, room.last_name);
}
function toDateRange(from, to, nights) {
    const fromDate = new Date(`${from}T00:00:00`);
    const toDate = new Date(`${to}T00:00:00`);
    return {
        fromDate,
        toDate,
        fromDateStr: utils.dateToFormattedString(fromDate),
        toDateStr: utils.dateToFormattedString(toDate),
        fromDateTimeStamp: fromDate.getTime(),
        toDateTimeStamp: toDate.getTime(),
        dateDifference: nights,
    };
}
/** Trims a stay to the calendar's loaded days — the grid has no cells outside `calendar_dates.fromDate..toDate`. */
function clampToLoadedRange(from, to) {
    const { fromDate, toDate } = booking.calendar_dates;
    // ISO date strings compare correctly as plain strings.
    const start = fromDate && fromDate > from ? fromDate : from;
    const end = toDate && toDate < to ? toDate : to;
    return { from: start, to: end, nights: utils.dateDifference(start, end) };
}
/** One ghost event per unit the room can be assigned to. Every unit is assumed valid for the room's whole `from`→`to` span — the API carries no per-unit window. */
function toCalendarPreviewEvents(room, ctx) {
    const { from, to, nights } = clampToLoadedRange(room.from_date, room.to_date);
    return (room.assignable_units ?? []).map(unit => ({
        ID: 'NEW_TEMP_EVENT',
        identifier: room.room_identifier,
        PR_ID: unit.pr_id,
        RT_ID: ctx.roomTypeId,
        roomName: unit.name,
        FROM_DATE: from,
        TO_DATE: to,
        NO_OF_DAYS: nights,
        STATUS: 'PENDING-CONFIRMATION',
        NAME: '',
        NOTES: '',
        BALANCE: '',
        INTERNAL_NOTE: '',
        hideBubble: true,
        legendData: ctx.legendData,
        roomsInfo: ctx.roomsInfo,
        defaultDates: { from_date: room.from_date, to_date: room.to_date },
        defaultDateRange: toDateRange(from, to, nights),
    }));
}
function toCalendarAssignedEvent(room, prId, ctx) {
    const { from, to, nights } = clampToLoadedRange(room.from_date, room.to_date);
    return {
        ID: room.room_identifier,
        identifier: room.room_identifier,
        PR_ID: prId,
        RT_ID: ctx.roomTypeId,
        roomTypeName: ctx.roomTypeName,
        BOOKING_NUMBER: room.booking_nbr,
        NAME: guestName(room),
        occupancy: room.occupancy,
        FROM_DATE: from,
        TO_DATE: to,
        NO_OF_DAYS: nights,
        STATUS: 'IN-HOUSE',
        legendData: ctx.legendData,
        roomsInfo: ctx.roomsInfo,
        defaultDates: { from_date: room.from_date, to_date: room.to_date },
        defaultDateRange: toDateRange(from, to, nights),
    };
}

exports.clampToLoadedRange = clampToLoadedRange;
exports.groupIntoCategories = groupIntoCategories;
exports.guestName = guestName;
exports.toCalendarAssignedEvent = toCalendarAssignedEvent;
exports.toCalendarPreviewEvents = toCalendarPreviewEvents;
