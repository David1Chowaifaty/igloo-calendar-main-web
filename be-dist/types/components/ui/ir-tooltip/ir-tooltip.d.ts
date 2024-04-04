export declare class IrTooltip {
    el: HTMLElement;
    message: string;
    withHtml: boolean;
    customSlot: boolean;
    open: boolean;
    private popperInstance;
    private tooltipTimeout;
    private trigger;
    private content;
    componentDidLoad(): void;
    createPopperInstance(): void;
    toggleOpen(shouldOpen: boolean): void;
    disconnectedCallback(): void;
    render(): any;
}
