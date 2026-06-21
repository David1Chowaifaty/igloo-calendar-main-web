import { FdTypes } from "../../../../../types/enums";
import { EventEmitter } from '../../../../../stencil-public-runtime';
export type FdConfirmAction = 'void' | 'delete-draft' | 'convert-to-invoice';
export type FdConfirmationVoidType = typeof FdTypes.CreditNote | typeof FdTypes.AdjustmentCredit;
export declare class IrFdConfirmDialog {
    open: boolean;
    action: FdConfirmAction | null;
    docNumber: string;
    isConfirming: boolean;
    amount: number;
    fdType: string;
    voidType: FdConfirmationVoidType;
    goodwillAmount: string;
    confirmed: EventEmitter<{
        amount: number | null;
        voidType: FdConfirmationVoidType;
    }>;
    cancelled: EventEmitter<void>;
    render(): any;
}
