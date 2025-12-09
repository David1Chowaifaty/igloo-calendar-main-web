import { Booking } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking-service/booking.service";
export declare class IrBookingGuarantee {
    booking: Booking;
    bookingService: BookingService;
    collapsed: boolean;
    paymentDetailsUrl: string;
    paymentExceptionMessage: string;
    componentWillLoad(): Promise<void>;
    private formatCurrency;
    private checkPaymentCode;
    private getPaymentMethod;
    private handleToggleCollapse;
    private shouldShowGuarantee;
    private shouldShowToggleButton;
    private renderCreditCardInfo;
    private renderCollapsedContent;
    private renderOtaGuarantee;
    render(): any;
}
