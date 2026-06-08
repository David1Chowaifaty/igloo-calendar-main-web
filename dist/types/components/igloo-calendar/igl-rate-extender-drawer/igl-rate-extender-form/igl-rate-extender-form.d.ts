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
    /** Emits whether inventory is available for the additional nights (false when there is none). */
    availabilityChanged: EventEmitter<boolean>;
    private bookingService;
    private inputRefs;
    private shouldScrollToFirstEnabled;
    componentWillLoad(): void;
    componentDidRender(): void;
    /** Index of the first editable (non-disabled) night input, or -1 when none. */
    private get firstEnabledIndex();
    private init;
    private get hasInventory();
    private handleInput;
    private fetchBookingAvailability;
    private disabled;
    private showArrow;
    private handleRoomConfirmation;
    render(): any;
}
