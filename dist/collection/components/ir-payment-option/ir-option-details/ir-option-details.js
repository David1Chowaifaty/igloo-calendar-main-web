import { PaymentOptionService } from "../../../services/payment_option.service";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import payment_option_store from "../../../stores/payment-option.store";
import { Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrOptionDetails {
    propertyId;
    localizationIdx;
    selectedLanguage = null;
    invalid = false;
    closeModal;
    toast;
    paymentOptionService = new PaymentOptionService();
    async componentWillLoad() {
        if (payment_option_store.selectedOption.code !== '005') {
            return;
        }
        if (!payment_option_store.languages) {
            const result = await this.paymentOptionService.GetExposedLanguages();
            payment_option_store.languages = result;
        }
        const localizables = payment_option_store.selectedOption.localizables ?? [];
        this.selectedLanguage = payment_option_store.languages[0].id.toString();
        if (localizables.length === 0) {
            localizables.push(this.createBankTransferInfoObject(payment_option_store.languages[0]));
        }
        this.localizationIdx = payment_option_store.selectedOption.code === '005' ? localizables?.findIndex(l => l.language.id.toString() === this.selectedLanguage) : null;
        payment_option_store.selectedOption = {
            ...payment_option_store.selectedOption,
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
            ...payment_option_store.selectedOption,
            property_id: this.propertyId,
            is_active: payment_option_store.mode === 'create' ? true : payment_option_store.selectedOption.is_active ?? false,
        };
        if (selectedOption?.code === '005') {
            const englishDescription = selectedOption.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description;
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
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (payment_option_store.selectedOption.code !== '005') {
            return;
        }
        this.selectedLanguage = e.detail;
        let idx = payment_option_store.selectedOption.localizables.findIndex(l => l.language.id.toString() === this.selectedLanguage);
        const localizables = payment_option_store.selectedOption.localizables ?? [];
        if (idx === -1) {
            localizables.push(this.createBankTransferInfoObject(payment_option_store.languages.find(l => l.id.toString() === this.selectedLanguage)));
            payment_option_store.selectedOption = {
                ...payment_option_store.selectedOption,
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
        const oldLocalizables = [...payment_option_store.selectedOption.localizables];
        oldLocalizables[this.localizationIdx] = {
            ...oldLocalizables[this.localizationIdx],
            description: value,
        };
        payment_option_store.selectedOption = {
            ...payment_option_store.selectedOption,
            localizables: oldLocalizables,
        };
    }
    handlePaymentGatewayInfoChange(e, idx) {
        const value = e.detail;
        const prevData = [...payment_option_store.selectedOption.data];
        prevData[idx] = { ...prevData[idx], value };
        payment_option_store.selectedOption = {
            ...payment_option_store.selectedOption,
            data: prevData,
        };
    }
    render() {
        if (!payment_option_store.selectedOption) {
            return null;
        }
        return (h(Host, null, h("form", { class: 'sheet-container', onSubmit: this.saveOption.bind(this) }, h("ir-title", { class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales?.entries.Lcz_Information?.replace('%1', payment_option_store.selectedOption?.description), displayContext: "sidebar" }), h("div", { class: "sheet-body px-1" }, payment_option_store.selectedOption.code === '005' ? (h("div", null, h("div", { class: "mb-1" }, h("ir-select", { selectedValue: this.selectedLanguage, showFirstOption: false, data: payment_option_store.languages.map(l => ({
                text: l.description,
                value: l.id.toString(),
            })) })), h("div", null, this.invalid && h("p", { class: "text-danger p-0 m-0" }, locales.entries.Lcz_YouMustFillEnglishField), h("ir-text-editor", {
            // plugins={[Link]}
            // pluginsMode="add"
            // toolbarItemsMode="add"
            // toolbarItems={['|', 'link']}
            maxLength: 450, placeholder: "", style: { '--ir-editor-height': '250px' }, error: this.invalid, value: this.localizationIdx !== null ? payment_option_store.selectedOption?.localizables[this.localizationIdx]?.description ?? '' : '', onTextChange: this.handleTextAreaChange.bind(this)
        })))) : (h("div", null, payment_option_store.selectedOption.data?.map((d, idx) => {
            return (h("fieldset", { key: d.key }, h("ir-input-text", { value: d.value, onTextChange: e => this.handlePaymentGatewayInfoChange(e, idx), id: `input_${d.key}`, label: d.key.replace(/_/g, ' '), placeholder: "", labelWidth: 4, "aria-invalid": this.invalid && (d.value === null || (d.value ?? '')?.trim() === '') ? 'true' : 'false' })));
        })))), h("div", { class: 'sheet-footer' }, h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales.entries.Lcz_Cancel, btn_color: "secondary", btn_type: "button" }), h("ir-button", { btn_type: "submit", btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: isRequestPending('/Handle_Payment_Method'), text: locales.entries.Lcz_Save, btn_color: "primary" })))));
    }
    static get is() { return "ir-option-details"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-option-details.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-option-details.css", "../../../common/sheet.css"]
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
                "getter": false,
                "setter": false,
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
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
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
