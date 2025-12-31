import { a as axios } from './axios-aa1335b8.js';
import { z, u as unionType, n as numberType, s as stringType, o as objectType, b as booleanType, c as arrayType, e as enumType, d as custom, f as nullType, g as anyType } from './index-1e1f097b.js';
import { b as dateDifference, c as isBlockUnit, e as extras, j as convertDateToCustomFormat, k as convertDateToTime, d as dateToFormattedString } from './utils-bfc706ab.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as createStore } from './index-f100e9d2.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';

const initialState$1 = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
    disabled_cells: new Map(),
    cleaningTasks: new Map(),
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = createStore(initialState$1);
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

const bookedByGuestBaseData = {
    id: -1,
    email: '',
    company: '',
    firstName: '',
    lastName: '',
    countryId: '',
    phone_prefix: '',
    mobile: '',
    selectedArrivalTime: '',
    emailGuest: false,
    note: '',
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
};
// -----------------------------------------------------------------------------
// Store Initialization
// -----------------------------------------------------------------------------
const initialState = {
    bookedByGuest: bookedByGuestBaseData,
    bookedByGuestManuallyEdited: false,
    bookingDraft: {
        dates: {
            checkIn: hooks().startOf('day'),
            checkOut: hooks().add(1, 'day'),
        },
        occupancy: {
            adults: null,
            children: null,
        },
        source: null,
    },
    selects: {
        sources: [],
        ratePricingMode: [],
        arrivalTime: [],
        bedPreferences: [],
        countries: [],
    },
    checkout_guest: null,
    guest: null,
    tax_statement: null,
    roomTypes: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
    selectedPaymentMethod: null,
    isInFreeCancelationZone: false,
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 0,
        child_nbr: 0,
        infant_nbr: 0,
    },
    booking: null,
    fictus_booking_nbr: null,
    event_type: { type: 'PLUS_BOOKING' },
};
let { state: booking_store, onChange: onRoomTypeChange, reset } = createStore(initialState);
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
/**
 * Clears the booking store. Optionally rehydrates dropdowns and guest info when keeping the modal open.
 */
function resetBookingStore(closeModal) {
    const { bookingDraft, selects, bookedByGuest } = booking_store;
    reset();
    if (!closeModal) {
        setBookingDraft(bookingDraft);
        updateBookedByGuest(bookedByGuest);
        setBookingSelectOptions(selects);
    }
}
/**
 * Convenience helper that resets shared state while keeping the modal visible.
 */
function resetAvailability() {
    resetBookingStore(false);
}
/**
 * Updates booking draft pieces (dates, occupancy, source) while keeping unrelated keys intact.
 */
function setBookingDraft(params) {
    booking_store.bookingDraft = {
        ...booking_store.bookingDraft,
        ...params,
        dates: {
            ...booking_store.bookingDraft.dates,
            ...params.dates,
        },
        occupancy: {
            ...booking_store.bookingDraft.occupancy,
            ...params.occupancy,
        },
    };
}
/**
 * Updates dropdown lookup datasets (sources, bed preferences, etc.).
 */
function setBookingSelectOptions(params) {
    booking_store.selects = {
        ...booking_store.selects,
        ...params,
    };
}
/**
 * Ensures the selected variation still exists on the server payload.
 */
function resolveSelectedVariation(variations, selected_variation) {
    if (!variations) {
        return null;
    }
    if (!selected_variation || booking_store.resetBooking) {
        return variations[0];
    }
    return variations?.find(v => v.adult_nbr === selected_variation.adult_nbr && v.child_nbr === selected_variation.child_nbr) ?? null;
}
/**
 * Keeps `ratePlanSelections` in sync when backend refreshes available room types.
 */
