import { TExposedBookingAvailability } from "../../components/ir-booking-engine/ir-booking-page/ir-availability-header/availability";
import { Booking } from "../../models/booking.dto";
import { ISetupEntries } from "../../models/property";
import { Colors } from '../app/colors.service';
import { TGuest } from "../../models/user_form";
import { DataStructure } from "../../models/common";
export declare class PropertyService {
    private propertyHelpers;
    private static initialized;
    colors: Colors;
    getExposedProperty(params: {
        id: number;
        language: string;
        aname: string | null;
        perma_link: string | null;
    }, initTheme?: boolean): Promise<any>;
    getExposedNonBookableNights(params: {
        from_date: string;
        to_date: string;
        porperty_id: number;
        aname: string;
        perma_link: string;
    }): Promise<any>;
    getExposedBookingAvailability(props: TExposedBookingAvailability): Promise<DataStructure>;
    getExposedBooking(params: {
        booking_nbr: string;
        language: string;
        currency: string;
    }, withExtras?: boolean): Promise<Booking>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    private filterRooms;
    editExposedGuest(guest: TGuest, book_nbr: string): Promise<any>;
    bookUser(): Promise<any>;
    getExposedGuest(): Promise<void>;
}
