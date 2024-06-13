import { Token } from "../../models/Token";
export declare class PaymentService extends Token {
    GeneratePaymentCaller(token: string, params: {
        booking_nbr: string;
        amount: number;
        currency_id: string | number;
        email: string;
        pgw_id: string;
    }): Promise<any>;
    RequestBookingCancelation(booking_nbr: string): Promise<any>;
}
