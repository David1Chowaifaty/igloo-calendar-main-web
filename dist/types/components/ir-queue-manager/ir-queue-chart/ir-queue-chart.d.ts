export declare class IrQueueChart {
    el: HTMLElement;
    /** Labels for X-axis */
    labels: string[];
    /** Values for bars */
    values: number[];
    /** Chart title */
    label: string;
    private chart?;
    canvas: HTMLCanvasElement;
    componentDidLoad(): void;
    protected dataChanged(): void;
    disconnectedCallback(): void;
    private getCssVar;
    private createChart;
    private updateChart;
    render(): any;
}
