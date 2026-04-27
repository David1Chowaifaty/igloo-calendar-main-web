import { EventEmitter } from '../../../../stencil-public-runtime';
import type { ClFiscalDocumentPreviewRequest } from './types';
export declare class IrClFiscalDocumentPreview {
    ticket: string;
    propertyId: number;
    request: (ClFiscalDocumentPreviewRequest & {
        url: string;
    }) | null;
    private showConvertDialog;
    private isConverting;
    private isFetching;
    documentConverted: EventEmitter<void>;
    private cityLedgerService;
    handlePreviewRequest(event: CustomEvent<ClFiscalDocumentPreviewRequest>): Promise<void>;
    private getDialogLabel;
    private getTypeLabel;
    handleClPreviewReady(event: CustomEvent): void;
    private handleDownload;
    private handleConvertConfirm;
    private renderPreview;
    render(): any;
}
