import { Extras, Room } from './../models/booking.dto';
import { MonthType, STATUS, RoomBookingDetails, RoomBlockDetails } from '../models/IBooking';
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
