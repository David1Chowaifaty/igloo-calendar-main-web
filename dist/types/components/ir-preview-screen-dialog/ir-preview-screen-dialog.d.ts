import { EventEmitter } from '../../stencil-public-runtime';
type PreviewAction = 'print' | 'download';
export declare class IrPreviewScreenDialog {
    el: HTMLIrPreviewScreenDialogElement;
    private readonly actionIconByType;
    private printContainer?;
    private printPlaceholder?;
    private isPrintLayoutActive;
    private readonly handleBeforePrint;
    private readonly handleAfterPrint;
    /**
     * The dialog's label as displayed in the header.
     * Required for accessibility and announced by assistive technologies.
     */
    label: string;
    /**
     * Indicates whether or not the preview dialog is open.
     * Toggle this attribute or use {@link openDialog} / {@link closeDialog} to control visibility.
     */
    open: boolean;
    /**
     * Determines which built-in action is rendered in the header.
     * `print` triggers `window.print()` while `download` downloads the configured URL.
     */
    action: PreviewAction;
    /**
     * URL used when the action is set to `download`.
     * Can be overridden per invocation via {@link triggerAction}.
     */
    downloadUrl?: string;
    /**
     * Suggested file name for downloaded previews.
     */
    downloadFileName?: string;
    /**
     * When `true`, hides the default header action button so a custom implementation can be slotted.
     */
    hideDefaultAction: boolean;
    /**
     * Accessible label used for the default header action button.
     * Falls back to context-sensitive defaults when omitted.
     */
    actionButtonLabel?: string;
    /**
     * Fired whenever the preview action is executed, either via the header button or programmatically.
     */
    previewAction: EventEmitter<{
        action: PreviewAction;
        url?: string;
    }>;
    openChanged: EventEmitter<boolean>;
    /**
     * Opens the preview dialog.
     */
    openDialog(): Promise<void>;
    /**
     * Closes the preview dialog.
     */
    closeDialog(): Promise<void>;
    /**
     * Executes the configured preview action.
     *
     * @param action Optional override of the default action type.
     * @param url Optional URL used for downloads. Falls back to the `downloadUrl` prop.
     * @param fileName Optional file name suggestion for downloads.
     * @returns Resolves with `true` when the action was attempted, `false` when prerequisites are missing.
     */
    triggerAction(action?: PreviewAction, url?: string, fileName?: string): Promise<boolean>;
    private runPrintAction;
    private runDownloadAction;
    private getActionLabel;
    private shouldDisableActionButton;
    private handleActionButtonClick;
    private preparePrintLayout;
    private restorePrintLayout;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
export {};
