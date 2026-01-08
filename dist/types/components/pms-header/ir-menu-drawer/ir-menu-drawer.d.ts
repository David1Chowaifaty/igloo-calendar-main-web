export declare class IrMenuDrawer {
    open: boolean;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private handleDocumentKeyDown;
    openDrawer(): Promise<void>;
    render(): any;
}
