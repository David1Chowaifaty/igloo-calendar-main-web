'use strict';

var index = require('./index-jMqrfjaT.js');
var index$1 = require('./index-D7Tp-eLT.js');
var types = require('./types-BH9cEzZc.js');
var enums = require('./enums-CF2eqtU7.js');
var utils = require('./utils-BxzV_u8d.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-UNmh_Xjg.js');
require('./index-BXsYsiHK.js');
require('./locales.store-EkxfQjEN.js');
require('./type-Dy9pVS4V.js');

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
            utils.showToast({ title: 'Saved Successfully', type: 'success' });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
            utils.showToast({ title: 'Something went wrong', type: 'error' });
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const service = this.service;
        const dayUseConfig = service?.day_use_config ?? types.defaultDayUseConfig();
        return (index.h("form", { key: '44153b75101d9d4b5573cde0d8290c4aaccb157d', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '20b6f993615d941ac0f7d495dbd3264c4922a89b', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'f7637b783e21cf7a6486a9e1346260da44108aa2', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: 'ba202808f60b873cbc810e3d84f18a8cdfabd927', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '6c49a1d6ea9c5cff7f9342eeeb1b5fb9d2d0492f', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: 'd792e639edaca1fe1d5d1f3fa85e8a88452c6aeb', slot: "start" }, "$"))), index.h("div", { key: '11829c24040419ef2035dd78735c84c5de55bcb5', class: "extra-service-form__field" }, index.h("p", { key: 'acc68e0f7575f4990de52d424757d6ba9af0b3ad', class: "extra-service-form__label" }, "VAT"), index.h("wa-radio-group", { key: 'd14b6f003b69c762a975853030546b068e41bb9e', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: '1478cdb88c85cb2fb9359dc3af913a5511bc1bfb', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, "Inclusive"), index.h("wa-radio", { key: '241615a1069adc4b4c8cdcdae2b6f6e92f2565c2', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, "Exclusive"))), index.h("wa-switch", { key: '89edc226894e4cd58d5bb2526091360a665a8623', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), index.h("wa-switch", { key: '6d5f00aca0a1c1ea6f1383952d37b0f305f55683', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (index.h("div", { key: '74de93b0c0f921dbb6e6cc4034b0bc7a4116e5e9', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '2c2a3579ad6bde8ea484a5d8efab78391c05d538', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (index.h("div", { key: 'fd946c2676c1cd0d521807fb8cc5345dc1f36f79', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '6b011bb2db8ad3ce3eb0bc0cdbbc757e491bfb4c', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: '720b9b8ec8c1fa3a7376d6b7aeabccf617a34777', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
