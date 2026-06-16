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
        return (h(Host, { key: 'effd61415314388c206ed22401f8161fd4025083' }, h("canvas", { key: 'bcf007e1bbd4529209d6c8c0e77bdfd61a0ae874', ref: this.setCanvasRef, class: { hidden: !!error } }), isLoading && (h("div", { key: '4ac0fe59012511af6335711bea2523658b580427', class: "overlay" }, h("wa-spinner", { key: 'baff160666849de222985b0240a5c6e2bd4b503e' }))), error && !isLoading && (h("div", { key: 'ca1c615cf885d3ecea810d8f16ec16211d3f8f47', class: "error-state", role: "alert" }, h("wa-icon", { key: 'ed85780c46fbe086b375690c3314e69fd2dd0e22', name: "triangle-exclamation" }), h("span", { key: '83a3068be9e23c8d47d39c3ed5020e124c65f0bc' }, error))), totalPages > 1 && (h("div", { key: '0498784aa0b2a34f177fd48230f44079dd490ede', class: "pagination" }, h("button", { key: '9d47c7f50e14ba64c1af431fc9e5040d5865b668', type: "button", class: "page-btn", "aria-label": "Previous page", disabled: atFirstPage, onClick: this.goToPrev }, h("wa-icon", { key: '05ba94c61b64f5ed8287d8db3b45d03538fa5984', name: "chevron-left" })), h("span", { key: '3e0a06a208b291222baa10bec5a0d8dfd245edcb', class: "page-label", "aria-live": "polite" }, currentPage, " / ", totalPages), h("button", { key: '39b9b51cdfc72e802501e6fb6690980882ce623f', type: "button", class: "page-btn", "aria-label": "Next page", disabled: atLastPage, onClick: this.goToNext }, h("wa-icon", { key: 'da71d56d3ac3ba9a4fcc8de2301c9af3ed007137', name: "chevron-right" }))))));
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
