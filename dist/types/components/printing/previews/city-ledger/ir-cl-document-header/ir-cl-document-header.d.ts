import type { IProperty } from "../../../../../models/property";
export declare class IrClDocumentHeader {
    documentType: 'invoice' | 'receipt' | 'creditnote' | 'debitnote';
    /** Property whose branding and details appear on the right side. */
    property: IProperty;
    /** Optional document reference number shown in the meta block. */
    documentNumber?: string;
    /** Name of the agent/company to bill to. */
    agentName?: string;
    private get primaryContact();
    private get documentTitle();
    render(): any;
}
