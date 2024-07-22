import { EventEmitter } from '../../stencil-public-runtime';
import { Booking } from "../../models/booking.dto";
export declare class IrBookingExtraNote {
    booking: Booking;
    isLoading: boolean;
    note: string;
    closeModal: EventEmitter<null>;
    resetBookingData: EventEmitter<Booking | null>;
    private bookingService;
    componentWillLoad(): void;
    private setNote;
    private savePrivateNote;
    render(): any;
}
