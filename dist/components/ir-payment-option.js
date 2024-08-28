import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { P as PaymentOptionService, p as payment_option_store, d as defineCustomElement$6 } from './ir-option-details2.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$c } from './ir-button2.js';
import { d as defineCustomElement$b } from './ir-icon2.js';
import { d as defineCustomElement$a } from './ir-icons2.js';
import { d as defineCustomElement$9 } from './ir-input-text2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-loading-screen2.js';
import { d as defineCustomElement$5 } from './ir-select2.js';
import { d as defineCustomElement$4 } from './ir-sidebar2.js';
import { d as defineCustomElement$3 } from './ir-switch2.js';
import { d as defineCustomElement$2 } from './ir-textarea2.js';

const irPaymentOptionCss = ".sc-ir-payment-option-h{display:block}.dataTable.sc-ir-payment-option{width:max-content}.po-description.sc-ir-payment-option{padding-right:2rem !important}.super-high-index.sc-ir-payment-option{background:#0000004c;position:fixed;inset:0;z-index:999999999999999;pointer-events:none}";
const IrPaymentOptionStyle0 = irPaymentOptionCss;

const IrPaymentOption$1 = /*@__PURE__*/ proxyCustomElement(class IrPaymentOption extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        if (!this.showEditButton(po, true)) {
            this.modifyPaymentList(newOption);
            return;
        }
        console.log('here');
        if (is_active && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.some(d => d.value === null))) {
            payment_option_store.selectedOption = newOption;
        }
        else {
            await this.paymentOptionService.HandlePaymentMethod(newOption);
        }
        this.modifyPaymentList(newOption);
    }
    showEditButton(po, ignoreActive = false) {
        var _a;
        if (!po.is_active && !ignoreActive) {
            return false;
        }
        return po.code === '005' || (po.is_payment_gateway && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.length) > 0);
    }
    render() {
        var _a, _b;
        if (this.isLoading || this.paymentOptions.length == 0) {
            return (h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, h("ir-loading-screen", null)));
        }
        return (h(Host, { class: "p-2" }, h("ir-interceptor", null), h("div", { class: "card p-1 flex-fill m-0" }, h("div", { class: "d-flex align-items-center mb-2" }, h("div", { class: "p-0 m-0 mr-1" }, h("ir-icons", { name: "credit_card" })), h("h3", { class: 'm-0 p-0' }, " Payment Options")), h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, "Payment method"), h("th", { scope: "col" }, "Status"), h("th", { scope: "col", class: "actions-theader" }, "Action"))), h("tbody", { class: "" }, (_a = this.paymentOptions) === null || _a === void 0 ? void 0 : _a.map(po => (h("tr", { key: po.id }, h("td", { class: 'text-left po-description' }, po.description), h("td", null, h("ir-switch", { checked: po.is_active, onCheckChange: e => this.handleCheckChange(e, po) })), h("td", null, this.showEditButton(po) && (h("ir-button", { variant: "icon", icon_name: "edit", onClickHanlder: () => {
                payment_option_store.selectedOption = po;
            } }))))))))), h("ir-sidebar", { onIrSidebarToggle: () => {
                this.closeModal(null);
            }, label: `${(_b = payment_option_store.selectedOption) === null || _b === void 0 ? void 0 : _b.description} Information`, open: payment_option_store.selectedOption !== null }, payment_option_store.selectedOption && h("ir-option-details", { propertyId: this.propertyid, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": ["handleTokenChange"]
    }; }
    static get style() { return IrPaymentOptionStyle0; }
}, [2, "ir-payment-option", {
        "baseurl": [1],
        "propertyid": [1],
        "ticket": [1],
        "paymentOptions": [32],
        "isLoading": [32],
        "selectedOption": [32]
    }, [[0, "closeModal", "handleCloseModal"]], {
        "ticket": ["handleTokenChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-option", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-option-details", "ir-select", "ir-sidebar", "ir-switch", "ir-textarea"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentOption$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-option-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrPaymentOption = IrPaymentOption$1;
const defineCustomElement = defineCustomElement$1;

export { IrPaymentOption, defineCustomElement };

//# sourceMappingURL=ir-payment-option.js.map