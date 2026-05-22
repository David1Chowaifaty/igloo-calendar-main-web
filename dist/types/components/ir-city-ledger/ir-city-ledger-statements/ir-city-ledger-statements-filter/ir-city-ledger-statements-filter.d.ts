import { EventEmitter } from '../../../../stencil-public-runtime';
export interface StatementFilters {
    fromDate: string | null;
    toDate: string | null;
}
export declare class IrCityLedgerStatementsFilter {
    initialFromDate: string | null;
    initialToDate: string | null;
    fromDate: string | null;
    toDate: string | null;
    filtersChange: EventEmitter<StatementFilters>;
    componentWillLoad(): void;
    createStatement: EventEmitter<StatementFilters>;
    printStatement: EventEmitter<StatementFilters>;
    render(): any;
}
