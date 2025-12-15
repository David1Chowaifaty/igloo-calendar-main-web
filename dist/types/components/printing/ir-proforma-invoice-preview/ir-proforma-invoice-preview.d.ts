import { Booking } from "../../../models/booking.dto";
import { BookingInvoiceInfo } from '../../ir-invoice/types';
import { IssueInvoiceProps } from "../../../services/booking-service/types";
type InvoicePayload = IssueInvoiceProps['invoice'];
export interface NightlyRate {
    date: string;
    amount: number;
}
export declare class IrProformaInvoicePreview {
    /**
     * Booking context used to display property, guest, and folio details.
     */
    booking: Booking;
    /**
     * Invoice payload emitted by `ir-invoice-form`.
     * Totals will fall back to booking data when omitted.
     */
    invoice?: InvoicePayload;
    /**
     * Property associated with the booking.
     */
    property: Booking['property'];
    /**
     * Optional metadata fetched via `getBookingInvoiceInfo`.
     * Used to display reference numbers (invoice/credit note/etc.).
     */
    invoiceInfo?: BookingInvoiceInfo;
    /**
     * Locale used for date formatting.
     */
    locale: string;
    /**
     * Optional footer text shown at the end of the preview.
     */
    footerNote?: string;
    invocableKeys: Set<string | number>;
    componentWillLoad(): void;
    handleInvoiceChange(): void;
    private get bookingNumber();
    private get CompanyLocation();
    private get guestPhoneNumber();
    private formatDisplayDate;
    private get issueDate();
    private renderPropertyCompanyHeader;
    private renderPropertyInfo;
    private formatBookingDates;
    private renderBillToSection;
    private renderCancellationPenalty;
    render(): any;
}
export {};
