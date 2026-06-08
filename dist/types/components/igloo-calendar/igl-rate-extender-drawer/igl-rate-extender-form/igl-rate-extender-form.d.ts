import { Booking, Day, Room } from "../../../../models/booking.dto";
import { IRoomNightsDataEventPayload } from "../../../../models/property-types";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglRateExtenderForm {
    bookingNumber: string;
    propertyId: number;
    language: string;
    identifier: string;
    toDate: string;
    fromDate: string;
    pool: string;
    defaultDates: {
        from_date: string;
        to_date: string;
    };
    booking: Booking;
    selectedRoom: Room;
    rates: Day[];
    isLoading: boolean;
    initialLoading: boolean;
    inventory: number | null;
    isEndDateBeforeFromDate: boolean;
    defaultTotalNights: number;
    dates: {
        from_date: Date;
        to_date: Date;
    };
    closeRoomNightsDialog: EventEmitter<IRoomNightsDataEventPayload>;
    loadingChanged: EventEmitter<boolean>;
    private bookingService;
    componentWillLoad(): void;
    private init;
    private handleInput;
    private fetchBookingAvailability;
    private disabled;
    private showArrow;
    private handleRoomConfirmation;
    render(): any;
}
