'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-BmWDYlVU.js');
var types = require('./types-CJnnlbYN.js');
var enums = require('./enums-BSCnMYlE.js');
var utils = require('./utils-DaFypNtu.js');
var t = require('./t-CqJPQrfm.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./types-BVJQZ50e.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./ir-date-CbkOKs2C.js');
require('./language-observer-DKp37LIu.js');
require('./calendar-dates-BxDGM1ix.js');

const irExtraServiceEditorFormCss = () => `.extra-service-form.sc-ir-extra-service-editor-form{display:flex;flex-direction:column;gap:1rem}.extra-service-form__field.sc-ir-extra-service-editor-form{display:flex;flex-direction:column;gap:0.375rem}.extra-service-form__label.sc-ir-extra-service-editor-form{font-size:0.8125rem;font-weight:600;margin:0}.extra-service-form__day-use.sc-ir-extra-service-editor-form{display:flex;flex-direction:column;gap:1rem;padding:1rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:0.5rem}.extra-service-form__day-use-times.sc-ir-extra-service-editor-form{display:flex;flex-wrap:wrap;gap:1rem}.extra-service-form__day-use-times.sc-ir-extra-service-editor-form>*.sc-ir-extra-service-editor-form{flex:1 1 10rem}`;

const IrExtraServiceEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.upsertExtraService = index.createEvent(this, "upsertExtraService");
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
    }
    service;
    formId;
    upsertExtraService;
    closeDrawer;
    loadingChanged;
    extraServicesService = new index$1.ExtraServicesService();
    updateField(value) {
        this.service = { ...this.service, ...value };
    }
    isDayUse() {
        return this.service?.code === types.AccommodationExtraCode.DayUse;
    }
    isAccommodation() {
        return this.service?.section === types.ExtraServiceSection.Accommodation;
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            this.loadingChanged.emit(true);
            const parsed = types.ExtraServiceDefinitionSchema.parse(this.service);
            const saved = await this.extraServicesService.handleExposedExtraService({ extra_service: parsed });
            this.upsertExtraService.emit(saved);
            utils.showToast({ title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), type: 'success' });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
            utils.showToast({ title: t.t('Lcz_SomethingWentWrong', { fallback: 'Something went wrong' }), type: 'error' });
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const service = this.service;
        const dayUseConfig = service?.day_use_config ?? types.defaultDayUseConfig();
        return (index.h("form", { key: '7f9414ddb7f432440ddccb7fa6d58e206032a751', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '9a187a79f1de6feca7449aa722a198336246cf45', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'cb1d084ef5bd30cecadb0b7482f336e98adc09b3', label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '5ca8f4bd2f635064c9b14866c865b85ce4a264b9', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '75b0a4e669ce930ec058bf33f647add929ef63fe', label: t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: '39e53121b7ef9d160b6e3de656d445910b8ca900', slot: "start" }, "$"))), index.h("div", { key: 'f2a6b6422f87ebf1ead072b4716d3bcea99826fd', class: "extra-service-form__field" }, index.h("p", { key: '39e9ad0c56b2c7338861975bda2ec0888f15eb1b', class: "extra-service-form__label" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("wa-radio-group", { key: '2724d11b4d505a05c7dfc77002f660d931607c70', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: '6d756f3d74b4abc9fc763c5ad9c08ac2d084bed3', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, t.t('Lcz_Inclusive', { fallback: 'Inclusive' })), index.h("wa-radio", { key: '3efd4633f0de397ca99d2e3b068c002cbcb46c63', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, t.t('Lcz_Exclusive', { fallback: 'Exclusive' })))), index.h("wa-switch", { key: '794ac983a7651e3f85d8694bb477813f6bf85e67', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t.t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), index.h("wa-switch", { key: '9c70f18b9391f13b1ea7077d78488300ea61aa74', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t.t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (index.h("div", { key: '2e2641ebc9631518288df5159a871ebbe217d1d5', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '06fff33b1aca1fc70de7d377b0df237f314961d9', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t.t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (index.h("div", { key: '90aa7aa62738dbacf2b6ea4eea3361ceebbe4c13', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '6fbad8241c6b35e4a940cfcc790beaa50bf75539', label: t.t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: 'c17899f6690a46ed7dc95543a4906cc24b29d6cb', label: t.t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
