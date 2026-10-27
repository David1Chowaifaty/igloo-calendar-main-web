import { type Booking } from "../../models/booking.dto";
import type { CalendarCellType } from "../../models/IBooking";
import type { RoomType } from "../../models/property";
import type { DashboardOccupancy, DashboardUnits } from "../../services/dashboard/types";
import type { RealtimeEventMap } from "../../services/realtime/types";
import type { ISODate } from "../../utils/calendar-dates";
/** How many days either side of today the dashboard's day picker reaches. */
export declare const MAX_DAY_OFFSET = 2;
/**
 * Page size the dashboard requests. Card counts are computed from the loaded page,
 * so it's large enough to hold a normal property's arrivals / departures for one day.
 */
export declare const DASHBOARD_PAGE_SIZE = 100;
/** Quiet time after the last day change before the day is fetched, so stepping through several days only loads the last. */
export declare const DATE_CHANGE_DEBOUNCE_MS = 300;
/**
 * Rooms still waiting to check in by `date` (arriving that day or overdue, as Get_Rooms_To_Check_In returns them)
 * that have no unit assigned yet — counted per room, not per booking.
 */
export declare function countUnassignedArrivals(bookings: Booking[], date: ISODate): number;
/**
 * Rooms whose arrival day is before `date` and that still aren't checked in — the rows the arrivals table marks overdue.
 * `date` is the dashboard's selected day, which the table also measures overdue against (the store's day), so the card agrees with it.
 */
export declare function countOverdueArrivals(bookings: Booking[], date: ISODate): number;
/** Rooms whose departure day is before `date` (the selected day) and that are still checked in — the rows the departures table marks overdue. */
export declare function countOverdueDepartures(bookings: Booking[], date: ISODate): number;
/** Units arriving on `date` — counted per room, not per booking. Non-PMS properties count these instead of the rooms to check in. */
export declare function countArrivingUnits(bookings: Booking[], date: ISODate): number;
/** Units departing on `date` — counted per room, not per booking. */
export declare function countDepartingUnits(bookings: Booking[], date: ISODate): number;
/** Whether a booking status change cancels a booking whose stay covers `date`, arrival and departure days included. */
export declare function isCancellationOn({ status_code, from_date, to_date }: RealtimeEventMap['CHANGE_IN_BOOK_STATUS'], date: ISODate): boolean;
/** Rooms across all bookings — the in-house card counts rooms, not bookings. */
export declare function countRooms(bookings: Booking[]): number;
/** Adults, children and infants across all rooms — the in-house card's Ad-Ch-In line. */
export declare function sumOccupancy(bookings: Booking[]): {
    adults: number;
    children: number;
    infants: number;
};
/**
 * Keeps only the rooms that are checked in (`in_out` 001) and whose stay covers `date`, departure day included
 * (a departing guest stays in-house until checked out). Bookings left with no such room are dropped.
 */
export declare function filterInHouse(bookings: Booking[], date: ISODate): Booking[];
/** A calendar day's unit: its id, active flag and half-day cells. */
export type CalendarDayUnit = {
    id?: number;
    is_active?: boolean;
    calendar_cell?: CalendarCellType | null;
};
/** A calendar day's room type: its active flag, exposed inventory and each unit's half-day cells. */
export type CalendarDayRoomType = Pick<RoomType, 'exposed_inventory' | 'is_active'> & Partial<Pick<RoomType, 'id' | 'is_virtual'>> & {
    physicalrooms?: CalendarDayUnit[] | null;
};
/**
 * What the property's own room types say about the calendar's, for a calendar that leaves the flags out:
 * the virtual room types' ids and the inactive units' ids.
 */
export type PropertyFlags = {
    virtualIds?: ReadonlySet<number>;
    inactiveUnitIds?: ReadonlySet<number>;
};
/**
 * Counts the units blocked on `date` across every active unit of every active room type, each unit once: out of service
 * (status 004) and blocked (the other block statuses, 002 and 003).
 */
export declare function countBlockedUnits(roomTypes: CalendarDayRoomType[], date: ISODate, flags?: PropertyFlags): Pick<DashboardUnits, 'outOfService' | 'blocked'>;
/**
 * The day's occupancy across the active units of active room types, real and virtual apart. A room type is virtual when the
 * calendar flags it (`is_virtual`) or its id is in `flags.virtualIds`. `virtual` is `undefined` when no room type is virtual.
 */
export declare function computeOccupancy(roomTypes: CalendarDayRoomType[], flags?: PropertyFlags): DashboardOccupancy;
/**
 * The day's unit breakdown across active room types: available and total units summed from the calendar's per-room-type `exposed_inventory`
 * (a count no room type returns stays `undefined` rather than reading as 0), out of service and blocked counted from the active units' cells,
 * and the occupancy of real and virtual room types (see `computeOccupancy`).
 */
export declare function sumUnits(roomTypes: CalendarDayRoomType[], date: ISODate, flags?: PropertyFlags): DashboardUnits;
/** Revenue per available room = ADR × occupancy. */
export declare function computeRevPar(adr: number, occupancyPercent: number): number;
/**
 * Count for a summary card, in the active language and digit script: in full up to 99,999 ("98,765"), compact beyond
 * ("123.5K", "1.2M"); empty for a missing value.
 */
export declare function formatCardCount(value: number | null | undefined): string;
