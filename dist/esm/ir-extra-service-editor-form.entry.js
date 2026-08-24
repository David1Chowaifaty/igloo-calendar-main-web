import { r as registerInstance, c as createEvent, h } from './index-Kqbk9HdW.js';
import { E as ExtraServicesService } from './index-D6S1NTJ-.js';
import { A as AccommodationExtraCode, E as ExtraServiceSection, a as ExtraServiceDefinitionSchema, d as defaultDayUseConfig } from './types-DuVpNPN2.js';
import { V as VatIncludedCodes } from './enums-DjSFmz1B.js';
import { s as showToast } from './utils-1xMAwYd7.js';
import './axios-CleaxLzD.js';
import './index-DeW5X45W.js';
import './moment-Mki5YqAR.js';
import './calendar-data-Cd3WjpQE.js';
import './index-BJS0kaeV.js';
import './locales.store-C-PbJt6i.js';

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
            showToast({ title: 'Saved Successfully', type: 'success' });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
            showToast({ title: 'Something went wrong', type: 'error' });
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const service = this.service;
        const dayUseConfig = service?.day_use_config ?? defaultDayUseConfig();
        return (h("form", { key: '52d4c7c7f380705559daed77130381efc48502bd', id: this.formId, onSubmit: e => this.handleSubmit(e), class: "extra-service-form" }, h("ir-validator", { key: 'e0b35df6a2d38db95ee21c884e99c38d084cb20b', schema: ExtraServiceDefinitionSchema.shape.name, value: service?.name, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '2e4322b6d73494744d17eea79a18b869395bf752', label: "Name", placeholder: "Service name", value: service?.name, readonly: this.isAccommodation(), "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: 'c41ff1d739f54923b2f56e7a8664e908ab2ff322', schema: ExtraServiceDefinitionSchema.shape.default_price, value: service?.default_price, valueEvent: "text-change input input-change", showErrorMessage: true }, h("ir-input", { key: '55666423c9fffb178c436ae614bdc31df793e108', label: "Default Price (USD)", mask: 'price', value: service?.default_price?.toString(), "onText-change": (e) => this.updateField({ default_price: Number(e.detail) }) }, h("span", { key: 'cd71ffe98a062bf38b7017c2be89e22315c6e3dd', slot: "start" }, "$"))), h("div", { key: '74871099faa16d3348230d75a1f9c1142216a1bf', class: "extra-service-form__field" }, h("p", { key: '9a6c721b5b98546e007ff08ea0462be978f2b692', class: "extra-service-form__label" }, "VAT"), h("wa-radio-group", { key: '8af59508204e57b42d4f6c988d7468e9732eca11', size: "s", orientation: "horizontal", value: service?.vat_mode, "onwa-change": (e) => this.updateField({ vat_mode: e.detail.value }) }, h("wa-radio", { key: '58c8c451592ddc7dec924d473e5f693490241e7e', appearance: "button", value: VatIncludedCodes.Inclusive }, "Inclusive"), h("wa-radio", { key: '44e20971cb18aba586dca7200b131b5fce64ea70', appearance: "button", value: VatIncludedCodes.Exclusive }, "Exclusive"))), h("wa-switch", { key: '04b4d9b4f20a1133c5392c8db7ab03c7cc169e57', checked: service?.allow_price_override, defaultChecked: service?.allow_price_override, onchange: e => this.updateField({ allow_price_override: e.target.checked }) }, "Allow price override"), h("wa-switch", { key: '2a5d2370ca63046280512053a94ff6d12d61cb4c', checked: service?.is_active, defaultChecked: service?.is_active, onchange: e => this.updateField({ is_active: e.target.checked }) }, "Active"), this.isDayUse() && (h("div", { key: '46404824b5bbc3856b7f96265af4039ef5c45df1', class: "extra-service-form__day-use" }, h("wa-switch", { key: '433c1d5b016b199257eeb83ed6eafd77f43f34c7', checked: dayUseConfig.block_night, defaultChecked: dayUseConfig.block_night, onchange: e => this.updateField({ day_use_config: { ...dayUseConfig, block_night: e.target.checked } }) }, "Block Night"), dayUseConfig.block_night && (h("div", { key: 'f27443cf5d2aea9d98a33a370e63cc297b83541b', class: "extra-service-form__day-use-times" }, h("ir-input", { key: '5d5afb24018d5eaa27f6f43f3bce78f250f482f8', label: "Default Start Time", mask: 'time', value: dayUseConfig.default_start_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_start_time: e.detail } }) }), h("ir-input", { key: 'c39d11faccdd9413df6e82a2103a82386a912a8e', label: "Default End Time", mask: 'time', value: dayUseConfig.default_end_time, "onText-change": (e) => this.updateField({ day_use_config: { ...dayUseConfig, default_end_time: e.detail } }) })))))));
    }
};
IrExtraServiceEditorForm.style = irExtraServiceEditorFormCss();

export { IrExtraServiceEditorForm as ir_extra_service_editor_form };
