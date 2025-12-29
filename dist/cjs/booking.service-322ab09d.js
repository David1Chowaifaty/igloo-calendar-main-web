'use strict';

const axios = require('./axios-6e678d52.js');
const index$1 = require('./index-8bb117a0.js');
const utils = require('./utils-202c6503.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-4eb57996.js');
const index = require('./index-6299b0f7.js');
const calendarData = require('./calendar-data-e7cdcfec.js');

const initialState$1 = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
    disabled_cells: new Map(),
    cleaningTasks: new Map(),
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = index.createStore(initialState$1);
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
function getDefaultData(cell, stayStatusLookup) {
    if (utils.isBlockUnit(cell.STAY_STATUS_CODE)) {
        const blockedFromDate = moment.hooks(cell.My_Block_Info.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.from_date : cell.DATE;
        const blockedToDate = moment.hooks(cell.My_Block_Info.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.to_date : cell.DATE;
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
            NO_OF_DAYS: utils.dateDifference(blockedFromDate, blockedToDate),
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
        const bookingFromDate = moment.hooks(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE;
        const bookingToDate = moment.hooks(cell.room.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.to_date : cell.DATE;
        const mainGuest = cell.room.sharing_persons?.find(p => p.is_main);
        return {
            ID: cell.POOL,
            FROM_DATE: bookingFromDate,
            TO_DATE: bookingToDate,
            NO_OF_DAYS: utils.dateDifference(bookingFromDate, bookingToDate),
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
            NO_OF_DAYS: utils.dateDifference(bookingFromDate, bookingToDate),
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

const bookedByGuestBaseData = {
    id: -1,
    email: '',
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
            checkIn: moment.hooks().startOf('day'),
            checkOut: moment.hooks().add(1, 'day'),
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
let { state: booking_store, onChange: onRoomTypeChange, reset } = index.createStore(initialState);
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

const ZIEntrySchema = index$1.z.object({
    CODE_NAME: index$1.z.string(),
    CODE_VALUE_AR: index$1.z.string().nullable(),
    CODE_VALUE_DE: index$1.z.string().nullable(),
    CODE_VALUE_EL: index$1.z.string().nullable(),
    CODE_VALUE_EN: index$1.z.string().nullable(),
    CODE_VALUE_FR: index$1.z.string().nullable(),
    CODE_VALUE_HE: index$1.z.string().nullable(),
    CODE_VALUE_PL: index$1.z.string().nullable(),
    CODE_VALUE_RU: index$1.z.string().nullable(),
    CODE_VALUE_UA: index$1.z.string().nullable(),
    DISPLAY_ORDER: index$1.z.number().nullable(),
    ENTRY_DATE: index$1.z.string().nullable(),
    ENTRY_USER_ID: index$1.z.number().nullable(),
    INVARIANT_VALUE: index$1.z.string().nullable(),
    ISDELETEABLE: index$1.z.boolean(),
    ISDELETED: index$1.z.boolean(),
    ISSYSTEM: index$1.z.boolean(),
    ISUPDATEABLE: index$1.z.boolean(),
    ISVISIBLE: index$1.z.boolean(),
    NOTES: index$1.z.string().nullable(),
    OWNER_ID: index$1.z.number().nullable(),
    TBL_NAME: index$1.z.string(),
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

const NumberOrStringSchema = index$1.unionType([index$1.numberType(), index$1.stringType().optional()]);
const CurrencySchema$1 = index$1.objectType({
    id: index$1.numberType(),
});
const CurrencyWithCodeSchema = CurrencySchema$1.extend({
    code: index$1.stringType().optional(),
});
const ItemSchema$1 = index$1.objectType({
    amount: index$1.numberType(),
    type: index$1.stringType().optional(),
    key: index$1.unionType([index$1.numberType(), index$1.stringType().optional()]),
    description: index$1.stringType().optional().optional().default(''),
});
const TargetSchema = index$1.objectType({
    code: index$1.stringType().optional(),
    description: index$1.stringType().optional(),
});
index$1.objectType({
    unit_id: index$1.numberType(),
    from_date: index$1.stringType().optional(),
    to_date: index$1.stringType().optional(),
});
index$1.objectType({
    starter: index$1.stringType().optional(),
});
index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    currency_id: index$1.numberType(),
    language: index$1.stringType().optional().optional(),
    rate_plan_id: index$1.numberType(),
    room_type_id: index$1.numberType(),
    property_id: index$1.numberType(),
    is_preserve_history: index$1.booleanType().optional(),
    room_identifier: index$1.stringType().optional().optional(),
});
index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    room_identifier: index$1.stringType().optional(),
    status: index$1.stringType().optional(),
});
index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    currency_id: index$1.numberType(),
    language: index$1.stringType().optional(),
});
const RestrictionSchema = index$1.objectType({
    room_type_id: NumberOrStringSchema,
    night: index$1.stringType().optional(),
});
index$1.objectType({
    is_closed: index$1.booleanType(),
    restrictions: index$1.arrayType(RestrictionSchema),
    operation_type: index$1.stringType().optional().optional(),
});
index$1.objectType({
    book_nbr: index$1.stringType().optional(),
    status: index$1.stringType().optional(),
});
const AdultChildCountSchema = index$1.objectType({
    adult: index$1.numberType(),
    child: index$1.numberType(),
});
index$1.objectType({
    from_date: index$1.stringType().optional(),
    to_date: index$1.stringType().optional(),
    propertyid: index$1.numberType(),
    adultChildCount: AdultChildCountSchema,
    language: index$1.stringType().optional(),
    room_type_ids: index$1.arrayType(index$1.numberType()),
    room_type_ids_to_update: index$1.arrayType(index$1.numberType()).optional(),
    rate_plan_ids: index$1.arrayType(index$1.numberType()).optional(),
    currency: CurrencyWithCodeSchema,
    is_in_agent_mode: index$1.booleanType().optional(),
    agent_id: NumberOrStringSchema.optional(),
});
const AvailabilityBracketSchema = index$1.objectType({
    from_date: index$1.stringType().optional(),
    to_date: index$1.stringType().optional(),
});
index$1.objectType({
    unit_id: index$1.numberType(),
    block_status_code: index$1.enumType(['003', '004', '002']).optional(),
    description: index$1.stringType().optional().optional(),
    property_id: index$1.numberType(),
    brackets: index$1.arrayType(AvailabilityBracketSchema),
});
index$1.objectType({
    property_id: index$1.numberType(),
    room_identifier: index$1.stringType().optional(),
    code: index$1.stringType().optional(),
});
index$1.objectType({
    service: index$1.custom(),
    booking_nbr: NumberOrStringSchema,
    is_remove: index$1.booleanType(),
});
/*Arrivals */
const GetRoomsToCheckInPropsSchema = index$1.objectType({
    property_id: index$1.stringType(),
    check_in_date: index$1.stringType(),
    page_index: index$1.numberType().default(1),
    page_size: index$1.numberType().default(10),
});
/*Departures */
const GetRoomsToCheckOutPropsSchema = index$1.objectType({
    property_id: index$1.stringType(),
    check_out_date: index$1.stringType(),
    page_index: index$1.numberType().default(1),
    page_size: index$1.numberType().default(10),
});
/* INVOICE TYPES */
const GetBookingInvoiceInfoPropsSchema = index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
});
const VoidInvoicePropsSchema = index$1.objectType({
    invoice_nbr: index$1.stringType().optional(),
    reason: index$1.stringType().optional(),
    property_id: index$1.numberType(),
});
const InvoiceSchema$1 = index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    currency: CurrencySchema$1,
    target: TargetSchema,
    Date: index$1.stringType().optional(),
    nbr: index$1.stringType().optional(),
    remark: index$1.stringType().optional(),
    billed_to_name: index$1.stringType().optional(),
    billed_to_tax: index$1.stringType().optional(),
    items: index$1.arrayType(ItemSchema$1),
});
const IssueInvoicePropsSchema = index$1.objectType({
    is_proforma: index$1.booleanType().optional().default(false),
    property_id: index$1.numberType(),
    invoice: InvoiceSchema$1,
});
const PrintInvoicePropsSchema = index$1.objectType({
    invoice_nbr: index$1.stringType().optional(),
    property_id: index$1.numberType(),
    mode: index$1.enumType(['invoice', 'creditnote', 'proforma']),
    invoice: InvoiceSchema$1.optional(),
});
const ExposedGuestSchema = index$1.objectType({
    address: index$1.nullType(),
    alternative_email: index$1.nullType(),
    cci: index$1.nullType(),
    city: index$1.nullType(),
    country: index$1.nullType(),
    country_id: index$1.numberType(),
    country_phone_prefix: index$1.stringType(),
    dob: index$1.nullType(),
    email: index$1.stringType(),
    first_name: index$1.stringType(),
    id: index$1.numberType(),
    id_info: index$1.nullType(),
    is_main: index$1.booleanType(),
    last_name: index$1.stringType(),
    mobile: index$1.stringType(),
    mobile_without_prefix: index$1.stringType(),
    nbr_confirmed_bookings: index$1.numberType(),
    notes: index$1.nullType(),
    password: index$1.nullType(),
    subscribe_to_news_letter: index$1.nullType(),
});
index$1.arrayType(ExposedGuestSchema);

