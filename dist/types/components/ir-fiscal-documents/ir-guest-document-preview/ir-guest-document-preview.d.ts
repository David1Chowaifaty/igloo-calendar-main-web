import type { GuestDocumentPreviewRequest } from './types';
/**
 * Guest Fiscal Document Preview
 *
 * Self-contained, window-event-driven preview for guest documents — the guest
 * counterpart to `ir-cl-fiscal-document-preview`. It listens for
 * `guestDocumentPreview`, fetches the invoice / credit-note PDF via
 * `BookingService.printInvoice`, and renders it in a preview dialog
 * (same flow as `ir-guest-billing`).
 */
export declare class IrGuestDocumentPreview {
    ticket: string;
    propertyId: number;
    private pdfUrl;
    private isLoading;
    private request;
    private readonly modes;
    private propertyService;
    handlePreviewRequest(event: CustomEvent<GuestDocumentPreviewRequest>): Promise<void>;
    private resetPreview;
    private renderBody;
    private getDialogLabel;
    private getTypeLabel;
    private handleDownload;
    render(): any;
}
