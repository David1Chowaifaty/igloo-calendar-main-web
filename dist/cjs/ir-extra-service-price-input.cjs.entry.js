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
        return (index.h(index.Host, { key: '59b222ce9399087ab6ddbf3795273d22479631c3', class: "ir-extra-service-price-input" }, index.h("ir-validator", { key: '57249d5152edeed6e6525f221ed162f9238dfc35', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: types.numberType()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: t.t('Lcz_PriceMustBeGreaterThanZero', { fallback: 'Price must be greater than 0' }) }) }, index.h("ir-input", { key: '4a3794b9d437b02c363c6c0c2b3daf2cc40731cc', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, index.h("span", { key: '2fe40828f8e7fd9fd20fb135936637dac15a7c15', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendarData.calendar_data.property.currency.symbol), index.h("slot", { key: '4a88fdb1ccd1936d5f742eb7ef3f4db06c686d36', name: "end", slot: "end" })))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

exports.ir_extra_service_price_input = IrExtraServicePriceInput;
