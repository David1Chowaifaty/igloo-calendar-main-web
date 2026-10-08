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
        return (h(Host, { key: 'b27dde6d2e796a77f5c0692c9da06d5f3f9f27ca' }, h("canvas", { key: 'b84c7f72fae2cb56d045306dbb1bc811d046a85e', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '7a16f6bb5a150a4b17c472c3b1ea7bca126a90dc', class: "overlay" }, h("wa-spinner", { key: '9dd31f47152c89352953a2b0d147ca9b464c8b2f' }))), error && !isLoading && (h("div", { key: '44893593d55d88a632f176d14ffc271d316a34cd', class: "error-state", role: "alert" }, h("wa-icon", { key: '5de41ed8057073cc18d25c6be596b73ef630a3dc', name: "triangle-exclamation" }), h("span", { key: '3a20e390313dcb7aaf2196b660ba1726c8c2ccab' }, error))), totalPages > 1 && (h("div", { key: '6ba185bdebad18d201b6f81862b62a745cfd1405', class: "pagination" }, h("button", { key: '29eb1ba9abb717dcb3ed2368fbc265213d565b06', type: "button", class: "page-btn", "aria-label": t('Lcz_PreviousPage', { fallback: 'Previous page' }), disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '5bb65c9cde52fad3c37a0f9293ca31c8c260cda8', class: "ir-flip-rtl", name: "chevron-left" })), h("span", { key: '4c8277fdd2e56e4c3457a98320d1a834353a2457', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: 'd5d632efd26879c290e9183237317c62285f3040', type: "button", class: "page-btn", "aria-label": t('Lcz_NextPage', { fallback: 'Next page' }), disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: '292626a33067c67604277756319a5ded559fc2e3', class: "ir-flip-rtl", name: "chevron-right" }))))));
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
