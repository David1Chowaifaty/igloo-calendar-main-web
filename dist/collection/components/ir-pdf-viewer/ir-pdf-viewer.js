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
        return (h(Host, { key: 'e3d8f2e450c28b0906df4e728a0cf180e57b548f' }, h("canvas", { key: '24a5b888dcc96b17b92e360cbe116449246e8dbd', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '97e5a222a4fd5decb5049ff5e3bcb31169bd43a6', class: "overlay" }, h("wa-spinner", { key: '01ae97ba7855d2e0cf68f794b467130743ed2162' }))), error && !isLoading && (h("div", { key: 'ac3504f21f66468d0db9804b3bc90bf14f7b1d69', class: "error-state", role: "alert" }, h("wa-icon", { key: 'dc4da4de1b20630c7317bd0d4b6e656b2fa153dd', name: "triangle-exclamation" }), h("span", { key: 'e79c8424d85113aaa8e5a53b9a583648f2709d97' }, error))), totalPages > 1 && (h("div", { key: 'a8dfbceed2e2c37f39bb9fb9a7c0703a967a7ee7', class: "pagination" }, h("button", { key: 'b28108bb46e9a7f15dfe6a7137be660e0cf14075', type: "button", class: "page-btn", "aria-label": "Previous page", disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '9d581fa1c0b131401ec80f2892feadf6b70ce404', name: "chevron-left" })), h("span", { key: '7d34fd5eaa96980f7a9b0e4d18f56a794c64caeb', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '5b96cf7886a375fbf257730917ac832025bd16fd', type: "button", class: "page-btn", "aria-label": "Next page", disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'a5e5230d7ed73d88862d04748fc5a14c1f0ebeb1', name: "chevron-right" }))))));
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
