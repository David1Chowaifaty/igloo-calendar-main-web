import { EventEmitter } from '../../../../../stencil-public-runtime';
import type { FolioRow } from '../../types';
export declare class IrHoldTransactionDialog {
    row: FolioRow | null;
    currencySymbol: string;
    private isLoading;
    holdToggled: EventEmitter<{
        rowId: string;
        newIsHold: boolean;
    }>;
    private dialogRef;
    private cityLedgerService;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    private handleConfirm;
    render(): any;
}
