import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrModal {
    el: HTMLElement;
    element: HTMLElement;
    private firstFocusableElement;
    private lastFocusableElement;
    isOpen: boolean;
    private portal;
    private overlay;
    private modalContainer;
    openChange: EventEmitter<boolean>;
    authStatus: EventEmitter<{
        state: 'success' | 'failed';
        token: string;
        payload: {
            method: 'direct' | 'google';
            email?: string;
            booking_nbr?: string;
        };
    }>;
    auth: HTMLIrAuthElement;
    dialogRef: HTMLIrDialogElement;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    createPortal(): void;
    createOverlay(): void;
    removeOverlay(): void;
    insertModalContent(): void;
    removeModalContent(): void;
    prepareFocusTrap(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    cleanup(): void;
    render(): any;
}
