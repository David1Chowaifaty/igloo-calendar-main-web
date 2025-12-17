import { Booking } from "../../models/booking.dto";
import { EventEmitter } from '../../stencil-public-runtime';
import { BookingInvoiceInfo } from '../ir-invoice/types';
export declare class IrBilling {
    booking: Booking;
    isOpen: 'invoice';
    isLoading: 'page' | 'void';
    invoiceInfo: BookingInvoiceInfo;
    selectedInvoice: string;
    billingClose: EventEmitter<void>;
    private bookingService;
    private _id;
    componentWillLoad(): void;
    handleInvoiceCreation(e: CustomEvent): Promise<void>;
    private init;
    private voidInvoice;
    private get invoices();
    private printInvoice;
    render(): any;
}
