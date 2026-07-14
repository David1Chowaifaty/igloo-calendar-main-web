import { Booking } from "../../../../models/booking.dto";
export declare class IrPaymentAnalytics {
    booking: Booking;
    private displayedValue;
    private animationFrameId?;
    componentWillLoad(): void;
    onBookingChange(): void;
    disconnectedCallback(): void;
    private runCountUp;
    private getTone;
    render(): any;
}
