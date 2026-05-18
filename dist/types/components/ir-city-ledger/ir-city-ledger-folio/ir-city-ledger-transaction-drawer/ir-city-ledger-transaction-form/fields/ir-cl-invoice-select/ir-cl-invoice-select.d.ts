import { EventEmitter } from '../../../../../../../stencil-public-runtime';
import type { FiscalDocuments } from "../../../../../../../services/city-ledger/types";
export declare class IrClInvoiceSelect {
    value: string;
    fiscalDocuments: FiscalDocuments;
    label: string;
    hint: string;
    invoiceChange: EventEmitter<string>;
    render(): any;
}
