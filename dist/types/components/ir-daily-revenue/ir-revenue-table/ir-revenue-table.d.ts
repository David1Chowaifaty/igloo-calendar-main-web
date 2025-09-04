import { DailyPaymentFilter, GroupedFolioPayment } from '../types';
import { IEntries } from "../../../models/IBooking";
export declare class IrRevenueTable {
    payments: GroupedFolioPayment;
    payTypes: IEntries[];
    filters: DailyPaymentFilter;
    private payTypesObj;
    componentWillLoad(): void;
    render(): any;
}
