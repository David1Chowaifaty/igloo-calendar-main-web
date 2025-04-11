export type SalesRecord = {
    id: string;
    country: string;
    nights: number;
    percentage: number;
    last_year_percentage: number;
};
export declare class IrSalesTable {
    records: SalesRecord[];
    render(): any;
}
