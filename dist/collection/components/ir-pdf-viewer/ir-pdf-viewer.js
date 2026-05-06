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
        return (h(Host, { key: 'b1540d3a85627030f416fee4ee787ca4d0c139c1' }, h("canvas", { key: '544fc49807ca427f03c08a317ca0f918699e24d3', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '3b895b1bdf20d4b0eaa79094280c47176d0a264f', class: "overlay" }, h("wa-spinner", { key: 'f37f3c1ea7d11389b4f7b4d828f9231a6713af16' }))), error && !isLoading && (h("div", { key: '4352448e03c8ce684182500fe82a0a602d10ffd0', class: "error-state", role: "alert" }, h("wa-icon", { key: '99f1b58287c331429d9956de1756ffd3213f6794', name: "triangle-exclamation" }), h("span", { key: '4b23244300b4078520e86dee1dda74b549f2ae1c' }, error))), totalPages > 1 && (h("div", { key: '2977d7905e2d5ca1c2ed60c6860e24f715779963', class: "pagination" }, h("button", { key: '765ac4142d478b811d183c7a7898cdfbea9dc362', type: "button", class: "page-btn", "aria-label": "Previous page", disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '71645da22af93757b766bacffa4a9fd7d1cbf053', name: "chevron-left" })), h("span", { key: '1d047cf843dfd4262befb1e39115ecbbe5a10e5a', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: 'ed4c9473a7e7f6dbebf67b057ee0912467beba16', type: "button", class: "page-btn", "aria-label": "Next page", disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'e43700629abf3d4ede11d296c4bed605309955e9', name: "chevron-right" }))))));
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
