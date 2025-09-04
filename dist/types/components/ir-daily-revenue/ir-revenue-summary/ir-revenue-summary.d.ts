import { IEntries } from "../../../models/IBooking";
import { GroupedFolioPayment } from '../types';
export declare class IrRevenueSummary {
    groupedPayments: GroupedFolioPayment;
    previousDateGroupedPayments: GroupedFolioPayment;
    payTypesGroup: IEntries[];
    private calculateTotalPayments;
    private calculateTotalRefunds;
    private calculateTotalValue;
    private getTrendIcon;
    render(): any;
}
