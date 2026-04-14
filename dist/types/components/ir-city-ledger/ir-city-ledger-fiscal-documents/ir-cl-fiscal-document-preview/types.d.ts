export interface ClFiscalDocumentPreviewRequest {
    fdTypeCode: string;
    documentNumber: string;
    agentId: number;
    agentName: string;
    autoPrint?: boolean;
}
