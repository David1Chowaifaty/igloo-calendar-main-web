export declare class IrUnitTag {
    unit: string;
    showTooltip: boolean;
    private _id;
    private resizeObserver?;
    private contentElement?;
    private measurementFrame?;
    private setContentRef;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    onUnitChange(): void;
    private attachResizeObserver;
    private scheduleTooltipUpdate;
    private updateTooltipState;
    render(): any;
}
