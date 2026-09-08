import { EventEmitter } from '../../../../../../../stencil-public-runtime';
import type { SetupEntries } from "../../../../../../../models/IBooking";
import { type CityLedgerTransactionFormDraft, type LinkedOption } from '../../ir-city-ledger-transaction-form.schema';
export declare class IrClPaymentFields {
    paymentMethodCode: string;
    isOnAccount: boolean;
    invoiceId: string | undefined;
    paymentMethods: SetupEntries[];
    unpaidInvoiceOptions: LinkedOption[];
    noInvoices: boolean;
    language: string;
    fieldChange: EventEmitter<Partial<CityLedgerTransactionFormDraft>>;
    private stopPropagation;
    private handlePaymentMethodChange;
    render(): any;
}
