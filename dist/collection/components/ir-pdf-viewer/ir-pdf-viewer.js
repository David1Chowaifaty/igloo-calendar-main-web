import { Host, h } from "@stencil/core";
import { getDocument, GlobalWorkerOptions, RenderingCancelledException } from "pdfjs-dist/build/pdf.mjs";
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
    loadToken = 0;
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
        this.loadToken++;
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
        const token = ++this.loadToken;
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
            if (token !== this.loadToken) {
                await task.destroy();
                return;
            }
            this.pdf = pdf;
            this.totalPages = pdf.numPages;
            await this.renderPage(this.currentPage, token);
        }
        catch (err) {
            if (token !== this.loadToken || isCancelled(err))
                return;
            const msg = err instanceof Error ? err.message : String(err);
            this.error = `Could not load PDF: ${msg}`;
        }
        finally {
            if (token === this.loadToken)
                this.isLoading = false;
        }
    }
    async renderPage(pageNumber, token) {
        const pdf = this.pdf;
        const canvas = this.canvasEl;
        if (!pdf || !canvas)
            return;
        this.renderTask?.cancel();
        this.renderTask = null;
        const page = await pdf.getPage(pageNumber);
        if (token !== this.loadToken)
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
            this.renderPage(this.currentPage, this.loadToken);
        }, 120);
    }
    async goTo(page) {
        if (!this.pdf || page < 1 || page > this.totalPages || this.isLoading)
            return;
        const token = this.loadToken;
        this.currentPage = page;
        this.isLoading = true;
        try {
            await this.renderPage(page, token);
        }
        catch (err) {
            if (token !== this.loadToken || isCancelled(err))
                return;
            const msg = err instanceof Error ? err.message : String(err);
            this.error = `Could not render page: ${msg}`;
        }
        finally {
            if (token === this.loadToken)
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
        return (h(Host, { key: '9b0541615492d52e281d1ba4ac0260ea779a64e9' }, h("canvas", { key: '030b82743b2db00e68e11989e3fb92d7d169b321', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '5853e468928af674d4aa44ccdcd2db7e610254f6', class: "overlay" }, h("wa-spinner", { key: 'c9fa4c744769897c3761e75e9a8aacf1e1e8175c' }))), error && !isLoading && (h("div", { key: 'ea731b0ca0b2686f1f4076458b23d80f6c94b569', class: "error-state", role: "alert" }, h("wa-icon", { key: '1f06d2ac3477cba0bac80cdcbd8d42b0603b4d66', name: "triangle-exclamation" }), h("span", { key: '631ebddfe575dbdbc78281399e45fb48826c0a0f' }, error))), totalPages > 1 && (h("div", { key: 'f2eb5598ccced0fa56fab0a82fe19ea0cf9ff60e', class: "pagination" }, h("button", { key: '3c290d25e0495f095933a47645850affdd4e3849', type: "button", class: "page-btn", "aria-label": "Previous page", disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '180f249a4b21e49971323e85e05d3e8b6ae2e772', name: "chevron-left" })), h("span", { key: 'a3fc7d7167901454f69794475721269b079d9c4c', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: 'c43c46aee32f248b08158ebc404cbaf22bee6143', type: "button", class: "page-btn", "aria-label": "Next page", disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: '3fbec4b250e96c8fa94ca6bb96cdf20d6cc31396', name: "chevron-right" }))))));
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
