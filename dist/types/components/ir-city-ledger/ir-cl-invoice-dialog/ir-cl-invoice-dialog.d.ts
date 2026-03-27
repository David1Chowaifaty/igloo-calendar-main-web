import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrClInvoiceDialog {
    agentId: number | null;
    mode: 'booking' | 'default';
    bookingNbr: number | null;
    startDate: string | null;
    endDate: string | null;
    currencyId: number | null;
    isLoading: boolean;
    error: string | null;
    invoiceIssued: EventEmitter<unknown>;
    private dialogRef;
    private formRef;
    private cityLedgerService;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    private handleSubmit;
    render(): any;
}
