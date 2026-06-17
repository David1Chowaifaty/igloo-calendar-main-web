'use strict';

var moment = require('./moment-CdViwxPQ.js');
var calendarData = require('./calendar-data-BbZbFHz-.js');
var locales_store = require('./locales.store-BaDo11sT.js');
require('./booking.dto-_IwrBIs_.js');
var axios = require('./axios-C-Phc0sj.js');
var index = require('./index-BJltewV-.js');

function convertDateToCustomFormat(dayWithWeekday, monthWithYear, format = 'D_M_YYYY') {
    const dateStr = `${dayWithWeekday.split(' ')[1]} ${monthWithYear}`;
    const date = moment.hooks(dateStr, 'DD MMM YYYY');
    if (!date.isValid()) {
        throw new Error('Invalid Date');
    }
    return date.format(format);
}
function convertDateToTime(dayWithWeekday, monthWithYear) {
    const date = moment.hooks(dayWithWeekday + ' ' + monthWithYear, 'ddd DD MMM YYYY').toDate();
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
function dateDifference(FROM_DATE, TO_DATE) {
    const startDate = new Date(FROM_DATE);
    const endDate = new Date(TO_DATE);
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
}
function dateToFormattedString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-based in JS
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function isBlockUnit(status_code) {
    return ['003', '002', '004'].includes(status_code);
}
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
function groupEntryTablesResult(entries) {
    let result = {};
    for (const entry of entries) {
        if (!entry.TBL_NAME)
            continue;
        const key = entry.TBL_NAME.startsWith('_') ? entry.TBL_NAME.substring(1).toLowerCase() : entry.TBL_NAME.toLowerCase();
        if (!result[key]) {
            result[key] = [];
        }
        result[key] = [...result[key], entry];
    }
    return result;
}

const initialState = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
    disabled_cells: new Map(),
    cleaningTasks: new Map(),
};
const { state: calendar_dates} = index.createStore(initialState);
function addCleaningTasks(tasks) {
    const tasksMap = new Map();
    for (const task of tasks) {
        const taskMap = new Map(tasksMap.get(task.unit.id) ?? new Map());
        taskMap.set(task.date, task);
        tasksMap.set(task.unit.id, taskMap);
    }
    calendar_dates.cleaningTasks = new Map(tasksMap);
}
function cleanRoom({ unitId, date }) {
    const tasksMap = new Map(calendar_dates.cleaningTasks);
    if (!tasksMap.has(unitId)) {
        return;
    }
    const taskMap = new Map(tasksMap.get(unitId));
    taskMap.delete(date);
    tasksMap.set(unitId, taskMap);
    calendar_dates.cleaningTasks = new Map(tasksMap);
}
function addRoomForCleaning({ unitId, date, task }) {
    const tasksMap = new Map(calendar_dates.cleaningTasks);
    const taskMap = new Map(tasksMap.get(unitId) ?? new Map());
    taskMap.set(date, task ?? date);
    tasksMap.set(unitId, taskMap);
    calendar_dates.cleaningTasks = new Map(tasksMap);
}

/**
 * Builds an index of split chains for a booking's rooms.
 * @param rooms - The booking's rooms array.
 * @returns A {@link SplitIndex} with constant-time lookups, or `null` if no rooms are provided.
 */
function buildSplitIndex(rooms) {
    if (!rooms) {
        return;
    }
    const parentOf = new Map();
    const childrenOf = new Map();
    // 1) index parents/children
    for (const r of rooms) {
        if (!r?.identifier)
            continue;
        const id = r.identifier;
        const parent = r.parent_room_identifier ?? null;
        parentOf.set(id, parent);
        if (parent) {
            if (!childrenOf.has(parent))
                childrenOf.set(parent, []);
            childrenOf.get(parent).push(id);
        }
        else {
            if (!childrenOf.has(id))
                childrenOf.set(id, []); // ensure every head exists in map
        }
    }
    // 2) deterministic child order
    const byId = new Map(rooms.map(r => [r.identifier, r]));
    for (const [_, kids] of childrenOf) {
        kids.sort((a, b) => {
            const ad = byId.get(a)?.from_date ?? '';
            const bd = byId.get(b)?.from_date ?? '';
            if (ad < bd)
                return -1;
            if (ad > bd)
                return 1;
            return a.localeCompare(b);
        });
    }
    // 3) find heads (nodes with no parent in map or parent missing)
    const heads = [];
    for (const id of parentOf.keys()) {
        const parent = parentOf.get(id);
        if (!parent || !parentOf.has(parent))
            heads.push(id);
    }
    // 4) build chains, roles, and guard against cycles
    const roleOf = new Map();
    const chainOf = new Map();
    const visitChain = (head) => {
        const chain = [];
        const seen = new Set();
        let cur = head;
        while (cur && !seen.has(cur)) {
            seen.add(cur);
            chain.push(cur);
            const kids = childrenOf.get(cur) ?? [];
            // if data branches, we follow the earliest child and treat the rest as separate heads
            cur = kids[0];
        }
        // assign roles
        for (let i = 0; i < chain.length; i++) {
            const id = chain[i];
            const hasParent = i > 0;
            const hasChild = i < chain.length - 1;
            const role = hasParent && hasChild ? 'fullSplit' : hasParent ? 'leftSplit' : hasChild ? 'rightSplit' : null;
            roleOf.set(id, role);
            chainOf.set(id, chain);
        }
    };
    // visit each head
    for (const h of heads)
        visitChain(h);
    // handle orphans/cycles that weren’t reachable from heads
    for (const id of parentOf.keys()) {
        if (!chainOf.has(id))
            visitChain(id);
    }
    return { parentOf, childrenOf, roleOf, chainOf, heads };
}
/**
 * Returns the split role of a given room identifier.
 *
 * Roles:
 * - `"fullSplit"`: node has a parent and a child (middle of a chain)
 * - `"leftSplit"`: node has a parent only (tail)
 * - `"rightSplit"`: node has a child only (head that splits)
 * - `null`: singleton (no parent & no child) or not part of any chain in the index
 *
 * @param index - A previously built {@link SplitIndex}.
 * @param identifier - The room identifier to query.
 * @returns The role of the identifier, or `null` if not present.
 */
