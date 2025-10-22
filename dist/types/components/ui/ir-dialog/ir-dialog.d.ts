import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDialog {
    private static dialogIds;
    hostEl: HTMLElement;
    /**
     * Controls whether the dialog is open. Reflects to the host attribute for CSS hooks.
     */
    open: boolean;
    /**
     * Emits when the open state changes due to user interaction or programmatic control.
     */
    openChange: EventEmitter<boolean>;
    private hasTitleSlot;
    private hasBodySlot;
    private dialogEl?;
    private previouslyFocused;
    private readonly instanceId;
    private get titleId();
    private get descriptionId();
    componentDidLoad(): void;
    disconnectedCallback(): void;
    protected handleOpenChange(open: boolean): void;
    /**
     * Opens the dialog programmatically using the native `showModal` API.
     */
    openModal(): Promise<void>;
    /**
     * Closes the dialog programmatically and restores focus to the previously active element.
     */
    closeModal(): Promise<void>;
    private showDialog;
    private hideDialog;
    private handleCancel;
    private handleNativeClose;
    private restoreFocus;
    private onTitleSlotChange;
    private onBodySlotChange;
    private onCloseButtonClick;
    private syncSlotState;
    render(): any;
}
