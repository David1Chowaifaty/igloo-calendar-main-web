import { Booking } from "../../models/booking.dto";
import { IProperty } from "../../models/property";
export declare class IrBookingPrinting {
    token: string;
    bookingNumber: string;
    language: string;
    propertyid: number;
    mode: 'invoice' | 'default';
    countries: any;
    booking: Booking;
    property: IProperty;
    guestCountryName: string;
    isLoading: boolean;
    private bookingService;
    private roomService;
    private currency;
    private totalNights;
    private totalPersons;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): Promise<void>;
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