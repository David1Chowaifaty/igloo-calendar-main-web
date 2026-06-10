import { EventEmitter } from '../../../stencil-public-runtime';
import type { ClFiscalDocumentPreviewRequest } from "../../ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types";
import type { ICurrency } from "../../../models/property";
import type { FiscalDocumentRow, FiscalFolioType } from '../types';
export declare class IrFiscalDocumentsTable {
    rows: FiscalDocumentRow[];
    currencySymbol: string;
    currencies: ICurrency[];
    taxableOnly: boolean;
    isLoading: boolean;
    hasDates: boolean;
    ticket: string;
    propertyId: number;
    fromDate: string | null;
    toDate: string | null;
    hasFetched: boolean;
    /** Folio scope driving which identity columns are shown. */
    folioType: FiscalFolioType;
    /** Selected agent id (when a specific agent is chosen under the agent folio). */
    agentId: number | null;
    /** Selected guest id (when a specific guest is chosen under the guest folio). */
    guestId: number | null;
    clFiscalDocumentPreview: EventEmitter<ClFiscalDocumentPreviewRequest>;
    fetchRequested: EventEmitter<void>;
    private pendingAction;
    private isConfirming;
    private columnHelper;
    private cityLedgerService;
    /**
     * A "specific party" is selected when the folio is scoped to a single agent or
     * guest. In that case the table collapses to the base city-ledger layout (no
     * identity / booking columns).
     */
    private get isSpecificPartySelected();
    private get showAgentName();
    private get showGuestName();
    private get showBookingNumber();
    private handleAction;
    private confirmPendingAction;
    private get columns();
    private getSymbol;
    private renderMoney;
    render(): any;
}
