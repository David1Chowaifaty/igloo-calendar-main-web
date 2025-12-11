import { EventEmitter } from '../../stencil-public-runtime';
import { Booking } from "../../models/booking.dto";
export declare class IrBookingCompanyDialog {
    booking: Booking;
    open: boolean;
    companyFormClosed: EventEmitter<void>;
    resetBookingEvt: EventEmitter<Booking>;
    openCompanyForm(): Promise<void>;
    render(): any;
}
