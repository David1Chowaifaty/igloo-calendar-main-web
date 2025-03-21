'use strict';

const moment = require('./moment-1780b03a.js');
const index = require('./index-db8b30d9.js');
const calendarDates_store = require('./calendar-dates.store-b1d63309.js');
const axios = require('./axios-6e678d52.js');
const locales_store = require('./locales.store-7abd65bc.js');
const calendarData = require('./calendar-data-eb8212ff.js');

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
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_Multi`, {
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
    return `${locales_store.locales.entries.Lcz_BlockedTill} ${moment.hooks(dt).format('MMM DD, HH:mm')}`;
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
function getRoomStatus(params) {
    var _a, _b, _c, _d;
    const { in_out, status_code, from_date, to_date } = params;
    if (calendarData.calendar_data.checkin_enabled) {
        if ((in_out === null || in_out === void 0 ? void 0 : in_out.code) === '001') {
            return bookingStatus['000'];
        }
        else if ((in_out === null || in_out === void 0 ? void 0 : in_out.code) === '002') {
            if (!calendarData.calendar_data.is_automatic_check_in_out) {
                const now = moment.hooks();
                const toDate = moment.hooks(to_date, 'YYYY-MM-DD');
                const fromDate = moment.hooks(from_date, 'YYYY-MM-DD');
                const isNowAfterOrSameAsHotelHour = compareTime(now.toDate(), createDateWithOffsetAndHour((_a = calendarData.calendar_data.checkin_checkout_hours) === null || _a === void 0 ? void 0 : _a.offset, (_b = calendarData.calendar_data.checkin_checkout_hours) === null || _b === void 0 ? void 0 : _b.hour));
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
        const now = moment.hooks();
        const toDate = moment.hooks(to_date, 'YYYY-MM-DD');
        const fromDate = moment.hooks(from_date, 'YYYY-MM-DD');
        const isNowAfterOrSameAsHotelHour = compareTime(now.toDate(), createDateWithOffsetAndHour((_c = calendarData.calendar_data.checkin_checkout_hours) === null || _c === void 0 ? void 0 : _c.offset, (_d = calendarData.calendar_data.checkin_checkout_hours) === null || _d === void 0 ? void 0 : _d.hour));
        if (fromDate.isSame(now, 'day') && isNowAfterOrSameAsHotelHour) {
            return bookingStatus['000'];
        }
        else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
            return bookingStatus['000'];
        }
        else if (toDate.isSame(now, 'day') && isNowAfterOrSameAsHotelHour) {
            return bookingStatus['000'];
        }
        else if ((toDate.isSame(now, 'day') && isNowAfterOrSameAsHotelHour) || toDate.isBefore(now, 'day')) {
            return bookingStatus['003'];
        }
        else {
            return bookingStatus[status_code || '001'];
        }
    }
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
    const rooms = data.rooms.filter(room => !!room['assigned_units_pool']);
    rooms.forEach(room => {
        var _a, _b, _c, _d, _e, _f;
        const bookingFromDate = moment.hooks(room.from_date, 'YYYY-MM-DD').isAfter(moment.hooks(calendarDates_store.calendar_dates.fromDate, 'YYYY-MM-DD')) ? room.from_date : calendarDates_store.calendar_dates.fromDate;
        const bookingToDate = room.to_date;
        if (moment.hooks(room.to_date, 'YYYY-MM-DD').isBefore(moment.hooks(calendarDates_store.calendar_dates.fromDate, 'YYYY-MM-DD'))) {
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
            NO_OF_DAYS: calendarDates_store.dateDifference(bookingFromDate, bookingToDate),
            ARRIVAL: data.arrival,
            IS_EDITABLE: true,
            BALANCE: (_b = data.financial) === null || _b === void 0 ? void 0 : _b.due_amount,
            STATUS: getRoomStatus({
                in_out: room.in_out,
                from_date: room.from_date,
                to_date: room.to_date,
                status_code: (_c = data.status) === null || _c === void 0 ? void 0 : _c.code,
            }),
            NAME: formatName(mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.first_name, mainGuest.last_name),
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
async function transformNewBLockedRooms(data) {
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
function calculateDaysBetweenDates(from_date, to_date) {
    const startDate = moment.hooks(from_date, 'YYYY-MM-DD').startOf('day');
    const endDate = moment.hooks(to_date, 'YYYY-MM-DD').endOf('day');
    const daysDiff = endDate.diff(startDate, 'days');
    return daysDiff || 1;
}
function compareTime(date1, date2) {
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
function createDateWithOffsetAndHour(offset, hour) {
    const now = new Date();
    const offsetMs = offset * 60 * 60 * 1000;
    const targetTzDate = new Date(now.getTime() + offsetMs);
    const year = targetTzDate.getUTCFullYear();
    const month = targetTzDate.getUTCMonth();
    const day = targetTzDate.getUTCDate();
    const utcHour = hour - offset;
    return new Date(Date.UTC(year, month, day, utcHour));
}

function dateToFormattedString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-based in JS
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function formatLegendColors(legendData) {
    let formattedLegendData = {};
    const statusId = {
        'IN-HOUSE': { id: 1, clsName: 'IN_HOUSE' },
        'CONFIRMED': { id: 2, clsName: 'CONFIRMED' },
        'PENDING-CONFIRMATION': { id: 3, clsName: 'PENDING_CONFIRMATION' },
        'SPLIT-UNIT': { id: 4, clsName: 'SPLIT_UNIT' },
        'CHECKED-IN': { id: 5, clsName: 'CHECKED_IN' },
        'CHECKED-OUT': { id: 5, clsName: 'CHECKED_OUT' },
        'BLOCKED': { id: 6, clsName: 'BLOCKED' },
        'BLOCKED-WITH-DATES': { id: 7, clsName: 'BLOCKED_WITH_DATES' },
        'NOTES': { id: 8, clsName: 'NOTES' },
        'OUTSTANDING-BALANCE': { id: 9, clsName: 'OUTSTANDING_BALANCE' },
        'TEMP-EVENT': { id: 10, clsName: 'PENDING_CONFIRMATION' },
    };
    legendData.forEach(legend => {
        formattedLegendData[legend.id] = legend;
        formattedLegendData.statusId = statusId; // NOTE: This will overwrite the 'statusId' property with every iteration.
    });
    return formattedLegendData;
}
function isBlockUnit(status_code) {
    return ['003', '002', '004'].includes(status_code);
}
const findCountry = (id, countries) => countries.find(country => country.id === id);
function getReleaseHoursString(releaseDate) {
    const dt = new Date();
    const releaseAfterHours = releaseDate;
    dt.setHours(dt.getHours() + releaseAfterHours, dt.getMinutes(), 0, 0);
    return {
        BLOCKED_TILL_DATE: dateToFormattedString(dt),
        BLOCKED_TILL_HOUR: dt.getHours().toString(),
        BLOCKED_TILL_MINUTE: dt.getMinutes().toString(),
    };
}
function computeEndDate(startDate, numberOfDays) {
    const dateObj = moment.hooks(startDate, 'D_M_YYYY');
    dateObj.add(numberOfDays, 'days');
    return dateObj.format('YYYY-MM-DD');
}
function convertDMYToISO(date) {
    const dateObj = moment.hooks(date, 'D_M_YYYY');
    return dateObj.format('YYYY-MM-DD');
}
function addTwoMonthToDate(date) {
    return moment.hooks(date).add(2, 'months').format('YYYY-MM-DD');
}
function formatDate(dateString, option = 'DD MMM YYYY') {
    const formattedDate = moment.hooks(dateString, option).format('ddd, DD MMM YYYY');
    return formattedDate;
}
function getNextDay(date) {
    return moment.hooks(date).add(1, 'days').format('YYYY-MM-DD');
}
function convertDatePrice(date) {
    return moment.hooks(date, 'YYYY-MM-DD').format('DD/MM ddd');
}
function getDaysArray(date1, date2) {
    let dates = [];
    let start = moment.hooks.min(moment.hooks(date1).add(1, 'days'), moment.hooks(date2));
    let end = moment.hooks.max(moment.hooks(date1), moment.hooks(date2));
    while (start < end) {
        dates.push(start.format('YYYY-MM-DD'));
        start = start.clone().add(1, 'days');
    }
    return dates;
}
function renderTime(time) {
    return time < 10 ? time.toString().padStart(2, '0') : time.toString();
}
function validateEmail(email) {
    if (email === '') {
        return true;
    }
    const parsedEmailResults = index.z.string().email().safeParse(email);
    return !parsedEmailResults.success;
}
function formatAmount(currency, amount) {
    return currency + ' ' + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
const extras = [
    {
        key: 'private_note',
        value: '',
    },
    {
        key: 'is_backend',
        value: true,
    },
    {
        key: 'ERROR_EMAIL',
        value: '',
    },
    {
        key: 'agent_payment_mode',
        value: '',
    },
    { key: 'payment_code', value: '' },
];
function manageAnchorSession(data, mode = 'add') {
    const anchor = JSON.parse(sessionStorage.getItem('backend_anchor'));
    if (anchor) {
        if (mode === 'add') {
            return sessionStorage.setItem('backend_anchor', JSON.stringify(Object.assign(Object.assign({}, anchor), data)));
        }
        else if (mode === 'remove') {
            const keys = Object.keys(data);
            keys.forEach(key => {
                if (key in anchor) {
                    delete anchor[key];
                }
            });
            return sessionStorage.setItem('backend_anchor', JSON.stringify(anchor));
        }
    }
    else {
        if (mode === 'add') {
            return sessionStorage.setItem('backend_anchor', JSON.stringify(Object.assign({}, data)));
        }
    }
}
function checkUserAuthState() {
    const anchor = JSON.parse(sessionStorage.getItem('backend_anchor'));
    if (anchor) {
        return anchor.login || null;
    }
    return null;
}
/**
 * Determines whether a booking is eligible for check-in.
 *
 * @param params - An object containing the booking event, calendar data, current check-in status, and a flag indicating if check-in or checkout is allowed.
 * @returns True if check-in is allowed; otherwise, false.
 */
function canCheckIn({ from_date, to_date, isCheckedIn }) {
    var _a, _b;
    if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
        return false;
    }
    if (isCheckedIn) {
        return false;
    }
    const now = moment.hooks();
    if ((moment.hooks().isSameOrAfter(new Date(from_date), 'days') && moment.hooks().isBefore(new Date(to_date), 'days')) ||
        (moment.hooks().isSame(new Date(to_date), 'days') &&
            !compareTime(now.toDate(), createDateWithOffsetAndHour((_a = calendarData.calendar_data.checkin_checkout_hours) === null || _a === void 0 ? void 0 : _a.offset, (_b = calendarData.calendar_data.checkin_checkout_hours) === null || _b === void 0 ? void 0 : _b.hour)))) {
        return true;
    }
    return false;
}

exports.addTwoMonthToDate = addTwoMonthToDate;
exports.bookingStatus = bookingStatus;
exports.calculateDaysBetweenDates = calculateDaysBetweenDates;
exports.canCheckIn = canCheckIn;
exports.checkUserAuthState = checkUserAuthState;
exports.compareTime = compareTime;
exports.computeEndDate = computeEndDate;
exports.convertDMYToISO = convertDMYToISO;
exports.convertDatePrice = convertDatePrice;
exports.createDateWithOffsetAndHour = createDateWithOffsetAndHour;
exports.dateToFormattedString = dateToFormattedString;
exports.extras = extras;
exports.findCountry = findCountry;
exports.formatAmount = formatAmount;
exports.formatDate = formatDate;
exports.formatLegendColors = formatLegendColors;
exports.formatName = formatName;
exports.getDaysArray = getDaysArray;
exports.getNextDay = getNextDay;
exports.getPrivateNote = getPrivateNote;
exports.getReleaseHoursString = getReleaseHoursString;
exports.getRoomStatus = getRoomStatus;
exports.isBlockUnit = isBlockUnit;
exports.manageAnchorSession = manageAnchorSession;
exports.renderTime = renderTime;
exports.transformNewBLockedRooms = transformNewBLockedRooms;
exports.transformNewBooking = transformNewBooking;
exports.validateEmail = validateEmail;

//# sourceMappingURL=utils-8fbf9300.js.map