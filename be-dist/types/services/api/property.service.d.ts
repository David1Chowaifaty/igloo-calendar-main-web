import { TExposedBookingAvailability } from "../../components/ir-booking-engine/ir-booking-page/ir-availibility-header/availability";
import { Token } from "../../models/Token";
import { Booking } from "../../models/booking.dto";
import { DataStructure } from "../../models/common";
import { ISetupEntries } from "../../models/property";
import { Colors } from '../app/colors.service';
export declare class PropertyService extends Token {
    colors: Colors;
    getExposedProperty(params: {
        id: number;
        language: string;
        aname: string | null;
        perma_link: string | null;
    }, initTheme?: boolean): Promise<any>;
    getExposedBookingAvailability(params: TExposedBookingAvailability): Promise<DataStructure>;
    getExposedBooking(params: {
        booking_nbr: string;
        language: string;
    }, withExtras?: boolean): Promise<Booking>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    private generateDays;
    private extractFirstNameAndLastName;
    private filterRooms;
    private convertPickup;
    bookUser(): Promise<any>;
    getExposedGuest(): Promise<void>;
}
