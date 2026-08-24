'use strict';

var index = require('./index-DgHWBwDV.js');
var index$1 = require('./index-D7Tp-eLT.js');
var types = require('./types-BH9cEzZc.js');
var enums = require('./enums-CF2eqtU7.js');
var utils = require('./utils-Dyzu_J0b.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-DAVd_kwk.js');
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
        return (index.h("form", { key: '25a08aceed54f9bbfffbccbb84b775af7b1a1e9d', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, index.h("ir-validator", { key: '45fc1f37e92ab79c00e71f232bd7568c26e566fb', schema: types.ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: 'bf400e1d218668eda4e1aca6ca53c8960bce6990', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '56e5eb20a33d08d5f228aed81fec7dfb7b816c70', schema: types.ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, index.h("ir-input", { key: '8d490b837612fea9fe4ccc3d0015573a7977b130', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, index.h("span", { key: '423944149064620c3a0d4fe180c825972c2cf4af', slot: "start" }, "$"))), index.h("div", { key: '0e7906bcda950efa8a6350a5c01c56d9c788ec59', class: "extra-service-form__field" }, index.h("p", { key: '3100a499740c5572e1c57177cdc0c8968b188c62', class: "extra-service-form__label" }, "VAT"), index.h("wa-radio-group", { key: '6151aa3d43fab8780adca9822421bc1f41ff461d', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, index.h("wa-radio", { key: '97f628660198e1330cd9f1ef6a0df40bb983f452', appearance: "button", value: enums.VatIncludedCodes.Inclusive }, "Inclusive"), index.h("wa-radio", { key: '6cae68ba9db3d4763f548ab21b8fe516baa99065', appearance: "button", value: enums.VatIncludedCodes.Exclusive }, "Exclusive"))), index.h("wa-switch", { key: 'bc087fab556ddda46ba26608ec30efe6dd146c7d', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), index.h("wa-switch", { key: '3cd3a1391a294d2fca7cc54b40052ee7b21fe596', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (index.h("div", { key: '3f39538bc35503446621c10dca5b72f31fc89ce9', class: "extra-service-form__day-use" }, index.h("wa-switch", { key: '9409d86fdf9c3f8557ccc6a69fa08a5f06fd5c7c', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (index.h("div", { key: '362960f34bdb96400da5fce1f9b5e0552a781e89', class: "extra-service-form__day-use-times" }, index.h("ir-input", { key: '5573415208bf2356be50485285c226e3ddc7810a', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), index.h("ir-input", { key: '576e706824825340606578d3b5253cf86ccc2050', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

exports.ir_extra_service_editor_form = IrExtraServiceEditorForm;
