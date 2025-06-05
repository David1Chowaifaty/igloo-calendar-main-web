import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDialog {
    el: HTMLElement;
    /**
     * Controls whether the dialog should be opened.
     * Can be updated externally and watched internally.
     */
    open: boolean;
    /**
     * Internal open state, driven by `open` prop or internal logic.
     */
    isOpen: boolean;
    /**
     * Emits the open/close state of the modal.
     *
     * Example:
     * ```tsx
     * <ir-dialog onOpenChange={(e) => console.log(e.detail)} />
     * ```
     */
    openChange: EventEmitter<boolean>;
    private firstFocusableElement;
    private lastFocusableElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Opens the modal dialog programmatically.
     * Applies `overflow: hidden` to the `body`.
     *
     * Example:
     * ```ts
     * const dialog = document.querySelector('ir-dialog');
     * await dialog.openModal();
     * ```
     */
    openModal(): Promise<void>;
    /**
     * Closes the modal dialog programmatically.
     * Reverts body scroll and emits `openChange`.
     */
    closeModal(): Promise<void>;
    handleOpenChange(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    disconnectedCallback(): void;
    /**
     * Finds and traps focus within modal content for accessibility.
     */
    private prepareFocusTrap;
    render(): any;
}
