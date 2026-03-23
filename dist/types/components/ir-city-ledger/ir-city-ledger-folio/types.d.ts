import type { MyClTx } from "../../../services/city-ledger/index";
export interface FolioRow {
    _rowId: string;
    _raw: MyClTx;
    status: {
        id: string;
        label: string;
        variant: string;
        description: string;
    };
    type: string;
    serviceDate: string;
    bookingNumber: number;
    docNumber: string | null;
    description: string;
    debit: number;
    credit: number;
    balance: number;
}
export declare function mapClTxToFolioRow(tx: MyClTx): Omit<FolioRow, '_rowId'>;
export interface FolioFilters {
    fromDate?: string;
    toDate?: string;
    status?: string;
    search?: string;
}
export interface FolioSummary {
    startingBalance: number;
    totalDebits: number;
    totalCredits: number;
    currentBalance: number;
    unbilledCount: number;
}
