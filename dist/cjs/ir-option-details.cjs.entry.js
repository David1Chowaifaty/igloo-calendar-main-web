'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const paymentOption_store = require('./payment-option.store-3cd685e4.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
const locales_store = require('./locales.store-4eb57996.js');
require('./axios-6e678d52.js');
require('./index-6299b0f7.js');

const irOptionDetailsCss = ".sc-ir-option-details-h{display:block}";
const IrOptionDetailsStyle0 = irOptionDetailsCss;

const sheetCss = ".sc-ir-option-details-h{height:100%}.sheet-container.sc-ir-option-details{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-option-details{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-option-details{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-option-details{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-option-details{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-option-details{flex-direction:row;align-items:center}}";
const IrOptionDetailsStyle1 = sheetCss;

const IrOptionDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.toast = index.createEvent(this, "toast", 7);
    }
    propertyId;
    localizationIdx;
    selectedLanguage = null;
    invalid = false;
    closeModal;
    toast;
    paymentOptionService = new paymentOption_store.PaymentOptionService();
    async componentWillLoad() {
        if (paymentOption_store.payment_option_store.selectedOption.code !== '005') {
            return;
        }
        if (!paymentOption_store.payment_option_store.languages) {
            const result = await this.paymentOptionService.GetExposedLanguages();
            paymentOption_store.payment_option_store.languages = result;
        }
        const localizables = paymentOption_store.payment_option_store.selectedOption.localizables ?? [];
        this.selectedLanguage = paymentOption_store.payment_option_store.languages[0].id.toString();
        if (localizables.length === 0) {
            localizables.push(this.createBankTransferInfoObject(paymentOption_store.payment_option_store.languages[0]));
        }
        this.localizationIdx = paymentOption_store.payment_option_store.selectedOption.code === '005' ? localizables?.findIndex(l => l.language.id.toString() === this.selectedLanguage) : null;
        paymentOption_store.payment_option_store.selectedOption = {
            ...paymentOption_store.payment_option_store.selectedOption,
            localizables: localizables,
        };
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
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let selectedOption = {
            ...paymentOption_store.payment_option_store.selectedOption,
            property_id: this.propertyId,
            is_active: paymentOption_store.payment_option_store.mode === 'create' ? true : paymentOption_store.payment_option_store.selectedOption.is_active ?? false,
        };
        if (selectedOption?.code === '005') {
            const englishDescription = selectedOption.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description;
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
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (paymentOption_store.payment_option_store.selectedOption.code !== '005') {
            return;
        }
        this.selectedLanguage = e.detail;
        let idx = paymentOption_store.payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
        const localizables = paymentOption_store.payment_option_store.selectedOption.localizables ?? [];
        if (idx === -1) {
            localizables.push(this.createBankTransferInfoObject(paymentOption_store.payment_option_store.languages.find(l => l.id.toString() === this.selectedLanguage)));
            paymentOption_store.payment_option_store.selectedOption = {
                ...paymentOption_store.payment_option_store.selectedOption,
                localizables: localizables,
            };
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
        oldLocalizables[this.localizationIdx] = {
            ...oldLocalizables[this.localizationIdx],
            description: value,
        };
        paymentOption_store.payment_option_store.selectedOption = {
            ...paymentOption_store.payment_option_store.selectedOption,
            localizables: oldLocalizables,
        };
    }
    handlePaymentGatewayInfoChange(e, idx) {
        const value = e.detail;
        const prevData = [...paymentOption_store.payment_option_store.selectedOption.data];
        prevData[idx] = { ...prevData[idx], value };
        paymentOption_store.payment_option_store.selectedOption = {
            ...paymentOption_store.payment_option_store.selectedOption,
            data: prevData,
        };
    }
    render() {
        if (!paymentOption_store.payment_option_store.selectedOption) {
            return null;
        }
        return (index.h(index.Host, null, index.h("form", { class: 'sheet-container', onSubmit: this.saveOption.bind(this) }, index.h("ir-title", { class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales?.entries.Lcz_Information?.replace('%1', paymentOption_store.payment_option_store.selectedOption?.description), displayContext: "sidebar" }), index.h("div", { class: "sheet-body px-1" }, paymentOption_store.payment_option_store.selectedOption.code === '005' ? (index.h("div", null, index.h("div", { class: "mb-1" }, index.h("ir-select", { selectedValue: this.selectedLanguage, showFirstOption: false, data: paymentOption_store.payment_option_store.languages.map(l => ({
                text: l.description,
                value: l.id.toString(),
            })) })), index.h("div", null, this.invalid && index.h("p", { class: "text-danger p-0 m-0" }, locales_store.locales.entries.Lcz_YouMustFillEnglishField), index.h("ir-text-editor", {
            // plugins={[Link]}
            // pluginsMode="add"
            // toolbarItemsMode="add"
            // toolbarItems={['|', 'link']}
            maxLength: 450, placeholder: "", style: { '--ir-editor-height': '250px' }, error: this.invalid, value: this.localizationIdx !== null ? paymentOption_store.payment_option_store.selectedOption?.localizables[this.localizationIdx]?.description ?? '' : '', onTextChange: this.handleTextAreaChange.bind(this)
        })))) : (index.h("div", null, paymentOption_store.payment_option_store.selectedOption.data?.map((d, idx) => {
            return (index.h("fieldset", { key: d.key }, index.h("ir-input-text", { value: d.value, onTextChange: e => this.handlePaymentGatewayInfoChange(e, idx), id: `input_${d.key}`, label: d.key.replace(/_/g, ' '), placeholder: "", labelWidth: 4, "aria-invalid": this.invalid && (d.value === null || (d.value ?? '')?.trim() === '') ? 'true' : 'false' })));
        })))), index.h("div", { class: 'sheet-footer' }, index.h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", btn_type: "button" }), index.h("ir-button", { btn_type: "submit", btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: irInterceptor_store.isRequestPending('/Handle_Payment_Method'), text: locales_store.locales.entries.Lcz_Save, btn_color: "primary" })))));
    }
};
IrOptionDetails.style = IrOptionDetailsStyle0 + IrOptionDetailsStyle1;

exports.ir_option_details = IrOptionDetails;

//# sourceMappingURL=ir-option-details.cjs.entry.js.map