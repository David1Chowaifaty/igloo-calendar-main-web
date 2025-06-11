import { Host, h } from "@stencil/core";
import axios from "axios";
// import { IToast } from '../ir-toast/toast';
import interceptor_requests from "../../stores/ir-interceptor.store";
import localizedWords from "../../stores/localization.store";
export class IrInterceptor {
    constructor() {
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.errorMessage = null;
        this.lastFailedRequest = null;
        this.handledEndpoints = [];
        this.ignoredErrorRoutes = ['/Exposed_Guest_SignIn', '/Exposed_Guest_SignUp'];
    }
    //@Event({ bubbles: true, composed: true }) toast: EventEmitter<IToast>;
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
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = true;
        }
        return config;
    }
    handleResponse(response) {
        var _a, _b;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
        }
        interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            if (!this.ignoredErrorRoutes.includes(extractedUrl)) {
                this.handleError(response.data.ExceptionMsg);
                this.lastFailedRequest = response.config;
            }
            const code = (_b = response.data.ExceptionCode) !== null && _b !== void 0 ? _b : 'NO_CODE';
            console.error(`[${new Date().toISOString()}] [${code}]: ${response.data.ExceptionMsg}`);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        this.errorMessage = error;
        this.alertRef.openModal();
        return Promise.reject(error);
    }
    retryLastRequest() {
        this.alertRef.closeModal();
        this.errorMessage = null;
        if (this.lastFailedRequest) {
            return axios(this.lastFailedRequest);
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'd5940c1adc52cc15ecab6974cc340604f4128c59' }, h("ir-alert-dialog", { key: '64cd98cb246284c30709752047b186afad03ff99', ref: el => (this.alertRef = el) }, h("div", { key: '517ff384d2e23208978d085b14a6f00a4a77b658', slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("ir-icons", { key: '4de674fdd191cc793d0885fcb01f79ac9080b59c', name: "danger", class: 'text-red-500', svgClassName: "size-6" }), h("h1", { key: '3a05c2faf374e29310d9c02cc3aafce2f796f554', class: 'text-lg font-semibold' }, (_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SomethingWentWrong) !== null && _b !== void 0 ? _b : 'Something went wrong', "!")), h("p", { key: 'd5dfd593cf62c47dabee67a9babc9a21dd9fa70a', slot: "modal-body" }, this.errorMessage), h("div", { key: '8ed1b83cc7f00f0e026598952356f8fe18a63d47', slot: "modal-footer" }, h("ir-button", { key: '19d8e34592aebe97d7b925c947e8cfabe24f3779', label: "Cancel", variants: "outline", onButtonClick: () => this.alertRef.closeModal() }), h("ir-button", { key: '1e86a40963cb028ef5a206fae23cd2f102d9a408', label: "Try again", onButtonClick: () => this.retryLastRequest() })))));
    }
    static get is() { return "ir-interceptor"; }
    static get encapsulation() { return "shadow"; }
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
                    "original": "any[]",
                    "resolved": "any[]",
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
            "errorMessage": {},
            "lastFailedRequest": {}
        };
    }
}
//# sourceMappingURL=ir-interceptor.js.map