const CurrencySchema = index$1.objectType({
    code: index$1.stringType(),
    id: index$1.numberType(),
    symbol: index$1.stringType(),
});
const StatusSchema = index$1.objectType({
    code: index$1.stringType(),
    description: index$1.anyType(),
});
const ItemSchema = index$1.objectType({
    amount: index$1.numberType(),
    booking_nbr: index$1.stringType(),
    currency: CurrencySchema,
    description: index$1.anyType(),
    invoice_nbr: index$1.stringType(),
    is_invoiceable: index$1.booleanType(),
    key: index$1.numberType(),
    status: StatusSchema,
    system_id: index$1.numberType(),
    type: index$1.stringType(),
});
const CreditNoteSchema = index$1.objectType({
    date: index$1.stringType(),
    nbr: index$1.stringType(),
    reason: index$1.stringType(),
    system_id: index$1.stringType().nullable(),
    user: index$1.stringType().nullable(),
});
const InvoiceSchema = index$1.objectType({
    billed_to_name: index$1.anyType(),
    billed_to_tax: index$1.anyType(),
    booking_nbr: index$1.stringType(),
    credit_note: CreditNoteSchema.nullable(),
    currency: CurrencySchema,
    date: index$1.stringType(),
    items: index$1.arrayType(ItemSchema),
    nbr: index$1.stringType(),
    pdf_url: index$1.anyType(),
    remark: index$1.stringType(),
    status: StatusSchema,
    system_id: index$1.numberType(),
    target: index$1.anyType(),
    user: index$1.stringType().nullable(),
    total_amount: index$1.anyType(),
});
const InvoiceableItemReasonSchema = index$1.objectType({
    code: index$1.enumType(['001', '002', '003']),
    description: index$1.stringType().nullable(),
});
const InvoiceableItemSchema = index$1.objectType({
    amount: index$1.numberType(),
    booking_nbr: index$1.stringType(),
    currency: CurrencySchema,
    invoice_nbr: index$1.stringType().nullable(),
    is_invoiceable: index$1.booleanType(),
    key: index$1.numberType(),
    status: index$1.anyType(),
    system_id: index$1.anyType(),
    reason: InvoiceableItemReasonSchema.nullable(),
    type: index$1.enumType(['BSA', 'BSP', 'BSE', 'PAYMENT']),
});
const BookingInvoiceInfoSchema = index$1.objectType({
    invoiceable_items: index$1.arrayType(InvoiceableItemSchema),
    invoices: index$1.arrayType(InvoiceSchema).nullable(),
});

