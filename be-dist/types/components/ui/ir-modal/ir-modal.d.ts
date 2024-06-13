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
    auth: HTMLIrAuthElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    createOverlay(): void;
    removeOverlay(): void;
    insertModalContent(): void;
    removeModalContent(): void;
    prepareFocusTrap(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    disconnectedCallback(): void;
    render(): any;
}
