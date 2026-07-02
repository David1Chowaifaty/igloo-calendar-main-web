import { EventEmitter } from '../../../stencil-public-runtime';
import { FdTypes } from "../../../types/enums";
import type { IToast } from "../../ui/ir-toast/toast";
export type VoidableDocumentType = typeof FdTypes.Invoice | typeof FdTypes.Receipt;
export interface VoidDocumentRequest {
    documentType: VoidableDocumentType;
    documentNumber: string;
    bookingNumber?: string;
}
export declare class IrVoidDocumentDialog {
    isOpen: boolean;
    isLoading: boolean;
    request: VoidDocumentRequest | null;
    /**
     * Emitted once a document has actually been voided server-side.
     * Consumers listen for this to refresh whatever data they own — e.g. ir-guest-billing
     * refetches its own rows, ir-payment-details forwards it into resetBookingEvt.
     */
    documentVoided: EventEmitter<VoidDocumentRequest>;
    toast: EventEmitter<IToast>;
    private bookingService;
    open(request: VoidDocumentRequest): Promise<void>;
    close(): Promise<void>;
    private get isInvoice();
    private voidInvoice;
    private voidReceipt;
    private handleConfirm;
    render(): any;
}
