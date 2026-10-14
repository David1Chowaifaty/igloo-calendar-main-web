import { type Booking } from "../../models/booking.dto";
import type { CalendarCellType } from "../../models/IBooking";
import type { RoomType } from "../../models/property";
import type { DashboardUnits } from "../../services/dashboard/types";
import type { ISODate } from "../../utils/calendar-dates";
export declare const MAX_DAY_OFFSET = 5;
/** Quiet time after the last day change before the day is fetched, so stepping through several days only loads the last. */
export declare const DATE_CHANGE_DEBOUNCE_MS = 300;
/**
 * Rooms still waiting to check in by `date` (arriving that day or overdue, as Get_Rooms_To_Check_In returns them)
 * that have no unit assigned yet — counted per room, not per booking.
 */
export declare function countUnassignedArrivals(bookings: Booking[], date: ISODate): number;
/**
 * Rooms whose arrival day is before `today` and that still aren't checked in — the rows the arrivals table marks overdue.
 * `today` is the real day, not the dashboard's selected one, so the card agrees with the table.
 */
export declare function countOverdueArrivals(bookings: Booking[], today: ISODate): number;
/** Rooms whose departure day is before `today` and that are still checked in — the rows the departures table marks overdue. */
export declare function countOverdueDepartures(bookings: Booking[], today: ISODate): number;
/** Units departing on `date` — counted per room, not per booking. */
export declare function countDepartingUnits(bookings: Booking[], date: ISODate): number;
/** Rooms across all bookings — the in-house card counts rooms, not bookings. */
export declare function countRooms(bookings: Booking[]): number;
/**
 * Keeps only the rooms that are checked in (`in_out` 001) and whose stay covers `date`, departure day included
 * (a departing guest stays in-house until checked out). Bookings left with no such room are dropped.
 */
export declare function filterInHouse(bookings: Booking[], date: ISODate): Booking[];
/** A calendar day's room type: its exposed inventory plus each unit's half-day cells. */
export type CalendarDayRoomType = Pick<RoomType, 'exposed_inventory'> & {
    physicalrooms?: {
        calendar_cell?: CalendarCellType | null;
    }[] | null;
};
/**
 * Counts the units blocked on `date` across every room type, each unit once: out of service (status 004) and blocked
 * (the other block statuses, 002 and 003).
 */
export declare function countBlockedUnits(roomTypes: CalendarDayRoomType[], date: ISODate): Pick<DashboardUnits, 'outOfService' | 'blocked'>;
/**
 * The day's unit breakdown: available and total units summed from the calendar's per-room-type `exposed_inventory`
 * (a count no room type returns stays `undefined` rather than reading as 0), out of service and blocked counted from the units' cells.
 */
export declare function sumUnits(roomTypes: CalendarDayRoomType[], date: ISODate): DashboardUnits;
/** Revenue per available room = ADR × occupancy. */
export declare function computeRevPar(adr: number, occupancyPercent: number): number;
