import { Host, h } from "@stencil/core";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
const RENDER_QUALITY = 2;
let workerInitialized = false;
function ensureWorker(workerSrc) {
    if (workerInitialized)
        return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc ?? `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;
    workerInitialized = true;
}
export class IrPdfViewer {
    canvasEl;
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
    /** Override the pdf.js worker URL (defaults to unpkg CDN). Read once at first load. */
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
        this.pdf?.destroy();
        this.pdf = null;
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
            if (this.pdf) {
                await this.pdf.destroy();
                this.pdf = null;
            }
            const pdf = await pdfjsLib.getDocument({ url }).promise;
            if (token !== this.loadToken) {
                await pdf.destroy();
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
        this.renderTask = page.render({ canvasContext: ctx, viewport });
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
        return (h(Host, { key: '597ad02cda0a822a5795ce306dd47e2b173c423b' }, h("canvas", { key: '792ae60ea4fe0b57f45c141becaf9d7065ef7d45', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '9a7c7c8974ae8ca0fc222db84b118594ec2a44db', class: "overlay" }, h("wa-spinner", { key: '668e6caeac2a2ec473271e36cb24595c35f55f4e' }))), error && !isLoading && (h("div", { key: 'd644b4a1d0f3699592e7f534e122d4a29ed8e060', class: "error-state", role: "alert" }, h("wa-icon", { key: 'cf557e438994a6d219de0e3ae7201266c911dce6', name: "triangle-exclamation" }), h("span", { key: 'c1298c419711871d83e5829aa96c5e700b977e28' }, error))), totalPages > 1 && (h("div", { key: 'a0a1015cf3c711afe676f418d97046797bf08a98', class: "pagination" }, h("button", { key: 'e53574d39bc3fc2a630cc9d8acd6b1f127381a3f', type: "button", class: "page-btn", "aria-label": "Previous page", disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '4bcaa3daee83ed21ac7cb0ca5c0d596eeacabc01', name: "chevron-left" })), h("span", { key: 'eb7196dd43d7aa1cc08a896c704fca9417fa8165', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '8e1dd9d42061e690abd7bc1517c5325d96d0824a', type: "button", class: "page-btn", "aria-label": "Next page", disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'a31ac5ab2e9edb5d003fed1539e7517465e605b5', name: "chevron-right" }))))));
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
                "attribute": "src",
                "reflect": false
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
                    "text": "Override the pdf.js worker URL (defaults to unpkg CDN). Read once at first load."
                },
                "getter": false,
                "setter": false,
                "attribute": "worker-src",
                "reflect": false
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
    return !!err && typeof err === 'object' && err.name === 'RenderingCancelledException';
}
//# sourceMappingURL=ir-pdf-viewer.js.map
