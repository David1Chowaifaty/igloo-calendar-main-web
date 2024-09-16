import { Token } from "../../models/Token";
export declare class BookingListingService extends Token {
    getExposedGuestBookings(params: {
        property_id: string | number;
        start_row: number;
        end_row: number;
        total_count: number;
        language: string;
    }): Promise<{
        bookings: any;
        total_count: any;
    }>;
}
