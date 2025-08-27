import { IPayment } from "../models/booking.dto";
export declare class PaymentUtilsService {
    /**
     * Creates a new payment item with default values
     */
    static createDefaultPayment(currency: any): IPayment;
    /**
     * Calculates total amount from payments array
     */
    static calculateTotalAmount(payments: IPayment[]): number;
    /**
     * Filters payments by type (credit/debit)
     */
    static filterPaymentsByType(payments: IPayment[], type: 'CR' | 'DB'): IPayment[];
    /**
     * Validates payment data
     */
    static validatePayment(payment: IPayment): {
        isValid: boolean;
        errors: string[];
    };
    /**
     * Formats payment amount with currency
     */
    static formatPaymentAmount(amount: number, currencySymbol: string): string;
    /**
     * Sorts payments by date (newest first)
     */
    static sortPaymentsByDate(payments: IPayment[], descending?: boolean): IPayment[];
    /**
     * Groups payments by month
     */
    static groupPaymentsByMonth(payments: IPayment[]): Record<string, IPayment[]>;
    /**
     * Checks if payment is editable
     */
    static isPaymentEditable(payment: IPayment): boolean;
    /**
     * Checks if payment is deletable
     */
    static isPaymentDeletable(payment: IPayment): boolean;
}
