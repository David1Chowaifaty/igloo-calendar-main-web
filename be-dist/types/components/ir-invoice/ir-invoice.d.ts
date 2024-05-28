import { Booking } from "../../models/booking.dto";
export declare class IrInvoice {
    token: string;
    propertyId: number;
    baseUrl: string;
    language: string;
    bookingNbr: string;
    booking: Booking;
    private propertyService;
    private commonService;
    componentWillLoad(): void;
    handleTokenChange(): void;
    handleBookingNumberChange(newValue: any, oldValue: any): Promise<void>;
    init(): Promise<void>;
    fetchData(): Promise<void>;
    renderBookingDetailHeader(): string;
    render(): any;
}
