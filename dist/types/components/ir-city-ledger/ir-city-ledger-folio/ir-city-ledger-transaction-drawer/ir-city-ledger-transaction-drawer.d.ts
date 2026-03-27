import { EventEmitter } from '../../../../stencil-public-runtime';
import type { LinkedOption, ServiceCategoryOption, TaxOption, TransactionType } from './ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema';
export declare class IrCityLedgerTransactionDrawer {
    open: boolean;
    formId: string;
    drawerLabel: string;
    agentId: number | null;
    initialTransactionType: TransactionType;
    taxOptions: TaxOption[];
    unpaidInvoiceOptions: LinkedOption[];
    bookingOptions: LinkedOption[];
    serviceCategoryOptions: ServiceCategoryOption[];
    currencySymbol: string;
    closeDrawer: EventEmitter<void>;
    transactionSaved: EventEmitter<void>;
    private stopEventPropagation;
    render(): any;
}
