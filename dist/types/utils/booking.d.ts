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
