import { SalesRecord } from '../types';
export type NumericKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
export declare class IrSalesByCountrySummary {
    salesReports: SalesRecord[];
    private calculateTotalValues;
    private getIcon;
    render(): any;
}
