import { EventEmitter } from '../../../../../../../stencil-public-runtime';
import { type CityLedgerTransactionFormDraft, type EntryType } from '../../ir-city-ledger-transaction-form.schema';
export declare class IrClOpeningBalanceFields {
    entryType: EntryType | '';
    fieldChange: EventEmitter<Partial<CityLedgerTransactionFormDraft>>;
    render(): any;
}
