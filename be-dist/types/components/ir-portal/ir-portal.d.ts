export declare class IrPortal {
    reference: HTMLElement;
    offset: number;
    hostElement: HTMLElement;
    private portal;
    private popperInstance;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private createPortal;
    private moveElementToPortal;
    updatePosition(): Promise<void>;
    private initializePopper;
    render(): any;
}
