import { Host, h } from "@stencil/core";
import axios from "axios";
import interceptor_requests from "../../stores/ir-interceptor.store";
export class IrInterceptor {
    constructor() {
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
        return (h(Host, { key: '791521df038501a259a59fc6e763759a992e1060' }, this.isLoading && !this.isPageLoadingStoped && (h("div", { key: '249466036b8b8886c5251539ecaf8d93cf702319', class: "loadingScreenContainer" }, h("div", { key: '7244d11dff5f6651b202a623e5f5dc87867449e1', class: "loaderContainer" }, h("span", { key: '2ab07e4e266ac97f6f8332fb1b0a57ca63cc6422', class: "page-loader" }))))));
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
                "defaultValue": "['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings']"
            }
        };
    }
    static get states() {
        return {
            "isShown": {},
            "isLoading": {},
            "isUnassignedUnit": {},
            "endpointsCount": {},
            "isPageLoadingStoped": {}
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
                            "path": "../ir-toast/toast",
                            "id": "src/components/ir-toast/toast.ts::IToast"
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
