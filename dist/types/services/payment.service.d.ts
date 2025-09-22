import { Payment } from "../components/ir-booking-details/types";
export interface IPaymentAction {
    amount: number;
    currency: {
        code: string;
        id: number;
        symbol: string;
    };
    due_on: string;
    reason: string;
    pay_type_code: string;
    type: 'OVERDUE' | 'FUTURE';
}
export declare class PaymentService {
    AddPayment(payment: Payment, book_nbr: string): Promise<any>;
    CancelPayment(id: number): Promise<any>;
    GetExposedCancellationDueAmount(params: {
        booking_nbr: string;
        currency_id: number;
    }): Promise<IPaymentAction[]>;
}
