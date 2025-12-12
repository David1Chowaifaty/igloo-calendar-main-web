import { EventEmitter } from '../../stencil-public-runtime';
import { Booking } from "../../models/booking.dto";
export declare class IrBookingBillingRecipient {
    booking: Booking;
    selectedRecipient: string;
    rooms: Booking['rooms'];
    recipientChange: EventEmitter<string>;
    private initialValue;
    private bookingCompanyFormRef;
    componentWillLoad(): void;
    handleBookingChange(): void;
    private initializeDefaultValue;
    private handleRecipientChange;
    private filterRoomGuests;
    handleBookingRecipient(): void;
    render(): any;
}