// import { ExposedApplicablePolicy, ExposedBookingEvent, HandleExposedRoomGuestsRequest } from '../../models/booking.dto';
class BookingService {
    async unBlockUnitByPeriod(props) {
        const { data } = await axios.axios.post(`/Unblock_Unit_By_Period`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getNextValue(props) {
        const { data } = await axios.axios.post(`/Get_Next_Value`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getExposedApplicablePolicies(props) {
        const { data } = await axios.axios.post(`/Get_Exposed_Applicable_Policies`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ?? [];
    }
    async handleExposedRoomInOut(props) {
        const { data } = await axios.axios.post(`/Handle_Exposed_Room_InOut`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async GetPenaltyStatement(params) {
        const { data } = await axios.axios.post('/Get_Penalty_Statement', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setExposedRestrictionPerRoomType(params) {
        const { data } = await axios.axios.post(`https://gateway.igloorooms.com/IRBE/Set_Exposed_Restriction_Per_Room_Type`, {
            operation_type: params.operation_type ?? 'close_open',
            ...params,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getLov() {
        const { data } = await axios.axios.post(`/Get_LOV`, {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async sendBookingConfirmationEmail(booking_nbr, language) {
        const { data } = await axios.axios.post(`/Send_Booking_Confirmation_Email`, {
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
            const { data } = await axios.axios.post(`/Get_Exposed_Calendar`, {
                propertyid,
                from_date,
                to_date,
                extras: utils.extras,
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
                        day: utils.convertDateToCustomFormat(day.description, month.description),
                        value: day.value,
                        currentDate: utils.convertDateToTime(day.description, month.description),
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
        const { data } = await axios.axios.post('/Handle_Exposed_Room_Guests', props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async fetchGuest(email) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Guest`, { email });
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
            const { data } = await axios.axios.post(`/Change_Exposed_Booking_Status`, props);
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
            const { data } = await axios.axios.post(`/Get_Exposed_PMS_Logs`, { booking_nbr });
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
            const { data } = await axios.axios.post(`/Get_Exposed_Booking_Events`, { booking_nbr });
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
            const { data } = await axios.axios.post(`/Edit_Exposed_Guest`, { ...guest, book_nbr });
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
            const { data } = await axios.axios.post(`/Check_Availability`, {
                ...rest,
                adult_nbr: adultChildCount.adult,
                child_nbr: adultChildCount.child,
                currency_ref: currency.code,
                skip_getting_assignable_units: !calendarData.calendar_data.is_frontdesk_enabled,
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
            const { data } = await axios.axios.post(`/Get_Exposed_Countries`, {
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
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME`, {
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
        const { data } = await axios.axios.post(`/Do_Booking_Extra_Service`, { ...service, booking_nbr, is_remove });
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
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
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
            if (calendarData.calendar_data?.property?.id) {
                payload = { ...payload, id: calendarData.calendar_data.property.id };
            }
            const { data } = await axios.axios.post(`/Get_Country_By_IP`, payload);
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
            const { data } = await axios.axios.post(`/Block_Exposed_Unit`, params);
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
            const { data } = await axios.axios.post(`/Block_Availability_For_Brackets`, params);
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
        const { data } = await axios.axios.post('/Set_Departure_Time', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getUserInfo(email) {
        try {
            const { data } = await axios.axios.post(`/GET_EXPOSED_GUEST`, {
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
            const { data } = await axios.axios.post(`/Get_Exposed_Booking`, {
                booking_nbr,
                language,
                extras: withExtras ? utils.extras : null,
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
            const { data } = await axios.axios.post(`/Fetch_Exposed_Guests`, {
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
            const { data } = await axios.axios.post(`/Fetch_Exposed_Bookings`, {
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
            const { data } = await axios.axios.post(`/Get_PCI_Card_Info_URL`, {
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
        const { data } = await axios.axios.post(`/DoReservation`, { ...body, extras: body.extras ? body.extras : utils.extras });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        console.log(data['My_Result']);
        return data['My_Result'];
    }
    async bookUser({ bookedByInfoData, check_in, currency, extras = null, fromDate, guestData, pickup_info, propertyid, rooms, source, toDate, totalNights, arrivalTime, bookingNumber, defaultGuest, identifier, pr_id, }) {
        try {
            const fromDateStr = utils.dateToFormattedString(fromDate);
            const toDateStr = utils.dateToFormattedString(toDate);
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
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_In', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_In?.total_count };
    }
    async getRoomsToCheckout(props) {
        const payload = GetRoomsToCheckOutPropsSchema.parse(props);
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_Out', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_Out?.total_count };
    }
    /*Departures */
    /* INVOICE */
    async getBookingInvoiceInfo(props) {
        const payload = GetBookingInvoiceInfoPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Get_Booking_Invoice_Info', payload);
        return BookingInvoiceInfoSchema.parse(data.My_Result);
    }
    async issueInvoice(props) {
        const p = IssueInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Issue_Invoice', p);
        return data;
    }
    async voidInvoice(props) {
        const payload = VoidInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Void_Invoice', payload);
        return data;
    }
    async printInvoice(props) {
        const payload = PrintInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Print_Invoice', payload);
        return data;
    }
}

exports.BookingService = BookingService;
exports.ZIEntrySchema = ZIEntrySchema;
exports.addCleaningTasks = addCleaningTasks;
exports.addRoomForCleaning = addRoomForCleaning;
exports.bookedByGuestBaseData = bookedByGuestBaseData;
exports.bookingStatus = bookingStatus;
exports.booking_store = booking_store;
exports.buildSplitIndex = buildSplitIndex;
exports.calculateDaysBetweenDates = calculateDaysBetweenDates;
exports.calculateTotalRooms = calculateTotalRooms;
exports.calendar_dates = calendar_dates;
exports.cleanRoom = cleanRoom;
exports.compareTime = compareTime;
exports.createDateWithOffsetAndHour = createDateWithOffsetAndHour;
exports.formatName = formatName;
exports.getBookingTotalPrice = getBookingTotalPrice;
exports.getPrivateNote = getPrivateNote;
exports.getReservedRooms = getReservedRooms;
exports.getRoomStatus = getRoomStatus;
exports.getSplitRole = getSplitRole;
exports.getVisibleInventory = getVisibleInventory;
exports.hasAtLeastOneRoomSelected = hasAtLeastOneRoomSelected;
exports.modifyBookingStore = modifyBookingStore;
exports.reserveRooms = reserveRooms;
exports.resetAvailability = resetAvailability;
exports.resetBookingStore = resetBookingStore;
exports.resetReserved = resetReserved;
exports.setBookedByGuestManualEditState = setBookedByGuestManualEditState;
exports.setBookingDraft = setBookingDraft;
exports.setBookingSelectOptions = setBookingSelectOptions;
exports.transformNewBLockedRooms = transformNewBLockedRooms;
exports.transformNewBooking = transformNewBooking;
exports.updateBookedByGuest = updateBookedByGuest;
exports.updateRoomGuest = updateRoomGuest;
exports.updateRoomParams = updateRoomParams;

//# sourceMappingURL=booking.service-322ab09d.js.map