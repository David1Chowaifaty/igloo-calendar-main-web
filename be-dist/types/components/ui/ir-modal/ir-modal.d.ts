export declare class IrModal {
    el: HTMLElement;
    private firstFocusableElement;
    private lastFocusableElement;
    isOpen: boolean;
    componentDidLoad(): void;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    prepareFocusTrap(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    disconnectedCallback(): void;
    render(): any;
}
