import { PaymentOptionService } from "../../../services/payment_option.service";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import payment_option_store from "../../../stores/payment-option.store";
import { Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrOptionDetails {
    constructor() {
        this.paymentOptionService = new PaymentOptionService();
        this.propertyId = undefined;
        this.localizationIdx = undefined;
        this.selectedLanguage = null;
        this.invalid = false;
    }
    async componentWillLoad() {
        this.paymentOptionService.setToken(payment_option_store.token);
        if (!payment_option_store.languages) {
            const result = await this.paymentOptionService.GetExposedLanguages();
            payment_option_store.languages = result;
        }
        this.selectedLanguage = payment_option_store.languages[0].id.toString();
        this.localizationIdx =
            payment_option_store.selectedOption.code === '005'
                ? payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage)
                : null;
    }
    async saveOption(e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let selectedOption = Object.assign(Object.assign({}, payment_option_store.selectedOption), { property_id: this.propertyId, is_active: payment_option_store.mode === 'create' ? true : payment_option_store.selectedOption.is_active });
        if ((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.code) === '005') {
            const englishDescription = (_a = selectedOption.localizables.find(l => l.language.code.toLowerCase() === 'en')) === null || _a === void 0 ? void 0 : _a.description;
            console.log(englishDescription);
            // Check if the description is null or empty
            if (!englishDescription || englishDescription.trim() === '') {
                this.selectedLanguage = payment_option_store.languages.find(l => l.code.toLowerCase() === 'en').id.toString();
                this.localizationIdx = payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
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
            title: locales.entries.Lcz_Saved,
            position: 'top-right',
        });
        this.closeModal.emit(selectedOption);
    }
    handleSelectChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedLanguage = e.detail;
        this.localizationIdx =
            payment_option_store.selectedOption.code === '005'
                ? payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage)
                : null;
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
        var _a, _b;
        if (!payment_option_store.selectedOption) {
            return null;
        }
        return (h(Host, null, h("form", { class: 'p-1 mt-2', onSubmit: this.saveOption.bind(this) }, payment_option_store.selectedOption.code === '005' ? (h("div", null, h("div", { class: "mb-1" }, h("ir-select", { selectedValue: this.selectedLanguage, LabelAvailable: false, showFirstOption: false, data: payment_option_store.languages.map(l => ({
                text: l.description,
                value: l.id.toString(),
            })) })), h("div", null, this.invalid && h("p", { class: "text-danger p-0 m-0" }, locales.entries.Lcz_YouMustFillEnglishField), h("ir-textarea", { placeholder: "", "aria-invalid": this.invalid ? 'true' : 'false', textareaClassname: "money-transfer-form", label: "", onTextChange: this.handleTextAreaChange.bind(this), value: (_a = payment_option_store.selectedOption.localizables[this.localizationIdx].description) !== null && _a !== void 0 ? _a : '' })))) : (h("div", null, (_b = payment_option_store.selectedOption.data) === null || _b === void 0 ? void 0 : _b.map((d, idx) => {
            var _a, _b;
            return (h("fieldset", { key: d.key }, h("ir-input-text", { value: d.value, onTextChange: e => this.handlePaymentGatewayInfoChange(e, idx), id: `input_${d.key}`, label: d.key, placeholder: "", labelWidth: 4, "aria-invalid": this.invalid && (d.value === null || ((_b = ((_a = d.value) !== null && _a !== void 0 ? _a : '')) === null || _b === void 0 ? void 0 : _b.trim()) === '') ? 'true' : 'false' })));
        }))), h("div", { class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary", btn_type: "button" }), h("ir-button", { btn_type: "submit", btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Handle_Payment_Method'), text: locales.entries.Lcz_Save, btn_color: "primary" })))));
    }
    static get is() { return "ir-option-details"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-option-details.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-option-details.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
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
                "attribute": "property-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "localizationIdx": {},
            "selectedLanguage": {},
            "invalid": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PaymentOption | null",
                    "resolved": "PaymentOption",
                    "references": {
                        "PaymentOption": {
                            "location": "import",
                            "path": "@/models/payment-options",
                            "id": "src/models/payment-options.ts::PaymentOption"
                        }
                    }
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "../../ir-toast/toast",
                            "id": "src/components/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "selectChange",
                "method": "handleSelectChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-option-details.js.map
