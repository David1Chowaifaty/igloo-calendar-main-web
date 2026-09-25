'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-Cpu6aeBh.js');
var types = require('./types-DMInPw7h.js');
var enums = require('./enums-BSCnMYlE.js');
var utils = require('./utils-Du7akmn_.js');
var t = require('./t-C54QV4_c.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./types-BlCoz3jZ.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-HgC39-BR.js');
require('./locales.store-BMTss6fG.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./ir-date-BLb2Vxrk.js');
require('./language-observer-DKp37LIu.js');

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
        return (index.h("form", { key: '19c9d22d702db8cae36e45e420ff897392c4513b', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '7ada7347004308472163ec4f6723bd7e2eb954fb', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '5b1d69b5c683ba629ca52e159bbf3cd17d947c80', label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: 'fac17868c9c0e3bba11e440fc8e739bc695a492b', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '218d18271e6f44ae9f481269f28d2a24581d5b97', label: t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: 'adb4dbeb4443b606d0861b6263ba39bfc3a27d6f', slot: "start" }, "$"))), index.h("div", { key: 'dfa12c072e3f9391fe130502b14820e41da31e2a', class: "extra-service-form__field" }, index.h("p", { key: '03167a015e4307407917755176c7b26a84aba634', class: "extra-service-form__label" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("wa-radio-group", { key: '1d45b2b993023625ceebe7100095722baf5afab3', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: 'cab867c56329bdf0416074c2e7b01da0f7a260ef', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, t.t('Lcz_Inclusive', { fallback: 'Inclusive' })), index.h("wa-radio", { key: '8848939ebf28af0ea255ace25d0fc54da883671d', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, t.t('Lcz_Exclusive', { fallback: 'Exclusive' })))), index.h("wa-switch", { key: '7b5dbd2a67d87285e8010e8c8a17d4dbaf226fa4', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t.t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), index.h("wa-switch", { key: 'c874206ab0e4cf5fa070c8ff1a4c64799f895692', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t.t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (index.h("div", { key: 'e05618ae848e1383a945ff78669cc955fd31b0eb', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '955a774d92ffad236ad0755c506ed9e9424f59a5', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t.t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (index.h("div", { key: '9fa8be8f20a6aeb98219d24e81345b286694a21d', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '07873d31f55c330049cd704acc52f3e99265ef94', label: t.t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: 'd10664a9101993035b1f06898d7e6dac130caad6', label: t.t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
