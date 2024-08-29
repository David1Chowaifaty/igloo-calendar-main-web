import { PaymentOptionService } from "../../services/payment_option.service";
import payment_option_store from "../../stores/payment-option.store";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrPaymentOption {
    constructor() {
        this.paymentOptionService = new PaymentOptionService();
        this.baseurl = undefined;
        this.propertyid = undefined;
        this.ticket = undefined;
        this.paymentOptions = [];
        this.isLoading = false;
        this.selectedOption = null;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
        if (this.ticket) {
            this.init();
        }
    }
    handleTokenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.init();
        }
    }
    init() {
        this.initServices();
        this.fetchData();
    }
    handleCloseModal(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        console.log(e.detail);
        this.closeModal(e.detail);
    }
    closeModal(newOption) {
        var _a, _b;
        if (newOption) {
            this.modifyPaymentList(newOption);
            if (newOption.is_payment_gateway) {
                this.propertyOptionsById.set(newOption.id, newOption);
            }
            else {
                this.propertyOptionsByCode.set(newOption.code, newOption);
            }
        }
        else {
            if (!this.propertyOptionsByCode.has((_a = payment_option_store.selectedOption) === null || _a === void 0 ? void 0 : _a.code) && !this.propertyOptionsById.has((_b = payment_option_store.selectedOption) === null || _b === void 0 ? void 0 : _b.id)) {
                this.modifyPaymentList(Object.assign(Object.assign({}, payment_option_store.selectedOption), { is_active: false }));
            }
        }
        payment_option_store.selectedOption = null;
        payment_option_store.mode = null;
    }
    async fetchData() {
        try {
            this.isLoading = true;
            const [paymentOptions, propertyOptions] = await Promise.all([
                this.paymentOptionService.GetExposedPaymentMethods(),
                this.paymentOptionService.GetPropertyPaymentMethods(this.propertyid),
            ]);
            this.propertyOptionsById = new Map(propertyOptions.map(o => [o.id, o]));
            this.propertyOptionsByCode = new Map(propertyOptions.map(o => [o.code, o]));
            this.paymentOptions = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.map(option => {
                if (option.is_payment_gateway) {
                    return this.propertyOptionsById.get(option.id) || option;
                }
                return this.propertyOptionsByCode.get(option.code) || option;
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initServices() {
        payment_option_store.token = this.ticket;
        this.paymentOptionService.setToken(this.ticket);
    }
    modifyPaymentList(paymentOption) {
        this.paymentOptions = [
            ...this.paymentOptions.map(p => {
                if ((paymentOption.is_payment_gateway && p.id === paymentOption.id) || (paymentOption.code === '005' && p.code === '005')) {
                    return paymentOption;
                }
                return p;
            }),
        ];
    }
    async handleCheckChange(e, po) {
        var _a;
        e.stopPropagation();
        e.stopImmediatePropagation();
        const is_active = e.detail;
        const newOption = Object.assign(Object.assign({}, po), { is_active, property_id: this.propertyid });
        if (po.code !== '005' && !po.is_payment_gateway) {
            await this.paymentOptionService.HandlePaymentMethod(newOption);
            this.modifyPaymentList(newOption);
            return;
        }
        if (!this.showEditButton(po)) {
            this.modifyPaymentList(newOption);
            return;
        }
        console.log('here');
        if (is_active && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.some(d => d.value === null))) {
            payment_option_store.mode = 'create';
            payment_option_store.selectedOption = newOption;
        }
        else {
            await this.paymentOptionService.HandlePaymentMethod(newOption);
        }
        this.modifyPaymentList(newOption);
    }
    showEditButton(po) {
        var _a;
        if (!po.is_payment_gateway && po.code !== '005') {
            return false;
        }
        return po.code === '005' || (po.is_payment_gateway && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.length) > 0);
    }
    render() {
        var _a, _b;
        if (this.isLoading || this.paymentOptions.length == 0) {
            return (h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, h("ir-loading-screen", null)));
        }
        return (h(Host, { class: "p-2" }, h("ir-toast", null), h("ir-interceptor", null), h("div", { class: "card p-1 flex-fill m-0" }, h("div", { class: "d-flex align-items-center mb-2" }, h("div", { class: "p-0 m-0 mr-1" }, h("ir-icons", { name: "credit_card" })), h("h3", { class: 'm-0 p-0' }, " Payment Options")), h("div", { class: "payment-table-container" }, h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, "Payment method"), h("th", { scope: "col" }, "Status"), h("th", { scope: "col", class: "actions-header" }, "Action"))), h("tbody", { class: "" }, (_a = this.paymentOptions) === null || _a === void 0 ? void 0 : _a.map(po => {
            if (po.code === '004') {
                return null;
            }
            return (h("tr", { key: po.id }, h("td", { class: 'text-left po-description' }, h("div", { class: "po-view" }, h("span", { class: 'p-0 m-0' }, po.description), " ", h("img", { src: "https://www.jccsmart.com/assets/images/app-logo.svg", alt: "", class: "payment-img" }))), h("td", null, h("ir-switch", { checked: po.is_active, onCheckChange: e => this.handleCheckChange(e, po) })), h("td", { class: "payment-action" }, this.showEditButton(po) && (h("ir-button", { variant: "icon", icon_name: "edit", onClickHanlder: () => {
                    payment_option_store.selectedOption = po;
                    payment_option_store.mode = 'edit';
                } })))));
        }))))), h("ir-sidebar", { onIrSidebarToggle: () => {
                this.closeModal(null);
            }, label: `${(_b = payment_option_store.selectedOption) === null || _b === void 0 ? void 0 : _b.description} Information`, open: payment_option_store.selectedOption !== null }, payment_option_store.selectedOption && h("ir-option-details", { propertyId: this.propertyid, slot: "sidebar-body" }))));
    }
    static get is() { return "ir-payment-option"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-option.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-option.css"]
        };
    }
    static get properties() {
        return {
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "baseurl",
                "reflect": false
            },
            "propertyid": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "propertyid",
                "reflect": false
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ticket",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "paymentOptions": {},
            "isLoading": {},
            "selectedOption": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTokenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "closeModal",
                "method": "handleCloseModal",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-payment-option.js.map
