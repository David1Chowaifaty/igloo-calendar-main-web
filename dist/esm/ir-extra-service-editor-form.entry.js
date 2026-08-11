import { r as registerInstance, c as createEvent, h } from './index-CaNXuIlM.js';
import { E as ExtraServicesService } from './index-DiGS_3VB.js';
import { A as AccommodationExtraCode, E as ExtraServiceSection, a as ExtraServiceDefinitionSchema, d as defaultDayUseConfig } from './types-DuVpNPN2.js';
import { V as VatIncludedCodes } from './enums-DjSFmz1B.js';
import { k as showToast } from './utils-B2NKY4In.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-DeW5X45W.js';
import './moment-Mki5YqAR.js';
import './calendar-data-C4sU6rT3.js';
import './index-Cn49IR5D.js';
import './locales.store-VrM8jHuM.js';
import './type-D7rOPtKA.js';

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
        return (h("form", { key: 'edfc23890d4291da8ac58ccede3a65decf15770c', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, h("ir-validator", { key: '46e62c6e261e8932c77c7059492388775a195b07', schema: ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '9c2e3a50c53415e7ea67180d93db5c1ee44b3df2', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '906f3b2431d9cca24ac6f7f2f1577c5992f524ac', schema: ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: 'a692a78c96741f11756a3564a4bc161966d520e6', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, h("span", { key: '38a90f225299d326eea3b3ceaf90f28aa0f33809', slot: "start" }, "$"))), h("div", { key: '96107bb02f35156c23ca59ca2d56a7fc7c00f994', class: "extra-service-form__field" }, h("p", { key: '87ff39b335f706c3ace151b56b23706235b839fa', class: "extra-service-form__label" }, "VAT"), h("wa-radio-group", { key: '8dea72c88c2df3ac683934374a8e683b05a3401f', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, h("wa-radio", { key: '6c5567b4cd3cd280df303cd70a3506cf207d328f', appearance: "button", value: VatIncludedCodes.Inclusive }, "Inclusive"), h("wa-radio", { key: 'e27f69167612db32993463006bc3b085acdcb70e', appearance: "button", value: VatIncludedCodes.Exclusive }, "Exclusive"))), h("wa-switch", { key: '2af7db4485b3a48eb2168dab920e71477ab70b1e', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), h("wa-switch", { key: '34795117a0bc570d90808da0397023001ce6e461', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (h("div", { key: 'ae1b042dab55744c1e09f47b1f159286e402f5a0', class: "extra-service-form__day-use" }, h("wa-switch", { key: '581b151fcdbeaa3cf65b6b761f01ab2ddc662d46', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (h("div", { key: 'ac18c776b568fb8f333c87528c4eb9edf9ab9161', class: "extra-service-form__day-use-times" }, h("ir-input", { key: 'ba83433c48a4c9224602e2c14927dcc0e40f8ffb', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), h("ir-input", { key: '6d28ab489602fa396ec0a09c4727a2de2bd55f55', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

export { IrExtraServiceEditorForm as ir_extra_service_editor_form };
