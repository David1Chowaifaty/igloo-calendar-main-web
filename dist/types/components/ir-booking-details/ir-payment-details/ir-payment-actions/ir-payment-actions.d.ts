import { IPaymentAction } from "../../../../services/payment.service";
import { Booking } from "../../../../models/booking.dto";
export declare class IrPaymentActions {
    booking: Booking;
    paymentAction: IPaymentAction[];
    render(): any;
}
