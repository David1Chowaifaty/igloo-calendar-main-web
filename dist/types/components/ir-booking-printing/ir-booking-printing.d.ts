import { Booking } from "../../models/booking.dto";
import { IProperty } from "../../models/property";
export declare class IrBookingPrinting {
    mode: 'invoice' | 'default';
    property: string;
    booking: string;
    countries: string;
    convertedBooking: Booking;
    convertedProperty: IProperty;
    guestCountryName: string;
    isLoading: boolean;
    private currency;
    private totalNights;
    private totalPersons;
    componentWillLoad(): void;
    private init;
    initializeRequests(): Promise<void>;
    private formatGuestName;
    private formatPhoneNumber;
    private formatBookingDates;
    private setUserCountry;
    private formatDate;
    private renderBookingDetails;
    private renderPrintingHeader;
    private getTaxAmount;
    render(): any;
}
