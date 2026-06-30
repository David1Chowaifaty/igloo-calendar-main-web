import { EventEmitter } from '../../../stencil-public-runtime';
import type { ClFiscalDocumentPreviewRequest } from "../../ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types";
import type { PaginationChangeEvent } from "../../ir-pagination/ir-pagination";
import type { ICurrency, IEntries } from "../../../models/property";
import type { FiscalDocumentRow, FiscalFolioType } from '../types';
import type { GuestDocumentPreviewRequest } from '../ir-guest-document-preview/types';
export declare class IrFiscalDocumentsTable {
    rows: FiscalDocumentRow[];
    currencies: ICurrency[];
    isLoading: boolean;
    hasDates: boolean;
    ticket: string;
    propertyId: number;
    language: string;
    /** `_FD_TYPE` setup entries used to display the document type. */
    fdTypes: IEntries[];
    fromDate: string | null;
    toDate: string | null;
    hasFetched: boolean;
    /** Folio scope driving which identity columns are shown. */
    folioType: FiscalFolioType;
    taxableOnly: boolean;
    /** Selected agent id (when a specific agent is chosen under the agent folio). */
    agentId: number | null;
    /** Selected guest id (when a specific guest is chosen under the guest folio). */
    guestId: number | null;
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    pageSizes: number[];
    clFiscalDocumentPreview: EventEmitter<ClFiscalDocumentPreviewRequest>;
    fetchRequested: EventEmitter<void>;
    requestPageChange: EventEmitter<PaginationChangeEvent>;
    requestPageSizeChange: EventEmitter<PaginationChangeEvent>;
    /** Emitted with the booking number when a booking link is clicked. */
    openBookingDetails: EventEmitter<string>;
    /** Emitted when a guest document link/action is clicked (caught by ir-guest-document-preview). */
    guestDocumentPreview: EventEmitter<GuestDocumentPreviewRequest>;
    private columnHelper;
    private emitGuestPreview;
    private handlePageChange;
    private handlePageSizeChange;
    /** Agent column is hidden for the guest folio (those rows have no agent). */
    private get showAgentName();
    /** Guest column is hidden for the agent folio (those rows have no guest). */
    private get showGuestName();
    /** Maps each `_FD_TYPE` code to its localized display label. */
    private get fdTypeLabels();
    private emitPreview;
    private getCredit;
    private get columns();
    private renderMoney;
    render(): any;
}