onRoomTypeChange('roomTypes', (newValue) => {
    const currentSelections = booking_store.ratePlanSelections;
    const ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (!roomType.is_active)
            return;
        ratePlanSelections[roomType.id] = ratePlanSelections[roomType.id] || {};
        roomType.rateplans.forEach(ratePlan => {
            if (!ratePlan.is_active || !ratePlan?.variations?.length)
                return;
            const currentRatePlanSelection = currentSelections[roomType.id]?.[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? {
                        ...currentRatePlanSelection,
                        ratePlan,
                        selected_variation: resolveSelectedVariation(ratePlan.variations, currentRatePlanSelection.selected_variation) ?? null,
                        visibleInventory: roomType.inventory,
                        reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved,
                        checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations,
                        checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection,
                        checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection,
                        guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName,
                        roomtype: {
                            ...currentRatePlanSelection.roomtype,
                        },
                    }
                    : {
                        reserved: 0,
                        rp_amount: 0,
                        view_mode: '001',
                        guest: null,
                        visibleInventory: roomType.inventory,
                        selected_variation: ratePlan?.variations[0] ?? null,
                        ratePlan,
                        guestName: [],
                        is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
                        roomtype: {
                            ...roomType,
                            physicalrooms: null,
                            rateplans: null,
                            availabilities: null,
                        },
                        checkoutVariations: [],
                        checkoutBedSelection: [],
                        checkoutSmokingSelection: [],
                    };
        });
    });
    booking_store.ratePlanSelections = ratePlanSelections;
    booking_store.resetBooking = false;
});
// -----------------------------------------------------------------------------
// State Mutators
// -----------------------------------------------------------------------------
/**
 * Partially updates the booked-by guest snapshot, preserving other properties.
 */
function updateBookedByGuest(params) {
    booking_store.bookedByGuest = {
        ...booking_store.bookedByGuest,
        ...params,
    };
}
/**
 * Updates the guest list assigned to a specific rate plan selection.
 */
function updateRoomGuest({ guest, ratePlanId, roomTypeId, ratePlanSelection, }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [roomTypeId]: {
            ...booking_store.ratePlanSelections[roomTypeId],
            [ratePlanId]: { ...ratePlanSelection, guest: [...guest] },
        },
    };
}
/**
 * Recomputes remaining visible inventory for a room type whenever selections change.
 */
function updateInventory(roomTypeId) {
    const roomTypeSelection = booking_store.ratePlanSelections[roomTypeId];
    if (!roomTypeSelection) {
        return;
    }
    const roomTypeData = booking_store.roomTypes.find(rt => rt.id === roomTypeId);
    if (!roomTypeData) {
        return;
    }
    const totalReserved = Object.values(roomTypeSelection).reduce((acc, ratePlan) => acc + ratePlan.reserved, 0);
    let hasChanges = false;
    const newRatePlans = Object.entries(roomTypeSelection).reduce((acc, [ratePlanId, ratePlan]) => {
        const roomsExcludingCurrent = totalReserved - ratePlan.reserved;
        const availableRooms = Math.max(roomTypeData.inventory - roomsExcludingCurrent, 0);
        if (ratePlan.visibleInventory !== availableRooms) {
            hasChanges = true;
            acc[ratePlanId] = { ...ratePlan, visibleInventory: availableRooms };
        }
        else {
            acc[ratePlanId] = ratePlan;
        }
        return acc;
    }, {});
    if (hasChanges) {
        booking_store.ratePlanSelections = {
            ...booking_store.ratePlanSelections,
            [roomTypeId]: newRatePlans,
        };
    }
}
/**
 * Returns true when any room type currently has at least one reservation selected.
 */
function hasAtLeastOneRoomSelected() {
    return Object.values(booking_store.ratePlanSelections).some(roomTypeSelection => Object.values(roomTypeSelection).some(ratePlan => ratePlan.reserved > 0));
}
/**
 * Applies a patch of values to the given room type & rate plan combination.
 */
function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                ...params,
            },
        },
    };
}
/**
 * Reserves a number of rooms for a rate plan and bootstraps its selection entry if needed.
 */
function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = booking_store.roomTypes?.find(r => r.id === roomTypeId);
    if (!roomType) {
        throw new Error('Invalid room type id');
    }
    const ratePlan = roomType.rateplans.find(r => r.id === ratePlanId);
    if (!ratePlan) {
        throw new Error('Invalid rate plan');
    }
    let newGuest = Array.from({ length: rooms }, () => ({ first_name: '', last_name: '', unit: null, bed_preference: null, infant_nbr: null }));
    if (guest) {
        newGuest = guest;
    }
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = {
            guestName: [],
            reserved: 0,
            view_mode: '001',
            rp_amount: 0,
            guest: newGuest,
            is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            roomtype: {
                id: roomType.id,
                name: roomType.name,
                physicalrooms: null,
                rateplans: null,
                availabilities: null,
                inventory: roomType.inventory,
                rate: roomType.rate,
                bedding_setup: roomType.bedding_setup,
                smoking_option: roomType.smoking_option,
                is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            },
        };
    }
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                reserved: rooms,
                checkoutVariations: [],
                guest: newGuest,
            },
        },
    };
    updateInventory(roomTypeId);
}
// -----------------------------------------------------------------------------
// Selectors & Derived Data
// -----------------------------------------------------------------------------
/**
 * Safely retrieves the selection payload for a specific room type/rate plan pair.
 */
