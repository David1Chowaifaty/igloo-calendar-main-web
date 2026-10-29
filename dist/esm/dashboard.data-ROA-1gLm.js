import { B as BookingService } from './booking.service-C1IWMsup.js';
import { R as ROOM_IN_OUT } from './booking.dto-VzFWIl64.js';
import { b as formatCount } from './number-BguMo00d.js';
import { i as isBlockUnit } from './utils-DH42zfi0.js';
import { B as BookingListingService } from './index-CBfVRoNB.js';
import { P as PropertyService } from './index-Bi7xjdH8.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { L as LocaleController } from './locale.controller-CNaXYkvF.js';
import { a as arrivalsStore, b as setArrivalsReferenceDate, c as setArrivalsTotal, i as initializeArrivalsStore } from './arrivals.store-BCEQPhKv.js';
import { d as departuresStore, a as setDeparturesReferenceDate, b as setDeparturesPage, c as setDepartureTotal, i as initializeDeparturesStore } from './departures.store-PFPdmLaM.js';
import './ir-date-Bh8M_fTk.js';
import './locale-scope-Jre4lb6k.js';
import './index-DKZeCK8T.js';
import './moment-Mki5YqAR.js';

/** How many days either side of today the dashboard's day picker reaches. */
const MAX_DAY_OFFSET = 2;
/**
 * Page size the dashboard requests. Card counts are computed from the loaded page,
 * so it's large enough to hold a normal property's arrivals / departures for one day.
 */
const DASHBOARD_PAGE_SIZE = 100;
/** Quiet time after the last day change before the day is fetched, so stepping through several days only loads the last. */
const DATE_CHANGE_DEBOUNCE_MS = 300;
/** Booking status of a cancelled booking. */
const CANCELLED_STATUS_CODE = '003';
/** Block status the calendar flags as out of service (`OUT_OF_SERVICE` in utils/booking). */
const OUT_OF_SERVICE_CODE = '004';
const roomsOf = (bookings) => (bookings ?? []).flatMap(b => b.rooms ?? []);
/**
 * Rooms still waiting to check in by `date` (arriving that day or overdue, as Get_Rooms_To_Check_In returns them)
 * that have no unit assigned yet — counted per room, not per booking.
 */
function countUnassignedArrivals(bookings, date) {
    return roomsOf(bookings).filter(room => !room.unit && room.from_date <= date && (room.in_out?.code ?? ROOM_IN_OUT.IDLE) === ROOM_IN_OUT.IDLE).length;
}
/**
 * Rooms whose arrival day is before `date` and that still aren't checked in — the rows the arrivals table marks overdue.
 * `date` is the dashboard's selected day, which the table also measures overdue against (the store's day), so the card agrees with it.
 */
function countOverdueArrivals(bookings, date) {
    return roomsOf(bookings).filter(room => room.from_date < date && (room.in_out?.code ?? ROOM_IN_OUT.IDLE) === ROOM_IN_OUT.IDLE).length;
}
/** Rooms whose departure day is before `date` (the selected day) and that are still checked in — the rows the departures table marks overdue. */
function countOverdueDepartures(bookings, date) {
    return roomsOf(bookings).filter(room => room.to_date < date && room.in_out?.code === ROOM_IN_OUT.CHECKIN).length;
}
/** Units arriving on `date` — counted per room, not per booking. Non-PMS properties count these instead of the rooms to check in. */
function countArrivingUnits(bookings, date) {
    return roomsOf(bookings).filter(room => room.from_date === date).length;
}
/** Units departing on `date` — counted per room, not per booking. */
function countDepartingUnits(bookings, date) {
    return roomsOf(bookings).filter(room => room.to_date === date).length;
}
/** Whether a booking status change cancels a booking whose stay covers `date`, arrival and departure days included. */
function isCancellationOn({ status_code, from_date, to_date }, date) {
    return status_code === CANCELLED_STATUS_CODE && !!from_date && !!to_date && from_date <= date && date <= to_date;
}
/** Rooms across all bookings — the in-house card counts rooms, not bookings. */
function countRooms(bookings) {
    return roomsOf(bookings).length;
}
/** Adults, children and infants across all rooms — the in-house card's Ad-Ch-In line. */
function sumOccupancy(bookings) {
    return roomsOf(bookings).reduce((total, room) => ({
        adults: total.adults + (room.occupancy?.adult_nbr ?? 0),
        children: total.children + (room.occupancy?.children_nbr ?? 0),
        infants: total.infants + (room.occupancy?.infant_nbr ?? 0),
    }), { adults: 0, children: 0, infants: 0 });
}
/**
 * Keeps only the rooms that are checked in (`in_out` 001) and whose stay covers `date`, departure day included
 * (a departing guest stays in-house until checked out). Bookings left with no such room are dropped.
 */
