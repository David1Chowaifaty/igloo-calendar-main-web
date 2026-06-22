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
    private get allRoomsCheckedOut();
    invoiceIssued: EventEmitter<FiscalDocument>;
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
