import { EventEmitter } from '../../../../../../../stencil-public-runtime';
import type { FiscalDocuments } from "../../../../../../../services/city-ledger/types";
import { type CityLedgerTransactionFormDraft, type CreditNoteMode } from '../../ir-city-ledger-transaction-form.schema';
export declare class IrClCreditNoteFields {
    creditNoteMode: CreditNoteMode;
    invoiceId: string | undefined;
    fiscalDocuments: FiscalDocuments;
    isFetchingFiscalDocs: boolean;
    fieldChange: EventEmitter<Partial<CityLedgerTransactionFormDraft>>;
    render(): any;
}
