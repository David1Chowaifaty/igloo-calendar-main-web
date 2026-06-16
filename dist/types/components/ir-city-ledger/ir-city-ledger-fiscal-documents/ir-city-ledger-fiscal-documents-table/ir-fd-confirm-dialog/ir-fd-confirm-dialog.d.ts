import { EventEmitter } from '../../../../../stencil-public-runtime';
export type FdConfirmAction = 'void' | 'delete-draft' | 'convert-to-invoice';
export declare class IrFdConfirmDialog {
    open: boolean;
    action: FdConfirmAction | null;
    docNumber: string;
    isConfirming: boolean;
    amount: number;
    fdType: string;
    voidType: 'credit-note' | 'goodwill';
    goodwillAmount: string;
    confirmed: EventEmitter<{
        amount: number | null;
        voidType: 'credit-note' | 'goodwill';
    }>;
    cancelled: EventEmitter<void>;
    render(): any;
}
