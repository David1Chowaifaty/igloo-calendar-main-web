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
        return (h(Host, { key: 'b2fb14f16f1235e1feae048b05efca6d958e968b' }, h("ir-alert-dialog", { key: '1b90346ead88da8bd01baf9855f2b15a347848c3', ref: el => (this.alertRef = el) }, h("div", { key: '03a090c1bdd38a333d7727ad69e491eb1feb63c9', slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("ir-icons", { key: 'cb46c8977e693b24ac4ed97a3b9c5741e4006dd4', name: "danger", class: 'text-red-500', svgClassName: "size-6" }), h("h1", { key: '9914b0821449d1e8a83cb90cd215a0eb183add90', class: 'text-lg font-semibold' }, (_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SomethingWentWrong) !== null && _b !== void 0 ? _b : 'Something went wrong', "!")), h("p", { key: '4a48370ed8345918e40d4d46a01c75e6a1c2f4af', slot: "modal-body" }, this.errorMessage), h("div", { key: '83ee6e3312a0c61083d6ea6a8cbcb0072ec97749', slot: "modal-footer" }, h("ir-button", { key: '13de361f493fa2342845481b2f4ca81739485c32', label: "Cancel", variants: "outline", onButtonClick: () => this.alertRef.closeModal() }), h("ir-button", { key: 'efb241edb49655c512fd9f19169ca766b9cdd404', label: "Try again", onButtonClick: () => this.retryLastRequest() })))));
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
