'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-BXbp_gXh.js');
var types = require('./types-BBSAAuSp.js');
var enums = require('./enums-BSCnMYlE.js');
var utils = require('./utils-C5KQRlHq.js');
var t = require('./t-wyGILxEL.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./types-BVJQZ50e.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-Br2L_0sg.js');
require('./locale-scope-C7rmpwuA.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-CUtS9vzZ.js');
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
        return (index.h("form", { key: '801ff31a2d9e7b6aa2b760184076a457425af78b', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: 'b95bf1d969e27ac8a476347a1816bc7584ba957a', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '11da5a7fa3446a4e42bc3dd13acbb90bc3d47a0e', label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_ServiceNamePlaceholder', { fallback: 'Service name' }), value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: 'a00650b527469340cdb320c24dbee8a47d34e681', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'd57f69068592a5513fcd8108d5f953a991e92d9d', label: t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' }), mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: 'b5d57bbafc7a4758cb10608a53b223a7cae25b13', slot: "start" }, "$"))), index.h("div", { key: '93d35dfdceab5c535ade4e53a02fd193ad5969de', class: "extra-service-form__field" }, index.h("p", { key: '00ba1830e28d30769b206ce91346f66da796ee32', class: "extra-service-form__label" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("wa-radio-group", { key: '965c81bfa534d83d534ccb0e62d17d76d7218f09', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: 'bda5cb84eec8647e3f259d65710bbc669b6eb2d5', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, t.t('Lcz_Inclusive', { fallback: 'Inclusive' })), index.h("wa-radio", { key: 'b8f759c0d111d86c868ce1428154f353694d602c', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, t.t('Lcz_Exclusive', { fallback: 'Exclusive' })))), index.h("wa-switch", { key: '9c329f508c15ec4c50cdea5e2913f0ade22ce774', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, t.t('Lcz_AllowPriceOverride', { fallback: 'Allow price override' })), index.h("wa-switch", { key: '10be90748676004dcf39a16c4461deb83e4cea55', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, t.t('Lcz_Active', { fallback: 'Active' })), this.isDayUse() && (index.h("div", { key: '9a927457b3ae0e03efacd5ac0c6ac397ede7a1e8', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '8a22e3b38407c414766b5d478b3851111068041f', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, t.t('Lcz_BlockNightSwitch', { fallback: 'Block Night' })), dayUseConfig.block_night && (index.h("div", { key: '347f616b7f4339610423a184a0b73964b3179d3f', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '29510e96101eab2221d5b056407da29e380bb246', label: t.t('Lcz_DefaultStartTime', { fallback: 'Default Start Time' }), mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: '1a9f369b4cc537f1d85f7d0b6d92317e2fa892c6', label: t.t('Lcz_DefaultEndTime', { fallback: 'Default End Time' }), mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
