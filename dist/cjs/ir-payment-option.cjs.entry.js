'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const paymentOption_store = require('./payment-option.store-a40db885.js');
const room_service = require('./room.service-cc9c0583.js');
const locales_store = require('./locales.store-4301bbe8.js');
const axios = require('./axios-b86c5465.js');
require('./Token-db8ba99b.js');
require('./index-5e99a1fe.js');
require('./calendar-data-fbe7f62b.js');

const irPaymentOptionCss = ".sc-ir-payment-option-h{display:block}.payment-table-container.sc-ir-payment-option{display:flex;align-items:center;justify-content:center}.po-view.sc-ir-payment-option{padding:0;margin:0}.payment-img.sc-ir-payment-option{height:18px;display:none}.loading-container.sc-ir-payment-option{background:white;display:flex;align-items:center;flex-direction:column;align-items:center;justify-content:center;width:100%;height:40rem}.payment-option-loader.sc-ir-payment-option{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loading-container.default.sc-ir-payment-option{height:100vh;width:100%}@media (min-width: 768px){.po-view.sc-ir-payment-option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.dataTable.sc-ir-payment-option{width:70%}.payment-img.sc-ir-payment-option{display:block}.actions-header.sc-ir-payment-option{width:max-content !important}.payment-table-container.sc-ir-payment-option{justify-content:flex-start}}@media (min-width: 1280px){.dataTable.sc-ir-payment-option{width:50%}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrPaymentOptionStyle0 = irPaymentOptionCss;

const IrPaymentOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.paymentOptionService = new paymentOption_store.PaymentOptionService();
        this.roomService = new room_service.RoomService();
        this.baseurl = undefined;
        this.propertyid = undefined;
        this.ticket = undefined;
        this.language = 'en';
        this.defaultStyles = true;
        this.paymentOptions = [];
        this.isLoading = false;
        this.selectedOption = null;
    }
    componentWillLoad() {
        axios.axios.defaults.baseURL = this.baseurl;
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
            if (!this.propertyOptionsByCode.has((_a = paymentOption_store.payment_option_store.selectedOption) === null || _a === void 0 ? void 0 : _a.code) && !this.propertyOptionsById.has((_b = paymentOption_store.payment_option_store.selectedOption) === null || _b === void 0 ? void 0 : _b.id)) {
                this.modifyPaymentList(Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { is_active: false }));
            }
        }
        paymentOption_store.payment_option_store.selectedOption = null;
        paymentOption_store.payment_option_store.mode = null;
    }
    async fetchData() {
        try {
            this.isLoading = true;
            const [paymentOptions, propertyOptions, languageTexts] = await Promise.all([
                this.paymentOptionService.GetExposedPaymentMethods(),
                this.paymentOptionService.GetPropertyPaymentMethods(this.propertyid),
                this.roomService.fetchLanguage(this.language, ['_PAYMENT_BACK']),
            ]);
            locales_store.locales.entries = languageTexts.entries;
            locales_store.locales.direction = languageTexts.direction;
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
        paymentOption_store.payment_option_store.token = this.ticket;
        this.paymentOptionService.setToken(this.ticket);
        this.roomService.setToken(this.ticket);
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
        if (is_active && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.some(d => d.value === null))) {
            paymentOption_store.payment_option_store.mode = 'create';
            paymentOption_store.payment_option_store.selectedOption = newOption;
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
            return (index.h(index.Host, { class: this.defaultStyles ? 'p-2' : '' }, index.h("div", { class: `loading-container ${this.defaultStyles ? 'default' : ''}` }, index.h("span", { class: "payment-option-loader" }))));
        }
        return (index.h(index.Host, { class: this.defaultStyles ? 'p-2' : '' }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("div", { class: `${this.defaultStyles ? 'card ' : ''} p-1 flex-fill m-0` }, index.h("div", { class: "d-flex align-items-center mb-2" }, index.h("div", { class: "p-0 m-0 mr-1" }, index.h("ir-icons", { name: "credit_card" })), index.h("h3", { class: 'm-0 p-0' }, locales_store.locales.entries.Lcz_PaymentOptions)), index.h("div", { class: "payment-table-container" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "text-left" }, locales_store.locales.entries.Lcz_PaymentMethod), index.h("th", { scope: "col" }, locales_store.locales.entries.Lcz_Status), index.h("th", { scope: "col", class: "actions-header" }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { class: "" }, (_a = this.paymentOptions) === null || _a === void 0 ? void 0 : _a.map(po => {
            if (po.code === '004') {
                return null;
            }
            return (index.h("tr", { key: po.id }, index.h("td", { class: 'text-left po-description' }, index.h("div", { class: "po-view" }, index.h("span", { class: 'p-0 m-0' }, po.description))), index.h("td", null, index.h("ir-switch", { checked: po.is_active, onCheckChange: e => this.handleCheckChange(e, po) })), index.h("td", { class: "payment-action" }, this.showEditButton(po) && (index.h("ir-button", { title: locales_store.locales.entries.Lcz_Edit, variant: "icon", icon_name: "edit", onClickHanlder: () => {
                    paymentOption_store.payment_option_store.selectedOption = po;
                    paymentOption_store.payment_option_store.mode = 'edit';
                } })))));
        }))))), index.h("ir-sidebar", { onIrSidebarToggle: () => {
                this.closeModal(null);
            }, label: locales_store.locales.entries.Lcz_Information.replace('%1', (_b = paymentOption_store.payment_option_store.selectedOption) === null || _b === void 0 ? void 0 : _b.description), open: paymentOption_store.payment_option_store.selectedOption !== null }, paymentOption_store.payment_option_store.selectedOption && index.h("ir-option-details", { propertyId: this.propertyid, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": ["handleTokenChange"]
    }; }
};
IrPaymentOption.style = IrPaymentOptionStyle0;

exports.ir_payment_option = IrPaymentOption;

//# sourceMappingURL=ir-payment-option.cjs.entry.js.map