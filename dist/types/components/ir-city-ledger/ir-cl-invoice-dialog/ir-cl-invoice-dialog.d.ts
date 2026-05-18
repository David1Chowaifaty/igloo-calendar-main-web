import { EventEmitter } from '../../../stencil-public-runtime';
import { type FiscalDocument } from "../../../services/city-ledger/index";
import { ClFiscalDocumentPreviewRequest } from '../ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types';
import { Room } from "../../../models/booking.dto";
export declare class IrClInvoiceDialog {
    agentId: number | null;
    mode: 'booking' | 'default';
    bookingNbr: string | null;
    startDate: string | null;
    endDate: string | null;
    currencyId: number | null;
    rooms: Room[];
    isLoading: boolean;
    error: string | null;
    noResults: boolean;
    isProforma: boolean;
    private get allRoomsCheckedOut();
    invoiceIssued: EventEmitter<FiscalDocument>;
    clFiscalDocumentPreview: EventEmitter<ClFiscalDocumentPreviewRequest>;
    private dialogRef;
    private formRef;
    private cityLedgerService;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    private handleSubmit;
    private handleProforma;
    render(): any;
}