function filterInHouse(bookings, date) {
    return (bookings ?? []).flatMap(booking => {
        const rooms = (booking.rooms ?? []).filter(room => room.in_out?.code === ROOM_IN_OUT.CHECKIN && room.from_date <= date && date <= room.to_date);
        return rooms.length ? [{ ...booking, rooms }] : [];
    });
}
/** The room types the dashboard counts: only active ones (`is_active` true). */
const activeRoomTypes = (roomTypes) => (roomTypes ?? []).filter(rt => rt.is_active);
/** The units the dashboard counts: only active ones — not flagged `is_active` false by the calendar or the property. */
const activeUnits = (roomType, { inactiveUnitIds } = {}) => (roomType.physicalrooms ?? []).filter(unit => unit.is_active !== false && !(unit.id != null && inactiveUnitIds?.has(unit.id)));
/**
 * The block holding a unit on `date`, detected like the calendar does (`getMyBookings` in utils/booking): an unavailable
 * half-day cell whose stay status is a block code. Only a block covering the night of `date` counts, so one that ended
 * this morning doesn't (a same-day block, from = to, does).
 */
function blockOn(cell, date) {
    return [cell?.right_cell, cell?.left_cell].find(half => {
        if (half?.Is_Available !== false || !isBlockUnit(half.STAY_STATUS_CODE)) {
            return false;
        }
        const { from_date, to_date } = half.My_Block_Info ?? {};
        return from_date <= date && (date < to_date || from_date === to_date);
    });
}
/**
 * Counts the units blocked on `date` across every active unit of every active room type, each unit once: out of service
 * (status 004) and blocked (the other block statuses, 002 and 003).
 */
function countBlockedUnits(roomTypes, date, flags) {
    let outOfService = 0;
    let blocked = 0;
    for (const unit of activeRoomTypes(roomTypes).flatMap(rt => activeUnits(rt, flags))) {
        const block = blockOn(unit.calendar_cell, date);
        if (!block) {
            continue;
        }
        if (block.STAY_STATUS_CODE === OUT_OF_SERVICE_CODE) {
            outOfService++;
        }
        else {
            blocked++;
        }
    }
    return { outOfService, blocked };
}
/**
 * Whether a unit is booked for the night: its right half-day cell (the night) is unavailable and holds a booking,
 * not a block (002, 003, 004).
 */
function isBooked(cell) {
    const night = cell?.right_cell;
    return night?.Is_Available === false && !isBlockUnit(night.STAY_STATUS_CODE);
}
/**
 * A room type's booked and total units. The total is its active units — never `exposed_inventory.total`, which counts
 * inactive ones too. Booked is the active units booked for the night (see `isBooked`).
 */
function roomTypeOccupancy(roomType, flags) {
    const units = activeUnits(roomType, flags);
    return {
        booked: units.filter(unit => isBooked(unit.calendar_cell)).length,
        total: units.length,
    };
}
function occupancyOf(roomTypes, flags) {
    let booked = 0;
    let total = 0;
    for (const roomType of roomTypes) {
        const figure = roomTypeOccupancy(roomType, flags);
        booked += figure.booked;
        total += figure.total;
    }
    return { booked, total, percent: total > 0 ? (booked / total) * 100 : 0 };
}
/**
 * The day's occupancy across the active units of active room types, real and virtual apart. A room type is virtual when the
 * calendar flags it (`is_virtual`) or its id is in `flags.virtualIds`. `virtual` is `undefined` when no room type is virtual.
 */
function computeOccupancy(roomTypes, flags = {}) {
    const active = activeRoomTypes(roomTypes);
    const isVirtual = (rt) => rt.is_virtual ?? (rt.id != null && !!flags.virtualIds?.has(rt.id));
    const virtual = active.filter(isVirtual);
    return {
        real: occupancyOf(active.filter(rt => !isVirtual(rt)), flags),
        virtual: virtual.length ? occupancyOf(virtual, flags) : undefined,
    };
}
/**
 * The day's unit breakdown across active room types: available and total units summed from the calendar's per-room-type `exposed_inventory`
 * (a count no room type returns stays `undefined` rather than reading as 0), out of service and blocked counted from the active units' cells,
 * and the occupancy of real and virtual room types (see `computeOccupancy`).
 */
