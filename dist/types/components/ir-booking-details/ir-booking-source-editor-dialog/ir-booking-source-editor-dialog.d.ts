import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrBookingSourceEditorDialog {
    booking: Booking;
    resetBookingEvt: EventEmitter<null>;
    open: boolean;
    isLoading: boolean;
    openDialog(): Promise<void>;
    closeDialog(): Promise<void>;
    render(): any;
}
