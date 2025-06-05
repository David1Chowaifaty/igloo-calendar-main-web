import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrModal {
    /**
     * The title text displayed in the modal header.
     */
    modalTitle: string;
    /**
     * The main content text shown in the modal body.
     */
    modalBody: string;
    /**
     * Controls whether the modal title is rendered.
     */
    showTitle: boolean;
    /**
     * Whether the right (confirm) button is visible.
     */
    rightBtnActive: boolean;
    /**
     * Whether the left (cancel/close) button is visible.
     */
    leftBtnActive: boolean;
    /**
     * Text displayed on the right (confirm) button.
     */
    rightBtnText: string;
    /**
     * Text displayed on the left (cancel/close) button.
     */
    leftBtnText: string;
    /**
     * Whether the modal is in a loading state, disabling interaction.
     */
    isLoading: boolean;
    /**
     * If true, the modal automatically closes after confirm/cancel actions.
     */
    autoClose: boolean;
    /**
     * Color theme of the right button.
     */
    rightBtnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    /**
     * Color theme of the left button.
     */
    leftBtnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    /**
     * Horizontal alignment of the footer buttons.
     */
    btnPosition: 'left' | 'right' | 'center';
    /**
     * Whether an icon should be displayed next to the title.
     */
    iconAvailable: boolean;
    /**
     * Icon name to render next to the title (if `iconAvailable` is true).
     */
    icon: string;
    /**
     * Controls visibility of the modal.
     */
    isOpen: boolean;
    /**
     * Payload object to pass along with confirm/cancel events.
     */
    item: any;
    /**
     * Opens the modal.
     *
     * Example:
     * ```ts
     * const modal = document.querySelector('ir-modal');
     * modal.openModal();
     * ```
     */
    openModal(): Promise<void>;
    /**
     * Closes the modal.
     */
    closeModal(): Promise<void>;
    /**
     * Fired when the confirm (right) button is clicked.
     * Emits the current `item` value.
     */
    confirmModal: EventEmitter<any>;
    /**
     * Fired when the cancel (left) button or backdrop is clicked.
     */
    cancelModal: EventEmitter<any>;
    btnClickHandler(event: CustomEvent): void;
    render(): any[];
}
