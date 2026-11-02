import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { E as ExtraServicesService } from './index-CJkDyUgi.js';
import { A as AccommodationExtraCode, E as ExtraServiceSection, a as ExtraServiceDefinitionSchema, d as defaultDayUseConfig } from './types-ZGSXosx4.js';
import { V as VatIncludedCodes } from './enums-CcLtXwvz.js';
import { h as showToast } from './utils-BXIDs-ea.js';
import { t } from './t-Bvz1wS_D.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './types-BLb1NO3I.js';
import './moment-Mki5YqAR.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-BenwoJ5d.js';
import './type-CEUDt-3i.js';
import './ir-date-Bh8M_fTk.js';
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
        return (h("form", { key: '98f45235e14d18fcf9e627fc5cae276a9f7c2308', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, h("ir-validator", { key: 'a53be1ea71d7305fd026b3874a0ed3e207ba7076', schema: ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '349e146b45cddb1b7418ce035e85db3575806abc', label: t('Lcz_Name', { fallback: 'Name' }), placeholder: t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '4741b223add84cba7bcc76429a59907acb29c00b', schema: ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: 'c1572277b39fc84ebaff045a09809c6267316923', label: t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, h("span", { key: '0741f15fae3339441b3107f3ce00ed05fa15de56', slot: "start" }, "$"))), h("div", { key: 'c1a305dc69d66ca301efb752fa6bd62ee838bb9e', class: "extra-service-form__field" }, h("p", { key: 'a847cfbd8e04eeb063e1d50df4020527a23b0850', class: "extra-service-form__label" }, t('Lcz_Vat', { fallback: 'VAT' })), h("wa-radio-group", { key: 'df86ebb16d2b028acd9c4869c43c457a43e49d91', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, h("wa-radio", { key: '812e445012a4538425fd383bd2942c1d40295a2d', appearance: "button", value: VatIncludedCodes.Inclusive }, t('Lcz_Inclusive', { fallback: 'Inclusive' })), h("wa-radio", { key: '3ad90157beaebfbc431a1e444632532a1588d085', appearance: "button", value: VatIncludedCodes.Exclusive }, t('Lcz_Exclusive', { fallback: 'Exclusive' })))), h("wa-switch", { key: '8e540a89708cc65b9607b5f69b7e95673a2dee35', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), h("wa-switch", { key: 'a549a583ba995ff3ef5fe27c290897f1783d7195', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (h("div", { key: 'cfdbd8d5648588c3c20c36b940f2797a71edb422', class: "extra-service-form__day-use" }, h("wa-switch", { key: 'c6c8f8b56b6d3e87f2c037ecbabd6398851ca90d', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (h("div", { key: 'c0724bdd3bc799ff37beffb5535f3fc1ca0ca23b', class: "extra-service-form__day-use-times" }, h("ir-input", { key: '9da22e69336962de13c045ff1375852c960d4526', label: t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), h("ir-input", { key: 'b827b4ef6edb96e04c7ed1a543cd5056cddff2ec', label: t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

export { IrExtraServiceEditorForm as ir_extra_service_editor_form };
