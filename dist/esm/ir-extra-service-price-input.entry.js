import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { c as calendar_data } from './calendar-data-CiYzaNK0.js';
import { t } from './t-CHjay2ar.js';
import { n as numberType } from './types-CB66a07H.js';
import './locales.store-CXJn6ls-.js';

const irExtraServicePriceInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1}.ir-extra-service-price-input__price-wrapper{flex:1 1 0%}`;

const IrExtraServicePriceInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.priceChange = createEvent(this, "priceChange");
    }
    label;
    placeholder;
    /**
     * Controlled charge rule value passed from the parent: `value` holds the price,
     * `mode` holds the taxation mode code (Inclusive/Exclusive).
     */
    chargeRule;
    autoValidate;
    price;
    priceChange;
    componentWillLoad() {
        if (this.chargeRule)
            this.updatePriceField(this.chargeRule);
    }
    handlePriceValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updatePriceField(newValue);
        }
    }
    updatePriceField(params) {
        this.price = { ...(this.price || {}), ...params };
    }
    render() {
        return (h(Host, { key: '6024ce8573d5addd1298fa026e7c760600775324', class: "ir-extra-service-price-input" }, h("ir-validator", { key: '098e165ccae4f5ce1b0af9fafebed494d4ab2b38', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: numberType()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: t('Lcz_PriceMustBeGreaterThanZero', { fallback: 'Price must be greater than 0' }) }) }, h("ir-input", { key: '5edd99de30eaf712cda144e5acea865aeeb6ddeb', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '075749ba77edfc63bc6118ed1c54b70a6e528988', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendar_data.property.currency.symbol), h("slot", { key: 'e74c060db0e96ef15fa4e34181da5d3bf4c29a21', name: "end", slot: "end" })))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

export { IrExtraServicePriceInput as ir_extra_service_price_input };
