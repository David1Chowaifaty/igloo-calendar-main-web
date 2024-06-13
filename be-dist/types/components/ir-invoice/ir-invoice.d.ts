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
    private paymentService;
    componentWillLoad(): void;
    handleBookingNumberChange(newValue: any, oldValue: any): Promise<void>;
    init(): Promise<void>;
    fetchData(): Promise<void>;
    renderBookingDetailHeader(): string;
    getPropertyEmail(): string;
    render(): any;
}
