import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { P as PaymentOptionService, p as payment_option_store } from './payment-option.store-c0d95d79.js';
import { R as RoomService } from './room.service-39d12a8c.js';
import { l as locales } from './locales.store-629477c2.js';
import { T as Token } from './Token-6c389e24.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';
import './calendar-data-f4e207f9.js';

const irPaymentOptionCss = ".sc-ir-payment-option-h{display:block}.payment-table-container.sc-ir-payment-option{display:flex;align-items:center;justify-content:center}.po-view.sc-ir-payment-option{padding:0;margin:0}.payment-img.sc-ir-payment-option{height:18px;display:none}.loading-container.sc-ir-payment-option{background:white;display:flex;align-items:center;flex-direction:column;align-items:center;justify-content:center;width:100%;height:40rem}.payment-option-loader.sc-ir-payment-option{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loading-container.default.sc-ir-payment-option{height:100vh;width:100%}@media (min-width: 768px){.po-view.sc-ir-payment-option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.dataTable.sc-ir-payment-option{width:70%}.payment-img.sc-ir-payment-option{display:block}.actions-header.sc-ir-payment-option{width:max-content !important}.payment-table-container.sc-ir-payment-option{justify-content:flex-start}}@media (min-width: 1280px){.dataTable.sc-ir-payment-option{width:50%}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrPaymentOptionStyle0 = irPaymentOptionCss;

const IrPaymentOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.language = 'en';
        this.defaultStyles = true;
        this.hideLogs = true;
        this.paymentOptions = [];
        this.isLoading = false;
        this.selectedOption = null;
        this.paymentOptionService = new PaymentOptionService();
        this.roomService = new RoomService();
        this.token = new Token();
    }
    componentWillLoad() {
        if (!!this.ticket) {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    init() {
        this.initServices();
        this.fetchData();
    }
    handleCloseModal(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
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
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                console.log('fetching property id');
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                });
                propertyId = propertyData.My_Result.id;
            }
            const [paymentOptions, propertyOptions, languageTexts] = await Promise.all([
                this.paymentOptionService.GetExposedPaymentMethods(),
                this.paymentOptionService.GetPropertyPaymentMethods(propertyId),
                this.roomService.fetchLanguage(this.language, ['_PAYMENT_BACK']),
            ]);
            locales.entries = languageTexts.entries;
            locales.direction = languageTexts.direction;
            this.propertyOptionsById = new Map(propertyOptions === null || propertyOptions === void 0 ? void 0 : propertyOptions.map(o => [o.id, o]));
            this.propertyOptionsByCode = new Map(propertyOptions === null || propertyOptions === void 0 ? void 0 : propertyOptions.map(o => [o.code, o]));
            this.paymentOptions = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.map(option => {
                if (option.is_payment_gateway) {
                    return this.propertyOptionsById.get(option.id) || option;
                }
                return this.propertyOptionsByCode.get(option.code) || option;
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initServices() {
        this.token.setToken(this.ticket);
    }
    modifyPaymentList(paymentOption) {
        let prevPaymentOptions = [...this.paymentOptions];
        console.log(paymentOption);
        let index = prevPaymentOptions.findIndex(p => p.code === paymentOption.code);
        if (index === -1) {
            throw new Error('Invalid code');
        }
        prevPaymentOptions[index] = Object.assign({}, paymentOption);
        this.paymentOptions = [...prevPaymentOptions];
    }
    async handleCheckChange(e, po) {
        var _a;
        e.stopPropagation();
        e.stopImmediatePropagation();
        const is_active = e.detail;
        const newOption = Object.assign(Object.assign({}, po), { is_active, property_id: this.propertyid });
        if (po.code !== '005' && !po.is_payment_gateway) {
            await this.changePaymentMethod(newOption);
            this.modifyPaymentList(newOption);
            if (po.code === '000' && is_active && this.paymentOptions.filter(p => p.code !== '000').every(p => p.is_active === false || p.is_active === null)) {
                this.toast.emit({
                    type: 'success',
                    description: '',
                    title: locales.entries['Lcz_YouNeedToSelect'],
                    position: 'top-right',
                });
            }
            return;
        }
        if (!this.showEditButton(po)) {
            this.modifyPaymentList(newOption);
            return;
        }
        if (is_active && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.some(d => d.value === null))) {
            payment_option_store.mode = 'create';
            payment_option_store.selectedOption = newOption;
        }
        else {
            await this.changePaymentMethod(newOption);
        }
        this.modifyPaymentList(newOption);
    }
    async changePaymentMethod(newOption) {
        try {
            await this.paymentOptionService.HandlePaymentMethod(newOption);
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    showEditButton(po) {
        var _a;
        if (!po.is_payment_gateway && po.code !== '005') {
            return false;
        }
        return po.code === '005' || (po.is_payment_gateway && ((_a = po.data) === null || _a === void 0 ? void 0 : _a.length) > 0);
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (this.isLoading === true || (this.paymentOptions && this.paymentOptions.length === 0)) {
            return (h(Host, { class: this.defaultStyles ? 'p-2' : '' }, h("div", { class: `loading-container ${this.defaultStyles ? 'default' : ''}` }, h("span", { class: "payment-option-loader" }))));
        }
        return (h(Host, { class: this.defaultStyles ? 'p-2' : '' }, h("ir-toast", null), h("ir-interceptor", null), h("div", { class: `${this.defaultStyles ? 'card ' : ''} p-1 flex-fill m-0` }, h("div", { class: "d-flex align-items-center mb-2" }, h("div", { class: "p-0 m-0 mr-1" }, h("ir-icons", { name: "credit_card" })), h("h3", { class: 'm-0 p-0' }, (_a = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_PaymentOptions)), h("div", { class: "payment-table-container" }, h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, (_b = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_PaymentMethod), h("th", { scope: "col" }, (_c = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Status), h("th", { scope: "col", class: "actions-header" }, (_d = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Action))), h("tbody", { class: "" }, (_e = this.paymentOptions) === null || _e === void 0 ? void 0 : _e.map(po => {
            var _a;
            if (po.code === '004') {
                return null;
            }
            return (h("tr", { key: po.id }, h("td", { class: 'text-left po-description' }, h("div", { class: "po-view" }, h("span", { class: 'p-0 m-0' }, po === null || po === void 0 ? void 0 : po.description))), h("td", null, h("ir-switch", { checked: po.is_active, onCheckChange: e => this.handleCheckChange(e, po) })), h("td", { class: "payment-action" }, this.showEditButton(po) && (h("ir-button", { title: (_a = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Edit, variant: "icon", icon_name: "edit", onClickHandler: () => {
                    payment_option_store.selectedOption = po;
                    payment_option_store.mode = 'edit';
                } })))));
        }))))), h("ir-sidebar", { onIrSidebarToggle: () => {
                this.closeModal(null);
            }, side: 'right', showCloseButton: false,
            // label={locales?.entries.Lcz_Information?.replace('%1', payment_option_store.selectedOption?.description)}
            open: (payment_option_store === null || payment_option_store === void 0 ? void 0 : payment_option_store.selectedOption) !== null }, (payment_option_store === null || payment_option_store === void 0 ? void 0 : payment_option_store.selectedOption) && h("ir-option-details", { propertyId: this.propertyid, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrPaymentOption.style = IrPaymentOptionStyle0;

export { IrPaymentOption as ir_payment_option };

//# sourceMappingURL=ir-payment-option.entry.js.map