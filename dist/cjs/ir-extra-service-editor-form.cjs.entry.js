'use strict';

var index = require('./index-DgHWBwDV.js');
var index$1 = require('./index-D7Tp-eLT.js');
var types = require('./types-BH9cEzZc.js');
var enums = require('./enums-CF2eqtU7.js');
var utils = require('./utils-BHTfkyQu.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-CgquPLci.js');
require('./index-daCuTVuG.js');
require('./locales.store-CqlNSy6z.js');
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
        return (index.h("form", { key: 'fa2ebc420a5451ea5d6af5153f251cd1eca00e10', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '9dff1d50c2b517bc3c8aad6113f74d8df77c1e17', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'ce3f9bbe03413bb5a0a22da56173054f1e8c6aef', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '7de3f493f32ef5557a0c4f82e8f7b7f1e79d22b2', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '29fb19a2ee5d9c58c75d8851227b93cdc226c0d5', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: '5e04b3de0968f84c9c9fcbd66ff067bbf8694dc3', slot: "start" }, "$"))), index.h("div", { key: '7878488017ef02d0b33ebcd2974a0788dd2b5410', class: "extra-service-form__field" }, index.h("p", { key: '99ee9c8bf7e74ee8659fa797f9e3b7ecee20d409', class: "extra-service-form__label" }, "VAT"), index.h("wa-radio-group", { key: '8955c41b15a05856ba2b77a043b3def40d96ee55', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: 'f6136b5795a85431334047cebe764d1a1a529dde', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, "Inclusive"), index.h("wa-radio", { key: '2eefa52d11eb0dc790b635f0397d1e93ec97faa2', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, "Exclusive"))), index.h("wa-switch", { key: '462888b71a58570c87d1c7208aaea0f8406bfcb4', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), index.h("wa-switch", { key: '8d65f073b18135bebe4749e84c1e19619a7a8185', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (index.h("div", { key: 'bb32523390cbbdf6b5bda29a593bb3ae8bbbc54c', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '86d53b9779ebb136152a064acc2ab6fcedbfa10f', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (index.h("div", { key: 'b01697d6c14e90733665372ae6f9270a437eda17', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '28b4c93015d97fbfcdb958ee1e2eff5fb63229e1', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: 'd75e7f3e44e00a22a22972efd8fbbc9ea2380892', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
