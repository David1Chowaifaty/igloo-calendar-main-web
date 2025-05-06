import { Host, h } from "@stencil/core";
import axios from "axios";
import interceptor_requests from "../../stores/ir-interceptor.store";
import { InterceptorError } from "./InterceptorError";
export class IrInterceptor {
    constructor() {
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
        if (extractedUrl === '/Validate_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            this.showModal = true;
            this.requestUrl = extractedUrl.slice(1, extractedUrl.length);
            this.pendingConfig = response.config;
            return new Promise((resolve, reject) => {
                this.pendingResolve = resolve;
                this.pendingReject = reject;
                setTimeout(() => {
                    var _a;
                    (_a = this.otpModal) === null || _a === void 0 ? void 0 : _a.openModal();
                }, 10);
            });
        }
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
            throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
        }
        if (this.showModal)
            this.showModal = false;
        return response;
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
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const otp = ev.detail;
        if (!otp) {
            this.pendingReject(new Error('OTP cancelled by user'));
        }
        else {
            try {
                const retryConfig = Object.assign(Object.assign({}, this.pendingConfig), { data: Object.assign({}, (typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {})) });
                const resp = await axios.request(retryConfig);
                this.pendingResolve(resp);
            }
            catch (err) {
                this.pendingReject(err);
            }
        }
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
    }
    render() {
        return (h(Host, { key: '4181027c7fb8c97389b512d2dff97ce6b3cca052' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: '2b073ebaabf10d27a648a3c371bc83c41586e4bb', class: "loadingScreenContainer" }, h("div", { key: 'a1b9c06d055d3ed65c84ad3f79dfb25593851304', class: "loaderContainer" }, h("span", { key: 'ef04f94a0b24a3b7cd16ea1b5804d514cc8203ed', class: "page-loader" })))), this.showModal && h("ir-otp-modal", { key: '5619a6bbaf8a7066f0495e6d490fc655db1f66bd', requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) })));
    }
    static get is() { return "ir-interceptor"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-interceptor.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-interceptor.css"]
        };
    }
    static get properties() {
        return {
            "handledEndpoints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit']"
            },
            "suppressToastEndpoints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "isShown": {},
            "isLoading": {},
            "isUnassignedUnit": {},
            "endpointsCount": {},
            "isPageLoadingStopped": {},
            "showModal": {},
            "requestUrl": {}
        };
    }
    static get events() {
        return [{
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "preventPageLoad",
                "method": "handleStopPageLoading",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-interceptor.js.map
