import { Booking } from "../../../models/booking.dto";
export declare class IrAgentBilling {
    booking: Booking;
    private fiscalDocuments;
    private isLoading;
    private hasFetched;
    private cityLedgerService;
    private tokenService;
    componentWillLoad(): Promise<void>;
    handleBookingChange(newVal: Booking, oldVal: Booking): Promise<void>;
    private fetchFiscalDocuments;
    render(): any;
}