function getSplitRole(index, identifier) {
    return index.roleOf.get(identifier) ?? null;
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
    if ((firstName === null && lastName === null) || !firstName)
        return '';
    if (!!lastName) {
        return `${firstName ?? ''} ${lastName ?? ''}`;
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
        return [];
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
    const { in_out, status_code, from_date, to_date } = params;
    if (calendarData.calendar_data.checkin_enabled) {
        if (in_out?.code === '001') {
            return bookingStatus['000'];
        }
        else if (in_out?.code === '002') {
            if (!calendarData.calendar_data.is_automatic_check_in_out) {
                const now = moment.hooks();
                const toDate = moment.hooks(to_date, 'YYYY-MM-DD');
                const fromDate = moment.hooks(from_date, 'YYYY-MM-DD');
                const isNowAfterOrSameAsHotelHour = compareTime(now.toDate(), createDateWithOffsetAndHour(calendarData.calendar_data.checkin_checkout_hours?.offset, calendarData.calendar_data.checkin_checkout_hours?.hour));
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
        const toDate = moment.hooks(to_date, 'YYYY-MM-DD');
        const fromDate = moment.hooks(from_date, 'YYYY-MM-DD');
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
function getPrivateNote(extras) {
    if (!extras) {
        return null;
    }
    return extras.find(e => e.key === 'private_note')?.value || null;
}
function transformNewBooking(data) {
    let bookings = [];
    const rooms = data.rooms.filter(room => !!room['assigned_units_pool']);
    rooms.forEach(room => {
        const bookingFromDate = moment.hooks(room.from_date, 'YYYY-MM-DD').isAfter(moment.hooks(calendar_dates.fromDate, 'YYYY-MM-DD')) ? room.from_date : calendar_dates.fromDate;
        const bookingToDate = room.to_date;
        if (moment.hooks(room.to_date, 'YYYY-MM-DD').isBefore(moment.hooks(calendar_dates.fromDate, 'YYYY-MM-DD'))) {
            return;
        }
        const mainGuest = room.sharing_persons?.find(p => p.is_main);
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
            BALANCE: data.financial?.due_amount,
            STATUS: getRoomStatus({
                in_out: room.in_out,
                from_date: room.from_date,
                to_date: room.to_date,
                status_code: data.status?.code,
            }),
            // NAME: formatName(mainGuest?.first_name, mainGuest.last_name),
            NAME: formatName(mainGuest?.first_name, mainGuest.last_name) || formatName(room.guest.first_name, room.guest.last_name),
            PHONE: data.guest.mobile_without_prefix ?? '',
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
            TOTAL_PRICE: data.financial?.gross_total,
            COUNTRY: data.guest.country_id,
            FROM_DATE_STR: data.format.from_date,
            TO_DATE_STR: data.format.to_date,
            adult_child_offering: room.rateplan.selected_variation.adult_child_offering,
            ARRIVAL_TIME: data.arrival.description,
            origin: data.origin,
            channel_booking_nbr: data.channel_booking_nbr,
            is_direct: data.is_direct,
            NOTES: data.is_direct ? data.remark : null,
            DEPARTURE_TIME: room.departure_time,
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
                parent_room_identifier: room.parent_room_identifier,
                calendar_extra: room.calendar_extra ? JSON.parse(room.calendar_extra) : null,
            },
            BASE_STATUS_CODE: data.status?.code,
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
        NAME: data.NOTES !== '' && data.NOTES !== null
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

exports.addCleaningTasks = addCleaningTasks;
exports.addRoomForCleaning = addRoomForCleaning;
exports.bookingStatus = bookingStatus;
exports.buildSplitIndex = buildSplitIndex;
exports.calculateDaysBetweenDates = calculateDaysBetweenDates;
exports.calendar_dates = calendar_dates;
exports.cleanRoom = cleanRoom;
exports.compareTime = compareTime;
exports.convertDateToCustomFormat = convertDateToCustomFormat;
exports.convertDateToTime = convertDateToTime;
exports.createDateWithOffsetAndHour = createDateWithOffsetAndHour;
exports.dateDifference = dateDifference;
exports.dateToFormattedString = dateToFormattedString;
exports.extras = extras;
exports.formatName = formatName;
exports.getPrivateNote = getPrivateNote;
exports.getReleaseHoursString = getReleaseHoursString;
exports.getRoomStatus = getRoomStatus;
exports.getSplitRole = getSplitRole;
exports.groupEntryTablesResult = groupEntryTablesResult;
exports.isBlockUnit = isBlockUnit;
exports.transformNewBLockedRooms = transformNewBLockedRooms;
exports.transformNewBooking = transformNewBooking;
