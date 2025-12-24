import { EventEmitter } from '../../../../stencil-public-runtime';
import { BookingEditorMode } from '../types';
import { Booking } from "../../../../models/booking.dto";
import { ZodSchema } from 'zod';
export declare class IrBookingEditorHeader {
    /** Booking context used for edit, add-room, and split flows */
    booking: Booking;
    /** Controls header behavior and date constraints */
    mode: BookingEditorMode;
    /** Fixed check-in date (YYYY-MM-DD), if applicable */
    checkIn: string;
    /** Fixed check-out date (YYYY-MM-DD), if applicable */
    checkOut: string;
    isLoading: boolean;
    bookings: Booking[];
    datesSchema: ZodSchema;
    guestSelected: EventEmitter<Booking>;
    checkAvailability: EventEmitter<void>;
    private bookingService;
    private adultsSchema;
    private readonly bookingEditorService;
    private BookedByGuestPickerSchema;
    private pickerRef;
    componentWillLoad(): void;
    handleBookingChange(newValue: any, oldValue: any): void;
    handleModeChange(newValue: any, oldValue: any): void;
    private createDatesSchema;
    private handleBookingSearch;
    private handleSubmit;
    private handleDateRangeChange;
    private handleSourceChange;
    private handleAdultsChange;
    private handleChildrenChange;
    private stopEvent;
    private get minDate();
    private get maxDate();
    private get childrenSelectPlaceholder();
    private selectGuest;
    render(): any;
}
