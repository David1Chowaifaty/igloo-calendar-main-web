import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { E as ExtraServicesService } from './index-COKeymRB.js';
import { A as AccommodationExtraCode, E as ExtraServiceSection, a as ExtraServiceDefinitionSchema, d as defaultDayUseConfig } from './types-lai6srmI.js';
import { V as VatIncludedCodes } from './enums-CSCQSgBu.js';
import { g as showToast } from './utils-BBOkGbMg.js';
import { t } from './t-Bvz1wS_D.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './types-CB66a07H.js';
import './moment-Mki5YqAR.js';
import './calendar-data-DknGMMFc.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DGwE7ON6.js';
import './type-9FR4Ndkd.js';
import './ir-date-XXNYhmSL.js';
import './language-observer-CHgzsZkY.js';
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
            showToast({ title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), type: 'success' });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
            showToast({ title: t('Lcz_SomethingWentWrong', { fallback: 'Something went wrong' }), type: 'error' });
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const service = this.service;
        const dayUseConfig = service?.day_use_config ?? defaultDayUseConfig();
        return (h("form", { key: '9c1a03f02a63708a87cfbd09283e1c99c75853d6', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, h("ir-validator", { key: '81cbb31542513b8e3757d624e86f24068f188a10', schema: ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: 'f97ae5010f19fd7e150f390b85af6b255d6a8bb6', label: t('Lcz_Name', { fallback: 'Name' }), placeholder: t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '98ed16e74d34a7c6ed62c0bf34cbdb2cc5def192', schema: ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '7c1f0534f26c3422c9a7aa59654b7395df9fa271', label: t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, h("span", { key: '3993584358fbe1111563c5dfd2510045217d9ae2', slot: "start" }, "$"))), h("div", { key: '15391dcb702186d1bf37017818fca9b149b0f579', class: "extra-service-form__field" }, h("p", { key: '309c4b1b01277db61500ab3d84cb7a31e9005425', class: "extra-service-form__label" }, t('Lcz_Vat', { fallback: 'VAT' })), h("wa-radio-group", { key: '793bd15e1fd72519001b26fc0d282f75270ee299', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, h("wa-radio", { key: '47bda0e4d80bfd7afaaf41f8bba8263e923e6815', appearance: "button", value: VatIncludedCodes.Inclusive }, t('Lcz_Inclusive', { fallback: 'Inclusive' })), h("wa-radio", { key: '991c73a64efe41a11ac8c7e7e8d882f5192a644a', appearance: "button", value: VatIncludedCodes.Exclusive }, t('Lcz_Exclusive', { fallback: 'Exclusive' })))), h("wa-switch", { key: 'c3b1bd05e4daf060f41b9a73caa96444190782b5', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), h("wa-switch", { key: '90cf1419b28f93b10f5f4a95c7f9f6b8c66143d8', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (h("div", { key: 'c03d58e872873d9c1bee7285681a42e8b0a10730', class: "extra-service-form__day-use" }, h("wa-switch", { key: '28a65d123d935e91986b5b940d713ceed4ce5bfb', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (h("div", { key: '9f8e7c47c6fcc1e5e6501d241521786a0aadb380', class: "extra-service-form__day-use-times" }, h("ir-input", { key: 'f341e87e63f58e714c41df058d4bc1ae3d2ec8f5', label: t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), h("ir-input", { key: '15706aeb77c4a7a806948d834aafa906ed247557', label: t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

export { IrExtraServiceEditorForm as ir_extra_service_editor_form };