function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return {
            reserved: 0,
            guest: null,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan: null,
            guestName: [],
            is_bed_configuration_enabled: false,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            rp_amount: 0,
            view_mode: '001',
            roomtype: null,
        };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
/**
 * Generic setter for store keys when more specific helpers are unnecessary.
 */
function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
/**
 * Returns the amount displayed for a rate plan, honoring overrides and nightly view.
 */
function getRatePlanDisplayAmount(rateplanSelection, totalNights) {
    if (rateplanSelection.is_amount_modified) {
        return rateplanSelection.view_mode === '001' ? rateplanSelection.rp_amount : rateplanSelection.rp_amount * totalNights;
    }
    return rateplanSelection.selected_variation?.discounted_gross_amount ?? 0;
}
/**
 * Aggregates the total booking price combining all selected rate plans.
 */
function getBookingTotalPrice() {
    const dateDiff = calculateDaysBetweenDates(booking_store.bookingDraft.dates.checkIn.format('YYYY-MM-DD'), booking_store.bookingDraft.dates.checkOut.format('YYYY-MM-DD'));
    let totalPrice = 0;
    Object.values(booking_store.ratePlanSelections).forEach(roomTypeSelection => {
        Object.values(roomTypeSelection).forEach(ratePlan => {
            if (ratePlan.reserved === 0) {
                return;
            }
            const rateAmount = getRatePlanDisplayAmount(ratePlan, dateDiff);
            totalPrice += rateAmount;
        });
    });
    return totalPrice;
}
/**
 * Counts the number of reserved rooms across all rate plans.
 */
function calculateTotalRooms() {
    return Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
        return (total +
            Object.values(value).reduce((innerTotal, ratePlan) => {
                if (ratePlan.reserved === 0) {
                    return innerTotal;
                }
                return innerTotal + ratePlan.reserved;
            }, 0));
    }, 0);
}
/**
 * Clears all reserved rooms and resets per-rate-plan metadata.
 */
function resetReserved() {
    const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
        const roomType = booking_store.roomTypes.find(rt => rt.id.toString() === roomTypeId.toString());
        acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
            const initialInventory = roomType?.inventory ?? ratePlan.roomtype?.inventory ?? ratePlan.visibleInventory;
            rpAcc[ratePlanId] = {
                ...ratePlan,
                reserved: 0,
                guest: null,
                guestName: [],
                checkoutVariations: [],
                checkoutBedSelection: [],
                checkoutSmokingSelection: [],
                visibleInventory: initialInventory ?? 0,
            };
            return rpAcc;
        }, {});
        return acc;
    }, {});
    booking_store.ratePlanSelections = { ...updatedSelections };
}
/**
 * Flags whether the booked-by guest fields were manually edited (for UX hints elsewhere).
 */
function setBookedByGuestManualEditState(isEdited) {
    booking_store.bookedByGuestManuallyEdited = isEdited;
}
/**
 * Returns a flat array of each reserved room along with its guest/context.
 */
function getReservedRooms() {
    const reservedRooms = [];
    Object.entries(booking_store.ratePlanSelections).forEach(([roomTypeId, ratePlans]) => {
        Object.entries(ratePlans).forEach(([ratePlanId, ratePlanSelection]) => {
            if (!ratePlanSelection.reserved) {
                return;
            }
            const guests = ratePlanSelection.guest ?? [];
            for (let reservationIndex = 0; reservationIndex < ratePlanSelection.reserved; reservationIndex++) {
                reservedRooms.push({
                    roomTypeId: Number(roomTypeId),
                    ratePlanId: Number(ratePlanId),
                    reservationIndex,
                    guest: guests[reservationIndex] ?? null,
                    ratePlanSelection,
                });
            }
        });
    });
    return reservedRooms;
}

