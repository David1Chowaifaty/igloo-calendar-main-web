import { B as BookingService } from './booking.service-JibLv8pK.js';
import { a as arrivalsStore, b as setArrivalsReferenceDate, c as setArrivalsTotal, i as initializeArrivalsStore } from './arrivals.store-D5qiSsp3.js';
import { d as departuresStore, a as setDeparturesReferenceDate, b as setDeparturesPage, c as setDepartureTotal, i as initializeDeparturesStore } from './departures.store-DIH0HoXd.js';
import { R as ROOM_IN_OUT } from './booking.dto-DQx6bzbY.js';
import { i as isBlockUnit } from './utils-CAiEa-WB.js';

/*
 * Loaders for the dashboard panels backed by existing endpoints. They write into the same global
 * stores `ir-arrivals-table` / `ir-departures-table` render from, so the root (date change, refresh)
 * and the departures panel (after a check-out) share one code path.
 *
 * `ready` lets the request go out before `calendar_data.property` has loaded: the store initialisers
 * (canCheckIn / canCheckout) read it, so the response is only stored once `ready` settles.
 */
const bookingService = new BookingService();
/**
 * Page size the dashboard requests. Card counts are computed from the loaded page,
 * so it's large enough to hold a normal property's arrivals / departures for one day.
 */
const DASHBOARD_PAGE_SIZE = 100;
async function loadArrivals(propertyId, date, ready) {
    if (arrivalsStore.today !== date) {
        setArrivalsReferenceDate(date);
    }
    const { bookings, total_count } = await bookingService.getRoomsToCheckIn({
        property_id: propertyId?.toString(),
        check_in_date: date,
        page_index: arrivalsStore.pagination.currentPage,
        page_size: arrivalsStore.pagination.pageSize,
    });
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
    const { bookings, total_count } = await bookingService.getRoomsToCheckout({
        property_id: propertyId?.toString(),
        check_out_date: date,
        page_index: departuresStore.pagination.currentPage,
        page_size: departuresStore.pagination.pageSize,
    });
    await ready;
    if (departuresStore.today !== date) {
        return;
    }
    setDepartureTotal(total_count ?? 0);
    initializeDeparturesStore(bookings);
}

/** How many days either side of today the dashboard's day picker reaches. */
const MAX_DAY_OFFSET = 2;
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
 * Rooms whose arrival day is before `today` and that still aren't checked in — the rows the arrivals table marks overdue.
 * `today` is the real day, not the dashboard's selected one, so the card agrees with the table.
 */
function countOverdueArrivals(bookings, today) {
    return roomsOf(bookings).filter(room => room.from_date < today && (room.in_out?.code ?? ROOM_IN_OUT.IDLE) === ROOM_IN_OUT.IDLE).length;
}
/** Rooms whose departure day is before `today` and that are still checked in — the rows the departures table marks overdue. */
function countOverdueDepartures(bookings, today) {
    return roomsOf(bookings).filter(room => room.to_date < today && room.in_out?.code === ROOM_IN_OUT.CHECKIN).length;
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
 * Counts the units blocked on `date` across every room type, each unit once: out of service (status 004) and blocked
 * (the other block statuses, 002 and 003).
 */
function countBlockedUnits(roomTypes, date) {
    let outOfService = 0;
    let blocked = 0;
    for (const unit of (roomTypes ?? []).flatMap(rt => rt.physicalrooms ?? [])) {
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
 * The day's unit breakdown: available and total units summed from the calendar's per-room-type `exposed_inventory`
 * (a count no room type returns stays `undefined` rather than reading as 0), out of service and blocked counted from the units' cells.
 */
function sumUnits(roomTypes, date) {
    const inventories = (roomTypes ?? []).map(rt => rt.exposed_inventory).filter(Boolean);
    const sum = (field) => (inventories.some(inv => typeof inv[field] === 'number') ? inventories.reduce((total, inv) => total + (inv[field] ?? 0), 0) : undefined);
    return {
        available: sum('rts') ?? 0,
        ...countBlockedUnits(roomTypes, date),
        total: sum('total'),
    };
}
/** Revenue per available room = ADR × occupancy. */
function computeRevPar(adr, occupancyPercent) {
    return (adr * occupancyPercent) / 100;
}

export { DASHBOARD_PAGE_SIZE as D, MAX_DAY_OFFSET as M, countRooms as a, DATE_CHANGE_DEBOUNCE_MS as b, computeRevPar as c, loadArrivals as d, sumOccupancy as e, filterInHouse as f, countOverdueDepartures as g, countDepartingUnits as h, isCancellationOn as i, countOverdueArrivals as j, countUnassignedArrivals as k, loadDepartures as l, countArrivingUnits as m, sumUnits as s };
