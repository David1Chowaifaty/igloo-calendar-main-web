import { Extras, Room } from './../models/booking.dto';
import { MonthType, STATUS, RoomBookingDetails, RoomBlockDetails } from '../models/IBooking';
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
export declare function getPrivateNote(extras: Extras[] | null): any;
export declare function transformNewBooking(data: any): RoomBookingDetails[];
export declare function transformNewBLockedRooms(data: any): Promise<RoomBlockDetails>;
export declare function calculateDaysBetweenDates(from_date: string, to_date: string): number;
export declare function compareTime(date1: Date, date2: Date): boolean;
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
export declare function createDateWithOffsetAndHour(offset: number, hour: number): Date;
