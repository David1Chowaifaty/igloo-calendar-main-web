import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { a as interceptor_requests } from './ir-interceptor.store.js';

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const IrInterceptor = /*@__PURE__*/ proxyCustomElement(class IrInterceptor extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStoped = null;
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings'];
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStoped = e.detail;
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
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStoped !== extractedUrl) {
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
            this.isPageLoadingStoped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        this.toast.emit({
            type: 'error',
            title: error,
            description: '',
            position: 'top-right',
        });
        return Promise.reject(error);
    }
    render() {
        return (h(Host, { key: '7f0ee0897aed43cd4e46b5e807d681a52c7d821b' }, this.isLoading && !this.isPageLoadingStoped && (h("div", { key: '420f5cf0c424082947b8fce5248a2c30ee1fd51c', class: "loadingScreenContainer" }, h("div", { key: '5dd5409079f624289bd080b1818f5055b26464b2', class: "loaderContainer" }, h("span", { key: 'ba2329ccfcc05bddadbc92b9a5b04c12cbdf1287', class: "page-loader" }))))));
    }
    static get style() { return irInterceptorCss; }
}, [2, "ir-interceptor", {
        "handledEndpoints": [16],
        "isShown": [32],
        "isLoading": [32],
        "isUnassignedUnit": [32],
        "endpointsCount": [32],
        "isPageLoadingStoped": [32]
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

//# sourceMappingURL=ir-interceptor2.js.map