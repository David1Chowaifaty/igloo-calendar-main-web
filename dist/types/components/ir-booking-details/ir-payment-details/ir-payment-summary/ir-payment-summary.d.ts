import { Currency } from "../../../../models/property";
export declare class IrPaymentSummary {
    totalCost: number;
    balance: number;
    collected: number;
    currency: Currency;
    isBookingCancelled: boolean;
    private shouldShowTotalCost;
    render(): any;
}