const ZIEntrySchema = z.object({
    CODE_NAME: z.string(),
    CODE_VALUE_AR: z.string().nullable(),
    CODE_VALUE_DE: z.string().nullable(),
    CODE_VALUE_EL: z.string().nullable(),
    CODE_VALUE_EN: z.string().nullable(),
    CODE_VALUE_FR: z.string().nullable(),
    CODE_VALUE_HE: z.string().nullable(),
    CODE_VALUE_PL: z.string().nullable(),
    CODE_VALUE_RU: z.string().nullable(),
    CODE_VALUE_UA: z.string().nullable(),
    DISPLAY_ORDER: z.number().nullable(),
    ENTRY_DATE: z.string().nullable(),
    ENTRY_USER_ID: z.number().nullable(),
    INVARIANT_VALUE: z.string().nullable(),
    ISDELETEABLE: z.boolean(),
    ISDELETED: z.boolean(),
    ISSYSTEM: z.boolean(),
    ISUPDATEABLE: z.boolean(),
    ISVISIBLE: z.boolean(),
    NOTES: z.string().nullable(),
    OWNER_ID: z.number().nullable(),
    TBL_NAME: z.string(),
});
var AmenityType;
(function (AmenityType) {
    AmenityType["Room"] = "room";
})(AmenityType || (AmenityType = {}));
var Name;
(function (Name) {
    Name["Penthouse"] = "Penthouse";
    Name["PremiumSuites"] = "Premium Suites";
    Name["StandardRooms"] = "Standard Rooms";
})(Name || (Name = {}));
var Code;
(function (Code) {
    Code["Empty"] = "";
    Code["The001"] = "001";
    Code["The002"] = "002";
})(Code || (Code = {}));

const NumberOrStringSchema = unionType([numberType(), stringType().optional()]);
const CurrencySchema$1 = objectType({
    id: numberType(),
});
const CurrencyWithCodeSchema = CurrencySchema$1.extend({
    code: stringType().optional(),
});
const ItemSchema$1 = objectType({
    amount: numberType(),
    type: stringType().optional(),
    key: unionType([numberType(), stringType().optional()]),
    description: stringType().optional().optional().default(''),
});
const TargetSchema = objectType({
    code: stringType().optional(),
    description: stringType().optional(),
});
objectType({
    unit_id: numberType(),
    from_date: stringType().optional(),
    to_date: stringType().optional(),
});
objectType({
    starter: stringType().optional(),
});
objectType({
    booking_nbr: stringType().optional(),
    currency_id: numberType(),
    language: stringType().optional().optional(),
    rate_plan_id: numberType(),
    room_type_id: numberType(),
    property_id: numberType(),
    is_preserve_history: booleanType().optional(),
    room_identifier: stringType().optional().optional(),
});
objectType({
    booking_nbr: stringType().optional(),
    room_identifier: stringType().optional(),
    status: stringType().optional(),
});
objectType({
    booking_nbr: stringType().optional(),
    currency_id: numberType(),
    language: stringType().optional(),
});
const RestrictionSchema = objectType({
    room_type_id: NumberOrStringSchema,
    night: stringType().optional(),
});
objectType({
    is_closed: booleanType(),
    restrictions: arrayType(RestrictionSchema),
    operation_type: stringType().optional().optional(),
});
objectType({
    book_nbr: stringType().optional(),
    status: stringType().optional(),
});
const AdultChildCountSchema = objectType({
    adult: numberType(),
    child: numberType(),
});
objectType({
    from_date: stringType().optional(),
    to_date: stringType().optional(),
    propertyid: numberType(),
    adultChildCount: AdultChildCountSchema,
    language: stringType().optional(),
    room_type_ids: arrayType(numberType()),
    room_type_ids_to_update: arrayType(numberType()).optional(),
    rate_plan_ids: arrayType(numberType()).optional(),
    currency: CurrencyWithCodeSchema,
    is_in_agent_mode: booleanType().optional(),
    agent_id: NumberOrStringSchema.optional(),
});
const AvailabilityBracketSchema = objectType({
    from_date: stringType().optional(),
    to_date: stringType().optional(),
});
objectType({
    unit_id: numberType(),
    block_status_code: enumType(['003', '004', '002']).optional(),
    description: stringType().optional().optional(),
    property_id: numberType(),
    brackets: arrayType(AvailabilityBracketSchema),
});
objectType({
    property_id: numberType(),
    room_identifier: stringType().optional(),
    code: stringType().optional(),
});
objectType({
    service: custom(),
    booking_nbr: NumberOrStringSchema,
    is_remove: booleanType(),
});
/*Arrivals */
const GetRoomsToCheckInPropsSchema = objectType({
    property_id: stringType(),
    check_in_date: stringType(),
    page_index: numberType().default(1),
    page_size: numberType().default(10),
});
/*Departures */
const GetRoomsToCheckOutPropsSchema = objectType({
    property_id: stringType(),
    check_out_date: stringType(),
    page_index: numberType().default(1),
    page_size: numberType().default(10),
});
/* INVOICE TYPES */
const GetBookingInvoiceInfoPropsSchema = objectType({
    booking_nbr: stringType().optional(),
});
const VoidInvoicePropsSchema = objectType({
    invoice_nbr: stringType().optional(),
    reason: stringType().optional(),
    property_id: numberType(),
});
const InvoiceSchema$1 = objectType({
    booking_nbr: stringType().optional(),
    currency: CurrencySchema$1,
    target: TargetSchema,
    Date: stringType().optional(),
    nbr: stringType().optional(),
    remark: stringType().optional(),
    billed_to_name: stringType().optional(),
    billed_to_tax: stringType().optional(),
    items: arrayType(ItemSchema$1),
});
const IssueInvoicePropsSchema = objectType({
    is_proforma: booleanType().optional().default(false),
    property_id: numberType(),
    invoice: InvoiceSchema$1,
});
const PrintInvoicePropsSchema = objectType({
    invoice_nbr: stringType().optional(),
    property_id: numberType(),
    mode: enumType(['invoice', 'creditnote', 'proforma']),
    invoice: InvoiceSchema$1.optional(),
});
const ExposedGuestSchema = objectType({
    address: nullType(),
    alternative_email: nullType(),
    cci: nullType(),
    city: nullType(),
    country: nullType(),
    country_id: numberType(),
    country_phone_prefix: stringType(),
    dob: nullType(),
    email: stringType(),
    first_name: stringType(),
    id: numberType(),
    id_info: nullType(),
    is_main: booleanType(),
    last_name: stringType(),
    mobile: stringType(),
    mobile_without_prefix: stringType(),
    nbr_confirmed_bookings: numberType(),
    notes: nullType(),
    password: nullType(),
    subscribe_to_news_letter: nullType(),
});
arrayType(ExposedGuestSchema);

