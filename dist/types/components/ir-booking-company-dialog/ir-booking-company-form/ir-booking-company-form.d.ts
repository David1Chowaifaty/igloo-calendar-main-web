import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking } from "../../../models/booking.dto";
export declare class IrBookingCompanyForm {
    booking: Booking;
    formId: string;
    open: boolean;
    isLoading: boolean;
    formData: Pick<Booking, 'company_name' | 'company_tax_nbr'>;
    resetBookingEvt: EventEmitter<Booking>;
    private bookingService;
    componentWillLoad(): void;
    private updateGuest;
    private saveCompany;
    render(): any;
}
