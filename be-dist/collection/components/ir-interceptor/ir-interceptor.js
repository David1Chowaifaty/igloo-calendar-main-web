import { Host, h } from "@stencil/core";
import axios from "axios";
// import { IToast } from '../ir-toast/toast';
import interceptor_requests from "../../stores/ir-interceptor.store";
export class IrInterceptor {
    constructor() {
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.errorMessage = null;
        this.handledEndpoints = ['/ReAllocate_Exposed_Room', '/Do_Payment', '/Get_Exposed_Bookings'];
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
            this.handleError(response.data.ExceptionMsg);
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
    render() {
        return (h(Host, { key: 'd6f73776a3598f4eaa0b8c0b3ed00a52e2f8aac0' }, h("ir-alert-dialog", { key: '166d7b6b4f71252cc13121c69eff3653d30c0d82', ref: el => (this.alertRef = el) }, h("h1", { key: '9f15bcf2e597205964da99565b898de4e2d43eef', slot: "modal-title", class: 'flex items-center' }, ' ', h("ir-icons", { key: '6c28d31f28c74948495a2e0c3a9ef438e77e4af0', name: "danger" }), h("span", { key: 'd973b74f9786befc13c322e60580b849854e7c0c' }, "Something went wrong!")), h("div", { key: '397e45376241e608b5bcd82a50e0756bb2187142', slot: "modal-body" }, h("p", { key: '4436037536fd5375709ab14ac05cd2a639a384a0' }, this.errorMessage), h("button", { key: 'a2fd028fa27310fae6e9dfe8a2e8eff164687593' }, "Cancel"), h("button", { key: 'b19c78638b38a8d6d7a231ac2e19bafb542dbe45' }, "Ok")))));
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
                "defaultValue": "['/ReAllocate_Exposed_Room', '/Do_Payment', '/Get_Exposed_Bookings']"
            }
        };
    }
    static get states() {
        return {
            "isShown": {},
            "isLoading": {},
            "isUnassignedUnit": {},
            "errorMessage": {}
        };
    }
}
//# sourceMappingURL=ir-interceptor.js.map
