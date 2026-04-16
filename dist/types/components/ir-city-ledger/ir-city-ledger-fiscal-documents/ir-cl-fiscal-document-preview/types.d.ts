export interface ClFiscalDocumentPreviewRequest {
    fdTypeCode: string;
    documentNumber: string;
    agentId: number;
    agentName: string;
    fdId?: number;
    autoPrint?: boolean;
    externalRef: string;
}
