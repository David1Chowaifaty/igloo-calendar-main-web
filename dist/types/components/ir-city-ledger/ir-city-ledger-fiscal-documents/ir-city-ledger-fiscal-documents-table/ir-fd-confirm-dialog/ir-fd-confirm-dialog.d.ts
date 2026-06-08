import { EventEmitter } from '../../../../../stencil-public-runtime';
export type FdConfirmAction = 'void' | 'delete-draft' | 'convert-to-invoice';
export declare class IrFdConfirmDialog {
    open: boolean;
    action: FdConfirmAction | null;
    docNumber: string;
    isConfirming: boolean;
    fdType: string;
    confirmed: EventEmitter<void>;
    cancelled: EventEmitter<void>;
    render(): any;
}
