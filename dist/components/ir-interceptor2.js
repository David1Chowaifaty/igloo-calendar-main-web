import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { a as interceptor_requests } from './ir-interceptor.store.js';

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = /*@__PURE__*/ proxyCustomElement(class IrInterceptor extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
        this.suppressToastEndpoints = [];
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStopped = null;
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    setupAxiosInterceptors() {
        axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStopped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg, extractedUrl);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error, url) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast) {
            this.toast.emit({
                type: 'error',
                title: error,
                description: '',
                position: 'top-right',
            });
        }
        return Promise.reject(error);
    }
    render() {
        return (h(Host, { key: '50d405635cc74b7dbaaf9842db2a4d074b5b0ab0' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: '76446e61119b17d291d40c8916b2408f5faeeb44', class: "loadingScreenContainer" }, h("div", { key: 'f281d9d5bc5bbbf180a9df951b928d8867916da3', class: "loaderContainer" }, h("span", { key: '83889d9f6b773297a81d0a0935f6c90b631bf792', class: "page-loader" }))))));
    }
    static get style() { return IrInterceptorStyle0; }
}, [2, "ir-interceptor", {
        "handledEndpoints": [16],
        "suppressToastEndpoints": [16],
        "isShown": [32],
        "isLoading": [32],
        "isUnassignedUnit": [32],
        "endpointsCount": [32],
        "isPageLoadingStopped": [32]
    }, [[16, "preventPageLoad", "handleStopPageLoading"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-interceptor"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInterceptor);
            }
            break;
    } });
}

export { IrInterceptor as I, defineCustomElement as d };

//# sourceMappingURL=ir-interceptor2.js.map