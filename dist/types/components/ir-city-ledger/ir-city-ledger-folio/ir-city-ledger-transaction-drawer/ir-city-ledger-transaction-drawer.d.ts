import { EventEmitter } from '../../../../stencil-public-runtime';
import type { LinkedOption, ServiceCategoryOption, TaxOption, TransactionType } from './ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema';
import { Agent } from "../../../../services/agents/type";
import { Booking } from "../../../../models/booking.dto";
export declare class IrCityLedgerTransactionDrawer {
    open: boolean;
    formId: string;
    drawerLabel: string;
    agent: Agent | null;
    booking: Booking | null;
    initialTransactionType: TransactionType;
    taxOptions: TaxOption[];
    unpaidInvoiceOptions: LinkedOption[];
    bookingOptions: LinkedOption[];
    serviceCategoryOptions: ServiceCategoryOption[];
    saveDisabled: boolean;
    closeDrawer: EventEmitter<void>;
    transactionSaved: EventEmitter<void>;
    private stopEventPropagation;
    render(): any;
}
