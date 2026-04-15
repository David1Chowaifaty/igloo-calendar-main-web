import type { ClFiscalDocumentPreviewRequest } from './types';
export declare class IrClFiscalDocumentPreview {
    ticket: string;
    propertyId: number;
    request: ClFiscalDocumentPreviewRequest | null;
    handlePreviewRequest(event: CustomEvent<ClFiscalDocumentPreviewRequest>): void;
    private getDialogLabel;
    private getTypeLabel;
    handleClPreviewReady(event: CustomEvent): void;
    private renderPreview;
    render(): any;
}
