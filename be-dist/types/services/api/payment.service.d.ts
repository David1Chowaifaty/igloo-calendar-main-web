import { Token } from "../../models/Token";
export declare class PaymentService extends Token {
    GeneratePaymentCaller({ token, params, onRedirect, onScriptRun, }: {
        token: string;
        params: {
            booking_nbr: string;
            amount: number;
            currency_id: string | number;
            email: string;
            pgw_id: string;
        };
        onRedirect: (url: string) => void;
        onScriptRun: (script: string) => void;
    }): Promise<any>;
    RequestBookingCancelation(booking_nbr: string): Promise<any>;
}
