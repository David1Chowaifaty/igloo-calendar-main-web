import { EventEmitter } from '../../../../stencil-public-runtime';
import { type FolioRow } from '../types';
import type { ICurrency } from "../../../../models/property";
import type { ServiceCategoryOption } from '../ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema';
export declare class IrCityLedgerFolioTable {
    private handleAction;
    agentId: number | null;
    propertyId: number;
    ticket: string;
    language: string;
    data: FolioRow[];
    isLoading: boolean;
    startingBalance: number;
    closingBalance: number;
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    fromDate: string;
    toDate: string;
    hasFetched: boolean;
    currencySymbol: string;
    currencies: ICurrency[];
    /** `_SVC_CATEGORY` setup entries, used to label extra-service descriptions. */
    serviceCategoryOptions: ServiceCategoryOption[];
    hideBalanceInfo: boolean;
    private tableState;
    private selectedRowIds;
    private holdTargetRow;
    private bookingDrawerOpen;
    private selectedBookingNumber;
    pageChange: EventEmitter<{
        pageIndex: number;
        pageSize: number;
    }>;
    generateInvoice: EventEmitter<FolioRow[]>;
    fetchRequested: EventEmitter<void>;
    editEntry: EventEmitter<FolioRow['_raw']>;
    deleteEntry: EventEmitter<FolioRow['_raw']>;
    private columnHelper;
    private pageSizes;
    private holdDialogRef;
    private formatDate;
    private get selectedUnbilledRows();
    private handleHoldToggled;
    private _localDataOverride;
    onDataChange(): void;
    private get displayData();
    private getSymbol;
    private columns;
    /**
     * @param {string} description - Raw DESCRIPTION from the CL row.
     * @param {Record<string, string>} svcCategory - _SVC_CATEGORY labels, keyed by code.
     * @returns {string} Description with the category code replaced by its label.
     */
    private resolveServiceDescription;
    /** `_SVC_CATEGORY` labels keyed by code, rebuilt whenever the options prop changes. */
    private get svcCategoryLabels();
    /**
     * Extra-service rows store their description as `CATEGORY_CODE: detail`, and this screen has no
     * category grouping to spell the code out — so the label is inlined. Every other row renders the
     * description as it came from the API.
     *
     * @param {FolioRow} row - Folio row being rendered.
     * @returns {string} Description to display.
     */
    private resolveRowDescription;
    private onTableStateChange;
    private renderCell;
    private renderTableHead;
    private renderStartingBalanceRow;
    private renderEndingBalanceRow;
    private renderDataRows;
    render(): any;
}
