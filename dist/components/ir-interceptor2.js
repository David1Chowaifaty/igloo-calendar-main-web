import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { a as interceptor_requests } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-otp2.js';
import { d as defineCustomElement$1 } from './ir-otp-modal2.js';

class InterceptorError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'InterceptorError';
        this.code = code;
        // Ensure the prototype chain is correct (important for `instanceof` checks)
        Object.setPrototypeOf(this, InterceptorError.prototype);
    }
}

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
    async handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
        if (extractedUrl === '/Validate_Exposed_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            return this.handleOtpResponse({ response, extractedUrl });
        }
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleResponseExceptions({ response, extractedUrl });
        }
        return response;
    }
    handleResponseExceptions({ response, extractedUrl }) {
        this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
        throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
    }
    handleOtpResponse({ extractedUrl, response }) {
        this.showModal = true;
        this.email = response.data.ExceptionMsg;
        const name = extractedUrl.slice(1);
        this.baseOTPUrl = name;
        if (name === 'Check_OTP_Necessity') {
            let methodName;
            try {
                const body = typeof response.config.data === 'string' ? JSON.parse(response.config.data) : response.config.data;
                methodName = body.METHOD_NAME;
            }
            catch (e) {
                console.error('Failed to parse request body for METHOD_NAME', e);
                methodName = name; // fallback
            }
            this.requestUrl = methodName;
        }
        else {
            this.requestUrl = name;
        }
        this.pendingConfig = response.config;
        this.response = response;
        return new Promise((resolve, reject) => {
            this.pendingResolve = resolve;
            this.pendingReject = reject;
            setTimeout(() => {
                var _a;
                (_a = this.otpModal) === null || _a === void 0 ? void 0 : _a.openModal();
            }, 10);
        });
    }
    handleError(error, url, code) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast || (shouldSuppressToast && !code)) {
            this.toast.emit({
                type: 'error',
                title: error,
                description: '',
                position: 'top-right',
            });
        }
        return Promise.reject(error);
    }
    // private async handleOtpFinished(ev: CustomEvent) {
    //   if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
    //     return;
    //   }
    //   const { otp, type } = ev.detail;
    //   if (type === 'success') {
    //     if (!otp) {
    //       this.pendingReject(new Error('OTP cancelled by user'));
    //     } else {
    //       try {
    //         if (this.baseOTPUrl !== 'Check_OTP_Necessity') {
    //           const retryConfig: AxiosRequestConfig = {
    //             ...this.pendingConfig,
    //             data: {
    //               ...(typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {}),
    //             },
    //           };
    //           const resp = await axios.request(retryConfig);
    //           this.pendingResolve(resp);
    //         }
    //       } catch (err) {
    //         this.pendingReject(err);
    //       }
    //     }
    //   }
    //   this.pendingConfig = undefined;
    //   this.pendingResolve = undefined;
    //   this.pendingReject = undefined;
    //   this.showModal = false;
    //   if (this.baseOTPUrl === 'Check_OTP_Necessity') {
    //     this.baseOTPUrl = null;
    //     return this.response;
    //   }
    // }
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const { otp, type } = ev.detail;
        if (type === 'cancel') {
            const cancelResp = {
                config: this.pendingConfig,
                data: { cancelled: true, baseOTPUrl: this.baseOTPUrl },
                status: 0,
                statusText: 'OTP Cancelled',
                headers: {},
                request: {},
            };
            this.pendingResolve(cancelResp);
        }
        else if (type === 'success') {
            if (!otp) {
                this.pendingReject(new Error('OTP cancelled by user'));
            }
            else if (this.baseOTPUrl === 'Check_OTP_Necessity') {
                // don't resend, just resolve with the original response
                this.pendingResolve(this.response);
            }
            else {
                try {
                    const retryConfig = Object.assign(Object.assign({}, this.pendingConfig), { data: typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {} });
                    const resp = await axios.request(retryConfig);
                    this.pendingResolve(resp);
                }
                catch (err) {
                    this.pendingReject(err);
                }
            }
        }
        // common clean-up
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
        this.showModal = false;
        this.baseOTPUrl = null;
    }
    render() {
        return (h(Host, { key: '9f23626cd8aafda41ddff181bd5035bb7394249c' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: 'fc2ef5ebb9612e51af8d87b8cde3b7128fad1355', class: "loadingScreenContainer" }, h("div", { key: '724b180ef14859d77927f7c98fe8ac9652993a9f', class: "loaderContainer" }, h("span", { key: '007f6df10b189682d2440077438349b9d55a27bb', class: "page-loader" })))), this.showModal && (h("ir-otp-modal", { key: '774a301610e12844488c3bd303eaa2a18d5f8a6c', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
    static get style() { return IrInterceptorStyle0; }
}, [2, "ir-interceptor", {
        "handledEndpoints": [16],
        "suppressToastEndpoints": [16],
        "isShown": [32],
        "isLoading": [32],
        "isUnassignedUnit": [32],
        "endpointsCount": [32],
        "isPageLoadingStopped": [32],
        "showModal": [32],
        "requestUrl": [32],
        "baseOTPUrl": [32],
        "email": [32]
    }, [[16, "preventPageLoad", "handleStopPageLoading"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-interceptor", "ir-button", "ir-icons", "ir-otp", "ir-otp-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInterceptor);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrInterceptor as I, defineCustomElement as d };

//# sourceMappingURL=ir-interceptor2.js.map