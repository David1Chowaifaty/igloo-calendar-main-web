import { DailyPaymentFilter, GroupedFolioPayment } from '../types';
import { PaymentEntries } from "../../ir-booking-details/types";
export declare class IrRevenueTable {
    payments: GroupedFolioPayment;
    paymentEntries: PaymentEntries;
    filters: DailyPaymentFilter;
    private payTypesObj;
    private payMethodObj;
    private groupType;
    componentWillLoad(): void;
    /**
     * Groups payments by method, then by type.
     * - Never throws on bad input (null/undefined, non-Map, malformed keys, non-array values).
     * - Keys are parsed defensively; unknown parts fall back to "UNKNOWN".
     */
    private regroupPaymentsByMethod;
    render(): any;
}
