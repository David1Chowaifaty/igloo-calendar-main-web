import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { c as calendar_data } from './calendar-data-DWzivSW-.js';
import { t } from './t-Bvz1wS_D.js';
import { n as numberType } from './types-CB66a07H.js';
import './locale-scope-Jre4lb6k.js';

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
        return (h(Host, { key: 'd5f56e2455031caa6c3914eeeaf4c509a498fb74', class: "ir-extra-service-price-input" }, h("ir-validator", { key: '920a8cf7ef67bab3e4fc8731a0738ed284c7444e', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: numberType()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: t('Lcz_PriceMustBeGreaterThanZero', { fallback: 'Price must be greater than 0' }) }) }, h("ir-input", { key: 'cdc46e889060c76952b0f25c5dd179b501924b08', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '056161d60e104eccdbe28bf366f210e1fef93748', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendar_data.property.currency.symbol), h("slot", { key: '835b1e6394282e90c973eaec1f59dbfd491037f2', name: "end", slot: "end" })))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

export { IrExtraServicePriceInput as ir_extra_service_price_input };
