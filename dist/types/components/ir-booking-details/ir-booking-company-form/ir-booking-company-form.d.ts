import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking } from "../../../models/booking.dto";
export declare class IrBookingCompanyForm {
    booking: Booking;
    open: boolean;
    isLoading: boolean;
    formData: Pick<Booking, 'company_name' | 'company_tax_nbr'>;
    resetBookingEvt: EventEmitter<Booking>;
    companyFormClosed: EventEmitter<void>;
    private bookingService;
    componentWillLoad(): void;
    openCompanyForm(): Promise<void>;
    private updateGuest;
    private saveCompany;
    render(): any;
}
