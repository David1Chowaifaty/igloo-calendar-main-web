import { h as hooks } from './moment.js';
import { i as isBlockUnit, d as dateDifference } from './calendar-dates.store.js';
import { a as axios } from './axios.js';
import { l as locales } from './locales.store.js';
import './calendar-data.js';

async function getMyBookings(months) {
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
const bookingStatus = {
    '000': 'IN-HOUSE',
    '001': 'PENDING-CONFIRMATION',
    '002': 'CONFIRMED',
    '003': 'CHECKED-OUT',
};
function formatName(firstName, lastName) {
    if (firstName === null && lastName === null)
        return '';
    if (lastName !== null && lastName !== '') {
        return `${firstName !== null && firstName !== void 0 ? firstName : ''} , ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
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
    return `${locales.entries.Lcz_BlockedTill} ${hooks(dt).format('MMM DD, HH:mm')}`;
}
function getDefaultData(cell, stayStatus) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (isBlockUnit(cell.STAY_STATUS_CODE)) {
        const blockedFromDate = hooks(cell.My_Block_Info.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.from_date : cell.DATE;
        const blockedToDate = hooks(cell.My_Block_Info.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.to_date : cell.DATE;
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
    if (cell.booking.booking_nbr.toString() === '77054273380') {
        console.log('booking', cell);
    }
    // if (cell.booking.booking_nbr === '61249849') {
    //   console.log('cell');
    //   console.log(moment(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE);
    //   console.log(cell);
    // }
    const bookingFromDate = hooks(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE;
    const bookingToDate = hooks(cell.room.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.to_date : cell.DATE;
    const mainGuest = (_a = cell.room.sharing_persons) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
    return {
        ID: cell.POOL,
        FROM_DATE: bookingFromDate,
        TO_DATE: bookingToDate,
        NO_OF_DAYS: dateDifference(bookingFromDate, bookingToDate),
        STATUS: bookingStatus[(_b = cell.booking) === null || _b === void 0 ? void 0 : _b.status.code],
        NAME: formatName(mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.first_name, mainGuest.last_name),
        IDENTIFIER: cell.room.identifier,
        PR_ID: cell.pr_id,
        POOL: cell.POOL,
        BOOKING_NUMBER: cell.booking.booking_nbr,
        NOTES: cell.booking.is_direct ? cell.booking.remark : null,
        PRIVATE_NOTE: getPrivateNote(cell.booking.extras),
        is_direct: cell.booking.is_direct,
        BALANCE: (_c = cell.booking.financial) === null || _c === void 0 ? void 0 : _c.due_amount,
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
        PHONE: (_d = cell.booking.guest.mobile_without_prefix) !== null && _d !== void 0 ? _d : '',
        RATE: cell.room.total,
        RATE_PLAN: cell.room.rateplan.name,
        SPLIT_BOOKING: false,
        RATE_PLAN_ID: cell.room.rateplan.id,
        RATE_TYPE: (_f = (_e = cell.room) === null || _e === void 0 ? void 0 : _e.roomtype) === null || _f === void 0 ? void 0 : _f.id,
        ADULTS_COUNT: cell.room.occupancy.adult_nbr,
        CHILDREN_COUNT: cell.room.occupancy.children_nbr,
        origin: cell.booking.origin,
        GUEST: cell.booking.guest,
        ROOMS: cell.booking.rooms,
        cancelation: cell.room.rateplan.cancelation,
        guarantee: cell.room.rateplan.guarantee,
        TOTAL_PRICE: (_g = cell.booking.financial) === null || _g === void 0 ? void 0 : _g.gross_total,
        COUNTRY: cell.booking.guest.country_id,
        FROM_DATE_STR: cell.booking.format.from_date,
        TO_DATE_STR: cell.booking.format.to_date,
        adult_child_offering: cell.room.rateplan.selected_variation.adult_child_offering,
        SOURCE: { code: cell.booking.source.code, description: cell.booking.source.description, tag: cell.booking.source.tag },
        //TODO:Implement checkin-checkout
        CHECKIN: ((_h = cell.room.in_out) === null || _h === void 0 ? void 0 : _h.code) === '001',
        CHECKOUT: ((_j = cell.room.in_out) === null || _j === void 0 ? void 0 : _j.code) === '002',
        ROOM_INFO: {
            occupancy: cell.room.occupancy,
            sharing_persons: cell.room.sharing_persons,
            unit: cell.room.unit,
            in_out: cell.room.in_out,
        },
        BASE_STATUS_CODE: (_k = cell.booking.status) === null || _k === void 0 ? void 0 : _k.code,
    };
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
function getPrivateNote(extras) {
    var _a;
    if (!extras) {
        return null;
    }
    return ((_a = extras.find(e => e.key === 'private_note')) === null || _a === void 0 ? void 0 : _a.value) || null;
}

export { getMyBookings as g };

//# sourceMappingURL=booking2.js.map