const CurrencySchema = objectType({
    code: stringType(),
    id: numberType(),
    symbol: stringType(),
});
const StatusSchema = objectType({
    code: stringType(),
    description: anyType(),
});
const ItemSchema = objectType({
    amount: numberType(),
    booking_nbr: stringType(),
    currency: CurrencySchema,
    description: anyType(),
    invoice_nbr: stringType(),
    is_invoiceable: booleanType(),
    key: numberType(),
    status: StatusSchema,
    system_id: numberType(),
    type: stringType(),
});
const CreditNoteSchema = objectType({
    date: stringType(),
    nbr: stringType(),
    reason: stringType(),
    system_id: stringType().nullable(),
    user: stringType().nullable(),
});
const InvoiceSchema = objectType({
    billed_to_name: anyType(),
    billed_to_tax: anyType(),
    booking_nbr: stringType(),
    credit_note: CreditNoteSchema.nullable(),
    currency: CurrencySchema,
    date: stringType(),
    items: arrayType(ItemSchema),
    nbr: stringType(),
    pdf_url: anyType(),
    remark: stringType(),
    status: StatusSchema,
    system_id: numberType(),
    target: anyType(),
    user: stringType().nullable(),
    total_amount: anyType(),
});
const InvoiceableItemReasonSchema = objectType({
    code: enumType(['001', '002', '003']),
    description: stringType().nullable(),
});
const InvoiceableItemSchema = objectType({
    amount: numberType(),
    booking_nbr: stringType(),
    currency: CurrencySchema,
    invoice_nbr: stringType().nullable(),
    is_invoiceable: booleanType(),
    key: numberType(),
    status: anyType(),
    system_id: anyType(),
    reason: InvoiceableItemReasonSchema.nullable(),
    type: enumType(['BSA', 'BSP', 'BSE', 'PAYMENT']),
});
const BookingInvoiceInfoSchema = objectType({
    invoiceable_items: arrayType(InvoiceableItemSchema),
    invoices: arrayType(InvoiceSchema).nullable(),
});

