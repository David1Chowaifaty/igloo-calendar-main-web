import { Host, h } from "@stencil/core";
import axios from "axios";
// import { IToast } from '../ir-toast/toast';
import interceptor_requests from "../../stores/ir-interceptor.store";
export class IrInterceptor {
    constructor() {
        this.ignoredErrorRoutes = ['/Exposed_Guest_SignIn', '/Exposed_Guest_SignUp'];
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.errorMessage = null;
        this.lastFailedRequest = null;
        this.handledEndpoints = [];
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
        var _a;
        console.log('handleResponse');
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
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        console.log('error', error);
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
        return (h(Host, { key: '0754446820816363a9e39eb2d1c6c7f7fd258533' }, h("ir-alert-dialog", { key: '01797df814969d3f0106d04cfa64d6bf1173e043', ref: el => (this.alertRef = el) }, h("div", { key: '5aba74dbe3816f4367919b4c003a8abe27060c57', slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("ir-icons", { key: 'f81241bc86ead3779c6f0a082e48883f6e7f4192', name: "danger", class: 'text-red-500', svgClassName: "size-6" }), h("h1", { key: '9669cbf8d0c376d3710331afc1afb2b19d60d95e', class: 'text-lg font-semibold' }, "Something went wrong!")), h("p", { key: '23a318111022abf210d6a55dbadbb3b3b9066000', slot: "modal-body" }, this.errorMessage), h("div", { key: 'c35285ac9c0ca2f302c46051f4d3de9ca36022c7', slot: "modal-footer" }, h("ir-button", { key: 'c7760f4e71ae0daf350158d83483a57497f2e318', label: "Cancel", variants: "outline", onButtonClick: () => this.alertRef.closeModal() }), h("ir-button", { key: '3b5f3f860b939f5dd15db4dffc4565657a81b988', label: "Try again", onButtonClick: () => this.retryLastRequest() })))));
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
