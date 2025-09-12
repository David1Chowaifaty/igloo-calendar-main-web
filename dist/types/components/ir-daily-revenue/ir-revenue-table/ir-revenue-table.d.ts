import { DailyPaymentFilter, GroupedFolioPayment } from '../types';
import { PaymentEntries } from "../../ir-booking-details/types";
export declare class IrRevenueTable {
    payments: GroupedFolioPayment;
    paymentEntries: PaymentEntries;
    filters: DailyPaymentFilter;
    private payTypesObj;
    private payMethodObj;
    componentWillLoad(): void;
    render(): any;
}
