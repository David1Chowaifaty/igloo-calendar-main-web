'use strict';

var index = require('./index-IDeZZwEK.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var t = require('./t-CqJPQrfm.js');
var types = require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');

const irExtraServicePriceInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1}.ir-extra-service-price-input__price-wrapper{flex:1 1 0%}`;

const IrExtraServicePriceInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.priceChange = index.createEvent(this, "priceChange");
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
        return (index.h(index.Host, { key: '97006d4f1a0ca34b8fad72f300a731595fce1151', class: "ir-extra-service-price-input" }, index.h("ir-validator", { key: 'aeed0ef10529735b253c87f1a3d78ca16029162b', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: types.numberType()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: t.t('Lcz_PriceMustBeGreaterThanZero', { fallback: 'Price must be greater than 0' }) }) }, index.h("ir-input", { key: '23845fa815f36363c99eb879f9472c6d8e068148', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, index.h("span", { key: '4fbe810a4e4b5e6d6eec707d86e3e702bb9a116b', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendarData.calendar_data.property.currency.symbol), index.h("slot", { key: '3f53ee16b5624b380c76e3293e8632657c5da76b', name: "end", slot: "end" })))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

exports.ir_extra_service_price_input = IrExtraServicePriceInput;