function sumUnits(roomTypes, date, flags) {
    const active = activeRoomTypes(roomTypes);
    const inventories = active.map(rt => rt.exposed_inventory).filter(Boolean);
    const sum = (field) => (inventories.some(inv => typeof inv[field] === 'number') ? inventories.reduce((total, inv) => total + (inv[field] ?? 0), 0) : undefined);
    return {
        available: sum('rts') ?? 0,
        ...countBlockedUnits(active, date, flags),
        total: sum('total'),
        occupancy: computeOccupancy(active, flags),
    };
}
/** Revenue per available room = ADR × occupancy. */
function computeRevPar(adr, occupancyPercent) {
    return (adr * occupancyPercent) / 100;
}
/** Largest count a summary card shows in full; above it the card shows the compact form, so it never needs more than six characters. */
const CARD_COUNT_FULL_MAX = 99_999;
/**
 * Count for a summary card, in the active language and digit script: in full up to 99,999 ("98,765"), compact beyond
 * ("123.5K", "1.2M"); empty for a missing value.
 */
function formatCardCount(value) {
    if (value === null || value === undefined || Number.isNaN(value))
        return '';
    if (Math.abs(value) <= CARD_COUNT_FULL_MAX)
        return formatCount(value);
    return formatCount(value, { notation: 'compact', maximumFractionDigits: 1 });
}

/**
 * Data source for the dashboard widgets. Each method covers one day (`params.date`).
 */
class DashboardService {
    bookingService = new BookingService();
    bookingListingService = new BookingListingService();
    propertyService = new PropertyService();
    async getDayPerformance({ property_id, date }) {
        const { DailyStats } = await this.propertyService.getMonthlyStats({ property_id, from_date: date, to_date: date });
        const day = DailyStats?.[0];
        return {
            occupancy: day?.Occupancy ?? 0,
            bookedUnits: day?.Units_booked ?? 0,
            roomRevenue: day?.Rooms_Revenue ?? 0,
            adr: day?.ADR ?? 0,
        };
    }
    async getUnitsSummary({ property_id, date, language }) {
        const days = await this.bookingService.fetchExposedCalendarDays({ propertyid: property_id, from_date: date, to_date: date, language });
        const day = days.find(d => d.value === date) ?? days[0];
        // The property's room types flag the virtual ones and the inactive units too, in case the calendar leaves the flags out.
        const roomTypes = calendar_data.property?.roomtypes ?? [];
        const virtualIds = new Set(roomTypes.filter(rt => rt.is_virtual).map(rt => rt.id));
        const inactiveUnitIds = new Set(roomTypes
            .flatMap(rt => rt.physicalrooms ?? [])
            .filter(unit => unit.is_active === false)
            .map(unit => unit.id));
        return sumUnits(day?.room_types ?? [], date, { virtualIds, inactiveUnitIds });
    }
    /** Rooms checked in whose stay covers `date`. */
    async getInHouse({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '5', booking_status: '002', language });
        return filterInHouse(bookings, date);
    }
    /** Bookings arriving on `date`, for properties without the front desk (the PMS uses Get_Rooms_To_Check_In). */
    async getArrivals({ property_id, date, language }) {
        return this.getExposedBookings(property_id, date, { filter_type: '2', booking_status: '002', language });
    }
    /** Bookings departing on `date`, for properties without the front desk (the PMS uses Get_Rooms_To_Check_Out). */
    async getDepartures({ property_id, date, language }) {
        return this.getExposedBookings(property_id, date, { filter_type: '3', booking_status: '002', language });
    }
    /** Bookings created on `date`. */
    async getNewBookings({ property_id, date, language }) {
        return this.getExposedBookings(property_id, date, { filter_type: '1', booking_status: '', language });
    }
    /**
     * Units (rooms) in bookings made on `date` that still await confirmation.
     * Only meaningful when the property's booking criteria list the pending status (001).
     */
    async getPendingUnits({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '1', booking_status: '001', language });
        return countRooms(bookings);
    }
    /** Bookings cancelled (deleted) on `date`. */
    async getCancellations({ property_id, date }) {
        const bookings = await this.propertyService.getDeletedBookings({ property_id, date });
        return (bookings ?? []).map(b => ({ ...b, rooms: b.rooms ?? [] }));
    }
    async getExposedBookings(property_id, date, filters) {
        const result = await this.bookingListingService.getExposedBookings({
            property_id,
            from: date,
            to: date,
            balance_filter: '0',
            start_row: 0,
            end_row: DASHBOARD_PAGE_SIZE,
            total_count: 0,
            name: '',
            book_nbr: '',
            affiliate_id: 0,
            is_mpo_managed: false,
            is_mpo_used: false,
            is_for_mobile: false,
            is_combined_view: false,
            is_to_export: false,
            channel: '',
            ...filters,
        }, { skipStore: true });
        return (result ?? []).map(b => ({ ...b, rooms: b.rooms ?? [] }));
    }
}

