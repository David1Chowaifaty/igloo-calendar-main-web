import { Booking } from "../../models/booking.dto";
export declare class IrInvoice {
    email: string;
    propertyId: number;
    baseUrl: string;
    language: string;
    bookingNbr: string;
    status: 0 | 1;
    booking: Booking;
    token: string;
    private propertyService;
    private commonService;
    private authService;
    componentWillLoad(): void;
    handleTokenChange(): void;
    handleBookingNumberChange(newValue: any, oldValue: any): Promise<void>;
    init(): Promise<void>;
    fetchData(): Promise<void>;
    renderBookingDetailHeader(): string;
    render(): any;
}
