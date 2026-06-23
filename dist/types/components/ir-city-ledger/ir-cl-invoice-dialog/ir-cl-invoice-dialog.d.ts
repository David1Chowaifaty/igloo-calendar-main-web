import { EventEmitter } from '../../../stencil-public-runtime';
import { type FiscalDocument } from "../../../services/city-ledger/index";
import { ClFiscalDocumentPreviewRequest } from '../ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types';
import { Booking } from "../../../models/booking.dto";
export declare class IrClInvoiceDialog {
    agentId: number | null;
    mode: 'booking' | 'default';
    booking: Booking;
    startDate: string | null;
    endDate: string | null;
    currencyId: number | null;
    isLoading: boolean;
    error: string | null;
    noResults: boolean;
    isProforma: boolean;
    /**
     * Determines whether a final (non-proforma) invoice can be issued, based on
     * whether every room in the booking has effectively been checked out.
     *
     * Resolution order:
     * 1. When not in `booking` mode, or the booking has no rooms, there is nothing
     *    blocking a final invoice — returns `true`.
     * 2. When today is on or before the booking's to-date and at least one room is
     *    still checked in, the stay is ongoing — returns `false`.
     * 3. When today is exactly the booking's to-date and no room has been set
     *    (all rooms are `NotSet`), the invoice is allowed — returns `true`.
     * 4. Otherwise falls back to the default rule: `true` once today is past the
     *    booking's to-date, else `true` only when every room is checked out.
     *
     * @returns `true` when all rooms are considered checked out and a final invoice may be issued.
     */
    private get allRoomsCheckedOut();
    invoiceIssued: EventEmitter<FiscalDocument>;
    fiscalDocumentIssued: EventEmitter<void>;
    clFiscalDocumentPreview: EventEmitter<ClFiscalDocumentPreviewRequest>;
    private dialogRef;
    private formRef;
    private readonly invoicedClTxTypeCode;
    private cityLedgerService;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    private handleSubmit;
    private handleProforma;
    render(): any;
}
