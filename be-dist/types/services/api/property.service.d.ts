import { TExposedBookingAvailability } from "../../components/ir-booking-engine/ir-booking-page/ir-availibility-header/availability";
import { Token } from "../../models/Token";
import { Booking } from "../../models/booking.dto";
import { DataStructure } from "../../models/commun";
import { ISetupEntries } from "../../models/property";
import { Colors } from '../app/colors.service';
import { TGuest } from "../../models/user_form";
export declare class PropertyService extends Token {
    private propertyHelpers;
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
    getExposedBookingAvailability(props: {
        params: TExposedBookingAvailability;
        identifier: string;
        rp_id?: number;
        rt_id?: number;
        mode: 'modify_rt' | 'default';
        adultChildConstraint?: string;
    }): Promise<DataStructure>;
    getExposedBooking(params: {
        booking_nbr: string;
        language: string;
    }, withExtras?: boolean): Promise<Booking>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    private filterRooms;
    editExposedGuest(guest: TGuest, book_nbr: string): Promise<any>;
    bookUser(): Promise<any>;
    getExposedGuest(): Promise<void>;
}
