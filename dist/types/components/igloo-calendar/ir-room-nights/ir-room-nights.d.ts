import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking, Day, Room } from "../../../models/booking.dto";
import { IRoomNightsDataEventPayload } from "../../../models/property-types";
export declare class IrRoomNights {
    bookingNumber: string;
    propertyId: number;
    language: string;
    identifier: string;
    toDate: string;
    fromDate: string;
    pool: string;
    ticket: string;
    defaultDates: {
        from_date: string;
        to_date: string;
    };
    bookingEvent: Booking;
    selectedRoom: Room;
    rates: Day[];
    isLoading: boolean;
    initialLoading: boolean;
    inventory: number | null;
    isEndDateBeforeFromDate: boolean;
    defaultTotalNights: number;
    isInputFocused: number;
    dates: {
        from_date: Date;
        to_date: Date;
    };
    closeRoomNightsDialog: EventEmitter<IRoomNightsDataEventPayload>;
    private bookingService;
    componentWillLoad(): void;
    isButtonDisabled(): boolean;
    init(): Promise<void>;
    handleInput(event: InputEvent, index: number): void;
    fetchBookingAvailability(from_date: string, to_date: string, rate_plan_id: number, selected_variation: string): Promise<number>;
    renderInputField(index: number, currency_symbol: string, day: Day): any;
    renderReadOnlyField(currency_symbol: string, day: Day): any;
    renderRateFields(index: number, currency_symbol: string, day: Day): any;
    renderDates(): any;
    handleRoomConfirmation(): Promise<void>;
    render(): any;
}
