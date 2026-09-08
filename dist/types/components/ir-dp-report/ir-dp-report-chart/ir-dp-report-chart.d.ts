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
    /** Negative values (price reductions) are never plotted — the chart only shows gains. */
    private clampProfit;
    /**
     * Runs after the x-axis is laid out (so tick pixel positions are final). Shows a date
     * label only on the first bar of each date, and then only if it clears the previously
     * shown label by `MIN_LABEL_GAP_PX` — a pixel-based check that can't collide no matter
     * how the rows are distributed across the date range.
     */
    private thinXAxisLabels;
    private buildDataset;
    private buildMinBarLengthPlugin;
    private buildActiveBarHighlightPlugin;
    private renderTooltipContent;
    private handleTooltip;
    private createChart;
    private refreshChart;
    render(): any;
}
