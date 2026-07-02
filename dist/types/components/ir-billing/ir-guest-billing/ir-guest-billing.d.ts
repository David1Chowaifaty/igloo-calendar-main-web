import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { BookingInvoiceInfo } from '../../ir-invoice/types';
import { GuestDocumentPreviewRequest } from "../../ir-fiscal-documents/ir-guest-document-preview/types";
import type { UnifiedFolioRecord } from "../../../services/property/types";
export declare class IrGuestBilling {
    booking: Booking;
    isOpen: 'invoice';
    isLoading: 'page' | null;
    invoiceInfo: BookingInvoiceInfo;
    rows: UnifiedFolioRecord[];
    private fdTypes;
    voidedInvoices: Set<string>;
    voidedReceipts: Set<string>;
    billingClose: EventEmitter<void>;
    guestDocumentPreview: EventEmitter<GuestDocumentPreviewRequest>;
    /** Refreshes the wider booking-details tree. Emit with a Booking payload to skip ir-booking-details' full-page loading spinner. */
    resetBookingEvt: EventEmitter<Booking | null>;
    private bookingService;
    private propertyService;
    private _id;
    private voidDialogRef;
    componentWillLoad(): void;
    handleInvoiceCreation(e: CustomEvent): Promise<void>;
    private buildFolioParams;
    private init;
    private refreshInvoiceAndFolio;
    private handleDocumentVoided;
    private get fdTypeLabels();
    private get sortedRows();
    private printInvoice;
    private renderMoney;
    render(): any;
}
