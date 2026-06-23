import { Booking } from "../../../models/booking.dto";
export declare class IrAgentBilling {
    booking: Booking;
    private fiscalDocuments;
    private isLoading;
    private hasFetched;
    private invoiceDialogRef;
    private cityLedgerService;
    private tokenService;
    componentWillLoad(): Promise<void>;
    handleBookingChange(newVal: Booking, oldVal: Booking): Promise<void>;
    private fetchFiscalDocuments;
    handleFiscalDocumentIssued(e: CustomEvent): void;
    render(): any;
}
