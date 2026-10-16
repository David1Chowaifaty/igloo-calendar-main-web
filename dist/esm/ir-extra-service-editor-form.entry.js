import { r as registerInstance, c as createEvent, h } from './index-CwWmK1sZ.js';
import { E as ExtraServicesService } from './index-B_fYo1ZB.js';
import { A as AccommodationExtraCode, E as ExtraServiceSection, a as ExtraServiceDefinitionSchema, d as defaultDayUseConfig } from './types-BH_FHDsm.js';
import { V as VatIncludedCodes } from './enums-CSCQSgBu.js';
import { k as showToast } from './utils-DCUYWubA.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './types-Cvnhk41g.js';
import './moment-Mki5YqAR.js';
import './calendar-data-zADniuy4.js';
import './index-BfixheT-.js';
import './locales.store-DN9FqlnV.js';
import './type-ByBjJ3uo.js';
import './calendar-dates-D3hVfsrC.js';

const irExtraServiceEditorFormCss = () => `.extra-service-form.sc-ir-extra-service-editor-form{display:flex;flex-direction:column;gap:1rem}.extra-service-form__field.sc-ir-extra-service-editor-form{display:flex;flex-direction:column;gap:0.375rem}.extra-service-form__label.sc-ir-extra-service-editor-form{font-size:0.8125rem;font-weight:600;margin:0}.extra-service-form__day-use.sc-ir-extra-service-editor-form{display:flex;flex-direction:column;gap:1rem;padding:1rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:0.5rem}.extra-service-form__day-use-times.sc-ir-extra-service-editor-form{display:flex;flex-wrap:wrap;gap:1rem}.extra-service-form__day-use-times.sc-ir-extra-service-editor-form>*.sc-ir-extra-service-editor-form{flex:1 1 10rem}`;

const IrExtraServiceEditorForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.upsertExtraService = createEvent(this, "upsertExtraService");
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.loadingChanged = createEvent(this, "loadingChanged");
    }
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
        return (h("form", { key: 'f4ff1d0b1264bfd4a5bcd25236193587a4e2f1fd', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, h("ir-validator", { key: 'd9d05910e422b4cd4de89e81ab0a1687882a81ac', schema: ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '4859594c88e214b70c179d8ec75509310e260898', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '422acf65deea7f5da61d36ddbdf9d424aa9e2670', schema: ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '2a28f8b78880a53f9cacea45c6fcd2b7ffb81126', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, h("span", { key: '1b89dee92202c7a4fd32c4efd92634b08f9a3402', slot: "start" }, "$"))), h("div", { key: '68f9778a83bc6ec2f742f79b14b06c7e91174253', class: "extra-service-form__field" }, h("p", { key: 'c245a94584293e6a717ffd092064cc56245370c0', class: "extra-service-form__label" }, "VAT"), h("wa-radio-group", { key: '4ef7b845099b0faf39d8b0905a2933d55aaaf983', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, h("wa-radio", { key: '4810d95007a92197b1083af5c4675b8f309d847b', appearance: "button", value: VatIncludedCodes.Inclusive }, "Inclusive"), h("wa-radio", { key: '25e4c54bda29763c9d2f10af572169aaa32f3c9e', appearance: "button", value: VatIncludedCodes.Exclusive }, "Exclusive"))), h("wa-switch", { key: '57293484caacf962466a0fb0303b62de0f736faf', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), h("wa-switch", { key: '40a83aa648a06b6836804209757a675d620f5513', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (h("div", { key: 'c4b728ce2b7f9d3475cf755c1249270e3558536e', class: "extra-service-form__day-use" }, h("wa-switch", { key: '4cdab2716439f5afd3d8b10a7db3362786b358fc', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (h("div", { key: 'efa21809bc18f391a7c2660378145229de8cc800', class: "extra-service-form__day-use-times" }, h("ir-input", { key: 'a43a8e77c58e909c5106d309e51821c4c3fa3c56', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), h("ir-input", { key: '7bf2502c3bfb771323cef9c4bf5f8590d249d6d0', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

export { IrExtraServiceEditorForm as ir_extra_service_editor_form };
