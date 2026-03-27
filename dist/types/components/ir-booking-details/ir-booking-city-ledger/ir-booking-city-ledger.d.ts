import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/IBooking";
export declare class IrBookingCityLedger {
    private cityLedgerService;
    /** Booking object; component is hidden when booking.agent is null. */
    booking: Booking;
    /** Active language code. */
    language: string;
    /** Currency symbol used in the transaction drawer. */
    currencySymbol: string;
    /** Service-category entries used to populate the transaction form. */
    svcCategories: IEntries[];
    private isLoading;
    private folioRows;
    private drawerOpen;
    private error;
    componentWillLoad(): void;
    handleBookingChange(newVal: Booking, oldVal: Booking): void;
    private fetchCityLedger;
    private get serviceCategoryOptions();
    private get bookingOptions();
    private formatAmount;
    private renderTable;
    render(): any;
}
