import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/IBooking";
import { FolioRow } from "../../ir-city-ledger/ir-city-ledger-folio/types";
export declare class IrBookingCityLedger {
    private cityLedgerService;
    private tokenService;
    /** Booking object; component is hidden when booking.agent is null. */
    booking: Booking;
    /** Active language code. */
    language: string;
    /** Service-category entries used to populate the transaction form. */
    svcCategories: IEntries[];
    /** Folio rows fetched by the parent. */
    folioRows: FolioRow[];
    /** Loading state driven by the parent fetch. */
    isLoading: boolean;
    /** Error message driven by the parent fetch. */
    error: string | null;
    /** Emitted when a mutation (delete / save) completes so the parent can re-fetch. */
    clRefreshNeeded: EventEmitter<void>;
    private drawerOpen;
    private deleteTarget;
    private isDeleting;
    private editingRow;
    private handleDelete;
    private get serviceCategoryOptions();
    private get bookingOptions();
    private formatAmount;
    private rowHiddenCategories;
    private get rows();
    private renderRows;
    render(): any;
}
