import { Host, h } from "@stencil/core";
import axios from "axios";
// import { IToast } from '../ir-toast/toast';
import interceptor_requests from "../../stores/ir-interceptor.store";
import localizedWords from "../../stores/localization.store";
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
        var _a, _b;
        return (h(Host, { key: '9d7925e9746b62cd2a0086ac464df1dd6aaebccf' }, h("ir-alert-dialog", { key: '72adfe382223937defeb71162a2f4e593493e7c5', ref: el => (this.alertRef = el) }, h("div", { key: 'f050455683c8a9bbf337c5d3b80c4d61375778a9', slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("ir-icons", { key: 'a9e00b49ae349ab309065626e827c28cbfca9014', name: "danger", class: 'text-red-500', svgClassName: "size-6" }), h("h1", { key: '9476cc11d7bc7ecdb4f15be7afb88d477c3949f4', class: 'text-lg font-semibold' }, (_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SomethingWentWrong) !== null && _b !== void 0 ? _b : 'Something went wrong', "!")), h("p", { key: '62f7ee6c19bf77b81d7ddea16a8ea6d33732f006', slot: "modal-body" }, this.errorMessage), h("div", { key: '7f9cd2b617caee2e043fc42e8b0ab27a2d13bcbd', slot: "modal-footer" }, h("ir-button", { key: '02f7b3f3dd1c32070308d844f165b77b22d0b6ed', label: "Cancel", variants: "outline", onButtonClick: () => this.alertRef.closeModal() }), h("ir-button", { key: '38ce11739851362fe9c35ed81523ce6587fed78f', label: "Try again", onButtonClick: () => this.retryLastRequest() })))));
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
