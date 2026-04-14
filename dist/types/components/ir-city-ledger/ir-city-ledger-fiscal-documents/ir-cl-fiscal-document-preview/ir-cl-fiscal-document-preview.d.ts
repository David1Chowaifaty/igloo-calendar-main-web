import type { ClFiscalDocumentPreviewRequest } from './types';
export declare class IrClFiscalDocumentPreview {
    ticket: string;
    propertyId: number;
    request: ClFiscalDocumentPreviewRequest | null;
    handlePreviewRequest(event: CustomEvent<ClFiscalDocumentPreviewRequest>): void;
    private getDialogLabel;
    private getTypeLabel;
    private renderPreview;
    render(): any;
}
