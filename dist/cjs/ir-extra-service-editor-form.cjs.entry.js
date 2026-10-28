'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-BmWDYlVU.js');
var types = require('./types-CJnnlbYN.js');
var enums = require('./enums-BSCnMYlE.js');
var utils = require('./utils-DC_1UV-i.js');
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
        return (index.h("form", { key: 'a3d018f9a1aef6805d505be548e6f5c031d48853', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '889d5a36fa6f50d0e79a09da7eab0afe33c27053', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'd04df5a2fa920eca46707fc3eeb07b4330f0ed25', label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '76b130ea865b811772c68a501f4f0b55d9d68b17', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '9e56c48d9f61095635551f6bf159119f02f10eae', label: t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: 'af9337f8f815d313788a8617e756f559d9bd43e5', slot: "start" }, "$"))), index.h("div", { key: '4832eb123ad3da20dd36bee883ebc2dafdeb01c7', class: "extra-service-form__field" }, index.h("p", { key: '09942113d1abdf7c6bb77d18e6d909ce17389338', class: "extra-service-form__label" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("wa-radio-group", { key: '07357d69bc9f2caf3e192a67e70f8a1010372af5', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: 'a58ede5b4ab6d726e049b052db2c451dc6eb7c21', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, t.t('Lcz_Inclusive', { fallback: 'Inclusive' })), index.h("wa-radio", { key: '11344426747571590ce8ff409f14166f0b5ff51a', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, t.t('Lcz_Exclusive', { fallback: 'Exclusive' })))), index.h("wa-switch", { key: '1d8c54c9f6974867f40919d8fe69af6a628209da', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t.t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), index.h("wa-switch", { key: '28a6c966da125d99a71bdb87fbb2f631a2c7efb8', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t.t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (index.h("div", { key: '47b02e95a0585d4c7558ea1a567d6627dee0b617', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '01d5e99cc0507dc8c670541007a7965f2165d2c8', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t.t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (index.h("div", { key: 'ce260c8f9598ba4e11270c09987553c3863f4a0e', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '7055547a1cb27e3f2a47065612fd5b6f4abf9b3f', label: t.t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: '9faf69b221cbcc0205e96ea53e3f0ead2e7412c8', label: t.t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
