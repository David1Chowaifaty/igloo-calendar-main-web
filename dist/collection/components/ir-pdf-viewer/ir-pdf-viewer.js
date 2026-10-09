import { Host, h } from "@stencil/core";
import { getDocument, GlobalWorkerOptions, RenderingCancelledException } from "pdfjs-dist/build/pdf.mjs";
import { t } from "../../services/locale/t";
const RENDER_QUALITY = 2;
const PDF_WORKER_URL = 'https://unpkg.com/pdfjs-dist@6.0.227/build/pdf.worker.min.mjs';
let workerInitialized = false;
function ensureWorker(workerSrc) {
    if (workerInitialized)
        return;
    GlobalWorkerOptions.workerSrc = workerSrc ?? PDF_WORKER_URL;
    workerInitialized = true;
}
export class IrPdfViewer {
    canvasEl;
    loadingTask = null;
    pdf = null;
    renderTask = null;
    loadApiClient = 0;
    resizeObserver;
    resizeTimer;
    el;
    currentPage = 1;
    error = null;
    isLoading = false;
    totalPages = 0;
    /** URL of the PDF to display */
    src;
    onSrcChange(next) {
        this.currentPage = 1;
        this.loadPdf(next);
    }
    /** Override the pdf.js worker URL (defaults to the bundled asset). Read once at first load. */
    workerSrc;
    componentWillLoad() {
        ensureWorker(this.workerSrc);
        if (this.src)
            this.isLoading = true;
    }
    componentDidLoad() {
        this.resizeObserver = new ResizeObserver(() => this.scheduleReRender());
        this.resizeObserver.observe(this.el);
        if (this.src)
            this.loadPdf(this.src);
    }
    disconnectedCallback() {
        this.loadApiClient++;
        this.renderTask?.cancel();
        this.renderTask = null;
        this.pdf = null;
        this.loadingTask?.destroy();
        this.loadingTask = null;
        this.resizeObserver?.disconnect();
        this.resizeObserver = undefined;
        if (this.resizeTimer) {
            window.clearTimeout(this.resizeTimer);
            this.resizeTimer = undefined;
        }
    }
    async loadPdf(url) {
        const ApiClient = ++this.loadApiClient;
        this.isLoading = true;
        this.error = null;
        this.totalPages = 0;
        try {
            if (this.loadingTask) {
                await this.loadingTask.destroy();
                this.loadingTask = null;
                this.pdf = null;
            }
            const task = getDocument({ url });
            this.loadingTask = task;
            const pdf = await task.promise;
            if (ApiClient !== this.loadApiClient) {
                await task.destroy();
                return;
            }
            this.pdf = pdf;
            this.totalPages = pdf.numPages;
            await this.renderPage(this.currentPage, ApiClient);
        }
        catch (err) {
            if (ApiClient !== this.loadApiClient || isCancelled(err))
                return;
            const msg = err instanceof Error ? err.message : String(err);
            this.error = `${t('Lcz_CouldNotLoadPdf', { fallback: 'Could not load PDF:' })} ${msg}`;
        }
        finally {
            if (ApiClient === this.loadApiClient)
                this.isLoading = false;
        }
    }
    async renderPage(pageNumber, ApiClient) {
        const pdf = this.pdf;
        const canvas = this.canvasEl;
        if (!pdf || !canvas)
            return;
        this.renderTask?.cancel();
        this.renderTask = null;
        const page = await pdf.getPage(pageNumber);
        if (ApiClient !== this.loadApiClient)
            return;
        const hostW = this.el.clientWidth;
        if (hostW === 0)
            return;
        const pixelRatio = (window.devicePixelRatio ?? 1) * RENDER_QUALITY;
        const naturalViewport = page.getViewport({ scale: 1 });
        const fitScale = hostW / naturalViewport.width;
        const viewport = page.getViewport({ scale: fitScale * pixelRatio });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.renderTask = page.render({ canvas, canvasContext: ctx, viewport });
        try {
            await this.renderTask.promise;
        }
        catch (err) {
            if (isCancelled(err))
                return;
            throw err;
        }
        finally {
            this.renderTask = null;
        }
    }
    scheduleReRender() {
        if (!this.pdf)
            return;
        if (this.resizeTimer)
            window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(() => {
            this.resizeTimer = undefined;
            this.renderPage(this.currentPage, this.loadApiClient);
        }, 120);
    }
    async goTo(page) {
        if (!this.pdf || page < 1 || page > this.totalPages || this.isLoading)
            return;
        const ApiClient = this.loadApiClient;
        this.currentPage = page;
        this.isLoading = true;
        try {
            await this.renderPage(page, ApiClient);
        }
        catch (err) {
            if (ApiClient !== this.loadApiClient || isCancelled(err))
                return;
            const msg = err instanceof Error ? err.message : String(err);
            this.error = `${t('Lcz_CouldNotRenderPage', { fallback: 'Could not render page:' })} ${msg}`;
        }
        finally {
            if (ApiClient === this.loadApiClient)
                this.isLoading = false;
        }
    }
    goToPrev = () => this.goTo(this.currentPage - 1);
    goToNext = () => this.goTo(this.currentPage + 1);
    setCanvasRef = (el) => {
        this.canvasEl = el;
    };
    render() {
        const { isLoading, error, totalPages, currentPage } = this;
        const atFirstPage = currentPage <= 1 || isLoading;
        const atLastPage = currentPage >= totalPages || isLoading;
        return (h(Host, { key: '09f843e74ebc2ecbb2da18f4d3dc8ed2c78742a9' }, h("canvas", { key: 'c8a2ec5809ce0b6c80acbb58c7bf48d3506a9e59', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '48711b50135615f9caf33371affe480c54a7b41c', class: "overlay" }, h("wa-spinner", { key: 'd4cdb7fc366157fdfe375ccc3f08472b97fcca0d' }))), error && !isLoading && (h("div", { key: '942be29cf2916bff593dcc23f1ecb681bfe75b9c', class: "error-state", role: "alert" }, h("wa-icon", { key: 'a7ff2fa2bed002475358dcb25e308d45f5222132', name: "triangle-exclamation" }), h("span", { key: 'adfb647ade24f673e3102f9902968b3ccd6671f1' }, error))), totalPages > 1 && (h("div", { key: '620a701d56282f12c3136a658f54201b81edf1f3', class: "pagination" }, h("button", { key: '20e955ed6cbcd6fc40d0feb0fa979c9fe3939fb5', type: "button", class: "page-btn", "aria-label": t('Lcz_PreviousPage', { fallback: 'Previous page' }), disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '4d0c0528167cd4c3a463be8336417b1e0b9e1725', class: "ir-flip-rtl", name: "chevron-left" })), h("span", { key: '5421096e6ec28fb9704deaf06772627ed085400a', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '9ca97e91c6337b45e323dbab10d8a806e25e27b5', type: "button", class: "page-btn", "aria-label": t('Lcz_NextPage', { fallback: 'Next page' }), disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'f5b07f8171c8a2618a088ecfacef0b2b2d5efac7', class: "ir-flip-rtl", name: "chevron-right" }))))));
    }
    static get is() { return "ir-pdf-viewer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pdf-viewer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pdf-viewer.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "URL of the PDF to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "src"
            },
            "workerSrc": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Override the pdf.js worker URL (defaults to the bundled asset). Read once at first load."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "worker-src"
            }
        };
    }
    static get states() {
        return {
            "currentPage": {},
            "error": {},
            "isLoading": {},
            "totalPages": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "src",
                "methodName": "onSrcChange"
            }];
    }
}
function isCancelled(err) {
    return err instanceof RenderingCancelledException;
}
