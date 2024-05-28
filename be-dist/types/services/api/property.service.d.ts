import { TExposedBookingAvailability } from "../../components/ir-booking-engine/ir-booking-page/ir-availibility-header/availability";
import { Token } from "../../models/Token";
import { Booking } from "../../models/booking.dto";
import { DataStructure } from "../../models/common";
import { ISetupEntries } from "../../models/property";
export declare class PropertyService extends Token {
    getExposedProperty(params: {
        id: number;
        language: string;
    }): Promise<any>;
    getExposedBookingAvailability(params: TExposedBookingAvailability): Promise<DataStructure>;
    getExposedBooking(params: {
        booking_nbr: string;
        language: string;
    }): Promise<Booking>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    private generateDays;
    filterRooms(): any[];
    private convertPickup;
    bookUser(): Promise<any>;
    getExposedGuest(): Promise<any>;
}
