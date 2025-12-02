import { h as hooks } from './moment.js';
import { z } from './index3.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { a as axios } from './axios.js';
import { c as createStore } from './index2.js';

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

function convertDateToCustomFormat(dayWithWeekday, monthWithYear, format = 'D_M_YYYY') {
    const dateStr = `${dayWithWeekday.split(' ')[1]} ${monthWithYear}`;
    const date = hooks(dateStr, 'DD MMM YYYY');
    if (!date.isValid()) {
        throw new Error('Invalid Date');
    }
    return date.format(format);
}
function convertDateToTime(dayWithWeekday, monthWithYear) {
    const date = hooks(dayWithWeekday + ' ' + monthWithYear, 'ddd DD MMM YYYY').toDate();
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
 * Determines whether the currently selected room's rateplan is valid for the
 * chosen room type. If it is **not** valid, this returns the list of
 * alternative (active) rateplans that the user can switch to.
 *
 * #### Return contract
 * - **`null`** → No UI action required. Either:
 *   - no `roomTypeId`/`roomTypes`/room type found, or
 *   - the room already has a compatible active rateplan for this room type.
 * - **`SelectOption[]`** → The current rateplan doesn't exist (or isn't active)
 *   for the chosen room type. Render these options so the user can pick one.
 *
 * #### Matching rules
 * A rateplan is considered compatible if **all** of the following match:
 * - `meal_plan.code`
 * - `custom_text`
 * - `is_active === true`
 * - `is_non_refundable` (boolean equality)
 *
 * #### Edge cases handled
 * - Missing/invalid `roomTypeId` or `roomTypes`
 * - rateplan_id type not found or has no `rateplans`
 * - Partial/undefined fields on `rateplan` (safe optional access)
 * - Localized "Non-Refundable" label missing (falls back to literal)
 * - Filters out inactive rateplans and guarantees unique options by `id`
 *
 * @param params.rateplan_id       The room currently being edited/validated.
 * @param params.roomTypes  All property room types (may be null/undefined).
 * @param params.roomTypeId The selected room type id (may be null/undefined).
 *
 * @returns `null` if no choices are needed; otherwise a list of choices.
 */
function checkMealPlan({ rateplan_id, roomTypes, roomTypeId }) {
    if (!roomTypeId || !Array.isArray(roomTypes) || roomTypes.length === 0) {
        return null;
    }
    const roomtype = roomTypes.find(rt => rt?.id === roomTypeId);
    if (!roomtype || !Array.isArray(roomtype.rateplans) || roomtype.rateplans.length === 0) {
        return null;
    }
    const rateplan = (() => {
        for (const rt of roomTypes) {
            const ratePlan = rt.rateplans.find(rp => rp.id.toString() === rateplan_id.toString());
            if (ratePlan) {
                return ratePlan;
            }
        }
        return null;
    })();
    const current = {
        mealPlanCode: rateplan?.meal_plan?.code ?? null,
        customText: rateplan?.custom_text ?? null,
        isNonRefundable: Boolean(rateplan?.is_non_refundable),
    };
    const hasCompatibleActiveRateplan = roomtype.rateplans.some(rp => Boolean(rp?.is_active) &&
        (rp?.meal_plan?.code ?? null) === current.mealPlanCode &&
        (rp?.custom_text ?? null) === current.customText &&
        Boolean(rp?.is_non_refundable) === current.isNonRefundable);
    if (hasCompatibleActiveRateplan) {
        const rp = roomtype.rateplans.find(rp => Boolean(rp?.is_active) &&
            (rp?.meal_plan?.code ?? null) === current.mealPlanCode &&
            (rp?.custom_text ?? null) === current.customText &&
            Boolean(rp?.is_non_refundable) === current.isNonRefundable);
        return {
            custom_text: rp.custom_text,
            text: rp.short_name,
            value: rp.id.toString(),
        };
    }
    const nonRefundableLabel = locales?.entries?.Lcz_NonRefundable ?? 'Non-Refundable';
    const seen = new Set();
    const options = [];
    for (const rp of roomtype.rateplans) {
        if (!rp || !rp.is_active || seen.has(rp.id))
            continue;
        seen.add(rp.id);
        const suffix = rp.is_non_refundable ? ` ${nonRefundableLabel}` : '';
        const text = `${rp.short_name ?? ''}${suffix}`.trim();
        if (!text)
            continue;
        options.push({
            text,
            custom_text: rp.custom_text,
            value: String(rp.id),
        });
    }
    return options;
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
        'OUTSTANDING-BALANCE': { id: 10, clsName: 'OUTSTANDING_BALANCE' },
        'TEMP-EVENT': { id: 11, clsName: 'PENDING_CONFIRMATION' },
    };
    // const statusId = (() => {
    //   let d = {};
    //   legendData.forEach(element => {
    //     d[toStatusCode(element.name)] = { id: Number(element?.id), clsName: normalizeStatus(element.name) };
    //   });
    //   return d;
    // })();
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
    const dateObj = hooks(startDate, 'D_M_YYYY');
    dateObj.add(numberOfDays, 'days');
    return dateObj.format('YYYY-MM-DD');
}
function convertDMYToISO(date) {
    const dateObj = hooks(date, 'D_M_YYYY');
    return dateObj.format('YYYY-MM-DD');
}
function addTwoMonthToDate(date) {
    return hooks(date).add(2, 'months').format('YYYY-MM-DD');
}
function formatDate(dateString, option = 'DD MMM YYYY') {
    const formattedDate = hooks(dateString, option).format('ddd, DD MMM YYYY');
    return formattedDate;
}
function getNextDay(date) {
    return hooks(date).add(1, 'days').format('YYYY-MM-DD');
}
function convertDatePrice(date) {
    return hooks(date, 'YYYY-MM-DD').format('DD/MM ddd');
}
function getDaysArray(date1, date2) {
    let dates = [];
    let start = hooks.min(hooks(date1).add(1, 'days'), hooks(date2));
    let end = hooks.max(hooks(date1), hooks(date2));
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
    const parsedEmailResults = z.string().email().safeParse(email);
    return !parsedEmailResults.success;
}
function formatAmount(currency, amount) {
    return currency + ' ' + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
/**
 * Determines whether the given user has privileged (global or elevated) access.
 *
 * Privileged users are typically system administrators or MPO users
 * who can access data across all properties rather than being restricted
 * to a specific property.
 *
 * @param userTypeCode - Numeric code representing the user's role.
 *   - `1` → Super Admin
 *   - `4` → MPO (Multi-Property Operator)
 *
 * @returns `true` if the user has elevated/global access, otherwise `false`.
 *
 * @example
 * ```ts
 * isPrivilegedUser(1); // true (Super Admin)
 * isPrivilegedUser(4); // true (MPO)
 * isPrivilegedUser(2); // false
 * ```
 */
const isPrivilegedUser = (userTypeCode) => {
    // User type codes that have global or elevated access
    const privilegedUserTypes = [1, 4]; // 4 = MPO, 1 = Super Admin
    return privilegedUserTypes.includes(userTypeCode);
};
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
            return sessionStorage.setItem('backend_anchor', JSON.stringify({ ...anchor, ...data }));
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
            return sessionStorage.setItem('backend_anchor', JSON.stringify({ ...data }));
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
    if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        return false;
    }
    if (isCheckedIn) {
        return false;
    }
    const now = hooks();
    if ((hooks().isSameOrAfter(new Date(from_date), 'days') && hooks().isBefore(new Date(to_date), 'days')) ||
        (hooks().isSame(new Date(to_date), 'days') &&
            !compareTime(now.toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour)))) {
        return true;
    }
    return false;
}
/**
 * Downloads a file from a given URL.
 *
 * @param url - The URL of the file to download.
 * @param filename - The name of the file to save. If not provided, the URL will be used as the filename.
 */