// import { ExposedApplicablePolicy, ExposedBookingEvent, HandleExposedRoomGuestsRequest } from '../../models/booking.dto';
class BookingService {
    async unBlockUnitByPeriod(props) {
        const { data } = await axios.post(`/Unblock_Unit_By_Period`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getNextValue(props) {
        const { data } = await axios.post(`/Get_Next_Value`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getExposedApplicablePolicies(props) {
        const { data } = await axios.post(`/Get_Exposed_Applicable_Policies`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ?? [];
    }
    async handleExposedRoomInOut(props) {
        const { data } = await axios.post(`/Handle_Exposed_Room_InOut`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async GetPenaltyStatement(params) {
        const { data } = await axios.post('/Get_Penalty_Statement', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setExposedRestrictionPerRoomType(params) {
        const { data } = await axios.post(`https://gateway.igloorooms.com/IRBE/Set_Exposed_Restriction_Per_Room_Type`, {
            operation_type: params.operation_type ?? 'close_open',
            ...params,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getLov() {
        const { data } = await axios.post(`/Get_LOV`, {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async sendBookingConfirmationEmail(booking_nbr, language) {
        const { data } = await axios.post(`/Send_Booking_Confirmation_Email`, {
            booking_nbr,
            language,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getCalendarData(propertyid, from_date, to_date) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Calendar`, {
                propertyid,
                from_date,
                to_date,
                extras,
                include_sales_rate_plans: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const months = data.My_Result.months;
            const customMonths = [];
            const myBooking = await getMyBookings(months);
            const days = months
                .map(month => {
                customMonths.push({
                    daysCount: month.days.length,
                    monthName: month.description,
                });
                return month.days.map(day => {
                    if (day['value'] === '2025-05-30') {
                        console.log(day);
                    }
                    return {
                        day: convertDateToCustomFormat(day.description, month.description),
                        value: day.value,
                        currentDate: convertDateToTime(day.description, month.description),
                        dayDisplayName: day.description,
                        rate: day.room_types,
                        unassigned_units_nbr: day.unassigned_units_nbr,
                        occupancy: day.occupancy,
                    };
                });
            })
                .flat();
            return Promise.resolve({
                ExceptionCode: null,
                ExceptionMsg: '',
                My_Params_Get_Rooming_Data: {
                    AC_ID: propertyid,
                    FROM: data.My_Params_Get_Exposed_Calendar.from_date,
                    TO: data.My_Params_Get_Exposed_Calendar.to_date,
                },
                days,
                months: customMonths,
                myBookings: myBooking,
                defaultMonths: months,
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async handleExposedRoomGuests(props) {
        const { data } = await axios.post('/Handle_Exposed_Room_Guests', props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async fetchGuest(email) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Guest`, { email });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async changeExposedBookingStatus(props) {
        try {
            const { data } = await axios.post(`/Change_Exposed_Booking_Status`, props);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async fetchPMSLogs(booking_nbr) {
        try {
            const { data } = await axios.post(`/Get_Exposed_PMS_Logs`, { booking_nbr });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getExposedBookingEvents(booking_nbr) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Booking_Events`, { booking_nbr });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async editExposedGuest(guest, book_nbr) {
        try {
            const { data } = await axios.post(`/Edit_Exposed_Guest`, { ...guest, book_nbr });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getBookingAvailability(props) {
        try {
            const { adultChildCount, currency, ...rest } = props;
            const { data } = await axios.post(`/Check_Availability`, {
                ...rest,
                adult_nbr: adultChildCount.adult,
                child_nbr: adultChildCount.child,
                currency_ref: currency.code,
                skip_getting_assignable_units: !calendar_data.is_frontdesk_enabled,
                is_backend: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = this.modifyRateplans(this.sortRoomTypes(data['My_Result'], { adult_nbr: Number(adultChildCount.adult), child_nbr: Number(adultChildCount.child) }));
            booking_store.roomTypes = [...results];
            booking_store.tax_statement = { message: data.My_Result.tax_statement };
            return results;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    sortRoomTypes(roomTypes, userCriteria) {
        return roomTypes.sort((a, b) => {
            // Priority to available rooms
            if (a.is_available_to_book && !b.is_available_to_book)
                return -1;
            if (!a.is_available_to_book && b.is_available_to_book)
                return 1;
            // Check for variations where is_calculated is true and amount is 0 or null
            const zeroCalculatedA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
            const zeroCalculatedB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
            // Prioritize these types to be before inventory 0 but after all available ones
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations based on user criteria
            const matchA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            const matchB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation amount
            const maxVariationA = Math.max(...a.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
            const maxVariationB = Math.max(...b.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
            if (maxVariationA < maxVariationB)
                return -1;
            if (maxVariationA > maxVariationB)
                return 1;
            return 0;
        });
    }
    modifyRateplans(roomTypes) {
        return roomTypes?.map(rt => ({ ...rt, rateplans: rt.rateplans?.map(rp => ({ ...rp, variations: this.sortVariations(rp?.variations ?? []) })) }));
    }
    sortVariations(variations) {
        return variations.sort((a, b) => {
            if (a.adult_nbr !== b.adult_nbr) {
                return b.adult_nbr - a.adult_nbr;
            }
            return b.child_nbr - a.child_nbr;
        });
    }
    async getCountries(language) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Countries`, {
                language,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getSetupEntriesByTableName(TBL_NAME) {
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME`, {
            TBL_NAME,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result ?? [];
        return res;
    }
    async fetchSetupEntries() {
        try {
            const data = await this.getSetupEntriesByTableNameMulti(['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE']);
            const { arrival_time, rate_pricing_mode, bed_preference_type } = this.groupEntryTablesResult(data);
            return {
                arrivalTime: arrival_time,
                ratePricingMode: rate_pricing_mode,
                bedPreferenceType: bed_preference_type,
            };
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doBookingExtraService({ booking_nbr, service, is_remove }) {
        const { data } = await axios.post(`/Do_Booking_Extra_Service`, { ...service, booking_nbr, is_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    groupEntryTablesResult(entries) {
        let result = {};
        for (const entry of entries) {
            const key = entry.TBL_NAME.substring(1, entry.TBL_NAME.length).toLowerCase();
            if (!result[key]) {
                result[key] = [];
            }
            result[key] = [...result[key], entry];
        }
        return result;
    }
    async getSetupEntriesByTableNameMulti(entries) {
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getBlockedInfo() {
        return await this.getSetupEntriesByTableNameMulti(['_CALENDAR_BLOCKED_TILL']);
    }
    async getUserDefaultCountry() {
        try {
            let payload = { IP: '' };
            if (calendar_data?.property?.id) {
                payload = { ...payload, id: calendar_data.property.id };
            }
            const { data } = await axios.post(`/Get_Country_By_IP`, payload);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async blockUnit(params) {
        try {
            const { data } = await axios.post(`/Block_Exposed_Unit`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data['My_Params_Block_Exposed_Unit'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async blockAvailabilityForBrackets(params) {
        try {
            const { data } = await axios.post(`/Block_Availability_For_Brackets`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async setDepartureTime(params) {
        const { data } = await axios.post('/Set_Departure_Time', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getUserInfo(email) {
        try {
            const { data } = await axios.post(`/GET_EXPOSED_GUEST`, {
                email,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedBooking(booking_nbr, language, withExtras = true) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Booking`, {
                booking_nbr,
                language,
                extras: withExtras ? extras : null,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
        }
    }
    generateDays(from_date, to_date, amount) {
        const startDate = new Date(from_date);
        const endDate = new Date(to_date);
        const days = [];
        while (startDate < endDate) {
            days.push({
                date: startDate.toISOString().split('T')[0],
                amount: amount,
                cost: null,
            });
            startDate.setDate(startDate.getDate() + 1);
        }
        return days;
    }
    calculateTotalRate(rate, totalNights, isRateModified, preference) {
        if (isRateModified && preference === 2) {
            return +rate;
        }
        return +rate / +totalNights;
    }
    async fetchExposedGuest(email, property_id) {
        try {
            const { data } = await axios.post(`/Fetch_Exposed_Guests`, {
                email,
                property_id,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async fetchExposedBookings(booking_nbr, property_id, from_date, to_date) {
        try {
            const { data } = await axios.post(`/Fetch_Exposed_Bookings`, {
                booking_nbr,
                property_id,
                from_date,
                to_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getPCICardInfoURL(BOOK_NBR) {
        try {
            const { data } = await axios.post(`/Get_PCI_Card_Info_URL`, {
                BOOK_NBR,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doReservation(body) {
        const { data } = await axios.post(`/DoReservation`, { ...body, extras: body.extras ? body.extras : extras });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        console.log(data['My_Result']);
        return data['My_Result'];
    }
    async bookUser({ bookedByInfoData, check_in, currency, extras = null, fromDate, guestData, pickup_info, propertyid, rooms, source, toDate, totalNights, arrivalTime, bookingNumber, defaultGuest, identifier, pr_id, }) {
        try {
            const fromDateStr = dateToFormattedString(fromDate);
            const toDateStr = dateToFormattedString(toDate);
            let guest = {
                email: bookedByInfoData.email === '' ? null : bookedByInfoData.email || null,
                first_name: bookedByInfoData.firstName,
                last_name: bookedByInfoData.lastName,
                country_id: bookedByInfoData.countryId === '' ? null : bookedByInfoData.countryId,
                city: null,
                mobile: bookedByInfoData.contactNumber === null ? '' : bookedByInfoData.contactNumber,
                phone_prefix: null,
                address: '',
                dob: null,
                subscribe_to_news_letter: bookedByInfoData.emailGuest || false,
                cci: bookedByInfoData.cardNumber
                    ? {
                        nbr: bookedByInfoData.cardNumber,
                        holder_name: bookedByInfoData.cardHolderName,
                        expiry_month: bookedByInfoData.expiryMonth,
                        expiry_year: bookedByInfoData.expiryYear,
                    }
                    : null,
            };
            if (defaultGuest) {
                guest = { ...defaultGuest, email: defaultGuest.email === '' ? null : defaultGuest.email };
            }
            if (bookedByInfoData.id) {
                guest = { ...guest, id: bookedByInfoData.id };
            }
            const body = {
                assign_units: true,
                check_in,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                extras,
                booking: {
                    booking_nbr: bookingNumber || '',
                    from_date: fromDateStr,
                    to_date: toDateStr,
                    remark: bookedByInfoData.message || null,
                    property: {
                        id: propertyid,
                    },
                    source,
                    currency,
                    arrival: { code: arrivalTime ? arrivalTime : bookedByInfoData.selectedArrivalTime },
                    guest,
                    rooms: [
                        ...guestData.map(data => ({
                            identifier: identifier || null,
                            roomtype: {
                                id: data.roomCategoryId,
                                name: data.roomCategoryName,
                                physicalrooms: null,
                                rateplans: null,
                                availabilities: null,
                                inventory: data.inventory,
                                rate: data.rate / totalNights,
                            },
                            rateplan: {
                                id: data.ratePlanId,
                                name: data.ratePlanName,
                                rate_restrictions: null,
                                variations: null,
                                cancelation: data.cancelation,
                                guarantee: data.guarantee,
                            },
                            unit: typeof pr_id === 'undefined' && data.roomId === '' ? null : { id: +pr_id || +data.roomId },
                            occupancy: {
                                adult_nbr: data.adultCount,
                                children_nbr: data.childrenCount,
                                infant_nbr: null,
                            },
                            bed_preference: data.preference,
                            from_date: fromDateStr,
                            to_date: toDateStr,
                            notes: null,
                            days: this.generateDays(fromDateStr, toDateStr, this.calculateTotalRate(data.rate, totalNights, data.isRateModified, data.rateType)),
                            guest: {
                                email: null,
                                first_name: data.guestName,
                                last_name: null,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                            },
                        })),
                        ...rooms,
                    ],
                },
                pickup_info,
            };
            console.log('book user payload', body);
            // const result = await this.doReservation(body);
            // return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    /*Arrivals*/
    async getRoomsToCheckIn(props) {
        const payload = GetRoomsToCheckInPropsSchema.parse(props);
        const { data } = await axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_In', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_In?.total_count };
    }
    async getRoomsToCheckout(props) {
        const payload = GetRoomsToCheckOutPropsSchema.parse(props);
        const { data } = await axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_Out', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_Out?.total_count };
    }
    /*Departures */
    /* INVOICE */
    async getBookingInvoiceInfo(props) {
        const payload = GetBookingInvoiceInfoPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Booking_Invoice_Info', payload);
        return BookingInvoiceInfoSchema.parse(data.My_Result);
    }
    async issueInvoice(props) {
        const p = IssueInvoicePropsSchema.parse(props);
        const { data } = await axios.post('/Issue_Invoice', p);
        return data;
    }
    async voidInvoice(props) {
        const payload = VoidInvoicePropsSchema.parse(props);
        const { data } = await axios.post('/Void_Invoice', payload);
        return data;
    }
    async printInvoice(props) {
        const payload = PrintInvoicePropsSchema.parse(props);
        const { data } = await axios.post('/Print_Invoice', payload);
        return data;
    }
}

export { addRoomForCleaning as A, BookingService as B, transformNewBooking as C, transformNewBLockedRooms as D, bookingStatus as E, getSplitRole as F, compareTime as G, createDateWithOffsetAndHour as H, ZIEntrySchema as Z, updateBookedByGuest as a, booking_store as b, calculateTotalRooms as c, resetReserved as d, setBookingSelectOptions as e, reserveRooms as f, calculateDaysBetweenDates as g, setBookedByGuestManualEditState as h, updateRoomParams as i, getVisibleInventory as j, buildSplitIndex as k, getReservedRooms as l, modifyBookingStore as m, hasAtLeastOneRoomSelected as n, getBookingTotalPrice as o, bookedByGuestBaseData as p, resetAvailability as q, resetBookingStore as r, setBookingDraft as s, getPrivateNote as t, updateRoomGuest as u, formatName as v, calendar_dates as w, addCleaningTasks as x, getRoomStatus as y, cleanRoom as z };

//# sourceMappingURL=booking.service-9507f39d.js.map