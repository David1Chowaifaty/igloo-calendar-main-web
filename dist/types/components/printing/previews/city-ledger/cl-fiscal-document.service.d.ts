import { type ClTx } from "../../../../services/city-ledger/index";
import type { IProperty } from "../../../../models/property";
export interface ClFiscalDocumentData {
    property: IProperty;
    transactions: ClTx[];
}
export declare class ClFiscalDocumentService {
    private tokenService;
    private propertyService;
    private cityLedgerService;
    init(baseurl: string | undefined, ticket: string): void;
    fetchData(propertyId: number, agentId: number, documentNumber?: string): Promise<ClFiscalDocumentData>;
}
