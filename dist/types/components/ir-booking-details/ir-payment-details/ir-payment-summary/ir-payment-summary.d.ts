import { Currency } from "../../../../models/property";
export declare class IrPaymentSummary {
    totalCost: number;
    balance: number;
    collected: number;
    currency: Currency;
    private shouldShowTotalCost;
    render(): any;
}
