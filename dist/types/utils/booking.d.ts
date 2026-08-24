import { Extras, Room } from './../models/booking.dto';
import { MonthType, CalendarCellType, STATUS, RoomBookingDetails, RoomBlockDetails } from '../models/IBooking';
/** `_SVC_CATEGORY` short code for Day Use, matched against `calendar_data.property.tax_categories` / `ExtraService.category.code`. */
export declare const DAY_USE_CATEGORY_CODE = "DUZ";
export type SplitRole = 'fullSplit' | 'leftSplit' | 'rightSplit' | null;
export type SplitIndex = {
    parentOf: Map<string, string | null>;
    childrenOf: Map<string, string[]>;
    roleOf: Map<string, SplitRole>;
    chainOf: Map<string, string[]>;
    heads: string[];
};
/**
 * Builds an index of split chains for a booking's rooms.
 * @param rooms - The booking's rooms array.
 * @returns A {@link SplitIndex} with constant-time lookups, or `null` if no rooms are provided.
 */
export declare function buildSplitIndex(rooms: Room[]): SplitIndex | null;
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
export declare function getSplitRole(index: SplitIndex, identifier: string): SplitRole;
/**
 * Returns the full ordered chain (head → … → tail) containing the identifier.
 * If the identifier is unknown to the index, returns a single-element array with the identifier.
 *
 * @param index - A previously built {@link SplitIndex}.
 * @param identifier - The room identifier to query.
 * @returns An array of identifiers representing the chain.
 */
export declare function getSplitChain(index: SplitIndex, identifier: string): string[];
export declare function getMyBookings(months: MonthType[]): Promise<any[]>;
export declare const bookingStatus: Record<string, STATUS>;
export declare function formatName(firstName: string | null, lastName: string | null): string;
export declare function getRoomStatus(params: Pick<Room, 'in_out' | 'from_date' | 'to_date'> & {
    status_code: string;
}): STATUS;
/** A unit's same-day movement, derived from which half-day cells are occupied. `null` means neither — fully free or fully booked by one stay. */
export type DayUseUnitDayStatus = 'checkin' | 'checkout' | 'turnover' | null;
export interface DayUseUnitAvailability {
    available: boolean;
    /** @deprecated Use `dayStatus` (`'checkin' | 'turnover'`) — kept for callers that only care about the boolean. */
    hasUpcomingCheckIn: boolean;
    dayStatus: DayUseUnitDayStatus;
    /** Formatted clock time (`02:00 PM`) of the checkout happening today — set when `dayStatus` is `'checkout'` or `'turnover'`. */
    checkoutTime: string | null;
    /** Formatted clock time (`02:00 PM`) of the checkin happening today — set when `dayStatus` is `'checkin'` or `'turnover'`. */
    checkinTime: string | null;
}
/**
 * A unit is unavailable for day use only when both halves of the day share the same non-empty POOL
 * (one booking occupies the whole day) — two empty POOLs are NOT a match, since an empty POOL means
 * "nothing touches that half-day", not a shared identity.
 *
 * `dayStatus` classifies same-day movement from the occupied halves:
 * - `checkin` — left half empty, right half occupied (a fresh check-in later today).
 * - `checkout` — left half occupied, right half empty (a checkout earlier today).
 * - `turnover` — both halves occupied by different, non-blank POOLs (checkout then check-in same day).
 * It's always a subset of `available` (never set for the same-non-empty-POOL case).
 */
export declare function getDayUseUnitAvailability(calendarCell: CalendarCellType | null | undefined): DayUseUnitAvailability;
export declare function getPrivateNote(extras: Extras[] | null): any;
export declare function transformNewBooking(data: any): RoomBookingDetails[];
export declare function transformNewBLockedRooms(data: any): Promise<RoomBlockDetails>;
export declare function calculateDaysBetweenDates(from_date: string, to_date: string): number;
export declare function compareTime(date1: Date, date2: Date): boolean;
/**
 * Creates a Date object for today at the specified hour (and optional minute) in a given time zone.
 * The offset is the number of hours that the target time zone is ahead of UTC.
 *
 * For example, if offset = 3 and hour = 9, then the function returns a Date
 * which, when converted to the target time zone, represents 9:00.
 *
 * @param offset - The timezone offset in hours (e.g., 2, 3, etc.)
 * @param hour - The desired hour in the target time zone (0-23)
 * @param minute - The desired minute in the target time zone (0-59)
 * @returns Date object representing the target time (in UTC)
 */
export declare function createDateWithOffsetAndHour(offset: number, hour: number, minute?: number): Date;
