'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const paymentOption_store = require('./payment-option.store-98e527da.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
const locales_store = require('./locales.store-4301bbe8.js');
const turndown_browser_es = require('./turndown.browser.es-8a1ff1d3.js');
require('./axios-b86c5465.js');
require('./index-5e99a1fe.js');

const irOptionDetailsCss = ".sc-ir-option-details-h{display:block}.money-transfer-form.sc-ir-option-details{min-height:250px !important}";
const IrOptionDetailsStyle0 = irOptionDetailsCss;

const IrOptionDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.paymentOptionService = new paymentOption_store.PaymentOptionService();
        this.propertyId = undefined;
        this.localizationIdx = undefined;
        this.selectedLanguage = null;
        this.invalid = false;
    }
    async componentWillLoad() {
        var _a;
        if (paymentOption_store.payment_option_store.selectedOption.code !== '005') {
            return;
        }
        if (!paymentOption_store.payment_option_store.languages) {
            const result = await this.paymentOptionService.GetExposedLanguages();
            paymentOption_store.payment_option_store.languages = result;
        }
        const localizables = (_a = paymentOption_store.payment_option_store.selectedOption.localizables) !== null && _a !== void 0 ? _a : [];
        this.selectedLanguage = paymentOption_store.payment_option_store.languages[0].id.toString();
        if (localizables.length === 0) {
            localizables.push(this.createBankTransferInfoObject(paymentOption_store.payment_option_store.languages[0]));
        }
        this.localizationIdx = paymentOption_store.payment_option_store.selectedOption.code === '005' ? localizables === null || localizables === void 0 ? void 0 : localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage) : null;
        paymentOption_store.payment_option_store.selectedOption = Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { localizables: localizables });
    }
    createBankTransferInfoObject(l) {
        return {
            code: 'BANK_TRANSFER_INFO',
            description: '',
            id: null,
            language: l,
        };
    }
    async saveOption(e) {
        var _a, _b;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let selectedOption = Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { property_id: this.propertyId, is_active: paymentOption_store.payment_option_store.mode === 'create' ? true : (_a = paymentOption_store.payment_option_store.selectedOption.is_active) !== null && _a !== void 0 ? _a : false });
        if ((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.code) === '005') {
            const englishDescription = (_b = selectedOption.localizables.find(l => l.language.code.toLowerCase() === 'en')) === null || _b === void 0 ? void 0 : _b.description;
            if (!englishDescription || englishDescription.trim() === '' || this.isEditorEmpty(englishDescription.trim())) {
                this.selectedLanguage = paymentOption_store.payment_option_store.languages.find(l => l.code.toLowerCase() === 'en').id.toString();
                this.localizationIdx = paymentOption_store.payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
                this.invalid = true;
                return;
            }
        }
        if (selectedOption.is_payment_gateway) {
            selectedOption.display_order = 0;
            const hasInvalidData = selectedOption.data.some(d => !d.value || d.value === '');
            if (hasInvalidData) {
                this.invalid = true;
                return;
            }
        }
        await this.paymentOptionService.HandlePaymentMethod(selectedOption);
        this.toast.emit({
            type: 'success',
            description: '',
            title: locales_store.locales.entries.Lcz_Saved,
            position: 'top-right',
        });
        this.closeModal.emit(selectedOption);
    }
    isEditorEmpty(htmlString) {
        const text = htmlString
            .replace(/<\/?[^>]+(>|$)/g, '')
            .replace(/&nbsp;/g, '')
            .trim();
        return text.length === 0;
    }
    handleSelectChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (paymentOption_store.payment_option_store.selectedOption.code !== '005') {
            return;
        }
        this.selectedLanguage = e.detail;
        let idx = paymentOption_store.payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
        const localizables = (_a = paymentOption_store.payment_option_store.selectedOption.localizables) !== null && _a !== void 0 ? _a : [];
        if (idx === -1) {
            localizables.push(this.createBankTransferInfoObject(paymentOption_store.payment_option_store.languages.find(l => l.id.toString() === this.selectedLanguage)));
            paymentOption_store.payment_option_store.selectedOption = Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { localizables: localizables });
            idx = localizables.length - 1;
        }
        this.localizationIdx = idx;
    }
    handleTextAreaChange(e) {
        const value = e.detail;
        if (value.trim() !== '' && this.invalid) {
            this.invalid = false;
        }
        const oldLocalizables = [...paymentOption_store.payment_option_store.selectedOption.localizables];
        oldLocalizables[this.localizationIdx] = Object.assign(Object.assign({}, oldLocalizables[this.localizationIdx]), { description: value });
        paymentOption_store.payment_option_store.selectedOption = Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { localizables: oldLocalizables });
    }
    handlePaymentGatewayInfoChange(e, idx) {
        const value = e.detail;
        const prevData = [...paymentOption_store.payment_option_store.selectedOption.data];
        prevData[idx] = Object.assign(Object.assign({}, prevData[idx]), { value });
        paymentOption_store.payment_option_store.selectedOption = Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { data: prevData });
    }
    render() {
        var _a, _b, _c, _d;
        if (!paymentOption_store.payment_option_store.selectedOption) {
            return null;
        }
        return (index.h(index.Host, null, index.h("form", { class: 'p-1 mt-2', onSubmit: this.saveOption.bind(this) }, paymentOption_store.payment_option_store.selectedOption.code === '005' ? (index.h("div", null, index.h("div", { class: "mb-1" }, index.h("ir-select", { selectedValue: this.selectedLanguage, LabelAvailable: false, showFirstOption: false, data: paymentOption_store.payment_option_store.languages.map(l => ({
                text: l.description,
                value: l.id.toString(),
            })) })), index.h("div", null, this.invalid && index.h("p", { class: "text-danger p-0 m-0" }, locales_store.locales.entries.Lcz_YouMustFillEnglishField), index.h("ir-text-editor", { plugins: [turndown_browser_es.Link], pluginsMode: "add", toolbarItemsMode: "add", toolbarItems: ['|', 'link'], style: { '--ir-editor-height': '250px' }, error: this.invalid, value: this.localizationIdx !== null ? (_c = (_b = (_a = paymentOption_store.payment_option_store.selectedOption) === null || _a === void 0 ? void 0 : _a.localizables[this.localizationIdx]) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : '' : '', onTextChange: this.handleTextAreaChange.bind(this) })))) : (index.h("div", null, (_d = paymentOption_store.payment_option_store.selectedOption.data) === null || _d === void 0 ? void 0 : _d.map((d, idx) => {
            var _a, _b;
            return (index.h("fieldset", { key: d.key }, index.h("ir-input-text", { value: d.value, onTextChange: e => this.handlePaymentGatewayInfoChange(e, idx), id: `input_${d.key}`, label: d.key.replace(/_/g, ' '), placeholder: "", labelWidth: 4, "aria-invalid": this.invalid && (d.value === null || ((_b = ((_a = d.value) !== null && _a !== void 0 ? _a : '')) === null || _b === void 0 ? void 0 : _b.trim()) === '') ? 'true' : 'false' })));
        }))), index.h("div", { class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", btn_type: "button" }), index.h("ir-button", { btn_type: "submit", btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: irInterceptor_store.isRequestPending('/Handle_Payment_Method'), text: locales_store.locales.entries.Lcz_Save, btn_color: "primary" })))));
    }
};
IrOptionDetails.style = IrOptionDetailsStyle0;

exports.ir_option_details = IrOptionDetails;

//# sourceMappingURL=ir-option-details.cjs.entry.js.map