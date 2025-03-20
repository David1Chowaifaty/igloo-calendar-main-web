import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { c as createStore } from './index2.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-text-editor2.js';

class PaymentOptionService {
    async GetExposedPaymentMethods() {
        const { data } = await axios.post(`/Get_Exposed_Payment_Methods`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetPropertyPaymentMethods(property_id) {
        const { data } = await axios.post(`/Get_Property_Payment_Methods`, { property_id, is_return_sensitive_data: true });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async GetExposedLanguages() {
        const { data } = await axios.post(`/Get_Exposed_Languages`);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
    async HandlePaymentMethod(paymentOption) {
        const { data } = await axios.post(`/Handle_Payment_Method`, paymentOption);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        return results;
    }
}

const initialState = {
    selectedOption: null,
    token: null,
    mode: 'create',
    languages: null,
};
const { state: payment_option_store } = createStore(initialState);

const irOptionDetailsCss = ".sc-ir-option-details-h{display:block}";
const IrOptionDetailsStyle0 = irOptionDetailsCss;

const IrOptionDetails = /*@__PURE__*/ proxyCustomElement(class IrOptionDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
        this.paymentOptionService = new PaymentOptionService();
        this.propertyId = undefined;
        this.localizationIdx = undefined;
        this.selectedLanguage = null;
        this.invalid = false;
    }
    async componentWillLoad() {
        var _a;
        if (payment_option_store.selectedOption.code !== '005') {
            return;
        }
        if (!payment_option_store.languages) {
            const result = await this.paymentOptionService.GetExposedLanguages();
            payment_option_store.languages = result;
        }
        const localizables = (_a = payment_option_store.selectedOption.localizables) !== null && _a !== void 0 ? _a : [];
        this.selectedLanguage = payment_option_store.languages[0].id.toString();
        if (localizables.length === 0) {
            localizables.push(this.createBankTransferInfoObject(payment_option_store.languages[0]));
        }
        this.localizationIdx = payment_option_store.selectedOption.code === '005' ? localizables === null || localizables === void 0 ? void 0 : localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage) : null;
        payment_option_store.selectedOption = Object.assign(Object.assign({}, payment_option_store.selectedOption), { localizables: localizables });
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
        let selectedOption = Object.assign(Object.assign({}, payment_option_store.selectedOption), { property_id: this.propertyId, is_active: payment_option_store.mode === 'create' ? true : (_a = payment_option_store.selectedOption.is_active) !== null && _a !== void 0 ? _a : false });
        if ((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.code) === '005') {
            const englishDescription = (_b = selectedOption.localizables.find(l => l.language.code.toLowerCase() === 'en')) === null || _b === void 0 ? void 0 : _b.description;
            if (!englishDescription || englishDescription.trim() === '' || this.isEditorEmpty(englishDescription.trim())) {
                this.selectedLanguage = payment_option_store.languages.find(l => l.code.toLowerCase() === 'en').id.toString();
                this.localizationIdx = payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
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
            title: locales.entries.Lcz_Saved,
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
        if (payment_option_store.selectedOption.code !== '005') {
            return;
        }
        this.selectedLanguage = e.detail;
        let idx = payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
        const localizables = (_a = payment_option_store.selectedOption.localizables) !== null && _a !== void 0 ? _a : [];
        if (idx === -1) {
            localizables.push(this.createBankTransferInfoObject(payment_option_store.languages.find(l => l.id.toString() === this.selectedLanguage)));
            payment_option_store.selectedOption = Object.assign(Object.assign({}, payment_option_store.selectedOption), { localizables: localizables });
            idx = localizables.length - 1;
        }
        this.localizationIdx = idx;
    }
    handleTextAreaChange(e) {
        const value = e.detail;
        if (value.trim() !== '' && this.invalid) {
            this.invalid = false;
        }
        const oldLocalizables = [...payment_option_store.selectedOption.localizables];
        oldLocalizables[this.localizationIdx] = Object.assign(Object.assign({}, oldLocalizables[this.localizationIdx]), { description: value });
        payment_option_store.selectedOption = Object.assign(Object.assign({}, payment_option_store.selectedOption), { localizables: oldLocalizables });
    }
    handlePaymentGatewayInfoChange(e, idx) {
        const value = e.detail;
        const prevData = [...payment_option_store.selectedOption.data];
        prevData[idx] = Object.assign(Object.assign({}, prevData[idx]), { value });
        payment_option_store.selectedOption = Object.assign(Object.assign({}, payment_option_store.selectedOption), { data: prevData });
    }
    render() {
        var _a, _b, _c, _d;
        if (!payment_option_store.selectedOption) {
            return null;
        }
        return (h(Host, null, h("form", { class: 'p-1 mt-2', onSubmit: this.saveOption.bind(this) }, payment_option_store.selectedOption.code === '005' ? (h("div", null, h("div", { class: "mb-1" }, h("ir-select", { selectedValue: this.selectedLanguage, LabelAvailable: false, showFirstOption: false, data: payment_option_store.languages.map(l => ({
                text: l.description,
                value: l.id.toString(),
            })) })), h("div", null, this.invalid && h("p", { class: "text-danger p-0 m-0" }, locales.entries.Lcz_YouMustFillEnglishField), h("ir-text-editor", {
            // plugins={[Link]}
            // pluginsMode="add"
            // toolbarItemsMode="add"
            // toolbarItems={['|', 'link']}
            maxLength: 250, placeholder: "", style: { '--ir-editor-height': '250px' }, error: this.invalid, value: this.localizationIdx !== null ? (_c = (_b = (_a = payment_option_store.selectedOption) === null || _a === void 0 ? void 0 : _a.localizables[this.localizationIdx]) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : '' : '', onTextChange: this.handleTextAreaChange.bind(this)
        })))) : (h("div", null, (_d = payment_option_store.selectedOption.data) === null || _d === void 0 ? void 0 : _d.map((d, idx) => {
            var _a, _b;
            return (h("fieldset", { key: d.key }, h("ir-input-text", { value: d.value, onTextChange: e => this.handlePaymentGatewayInfoChange(e, idx), id: `input_${d.key}`, label: d.key.replace(/_/g, ' '), placeholder: "", labelWidth: 4, "aria-invalid": this.invalid && (d.value === null || ((_b = ((_a = d.value) !== null && _a !== void 0 ? _a : '')) === null || _b === void 0 ? void 0 : _b.trim()) === '') ? 'true' : 'false' })));
        }))), h("div", { class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary", btn_type: "button" }), h("ir-button", { btn_type: "submit", btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Handle_Payment_Method'), text: locales.entries.Lcz_Save, btn_color: "primary" })))));
    }
    static get style() { return IrOptionDetailsStyle0; }
}, [2, "ir-option-details", {
        "propertyId": [1, "property-id"],
        "localizationIdx": [32],
        "selectedLanguage": [32],
        "invalid": [32]
    }, [[0, "selectChange", "handleSelectChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-option-details", "ir-button", "ir-icons", "ir-input-text", "ir-select", "ir-text-editor"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-option-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrOptionDetails);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-text-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrOptionDetails as I, PaymentOptionService as P, defineCustomElement as d, payment_option_store as p };

//# sourceMappingURL=ir-option-details2.js.map