import { EventEmitter } from '../../../stencil-public-runtime';
import { GroupedFolioPayment } from '../types';
import { IEntries } from "../../../models/IBooking";
export declare class IrRevenueTable {
    payments: GroupedFolioPayment;
    payTypes: IEntries[];
    date: string;
    private payTypesObj;
    fetchNewReports: EventEmitter<string>;
    componentWillLoad(): void;
    render(): any;
}
