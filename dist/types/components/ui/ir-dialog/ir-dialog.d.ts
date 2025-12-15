import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDialog {
    el: HTMLIrDialogElement;
    /**
     * The dialog's label as displayed in the header.
     * You should always include a relevant label, as it is required for proper accessibility.
     * If you need to display HTML, use the label slot instead.
     */
    label: string;
    /**
     * Indicates whether or not the dialog is open.
     * Toggle this attribute to show and hide the dialog.
     */
    open: boolean;
    /**
     * Disables the header.
     * This will also remove the default close button.
     */
    withoutHeader: boolean;
    /**
     * When enabled, the dialog will be closed when the user clicks outside of it.
     */
    lightDismiss: boolean;
    /**
     * Emitted when the dialog opens.
     */
    irDialogShow: EventEmitter<void>;
    /**
     * Emitted when the dialog is requested to close.
     * Calling event.preventDefault() will prevent the dialog from closing.
     * You can inspect event.detail.source to see which element caused the dialog to close.
     * If the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.
     * Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
     */
    irDialogHide: EventEmitter<{
        source: Element;
    }>;
    /**
     * Emitted after the dialog opens and all animations are complete.
     */
    irDialogAfterShow: EventEmitter<void>;
    /**
     * Emitted after the dialog closes and all animations are complete.
     */
    irDialogAfterHide: EventEmitter<void>;
    private slotState;
    private slotObserver;
    private readonly SLOT_NAMES;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    private handleWaHide;
    private handleWaShow;
    private handleWaAfterHide;
    private handleWaAfterShow;
    private setupSlotListeners;
    private removeSlotListeners;
    private handleSlotChange;
    private updateSlotState;
    private hasSlot;
    render(): any;
}
