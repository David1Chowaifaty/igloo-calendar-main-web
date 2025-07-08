import { MappedCountries, SalesRecord } from '../types';
export declare class IrSalesTable {
    records: SalesRecord[];
    mappedCountries: MappedCountries;
    visibleCount: number;
    private handleLoadMore;
    render(): any;
}
