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
        if (extractedUrl === '/Validate_Exposed_Method') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            this.showModal = true;
            this.email = response.data.ExceptionMsg;
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
        this.showModal = false;
    }
    render() {
        return (h(Host, { key: '8e79f46a2b303a6c119c3c1975971c6357b92d7c' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: 'ab4ce955ccb8a9064aaaf905dcb0f7f2199d1e77', class: "loadingScreenContainer" }, h("div", { key: 'a41d7891064ea3c2bd45d066f8d424f06955e224', class: "loaderContainer" }, h("span", { key: 'c5fd81f7507f3851a628dbbace047b4eb7ae012f', class: "page-loader" })))), this.showModal && (h("ir-otp-modal", { key: '509626a2a3ccb9eb536be3d64ce5b6d51301f00e', email: this.email, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
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
            "requestUrl": {},
            "email": {}
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
