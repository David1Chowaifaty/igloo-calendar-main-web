import { DailyPaymentFilter, GroupedFolioPayment } from '../types';
import { PaymentEntries } from "../../ir-booking-details/types";
export declare class IrRevenueSummary {
    filters: DailyPaymentFilter;
    groupedPayments: GroupedFolioPayment;
    previousDateGroupedPayments: GroupedFolioPayment;
    paymentEntries: PaymentEntries;
    private calculateTotalPayments;
    private calculateTotalRefunds;
    private calculateTotalValue;
    private getTrendIcon;
    render(): any;
}
