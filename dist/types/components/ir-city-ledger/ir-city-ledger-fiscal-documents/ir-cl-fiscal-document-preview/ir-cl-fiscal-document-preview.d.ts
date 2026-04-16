import { EventEmitter } from '../../../../stencil-public-runtime';
import type { ClFiscalDocumentPreviewRequest } from './types';
export declare class IrClFiscalDocumentPreview {
    ticket: string;
    propertyId: number;
    request: ClFiscalDocumentPreviewRequest | null;
    private showConvertDialog;
    private isConverting;
    documentConverted: EventEmitter<void>;
    private cityLedgerService;
    handlePreviewRequest(event: CustomEvent<ClFiscalDocumentPreviewRequest>): void;
    private getDialogLabel;
    private getTypeLabel;
    handleClPreviewReady(event: CustomEvent): void;
    private handleConvertConfirm;
    private renderPreview;
    render(): any;
}
