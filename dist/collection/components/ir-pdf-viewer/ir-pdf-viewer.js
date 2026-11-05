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
        return (h(Host, { key: 'fa526725f10e2b139846d964dd54c2145a198140' }, h("canvas", { key: '6589c869168fcc1ed1f1afc6c988c75eea7683dd', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '15a189853b15e6495a2293fb6292c364cc025db0', class: "overlay" }, h("wa-spinner", { key: 'd5aeec44091891b64864cde74b2ac479ba013e65' }))), error && !isLoading && (h("div", { key: 'aba63a8048e65f81aa5d165ac4469ef657c88261', class: "error-state", role: "alert" }, h("wa-icon", { key: '3c0c6e4909cc8775aac60ed5de3d7e63f01f60f6', name: "triangle-exclamation" }), h("span", { key: '58e0c633a0ffe5d0269f8bd03cf198363bdc1af1' }, error))), totalPages > 1 && (h("div", { key: '7c84babd335aa36d85a32fc9fca67cf75f46195a', class: "pagination" }, h("button", { key: '04873d31678c95e81d8edd69788524fa55ca6a93', type: "button", class: "page-btn", "aria-label": t('Lcz_PreviousPage', { fallback: 'Previous page' }), disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: 'b22ebddc883f5e38dc07f614a71b791366fc16f1', class: "ir-flip-rtl", name: "chevron-left" })), h("span", { key: '72f445bf5b307fd702a80f7c7297d7be2f618614', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '90f08592efd339aab195ac31e82ff271fca83070', type: "button", class: "page-btn", "aria-label": t('Lcz_NextPage', { fallback: 'Next page' }), disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: '45c995ef26650e9836ab97370798210254a42df2', class: "ir-flip-rtl", name: "chevron-right" }))))));
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
