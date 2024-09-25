'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const paymentOption_store = require('./payment-option.store-a40db885.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
const locales_store = require('./locales.store-4301bbe8.js');
require('./Token-db8ba99b.js');
require('./axios-b86c5465.js');
require('./index-5e99a1fe.js');

const irOptionDetailsCss = ".sc-ir-option-details-h{display:block}.money-transfer-form.sc-ir-option-details{min-height:200px !important}";
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
        this.paymentOptionService.setToken(paymentOption_store.payment_option_store.token);
        if (!paymentOption_store.payment_option_store.languages) {
            const result = await this.paymentOptionService.GetExposedLanguages();
            paymentOption_store.payment_option_store.languages = result;
        }
        this.selectedLanguage = paymentOption_store.payment_option_store.languages[0].id.toString();
        this.localizationIdx =
            paymentOption_store.payment_option_store.selectedOption.code === '005'
                ? paymentOption_store.payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage)
                : null;
    }
    async saveOption(e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let selectedOption = Object.assign(Object.assign({}, paymentOption_store.payment_option_store.selectedOption), { property_id: this.propertyId, is_active: paymentOption_store.payment_option_store.mode === 'create' ? true : paymentOption_store.payment_option_store.selectedOption.is_active });
        if ((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.code) === '005') {
            const englishDescription = (_a = selectedOption.localizables.find(l => l.language.code.toLowerCase() === 'en')) === null || _a === void 0 ? void 0 : _a.description;
            console.log(englishDescription);
            // Check if the description is null or empty
            if (!englishDescription || englishDescription.trim() === '') {
                this.selectedLanguage = paymentOption_store.payment_option_store.languages.find(l => l.code.toLowerCase() === 'en').id.toString();
                this.localizationIdx = paymentOption_store.payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
                this.invalid = true;
                return;
            }
        }
        if (selectedOption.is_payment_gateway) {
            selectedOption.display_order = 0;
            // Check if any value in selectedOption.data is null or empty
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
    handleSelectChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedLanguage = e.detail;
        this.localizationIdx =
            paymentOption_store.payment_option_store.selectedOption.code === '005'
                ? paymentOption_store.payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage)
                : null;
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
        var _a, _b;
        if (!paymentOption_store.payment_option_store.selectedOption) {
            return null;
        }
        return (index.h(index.Host, null, index.h("form", { class: 'p-1 mt-2', onSubmit: this.saveOption.bind(this) }, paymentOption_store.payment_option_store.selectedOption.code === '005' ? (index.h("div", null, index.h("div", { class: "mb-1" }, index.h("ir-select", { selectedValue: this.selectedLanguage, LabelAvailable: false, showFirstOption: false, data: paymentOption_store.payment_option_store.languages.map(l => ({
                text: l.description,
                value: l.id.toString(),
            })) })), index.h("div", null, this.invalid && index.h("p", { class: "text-danger p-0 m-0" }, locales_store.locales.entries.Lcz_YouMustFillEnglishField), index.h("ir-textarea", { placeholder: "", "aria-invalid": this.invalid ? 'true' : 'false', textareaClassname: "money-transfer-form", label: "", onTextChange: this.handleTextAreaChange.bind(this), value: (_a = paymentOption_store.payment_option_store.selectedOption.localizables[this.localizationIdx].description) !== null && _a !== void 0 ? _a : '' })))) : (index.h("div", null, (_b = paymentOption_store.payment_option_store.selectedOption.data) === null || _b === void 0 ? void 0 : _b.map((d, idx) => {
            var _a, _b;
            return (index.h("fieldset", { key: d.key }, index.h("ir-input-text", { value: d.value, onTextChange: e => this.handlePaymentGatewayInfoChange(e, idx), id: `input_${d.key}`, label: d.key, placeholder: "", labelWidth: 4, "aria-invalid": this.invalid && (d.value === null || ((_b = ((_a = d.value) !== null && _a !== void 0 ? _a : '')) === null || _b === void 0 ? void 0 : _b.trim()) === '') ? 'true' : 'false' })));
        }))), index.h("div", { class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", btn_type: "button" }), index.h("ir-button", { btn_type: "submit", btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: irInterceptor_store.isRequestPending('/Handle_Payment_Method'), text: locales_store.locales.entries.Lcz_Save, btn_color: "primary" })))));
    }
};
IrOptionDetails.style = IrOptionDetailsStyle0;

exports.ir_option_details = IrOptionDetails;

//# sourceMappingURL=ir-option-details.cjs.entry.js.map