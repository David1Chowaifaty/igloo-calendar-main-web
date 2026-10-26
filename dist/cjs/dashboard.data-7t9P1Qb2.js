'use strict';

var booking_service = require('./booking.service-CnBxEj1B.js');
var booking_dto = require('./booking.dto-CUSvGTvD.js');
var utils = require('./utils-BEjK-V-3.js');
var index = require('./index-CnMHwvya.js');
var index$1 = require('./index-B5qvLYZl.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var locale_controller = require('./locale.controller-DOykNQAc.js');
var arrivals_store = require('./arrivals.store-CBAC7EBJ.js');
var departures_store = require('./departures.store-clbQeL3P.js');
require('./moment-CdViwxPQ.js');
require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
require('./index-IDeZZwEK.js');

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
    return roomsOf(bookings).filter(room => !room.unit && room.from_date <= date && (room.in_out?.code ?? booking_dto.ROOM_IN_OUT.IDLE) === booking_dto.ROOM_IN_OUT.IDLE).length;
}
/**
 * Rooms whose arrival day is before `date` and that still aren't checked in — the rows the arrivals table marks overdue.
 * `date` is the dashboard's selected day, which the table also measures overdue against (the store's day), so the card agrees with it.
 */
function countOverdueArrivals(bookings, date) {
    return roomsOf(bookings).filter(room => room.from_date < date && (room.in_out?.code ?? booking_dto.ROOM_IN_OUT.IDLE) === booking_dto.ROOM_IN_OUT.IDLE).length;
}
/** Rooms whose departure day is before `date` (the selected day) and that are still checked in — the rows the departures table marks overdue. */
function countOverdueDepartures(bookings, date) {
    return roomsOf(bookings).filter(room => room.to_date < date && room.in_out?.code === booking_dto.ROOM_IN_OUT.CHECKIN).length;
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
        const rooms = (booking.rooms ?? []).filter(room => room.in_out?.code === booking_dto.ROOM_IN_OUT.CHECKIN && room.from_date <= date && date <= room.to_date);
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
        if (half?.Is_Available !== false || !utils.isBlockUnit(half.STAY_STATUS_CODE)) {
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
 * Whether a unit is booked for the night of `date`: an unavailable half-day cell that isn't a block and whose room's stay
 * covers that night (the departure day doesn't count).
 */
function isBookedOn(cell, date) {
    return [cell?.right_cell, cell?.left_cell].some(half => {
        if (half?.Is_Available !== false || utils.isBlockUnit(half.STAY_STATUS_CODE)) {
            return false;
        }
        const from_date = half.room?.from_date;
        const to_date = half.room?.to_date;
        return !!from_date && !!to_date && from_date <= date && date < to_date;
    });
}
/**
 * A room type's booked and total units. The total is its active units — never `exposed_inventory.total`, which counts
 * inactive ones too. Booked is the inventory's count, else counted from the active units' cells.
 */
function roomTypeOccupancy(roomType, date, flags) {
    const inventory = roomType.exposed_inventory ?? {};
    const units = activeUnits(roomType, flags);
    return {
        booked: typeof inventory.booked === 'number' ? inventory.booked : units.filter(unit => isBookedOn(unit.calendar_cell, date)).length,
        total: units.length,
    };
}
function occupancyOf(roomTypes, date, flags) {
    let booked = 0;
    let total = 0;
    for (const roomType of roomTypes) {
        const figure = roomTypeOccupancy(roomType, date, flags);
        booked += figure.booked;
        total += figure.total;
    }
    return { booked, total, percent: total > 0 ? (booked / total) * 100 : 0 };
}
/**
 * The day's occupancy across the active units of active room types, real and virtual apart. A room type is virtual when the
 * calendar flags it (`is_virtual`) or its id is in `flags.virtualIds`. `virtual` is `undefined` when no room type is virtual.
 */
function computeOccupancy(roomTypes, date, flags = {}) {
    const active = activeRoomTypes(roomTypes);
    const isVirtual = (rt) => rt.is_virtual ?? (rt.id != null && !!flags.virtualIds?.has(rt.id));
    const virtual = active.filter(isVirtual);
    return {
        real: occupancyOf(active.filter(rt => !isVirtual(rt)), date, flags),
        virtual: virtual.length ? occupancyOf(virtual, date, flags) : undefined,
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
        occupancy: computeOccupancy(active, date, flags),
    };
}
/** Revenue per available room = ADR × occupancy. */
function computeRevPar(adr, occupancyPercent) {
    return (adr * occupancyPercent) / 100;
}

/**
 * Data source for the dashboard widgets. Each method covers one day (`params.date`).
 */
class DashboardService {
    bookingService = new booking_service.BookingService();
    bookingListingService = new index.BookingListingService();
    propertyService = new index$1.PropertyService();
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
        const roomTypes = calendarData.calendar_data.property?.roomtypes ?? [];
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
const bookingService = new booking_service.BookingService();
const dashboardService = new DashboardService();
/**
 * Whether the property uses the front desk. Known only once the property has loaded, so the first load
 * of a property waits on `ready` before choosing an endpoint; later loads decide straight away.
 */
async function isFrontDesk(ready) {
    if (!calendarData.calendar_data.property) {
        await ready;
    }
    return calendarData.calendar_data.property ? !!calendarData.calendar_data.property.is_frontdesk_enabled : true;
}
async function fetchArrivals(propertyId, date, ready) {
    if (await isFrontDesk(ready)) {
        return bookingService.getRoomsToCheckIn({
            property_id: propertyId?.toString(),
            check_in_date: date,
            page_index: arrivals_store.arrivalsStore.pagination.currentPage,
            page_size: arrivals_store.arrivalsStore.pagination.pageSize,
        });
    }
    // The dashboard hides pagination, so the loaded page is the total.
    const bookings = await dashboardService.getArrivals({ property_id: propertyId, date, language: locale_controller.LocaleController.language });
    return { bookings, total_count: bookings.length };
}
async function fetchDepartures(propertyId, date, ready) {
    if (await isFrontDesk(ready)) {
        return bookingService.getRoomsToCheckout({
            property_id: propertyId?.toString(),
            check_out_date: date,
            page_index: departures_store.departuresStore.pagination.currentPage,
            page_size: departures_store.departuresStore.pagination.pageSize,
        });
    }
    const bookings = await dashboardService.getDepartures({ property_id: propertyId, date, language: locale_controller.LocaleController.language });
    return { bookings, total_count: bookings.length };
}
async function loadArrivals(propertyId, date, ready) {
    if (arrivals_store.arrivalsStore.today !== date) {
        arrivals_store.setArrivalsReferenceDate(date);
    }
    const { bookings, total_count } = await fetchArrivals(propertyId, date, ready);
    await ready;
    // A newer day was requested while this one was in flight.
    if (arrivals_store.arrivalsStore.today !== date) {
        return;
    }
    arrivals_store.setArrivalsTotal(total_count ?? 0);
    arrivals_store.initializeArrivalsStore(bookings);
}
async function loadDepartures(propertyId, date, ready) {
    if (departures_store.departuresStore.today !== date) {
        // Unlike the arrivals setter, the departures one keeps the current page.
        departures_store.setDeparturesReferenceDate(date);
        departures_store.setDeparturesPage(1);
    }
    const { bookings, total_count } = await fetchDepartures(propertyId, date, ready);
    await ready;
    if (departures_store.departuresStore.today !== date) {
        return;
    }
    departures_store.setDepartureTotal(total_count ?? 0);
    departures_store.initializeDeparturesStore(bookings);
}

exports.DASHBOARD_PAGE_SIZE = DASHBOARD_PAGE_SIZE;
exports.DATE_CHANGE_DEBOUNCE_MS = DATE_CHANGE_DEBOUNCE_MS;
exports.DashboardService = DashboardService;
exports.MAX_DAY_OFFSET = MAX_DAY_OFFSET;
exports.computeRevPar = computeRevPar;
exports.countArrivingUnits = countArrivingUnits;
exports.countDepartingUnits = countDepartingUnits;
exports.countOverdueArrivals = countOverdueArrivals;
exports.countOverdueDepartures = countOverdueDepartures;
exports.countRooms = countRooms;
exports.countUnassignedArrivals = countUnassignedArrivals;
exports.isCancellationOn = isCancellationOn;
exports.loadArrivals = loadArrivals;
exports.loadDepartures = loadDepartures;
exports.sumOccupancy = sumOccupancy;
