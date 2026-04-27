export declare class IrPdfViewer {
    private canvasEl?;
    private pdf;
    private renderTask;
    private loadToken;
    private resizeObserver?;
    private resizeTimer?;
    el: HTMLElement;
    private currentPage;
    private error;
    private isLoading;
    private totalPages;
    /** URL of the PDF to display */
    src: string;
    onSrcChange(next: string): void;
    /** Override the pdf.js worker URL (defaults to unpkg CDN). Read once at first load. */
    workerSrc?: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private loadPdf;
    private renderPage;
    private scheduleReRender;
    private goTo;
    private goToPrev;
    private goToNext;
    private setCanvasRef;
    render(): any;
}