/*
 * Loaders for the dashboard panels backed by existing endpoints. They write into the same global
 * stores `ir-arrivals-table` / `ir-departures-table` render from, so the root (date change, refresh)
 * and the departures panel (after a check-out) share one code path.
 *
 * Properties with the front desk read the PMS endpoints (Get_Rooms_To_Check_In / Out); those without
 * read Get_Exposed_Bookings filtered by arrival / departure date.
 *
 * `ready` lets the request go out before `calendar_data.property` has loaded: the store initialisers
 * (canCheckIn / canCheckout) read it, so the response is only stored once `ready` settles.
 */
const bookingService = new BookingService();
const dashboardService = new DashboardService();
/**
 * Whether the property uses the front desk. Known only once the property has loaded, so the first load
 * of a property waits on `ready` before choosing an endpoint; later loads decide straight away.
 */
async function isFrontDesk(ready) {
    if (!calendar_data.property) {
        await ready;
    }
    return calendar_data.property ? !!calendar_data.property.is_frontdesk_enabled : true;
}
async function fetchArrivals(propertyId, date, ready) {
    if (await isFrontDesk(ready)) {
        return bookingService.getRoomsToCheckIn({
            property_id: propertyId?.toString(),
            check_in_date: date,
            page_index: arrivalsStore.pagination.currentPage,
            page_size: arrivalsStore.pagination.pageSize,
            language: LocaleController.language,
        });
    }
    // The dashboard hides pagination, so the loaded page is the total.
    const bookings = await dashboardService.getArrivals({ property_id: propertyId, date, language: LocaleController.language });
    return { bookings, total_count: bookings.length };
}
async function fetchDepartures(propertyId, date, ready) {
    if (await isFrontDesk(ready)) {
        return bookingService.getRoomsToCheckout({
            property_id: propertyId?.toString(),
            check_out_date: date,
            page_index: departuresStore.pagination.currentPage,
            page_size: departuresStore.pagination.pageSize,
            language: LocaleController.language,
        });
    }
    const bookings = await dashboardService.getDepartures({ property_id: propertyId, date, language: LocaleController.language });
    return { bookings, total_count: bookings.length };
}
async function loadArrivals(propertyId, date, ready) {
    if (arrivalsStore.today !== date) {
        setArrivalsReferenceDate(date);
    }
    const { bookings, total_count } = await fetchArrivals(propertyId, date, ready);
    await ready;
    // A newer day was requested while this one was in flight.
    if (arrivalsStore.today !== date) {
        return;
    }
    setArrivalsTotal(total_count ?? 0);
    initializeArrivalsStore(bookings);
}
async function loadDepartures(propertyId, date, ready) {
    if (departuresStore.today !== date) {
        // Unlike the arrivals setter, the departures one keeps the current page.
        setDeparturesReferenceDate(date);
        setDeparturesPage(1);
    }
    const { bookings, total_count } = await fetchDepartures(propertyId, date, ready);
    await ready;
    if (departuresStore.today !== date) {
        return;
    }
    setDepartureTotal(total_count ?? 0);
    initializeDeparturesStore(bookings);
}

export { DashboardService as D, MAX_DAY_OFFSET as M, DATE_CHANGE_DEBOUNCE_MS as a, loadArrivals as b, computeRevPar as c, countRooms as d, countOverdueDepartures as e, countDepartingUnits as f, countOverdueArrivals as g, countUnassignedArrivals as h, isCancellationOn as i, countArrivingUnits as j, formatCardCount as k, loadDepartures as l, DASHBOARD_PAGE_SIZE as m, sumOccupancy as s };
