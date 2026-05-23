import type { FolioRow } from '../ir-city-ledger-folio/types';
import type { FiscalDocument } from "../../../services/city-ledger/index";
export declare class IrClStatusTag {
    transaction: FolioRow | FiscalDocument;
    size: 'default' | 'extra-small';
    render(): any;
}
