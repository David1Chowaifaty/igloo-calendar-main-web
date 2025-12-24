import { Booking, Room } from "../../../models/booking.dto";
import { BookingEditorMode } from './types';
export declare class IRBookingEditorService {
    /** Current booking editor mode */
    private mode;
    /** Lazy-initialized variation service */
    private variationService?;
    constructor(mode?: BookingEditorMode);
    setMode(mode: BookingEditorMode): void;
    /**
     * Checks whether a string contains underscores.
     * Used to validate phone numbers.
     */
    private hasUnderscore;
    /**
     * Generates daily rate entries for a reserved room.
     */
    private calculateAmount;
    /**
     * Builds room payloads based on selected rate plans
     * and booking draft context.
     */
    private generateDailyRates;
    private getBookedRooms;
    isEventType(mode: BookingEditorMode | BookingEditorMode[]): boolean;
    /**
     * Prepares payload parameters for the booking user service
     * based on the current editor mode.
     */
    prepareBookUserServiceParams({ check_in, booking, room, unitId }: {
        check_in: boolean;
        booking: Booking;
        room: Room;
        unitId: string;
    }): Promise<any>;
}
