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
        return (h(Host, { key: 'aa817aa9ff2c1089d0bbb3f356ec0cdb3c560dcb' }, h("ir-alert-dialog", { key: '678b4457522db1493cf3c7a21f8b9fce10c66ecc', ref: el => (this.alertRef = el) }, h("div", { key: '71068ade39ab262f0e6720759390bfb0d89a5284', slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("ir-icons", { key: 'c86860e0159a2185925b1b949b0e87ef2302956f', name: "danger", class: 'text-red-500', svgClassName: "size-6" }), h("h1", { key: 'e47ed092cfc43a54f0c0e34c7d3c14600510c4ee', class: 'text-lg font-semibold' }, "Something went wrong!")), h("p", { key: '61641ad1e2f300e8d49215c2d9e83b852a25bdde', slot: "modal-body" }, this.errorMessage), h("div", { key: '4aa64ab04de12f194e682961619bd0b68c3902f3', slot: "modal-footer" }, h("ir-button", { key: '964c015d57569a4f6effa7a44d5d5ce34a30d639', label: "Cancel", variants: "outline", onButtonClick: () => this.alertRef.closeModal() }), h("ir-button", { key: '19c74a57f2988300ee1f4972efcb618995dfb162', label: "Try again", onButtonClick: () => this.retryLastRequest() })))));
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
