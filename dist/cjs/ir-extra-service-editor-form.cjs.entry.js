'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-BmWDYlVU.js');
var types = require('./types-CJnnlbYN.js');
var enums = require('./enums-BSCnMYlE.js');
var utils = require('./utils-ZKsQb8eV.js');
var t = require('./t-CqJPQrfm.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./types-BVJQZ50e.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
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
        return (index.h("form", { key: 'cefbb5492f32f1b9c54ed5a2a58e73b42c6c1435', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '83b068ae33c74b47e846e8d0834cf7de49e28c8c', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '5a66b2c93295b77d35dd99eed01f9c4b27158e34', label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: 'cb0ad3975540751438833075458b8f814f0f6810', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'ddaf942932a75e21667ef446acca95076dfb92c4', label: t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: 'adcff2a22f8c2e2b4fa255699eb48fbf6f9c0e2a', slot: "start" }, "$"))), index.h("div", { key: 'afe5c1557b006074956a0375ec9b18d05a6d3e7b', class: "extra-service-form__field" }, index.h("p", { key: '668ba76074910f5cdf3a6616393c345b365cad06', class: "extra-service-form__label" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("wa-radio-group", { key: 'd690af99233ac894c2c283dae8baf812729a8de0', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: '1be66a57d3bf2bb2b4d9343a81367bd2598d69b8', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, t.t('Lcz_Inclusive', { fallback: 'Inclusive' })), index.h("wa-radio", { key: '3f37425d2431360714dbfa246232c34cf9c7bcf9', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, t.t('Lcz_Exclusive', { fallback: 'Exclusive' })))), index.h("wa-switch", { key: 'b5a4a5ba4fb99b039a957d33405ccf669dff0a3a', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t.t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), index.h("wa-switch", { key: 'e30c2252bfd95f1c35016b058078bf94092c183e', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t.t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (index.h("div", { key: 'fbec94a17d6fa3d1b65d10e6764736b3af2df4af', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '2c20382b2bd6006480fc91a45eb77a0261005ec6', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t.t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (index.h("div", { key: '12b7789631072054f6201ea78c5bc1c84846e866', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '72ec48662d258954d962542f274e0a798f974ec1', label: t.t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: '662044aef0d5c72d2a0325b5c7206efca64f27f1', label: t.t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
