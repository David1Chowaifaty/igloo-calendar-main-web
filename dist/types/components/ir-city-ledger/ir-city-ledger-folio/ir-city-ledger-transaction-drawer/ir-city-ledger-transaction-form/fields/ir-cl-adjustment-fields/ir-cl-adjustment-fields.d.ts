import { EventEmitter } from '../../../../../../../stencil-public-runtime';
import { type CityLedgerTransactionFormDraft, type EntryType, type LinkType, type LinkedOption } from '../../ir-city-ledger-transaction-form.schema';
export declare class IrClAdjustmentFields {
    entryType: EntryType | '';
    linkType: LinkType;
    linkedId: string | undefined;
    bookingOptions: LinkedOption[];
    unpaidInvoiceOptions: LinkedOption[];
    fieldChange: EventEmitter<Partial<CityLedgerTransactionFormDraft>>;
    private get linkedIdOptions();
    render(): any;
}
