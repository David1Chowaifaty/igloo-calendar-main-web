import { h as hooks } from './moment-ab846cee.js';
import './locales.store-91c051f0.js';
import './calendar-data-956fa3f1.js';
import { c as calendar_dates } from './calendar-dates.store-26a46226.js';

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
function getPrivateNote(extras) {
    var _a;
    if (!extras) {
        return null;
    }
    return ((_a = extras.find(e => e.key === 'private_note')) === null || _a === void 0 ? void 0 : _a.value) || null;
}
function transformNewBooking(data) {
    let bookings = [];
    //console.log(data);
    const renderStatus = room => {
        const now = hooks();
        const toDate = hooks(room.to_date, 'YYYY-MM-DD');
        const fromDate = hooks(room.from_date, 'YYYY-MM-DD');
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
            return bookingStatus[(data === null || data === void 0 ? void 0 : data.status.code) || '001'];
        }
        // if (toDate.isBefore(now, 'day') || (toDate.isSame(now, 'day') && now.hour() >= 12)) {
        //   return bookingStatus['003'];
        // } else {
        //   return bookingStatus[fromDate.isSameOrBefore(now, 'day') ? '000' : data?.status.code || '001'];
        // }
    };
    const rooms = data.rooms.filter(room => !!room['assigned_units_pool']);
    rooms.forEach(room => {
        var _a, _b, _c;
        const bookingFromDate = hooks(room.from_date, 'YYYY-MM-DD').isAfter(hooks(calendar_dates.fromDate, 'YYYY-MM-DD')) ? room.from_date : calendar_dates.fromDate;
        const bookingToDate = hooks(room.to_date, 'YYYY-MM-DD').isAfter(hooks(calendar_dates.toDate, 'YYYY-MM-DD')) ? room.to_date : calendar_dates.toDate;
        console.log(bookingToDate, bookingFromDate, room.from_date, room.to_date);
        bookings.push({
            ID: room['assigned_units_pool'],
            TO_DATE: room.to_date,
            FROM_DATE: room.from_date,
            PRIVATE_NOTE: getPrivateNote(data.extras),
            NO_OF_DAYS: room.days.length,
            ARRIVAL: data.arrival,
            IS_EDITABLE: true,
            BALANCE: (_a = data.financial) === null || _a === void 0 ? void 0 : _a.due_amount,
            STATUS: renderStatus(room),
            NAME: formatName(room.guest.first_name, room.guest.last_name),
            PHONE: (_b = data.guest.mobile) !== null && _b !== void 0 ? _b : '',
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
            TOTAL_PRICE: (_c = data.financial) === null || _c === void 0 ? void 0 : _c.gross_total,
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
        });
    });
    return bookings;
}
function calculateDaysBetweenDates(from_date, to_date) {
    const startDate = hooks(from_date, 'YYYY-MM-DD');
    const endDate = hooks(to_date, 'YYYY-MM-DD');
    const daysDiff = endDate.diff(startDate, 'days');
    return daysDiff || 1;
}

const _formatDate = (date) => {
    // Month Name 3 letters, Day, Year
    return hooks(date).format('MMM DD, YYYY');
};
const _formatAmount = (amount, currency = 'USD') => {
    // format the amount using accounting.js
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount);
};
const _getDay = (date) => {
    // formate it as day number/month number and day name
    return hooks(date).format('DD/MM ddd');
};
const _formatTime = (hour, minute) => {
    // format them as AM/PM using moment.js
    return hooks(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    // return moment(`${hour}:${minute}`, 'HH:mm').format('HH:mm');
};

export { _formatDate as _, _formatTime as a, _formatAmount as b, calculateDaysBetweenDates as c, _getDay as d, getPrivateNote as g, transformNewBooking as t };

//# sourceMappingURL=functions-242a246b.js.map