import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrAlertDialog {
    el: HTMLElement;
    isOpen: boolean;
    openChange: EventEmitter<boolean>;
    private firstFocusableElement;
    private lastFocusableElement;
    componentDidLoad(): void;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    prepareFocusTrap(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    disconnectedCallback(): void;
    render(): any;
}
