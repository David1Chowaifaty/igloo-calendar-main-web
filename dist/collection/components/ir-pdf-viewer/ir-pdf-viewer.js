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
        return (h(Host, { key: '946ea7e51fe8bdac5a018d3e4540b70ed8500135' }, h("canvas", { key: '369b0805cd2fb16b77f2411a5af95c293c737d8b', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: 'c49270667edcea407a71c65fa9caff19ce13a449', class: "overlay" }, h("wa-spinner", { key: '7fff86ca59200735a1c7d4682c2a726eb6353624' }))), error && !isLoading && (h("div", { key: '8eeb6147855a6d8b1384332d0793a60a11e20459', class: "error-state", role: "alert" }, h("wa-icon", { key: 'a0759794085352d226807554e81064e630ad82d9', name: "triangle-exclamation" }), h("span", { key: '5c6f3061dd162568ba929fa538f99f6af24e084a' }, error))), totalPages > 1 && (h("div", { key: '8d44b2dc1474801f6bed5b3a8b441dc9d398fbdf', class: "pagination" }, h("button", { key: '2bbdf446acd19d9dd9bdcfb1edb8d87ccadbf782', type: "button", class: "page-btn", "aria-label": t('Lcz_PreviousPage', { fallback: 'Previous page' }), disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '60f8c911671b8e85ee796c279e35586f73b37b69', class: "ir-flip-rtl", name: "chevron-left" })), h("span", { key: '1b0fbb64115fbfd3d0f4ee77ad0085c5a05371c0', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '0cd490a12f89d2ddee5f03170df41d22127b5d8f', type: "button", class: "page-btn", "aria-label": t('Lcz_NextPage', { fallback: 'Next page' }), disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'cf558b161adff4db0a3e6d6e3796de27b820cbd5', class: "ir-flip-rtl", name: "chevron-right" }))))));
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
