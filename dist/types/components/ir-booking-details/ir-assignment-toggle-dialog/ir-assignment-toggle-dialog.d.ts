import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrAssignmentToggleDialog {
    /** Dialog header title */
    label: string;
    /** Message shown inside the dialog */
    message: string;
    /** Confirm button label */
    confirmLabel: string;
    /** Cancel button label */
    cancelLabel: string;
    /** Controls the loading spinner on the confirm button — set by the parent while the async operation runs */
    loading: boolean;
    /** Emitted when the user clicks confirm */
    confirmToggle: EventEmitter<void>;
    private dialogRef;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    render(): any;
}
