import { h as hooks } from './moment-ab846cee.js';
import { j as dateDifference, i as isBlockUnit } from './utils-646592bd.js';
import { a as axios } from './axios-aa1335b8.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as createStore } from './index-f100e9d2.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';

const initialState = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
    disabled_cells: new Map(),
    cleaningTasks: new Map(),
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = createStore(initialState);
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
async function getMyBookings(months) {
    if (!months?.length) {
        return [];
    }
    const stayStatus = await getStayStatus();
    const stayStatusLookup = new Map(stayStatus.map(item => [item.code, item.value]));
    const bookingsByPool = new Map();
    for (const month of months) {
        for (const day of month.days) {
            for (const room of day.room_types) {
                assignBooking(room.physicalrooms, bookingsByPool, stayStatusLookup);
            }
        }
    }
    return Array.from(bookingsByPool.values());
}
function assignBooking(physicalRoom, bookingsByPool, stayStatusLookup) {
    if (!physicalRoom?.length) {
        return;
    }
    for (const room of physicalRoom) {
        const calendarCells = room?.calendar_cell ? Object.values(room.calendar_cell) : [];
        for (const cell of calendarCells) {
            if (cell?.Is_Available === false) {
                addOrUpdateBooking(cell, bookingsByPool, stayStatusLookup);
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
    if ((firstName === null && lastName === null) || !firstName)
        return '';
    if (!!lastName) {
        return `${firstName ?? ''} ${lastName ?? ''}`;
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
        return [];
    }
}
function renderBlock003Date(date, hour, minute) {
    const dt = new Date(date);
    dt.setHours(hour);
    dt.setMinutes(minute);
    return `${locales.entries.Lcz_BlockedTill} ${hooks(dt).format('MMM DD, HH:mm')}`;
}
function getDefaultData(cell, stayStatusLookup) {
    if (isBlockUnit(cell.STAY_STATUS_CODE)) {
        const blockedFromDate = hooks(cell.My_Block_Info.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.from_date : cell.DATE;
        const blockedToDate = hooks(cell.My_Block_Info.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.to_date : cell.DATE;
        return {
            ID: cell.POOL,
            NOTES: '',
            BALANCE: '',
            NAME: cell.My_Block_Info.NOTES !== '' && cell.My_Block_Info.NOTES !== null
                ? cell.My_Block_Info.NOTES
                : cell.STAY_STATUS_CODE === '003'
                    ? renderBlock003Date(cell.My_Block_Info.BLOCKED_TILL_DATE, cell.My_Block_Info.BLOCKED_TILL_HOUR, cell.My_Block_Info.BLOCKED_TILL_MINUTE)
                    : stayStatusLookup.get(cell.STAY_STATUS_CODE) || '',
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
    // if (cell.booking.booking_nbr.toString() === '00553011358') {
    //   console.log(cell);
    // }
    try {
        const bookingFromDate = hooks(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE;
        const bookingToDate = hooks(cell.room.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.to_date : cell.DATE;
        const mainGuest = cell.room.sharing_persons?.find(p => p.is_main);
        return {
            ID: cell.POOL,
            FROM_DATE: bookingFromDate,
            TO_DATE: bookingToDate,
            NO_OF_DAYS: dateDifference(bookingFromDate, bookingToDate),
            STATUS: bookingStatus[cell.booking?.status.code],
            // NAME: formatName(mainGuest?.first_name, mainGuest?.last_name),
            NAME: formatName(mainGuest?.first_name, mainGuest?.last_name) || formatName(cell?.booking.guest?.first_name, cell?.booking?.guest?.last_name),
            IDENTIFIER: cell.room.identifier,
            PR_ID: cell.pr_id,
            POOL: cell.POOL,
            BOOKING_NUMBER: cell.booking.booking_nbr,
            NOTES: cell.booking.is_direct ? cell.booking.remark : null,
            PRIVATE_NOTE: getPrivateNote(cell.booking.extras),
            is_direct: cell.booking.is_direct,
            BALANCE: cell.booking.financial?.due_amount,
            channel_booking_nbr: cell.booking.channel_booking_nbr,
            ARRIVAL_TIME: cell.booking.arrival.description,
            defaultDates: {
                from_date: cell.room.from_date,
                to_date: cell.room.to_date,
            },
            DEPARTURE_TIME: cell.room.departure_time,
            ///from here
            ENTRY_DATE: cell.booking.booked_on.date,
            PHONE_PREFIX: cell.booking.guest.country_phone_prefix,
            IS_EDITABLE: cell.booking.is_editable,
            ARRIVAL: cell.booking.arrival,
            PHONE: cell.booking.guest.mobile_without_prefix ?? '',
            RATE: cell.room.total,
            RATE_PLAN: cell.room.rateplan.name,
            SPLIT_BOOKING: false,
            RATE_PLAN_ID: cell.room.rateplan.id,
            RATE_TYPE: cell.room?.roomtype?.id,
            ADULTS_COUNT: cell.room.occupancy.adult_nbr,
            CHILDREN_COUNT: cell.room.occupancy.children_nbr,
            origin: cell.booking.origin,
            GUEST: cell.booking.guest,
            ROOMS: cell.booking.rooms,
            cancelation: cell.room.rateplan.cancelation,
            guarantee: cell.room.rateplan.guarantee,
            TOTAL_PRICE: cell.booking.financial?.gross_total,
            COUNTRY: cell.booking.guest.country_id,
            FROM_DATE_STR: cell.booking.format.from_date,
            TO_DATE_STR: cell.booking.format.to_date,
            adult_child_offering: cell.room.rateplan.selected_variation.adult_child_offering,
            SOURCE: { code: cell.booking.source.code, description: cell.booking.source.description, tag: cell.booking.source.tag },
            //TODO:Implement checkin-checkout
            CHECKIN: cell.room.in_out?.code === '001',
            CHECKOUT: cell.room.in_out?.code === '002',
            ROOM_INFO: {
                occupancy: cell.room.occupancy,
                sharing_persons: cell.room.sharing_persons,
                unit: cell.room.unit,
                in_out: cell.room.in_out,
                calendar_extra: cell.room.calendar_extra ? JSON.parse(cell.room.calendar_extra) : null,
                parent_room_identifier: cell.room.parent_room_identifier,
            },
            BASE_STATUS_CODE: cell.booking.status?.code,
        };
    }
    catch (error) {
        console.error(`Something went wrong in cell`);
        console.log(cell);
        console.error(error);
    }
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
    if (calendar_data.checkin_enabled) {
        if (in_out?.code === '001') {
            return bookingStatus['000'];
        }
        else if (in_out?.code === '002') {
            if (!calendar_data.is_automatic_check_in_out) {
                const now = hooks();
                const toDate = hooks(to_date, 'YYYY-MM-DD');
                const fromDate = hooks(from_date, 'YYYY-MM-DD');
                const isNowAfterOrSameAsHotelHour = compareTime(now.toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour));
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
        const now = hooks();
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
        const toDate = hooks(to_date, 'YYYY-MM-DD');
        const fromDate = hooks(from_date, 'YYYY-MM-DD');
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
function addOrUpdateBooking(cell, bookingsByPool, stayStatusLookup) {
    if (!cell?.POOL || bookingsByPool.has(cell.POOL)) {
        return;
    }
    const newData = getDefaultData(cell, stayStatusLookup);
    if (newData) {
        bookingsByPool.set(cell.POOL, newData);
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
        const bookingFromDate = hooks(room.from_date, 'YYYY-MM-DD').isAfter(hooks(calendar_dates.fromDate, 'YYYY-MM-DD')) ? room.from_date : calendar_dates.fromDate;
        const bookingToDate = room.to_date;
        if (hooks(room.to_date, 'YYYY-MM-DD').isBefore(hooks(calendar_dates.fromDate, 'YYYY-MM-DD'))) {
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
    const startDate = hooks(from_date, 'YYYY-MM-DD').startOf('day');
    const endDate = hooks(to_date, 'YYYY-MM-DD').endOf('day');
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

export { calculateDaysBetweenDates as a, buildSplitIndex as b, calendar_dates as c, compareTime as d, createDateWithOffsetAndHour as e, addCleaningTasks as f, getSplitRole as g, formatName as h, getRoomStatus as i, cleanRoom as j, addRoomForCleaning as k, transformNewBLockedRooms as l, bookingStatus as m, getPrivateNote as n, getMyBookings as o, transformNewBooking as t };

//# sourceMappingURL=booking-e062a4bf.js.map