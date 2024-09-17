import { IPayment } from "../models/booking.dto";
import { Token } from "../models/Token";
export interface IPaymentAction {
    amount: number;
    currency: {
        code: string;
        id: number;
        symbol: string;
    };
    due_on: string;
    type: 'overdue' | 'future';
}
export declare class PaymentService extends Token {
    AddPayment(payment: IPayment, book_nbr: string): Promise<any>;
    CancelPayment(id: number): Promise<any>;
    GetExposedCancelationDueAmount(params: {
        booking_nbr: string;
        currency_id: number;
    }): Promise<IPaymentAction[]>;
}
