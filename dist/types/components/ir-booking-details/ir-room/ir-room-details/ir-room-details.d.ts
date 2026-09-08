import { EventEmitter } from '../../../../stencil-public-runtime';
import { Booking, Room, SharedPerson } from "../../../../models/booking.dto";
import { SetupEntries } from "../../../../models/IBooking";
export declare class IrRoomDetails {
    room: Room;
    booking: Booking;
    mainGuest: SharedPerson;
    bedPreferences: SetupEntries[];
    language: string;
    includeDepartureTime: boolean;
    hasCheckIn: boolean;
    hasCheckOut: boolean;
    checkIn: EventEmitter<void>;
    checkOut: EventEmitter<void>;
    viewGuests: EventEmitter<void>;
    openArrivalDialog: EventEmitter<void>;
    openDepartureDialog: EventEmitter<void>;
    private formatVariation;
    private getBedName;
    render(): any;
}