function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
/**
 * Converts an integer value into a float by shifting the decimal point.
 *
 * @param value - The integer value to convert (e.g. 29016).
 * @param decimalPlaces - The number of decimal places to shift (e.g. 2 results in 290.16).
 * @returns The converted floating point number.
 */
function toFloat(value, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return value / factor;
}
async function sleep(time = 200) {
    return new Promise(r => setTimeout(() => r(null), time));
}
function handleBodyOverflow(open) {
    const attr = 'data-ir-scroll-locked';
    let counter = document.body.getAttribute(attr);
    if (!document.getElementById('scroll-lock-style')) {
        const style = document.createElement('style');
        style.id = 'scroll-lock-style';
        style.innerHTML = `
      body:dir(ltr)[data-ir-scroll-locked] {
        overflow: hidden !important;
        overscroll-behavior: contain;
        position: relative !important;
        padding-left: 0px;
        padding-top: 0px;
        padding-right: 0px;
        margin-left: 0;
        margin-top: 0;
        margin-right: 15px !important;
      }
      body:dir(rtl)[data-ir-scroll-locked] {
        overflow: hidden !important;
        overscroll-behavior: contain;
        position: relative !important;
        padding-left: 0px;
        padding-top: 0px;
        padding-right: 0px;
        margin-right: 0;
        margin-top: 0;
        margin-left: 15px !important;
      }
    `;
        document.head.appendChild(style);
    }
    if (!counter) {
        document.body.setAttribute(attr, '1');
    }
    else {
        const newCount = open ? Number(counter) + 1 : Number(counter) - 1;
        document.body.setAttribute(attr, newCount.toString());
        if (newCount <= 0) {
            document.body.removeAttribute(attr);
        }
    }
}
/**
 * Checks whether a given date falls on a weekend (Saturday or Sunday).
 *
 * @param date   - The date to check, as a string (parsed using the given `format`).
 * @param format - Moment.js format used to parse `date`. Defaults to `'YYYY-MM-DD'`.
 * @returns `true` if the parsed date is a Saturday or Sunday, otherwise `false`.
 */
function isWeekend(date, format = 'YYYY-MM-DD') {
    const d = hooks(date, format);
    return d.day() === 0 || d.day() === 6;
}

export { getRoomStatus as A, cleanRoom as B, addRoomForCleaning as C, transformNewBLockedRooms as D, bookingStatus as E, getPrivateNote as F, getNextDay as G, addTwoMonthToDate as H, convertDMYToISO as I, computeEndDate as J, toFloat as K, renderTime as L, getDaysArray as M, convertDatePrice as N, formatDate as O, checkUserAuthState as P, manageAnchorSession as Q, isPrivilegedUser as R, sleep as S, convertDateToTime as a, calculateDaysBetweenDates as b, convertDateToCustomFormat as c, dateToFormattedString as d, extras as e, formatAmount as f, getMyBookings as g, handleBodyOverflow as h, getReleaseHoursString as i, isBlockUnit as j, calendar_dates as k, checkMealPlan as l, buildSplitIndex as m, getSplitRole as n, findCountry as o, canCheckIn as p, compareTime as q, createDateWithOffsetAndHour as r, downloadFile as s, transformNewBooking as t, isWeekend as u, validateEmail as v, dateDifference as w, formatLegendColors as x, addCleaningTasks as y, formatName as z };

//# sourceMappingURL=utils.js.map