import { h } from "@stencil/core";
import { ExtraServicesService } from "../../../../services/extra-services/index";
import { AccommodationExtraCode, defaultDayUseConfig, ExtraServiceDefinitionSchema, ExtraServiceSection } from "../../../../services/extra-services/types";
import { VatIncludedCodes } from "../../../../types/enums";
import { showToast } from "../../../../utils/utils";
export class IrExtraServiceEditorForm {
    service;
    formId;
    upsertExtraService;
    closeDrawer;
    loadingChanged;
    extraServicesService = new ExtraServicesService();
    updateField(value) {
        this.service = { ...this.service, ...value };
    }
    isDayUse() {
        return this.service?.code === AccommodationExtraCode.DayUse;
    }
    isAccommodation() {
        return this.service?.section === ExtraServiceSection.Accommodation;
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            this.loadingChanged.emit(true);
            const parsed = ExtraServiceDefinitionSchema.parse(this.service);
            const saved = await this.extraServicesService.handleExposedExtraService({ extra_service: parsed });
            this.upsertExtraService.emit(saved);
            showToast({ title: 'Saved Successfully', type: 'success' });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
            showToast({ title: 'Something went wrong', type: 'error' });
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const service = this.service;
        const dayUseConfig = service?.day_use_config ?? defaultDayUseConfig();
        return (h("form", { key: '44153b75101d9d4b5573cde0d8290c4aaccb157d', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, h("ir-validator", { key: '20b6f993615d941ac0f7d495dbd3264c4922a89b', schema: ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: 'f7637b783e21cf7a6486a9e1346260da44108aa2', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: 'ba202808f60b873cbc810e3d84f18a8cdfabd927', schema: ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '6c49a1d6ea9c5cff7f9342eeeb1b5fb9d2d0492f', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, h("span", { key: 'd792e639edaca1fe1d5d1f3fa85e8a88452c6aeb', slot: "start" }, "$"))), h("div", { key: '11829c24040419ef2035dd78735c84c5de55bcb5', class: "extra-service-form__field" }, h("p", { key: 'acc68e0f7575f4990de52d424757d6ba9af0b3ad', class: "extra-service-form__label" }, "VAT"), h("wa-radio-group", { key: 'd14b6f003b69c762a975853030546b068e41bb9e', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, h("wa-radio", { key: '1478cdb88c85cb2fb9359dc3af913a5511bc1bfb', appearance: "button", value: VatIncludedCodes.Inclusive }, "Inclusive"), h("wa-radio", { key: '241615a1069adc4b4c8cdcdae2b6f6e92f2565c2', appearance: "button", value: VatIncludedCodes.Exclusive }, "Exclusive"))), h("wa-switch", { key: '89edc226894e4cd58d5bb2526091360a665a8623', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), h("wa-switch", { key: '6d5f00aca0a1c1ea6f1383952d37b0f305f55683', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (h("div", { key: '74de93b0c0f921dbb6e6cc4034b0bc7a4116e5e9', class: "extra-service-form__day-use" }, h("wa-switch", { key: '2c2a3579ad6bde8ea484a5d8efab78391c05d538', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (h("div", { key: 'fd946c2676c1cd0d521807fb8cc5345dc1f36f79', class: "extra-service-form__day-use-times" }, h("ir-input", { key: '6b011bb2db8ad3ce3eb0bc0cdbbc757e491bfb4c', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), h("ir-input", { key: '720b9b8ec8c1fa3a7376d6b7aeabccf617a34777', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
    static get is() { return "ir-extra-service-editor-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-editor-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-editor-form.css"]
        };
    }
    static get properties() {
        return {
            "service": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "ExtraServiceDefinition",
                    "resolved": "{ name?: string; id?: number; property_id?: number; code?: string; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
                    "references": {
                        "ExtraServiceDefinition": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceDefinition",
                            "referenceLocation": "ExtraServiceDefinition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "formId": {
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
                "reflect": false,
                "attribute": "form-id"
            }
        };
    }
    static get events() {
        return [{
                "method": "upsertExtraService",
                "name": "upsertExtraService",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ExtraServiceDefinition",
                    "resolved": "{ name?: string; id?: number; property_id?: number; code?: string; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
                    "references": {
                        "ExtraServiceDefinition": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceDefinition",
                            "referenceLocation": "ExtraServiceDefinition"
                        }
                    }
                }
            }, {
                "method": "closeDrawer",
                "name": "closeDrawer",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "loadingChanged",
                "name": "loadingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
