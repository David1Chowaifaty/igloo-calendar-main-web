import moment from "moment";
import { dateDifference, isBlockUnit } from "./utils";
import axios from "axios";
import locales from "../stores/locales.store";
import calendar_dates from "../stores/calendar-dates.store";
import calendar_data from "../stores/calendar-data";
export async function getMyBookings(months) {
    const myBookings = [];
    const stayStatus = await getStayStatus();
    for (const month of months) {
        for (const day of month.days) {
            for (const room of day.room_types) {
                assignBooking(room.physicalrooms, myBookings, stayStatus);
            }
        }
    }
    return myBookings;
}
function assignBooking(physicalRoom, myBookings, stayStatus) {
    for (const room of physicalRoom) {
        for (const key in room.calendar_cell) {
            if (room.calendar_cell[key].Is_Available === false) {
                addOrUpdateBooking(room.calendar_cell[key], myBookings, stayStatus);
            }
        }
    }
}
const status = {
    '004': 'BLOCKED',
    '003': 'BLOCKED-WITH-DATES',
    '002': 'BLOCKED',
};
export const bookingStatus = {
    '000': 'IN-HOUSE',
    '001': 'PENDING-CONFIRMATION',
    '002': 'CONFIRMED',
    '003': 'CHECKED-OUT',
};
export function formatName(firstName, lastName) {
    if ((firstName === null && lastName === null) || !firstName)
        return '';
    if (!!lastName) {
        return `${firstName !== null && firstName !== void 0 ? firstName : ''} ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
    }
    return firstName;
}
async function getStayStatus() {
    try {
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_Multi`, {
            TBL_NAMES: ['_STAY_STATUS'],
        });
        return data.My_Result.map(d => ({
            code: d.CODE_NAME,
            value: d.CODE_VALUE_EN,
        }));
    }
    catch (error) {
        console.log(error);
    }
}
function renderBlock003Date(date, hour, minute) {
    const dt = new Date(date);
    dt.setHours(hour);
    dt.setMinutes(minute);
    return `${locales.entries.Lcz_BlockedTill} ${moment(dt).format('MMM DD, HH:mm')}`;
}
function getDefaultData(cell, stayStatus) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (isBlockUnit(cell.STAY_STATUS_CODE)) {
        const blockedFromDate = moment(cell.My_Block_Info.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.from_date : cell.DATE;
        const blockedToDate = moment(cell.My_Block_Info.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.to_date : cell.DATE;
        return {
            ID: cell.POOL,
            NOTES: '',
            BALANCE: '',
            NAME: cell.My_Block_Info.NOTES !== ''
                ? cell.My_Block_Info.NOTES
                : cell.STAY_STATUS_CODE === '003'
                    ? renderBlock003Date(cell.My_Block_Info.BLOCKED_TILL_DATE, cell.My_Block_Info.BLOCKED_TILL_HOUR, cell.My_Block_Info.BLOCKED_TILL_MINUTE)
                    : stayStatus.find(st => st.code === cell.STAY_STATUS_CODE).value || '',
            RELEASE_AFTER_HOURS: cell.My_Block_Info.DESCRIPTION,
            PR_ID: cell.My_Block_Info.pr_id,
            ENTRY_DATE: cell.My_Block_Info.BLOCKED_TILL_DATE,
            ENTRY_HOUR: cell.My_Block_Info.BLOCKED_TILL_HOUR,
            ENTRY_MINUTE: cell.My_Block_Info.BLOCKED_TILL_MINUTE,
            OPTIONAL_REASON: cell.My_Block_Info.NOTES,
            FROM_DATE: blockedFromDate,
            TO_DATE: blockedToDate,
            NO_OF_DAYS: dateDifference(blockedFromDate, blockedToDate),
            STATUS: status[cell.STAY_STATUS_CODE],
            POOL: cell.POOL,
            STATUS_CODE: cell.STAY_STATUS_CODE,
            OUT_OF_SERVICE: cell.STAY_STATUS_CODE === '004',
            FROM_DATE_STR: cell.My_Block_Info.format.from_date,
            TO_DATE_STR: cell.My_Block_Info.format.to_date,
            defaultDates: {
                from_date: cell.My_Block_Info.from_date,
                to_date: cell.My_Block_Info.to_date,
            },
        };
    }
    // if (cell.booking.booking_nbr === '61249849') {
    //   console.log('cell');
    //   console.log(moment(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE);
    //   console.log(cell);
    // }
    const bookingFromDate = moment(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE;
    const bookingToDate = moment(cell.room.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.to_date : cell.DATE;
    const mainGuest = (_a = cell.room.sharing_persons) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
    return {
        ID: cell.POOL,
        FROM_DATE: bookingFromDate,
        TO_DATE: bookingToDate,
        NO_OF_DAYS: dateDifference(bookingFromDate, bookingToDate),
        STATUS: bookingStatus[(_b = cell.booking) === null || _b === void 0 ? void 0 : _b.status.code],
        // NAME: formatName(mainGuest?.first_name, mainGuest?.last_name),
        NAME: formatName(mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.first_name, mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.last_name) || formatName((_c = cell === null || cell === void 0 ? void 0 : cell.booking.guest) === null || _c === void 0 ? void 0 : _c.first_name, (_e = (_d = cell === null || cell === void 0 ? void 0 : cell.booking) === null || _d === void 0 ? void 0 : _d.guest) === null || _e === void 0 ? void 0 : _e.last_name),
        IDENTIFIER: cell.room.identifier,
        PR_ID: cell.pr_id,
        POOL: cell.POOL,
        BOOKING_NUMBER: cell.booking.booking_nbr,
        NOTES: cell.booking.is_direct ? cell.booking.remark : null,
        PRIVATE_NOTE: getPrivateNote(cell.booking.extras),
        is_direct: cell.booking.is_direct,
        BALANCE: (_f = cell.booking.financial) === null || _f === void 0 ? void 0 : _f.due_amount,
        channel_booking_nbr: cell.booking.channel_booking_nbr,
        ARRIVAL_TIME: cell.booking.arrival.description,
        defaultDates: {
            from_date: cell.room.from_date,
            to_date: cell.room.to_date,
        },
        ///from here
        ENTRY_DATE: cell.booking.booked_on.date,
        PHONE_PREFIX: cell.booking.guest.country_phone_prefix,
        IS_EDITABLE: cell.booking.is_editable,
        ARRIVAL: cell.booking.arrival,
        PHONE: (_g = cell.booking.guest.mobile_without_prefix) !== null && _g !== void 0 ? _g : '',
        RATE: cell.room.total,
        RATE_PLAN: cell.room.rateplan.name,
        SPLIT_BOOKING: false,
        RATE_PLAN_ID: cell.room.rateplan.id,
        RATE_TYPE: (_j = (_h = cell.room) === null || _h === void 0 ? void 0 : _h.roomtype) === null || _j === void 0 ? void 0 : _j.id,
        ADULTS_COUNT: cell.room.occupancy.adult_nbr,
        CHILDREN_COUNT: cell.room.occupancy.children_nbr,
        origin: cell.booking.origin,
        GUEST: cell.booking.guest,
        ROOMS: cell.booking.rooms,
        cancelation: cell.room.rateplan.cancelation,
        guarantee: cell.room.rateplan.guarantee,
        TOTAL_PRICE: (_k = cell.booking.financial) === null || _k === void 0 ? void 0 : _k.gross_total,
        COUNTRY: cell.booking.guest.country_id,
        FROM_DATE_STR: cell.booking.format.from_date,
        TO_DATE_STR: cell.booking.format.to_date,
        adult_child_offering: cell.room.rateplan.selected_variation.adult_child_offering,
        SOURCE: { code: cell.booking.source.code, description: cell.booking.source.description, tag: cell.booking.source.tag },
        //TODO:Implement checkin-checkout
        CHECKIN: ((_l = cell.room.in_out) === null || _l === void 0 ? void 0 : _l.code) === '001',
        CHECKOUT: ((_m = cell.room.in_out) === null || _m === void 0 ? void 0 : _m.code) === '002',
        ROOM_INFO: {
            occupancy: cell.room.occupancy,
            sharing_persons: cell.room.sharing_persons,
            unit: cell.room.unit,
            in_out: cell.room.in_out,
        },
        BASE_STATUS_CODE: (_o = cell.booking.status) === null || _o === void 0 ? void 0 : _o.code,
    };
}
// function updateBookingWithStayData(data: any, cell: CellType): any {
//   data.NO_OF_DAYS = dateDifference(data.FROM_DATE, cell.DATE);
//   data.TO_DATE = cell.DATE;
//   if (cell.booking) {
//     const { arrival } = cell.booking;
//     if (cell.booking.booking_nbr === '88231897') {
//       console.log(data.NO_OF_DAYS, data.TO_DATE);
//     }
//     Object.assign(data, {
//       ARRIVAL_TIME: arrival.description,
//     });
//   }
//   return data;
// }
export function getRoomStatus(params) {
    var _a, _b;
    const { in_out, status_code, from_date, to_date } = params;
    if (calendar_data.checkin_enabled) {
        if ((in_out === null || in_out === void 0 ? void 0 : in_out.code) === '001') {
            return bookingStatus['000'];
        }
        else if ((in_out === null || in_out === void 0 ? void 0 : in_out.code) === '002') {
            if (!calendar_data.is_automatic_check_in_out) {
                const now = moment();
                const toDate = moment(to_date, 'YYYY-MM-DD');
                const fromDate = moment(from_date, 'YYYY-MM-DD');
                const isNowAfterOrSameAsHotelHour = compareTime(now.toDate(), createDateWithOffsetAndHour((_a = calendar_data.checkin_checkout_hours) === null || _a === void 0 ? void 0 : _a.offset, (_b = calendar_data.checkin_checkout_hours) === null || _b === void 0 ? void 0 : _b.hour));
                if ((now.isSame(toDate, 'days') && now.isAfter(fromDate, 'days') && isNowAfterOrSameAsHotelHour) || now.isAfter(toDate, 'days')) {
                    return bookingStatus['003'];
                }
                else {
                    return bookingStatus['002'];
                }
            }
        }
        return bookingStatus[status_code || '001'];
    }
    else {
        const now = moment();
        // const toDate = moment(to_date, 'YYYY-MM-DD');
        // const fromDate = moment(from_date, 'YYYY-MM-DD');
        // const isNowAfterOrSameAsHotelHour = compareTime(
        //   now.toDate(),
        //   createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour),
        // );
        // if (fromDate.isSame(now, 'day') && isNowAfterOrSameAsHotelHour) {
        //   return bookingStatus['000'];
        // } else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
        //   return bookingStatus['000'];
        // } else if (toDate.isSame(now, 'day') && isNowAfterOrSameAsHotelHour) {
        //   return bookingStatus['000'];
        // } else if ((toDate.isSame(now, 'day') && isNowAfterOrSameAsHotelHour) || toDate.isBefore(now, 'day')) {
        //   return bookingStatus['003'];
        // } else {
        //   return bookingStatus[status_code || '001'];
        // }
        const toDate = moment(to_date, 'YYYY-MM-DD');
        const fromDate = moment(from_date, 'YYYY-MM-DD');
        if (status_code !== 'PENDING') {
            if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
                return bookingStatus['000'];
            }
            else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
                return bookingStatus['000'];
            }
            else if (toDate.isSame(now, 'day') && now.hour() < 12) {
                return bookingStatus['000'];
            }
            else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
                return bookingStatus['003'];
            }
            else {
                return bookingStatus[status_code || '001'];
            }
        }
    }
}
function addOrUpdateBooking(cell, myBookings, stayStatus) {
    const index = myBookings.findIndex(booking => booking.POOL === cell.POOL);
    if (index === -1) {
        const newData = getDefaultData(cell, stayStatus);
        myBookings.push(newData);
    }
    //else {
    //   const updatedData = updateBookingWithStayData(myBookings[index], cell);
    //   myBookings[index] = updatedData;
    // }
}
export function getPrivateNote(extras) {
    var _a;
    if (!extras) {
        return null;
    }
    return ((_a = extras.find(e => e.key === 'private_note')) === null || _a === void 0 ? void 0 : _a.value) || null;
}
export function transformNewBooking(data) {
    let bookings = [];
    const rooms = data.rooms.filter(room => !!room['assigned_units_pool']);
    rooms.forEach(room => {
        var _a, _b, _c, _d, _e, _f;
        const bookingFromDate = moment(room.from_date, 'YYYY-MM-DD').isAfter(moment(calendar_dates.fromDate, 'YYYY-MM-DD')) ? room.from_date : calendar_dates.fromDate;
        const bookingToDate = room.to_date;
        if (moment(room.to_date, 'YYYY-MM-DD').isBefore(moment(calendar_dates.fromDate, 'YYYY-MM-DD'))) {
            return;
        }
        const mainGuest = (_a = room.sharing_persons) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
        // console.log('bookingToDate:', bookingToDate, 'bookingFromDate:', bookingFromDate, 'room from date:', room.from_date, 'room to date', room.to_date);
        bookings.push({
            CHECKIN: false,
            CHECKOUT: false,
            ID: room['assigned_units_pool'],
            TO_DATE: bookingToDate,
            FROM_DATE: bookingFromDate,
            PRIVATE_NOTE: getPrivateNote(data.extras),
            NO_OF_DAYS: dateDifference(bookingFromDate, bookingToDate),
            ARRIVAL: data.arrival,
            IS_EDITABLE: true,
            BALANCE: (_b = data.financial) === null || _b === void 0 ? void 0 : _b.due_amount,
            STATUS: getRoomStatus({
                in_out: room.in_out,
                from_date: room.from_date,
                to_date: room.to_date,
                status_code: (_c = data.status) === null || _c === void 0 ? void 0 : _c.code,
            }),
            // NAME: formatName(mainGuest?.first_name, mainGuest.last_name),
            NAME: formatName(mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.first_name, mainGuest.last_name) || formatName(room.guest.first_name, room.guest.last_name),
            PHONE: (_d = data.guest.mobile_without_prefix) !== null && _d !== void 0 ? _d : '',
            ENTRY_DATE: '12-12-2023',
            PHONE_PREFIX: data.guest.country_phone_prefix,
            RATE: room.total,
            RATE_PLAN: room.rateplan.name,
            SPLIT_BOOKING: false,
            RATE_PLAN_ID: room.rateplan.id,
            IDENTIFIER: room.identifier,
            RATE_TYPE: room.roomtype.id,
            ADULTS_COUNT: room.occupancy.adult_nbr,
            CHILDREN_COUNT: room.occupancy.children_nbr,
            PR_ID: +room.unit.id,
            POOL: room['assigned_units_pool'],
            GUEST: data.guest,
            ROOMS: data.rooms,
            BOOKING_NUMBER: data.booking_nbr,
            cancelation: room.rateplan.cancelation,
            guarantee: room.rateplan.guarantee,
            TOTAL_PRICE: (_e = data.financial) === null || _e === void 0 ? void 0 : _e.gross_total,
            COUNTRY: data.guest.country_id,
            FROM_DATE_STR: data.format.from_date,
            TO_DATE_STR: data.format.to_date,
            adult_child_offering: room.rateplan.selected_variation.adult_child_offering,
            ARRIVAL_TIME: data.arrival.description,
            origin: data.origin,
            channel_booking_nbr: data.channel_booking_nbr,
            is_direct: data.is_direct,
            NOTES: data.is_direct ? data.remark : null,
            SOURCE: { code: data.source.code, description: data.source.description, tag: data.source.tag },
            ota_notes: data.ota_notes,
            defaultDates: {
                from_date: room.from_date,
                to_date: room.to_date,
            },
            ROOM_INFO: {
                occupancy: room.occupancy,
                sharing_persons: room.sharing_persons,
                unit: room.unit,
                in_out: room.in_out,
            },
            BASE_STATUS_CODE: (_f = data.status) === null || _f === void 0 ? void 0 : _f.code,
        });
    });
    return bookings;
}
export async function transformNewBLockedRooms(data) {
    const stayStatus = await getStayStatus();
    return {
        ID: data.POOL,
        NOTES: '',
        BALANCE: '',
        NAME: data.NOTES !== ''
            ? data.NOTES
            : data.STAY_STATUS_CODE === '003'
                ? renderBlock003Date(data.BLOCKED_TILL_DATE, data.BLOCKED_TILL_HOUR, data.BLOCKED_TILL_MINUTE)
                : stayStatus.find(st => st.code === data.STAY_STATUS_CODE).value || '',
        RELEASE_AFTER_HOURS: data.DESCRIPTION,
        PR_ID: data.pr_id,
        ENTRY_DATE: data.BLOCKED_TILL_DATE,
        ENTRY_HOUR: data.BLOCKED_TILL_HOUR,
        ENTRY_MINUTE: data.BLOCKED_TILL_MINUTE,
        OPTIONAL_REASON: data.NOTES,
        FROM_DATE: data.from_date,
        TO_DATE: data.to_date,
        NO_OF_DAYS: calculateDaysBetweenDates(data.from_date, data.to_date),
        STATUS: status[data.STAY_STATUS_CODE],
        POOL: data.POOL,
        STATUS_CODE: data.STAY_STATUS_CODE,
        OUT_OF_SERVICE: data.STAY_STATUS_CODE === '004',
        FROM_DATE_STR: data.format.from_date,
        TO_DATE_STR: data.format.to_date,
        defaultDates: {
            from_date: data.from_date,
            to_date: data.to_date,
        },
    };
}
export function calculateDaysBetweenDates(from_date, to_date) {
    const startDate = moment(from_date, 'YYYY-MM-DD').startOf('day');
    const endDate = moment(to_date, 'YYYY-MM-DD').endOf('day');
    const daysDiff = endDate.diff(startDate, 'days');
    return daysDiff || 1;
}
export function compareTime(date1, date2) {
    return date1.getHours() >= date2.getHours() && date1.getMinutes() >= date2.getMinutes();
}
/**
 * Creates a Date object for today at the specified hour in a given time zone.
 * The offset is the number of hours that the target time zone is ahead of UTC.
 *
 * For example, if offset = 3 and hour = 9, then the function returns a Date
 * which, when converted to the target time zone, represents 9:00.
 *
 * @param offset - The timezone offset in hours (e.g., 2, 3, etc.)
 * @param hour - The desired hour in the target time zone (0-23)
 * @returns Date object representing the target time (in UTC)
 */
export function createDateWithOffsetAndHour(offset, hour) {
    const now = new Date();
    const offsetMs = offset * 60 * 60 * 1000;
    const targetTzDate = new Date(now.getTime() + offsetMs);
    const year = targetTzDate.getUTCFullYear();
    const month = targetTzDate.getUTCMonth();
    const day = targetTzDate.getUTCDate();
    const utcHour = hour - offset;
    return new Date(Date.UTC(year, month, day, utcHour));
}
//# sourceMappingURL=booking.js.map
