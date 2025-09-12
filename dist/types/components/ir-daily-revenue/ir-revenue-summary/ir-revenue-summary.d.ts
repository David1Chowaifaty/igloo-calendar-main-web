import { GroupedFolioPayment } from '../types';
import { PaymentEntries } from "../../ir-booking-details/types";
export declare class IrRevenueSummary {
    groupedPayments: GroupedFolioPayment;
    previousDateGroupedPayments: GroupedFolioPayment;
    paymentEntries: PaymentEntries;
    private calculateTotalPayments;
    private calculateTotalRefunds;
    private calculateTotalValue;
    private getTrendIcon;
    render(): any;
}
