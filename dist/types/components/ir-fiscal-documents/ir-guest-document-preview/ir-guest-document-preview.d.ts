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
    private bookingService;
    handlePreviewRequest(event: CustomEvent<GuestDocumentPreviewRequest>): Promise<void>;
    /** Maps a document's fiscal type to the guest-billing print mode. */
    private printModeFromFdType;
    render(): any;
}
