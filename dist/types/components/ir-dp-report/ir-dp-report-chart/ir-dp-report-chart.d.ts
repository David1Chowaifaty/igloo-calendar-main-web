export declare class IrDpReportChart {
    el: HTMLElement;
    private chart?;
    private canvas?;
    private tooltipEl?;
    private disposeRows;
    private disposeLoading;
    private rows;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private handleCanvasRef;
    private getCssVar;
    private getSortedRows;
    private formatDateLabel;
    private buildDataset;
    private buildMinBarLengthPlugin;
    private buildActiveBarHighlightPlugin;
    private renderTooltipContent;
    private handleTooltip;
    private createChart;
    private refreshChart;
    render(): any;
}
