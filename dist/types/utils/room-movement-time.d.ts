import type { Booking, Room } from "../models/booking.dto";
/** The room's requested arrival time in minutes after midnight, or `null` when the guest gave none. */
export declare function roomArrivalMinutes(room: Room): number | null;
/** The room's requested departure time in minutes after midnight, or `null` when the guest gave none. */
export declare function roomDepartureMinutes(room: Room): number | null;
/**
 * Splits bookings into one-room bookings ordered by each room's time: rooms without a time first, then earliest to latest.
 * The sort is stable, so rooms with the same time keep their original order.
 */
export declare function sortRoomsByTime(bookings: Booking[], minutesOf: (room: Room) => number | null): Booking[];
