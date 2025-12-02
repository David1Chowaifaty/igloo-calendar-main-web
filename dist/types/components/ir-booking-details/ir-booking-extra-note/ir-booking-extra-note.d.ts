import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking } from "../../../models/booking.dto";
export declare class IrBookingExtraNote {
    open: boolean;
    booking: Booking;
    isLoading: boolean;
    note: string;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<Booking | null>;
    private bookingService;
    componentWillLoad(): void;
    private setNote;
    private savePrivateNote;
    openDialog(): Promise<void>;
    closeDialog(): Promise<void>;
    render(): any;
}
