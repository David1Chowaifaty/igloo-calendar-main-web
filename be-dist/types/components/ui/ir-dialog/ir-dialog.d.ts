import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDialog {
    closeButton: boolean;
    el: HTMLElement;
    private firstFocusableElement;
    private lastFocusableElement;
    isOpen: boolean;
    openChange: EventEmitter<boolean>;
    componentDidLoad(): void;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    prepareFocusTrap(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    disconnectedCallback(): void;
    render(): any;
}
