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
        return (h(Host, { key: 'f109ce68343d95c6d021b4bf91172dd122342981' }, h("canvas", { key: '41511bcbf76f06eb1398a1f228770ec772f8d2b2', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '1d8708cd9f3825f776db91003161ea68bb6a7a03', class: "overlay" }, h("wa-spinner", { key: '6e3e507dc7448f871faaa7791dc454a6256dcaf8' }))), error && !isLoading && (h("div", { key: '91c1825c004a758e353958096bbbc611dc090221', class: "error-state", role: "alert" }, h("wa-icon", { key: '76e150f58f5b5a8ac9da1015df3c16e4177eac63', name: "triangle-exclamation" }), h("span", { key: '40f86ff02e42c10a00b8afe4f2e61e8cda4e17b5' }, error))), totalPages > 1 && (h("div", { key: '69583b3c20f034b39bc8c25a5d67a744502d6ecb', class: "pagination" }, h("button", { key: '57cdf66b21f487ae0867e79a3303b2bdb832b056', type: "button", class: "page-btn", "aria-label": t('Lcz_PreviousPage', { fallback: 'Previous page' }), disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '0e8f40924ffad8d7503602fff889dc3b609b8976', class: "ir-flip-rtl", name: "chevron-left" })), h("span", { key: 'ee99a264540a3f0271bf16456aab8df45cf9e14d', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '1699781408b11c4f13e7340b3f43f6d0453ce8de', type: "button", class: "page-btn", "aria-label": t('Lcz_NextPage', { fallback: 'Next page' }), disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'f38cbfb4a2d3ef65df80d9617443c445e30078c3', class: "ir-flip-rtl", name: "chevron-right" }))))));
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
