import { EventEmitter } from '../../../../../../../stencil-public-runtime';
import type { FiscalDocuments } from "../../../../../../../services/city-ledger/types";
import { type CityLedgerTransactionFormDraft } from '../../ir-city-ledger-transaction-form.schema';
export declare class IrClDebitNoteFields {
    invoiceId: string | undefined;
    fiscalDocuments: FiscalDocuments;
    fieldChange: EventEmitter<Partial<CityLedgerTransactionFormDraft>>;
    render(): any;
}
