'use strict';

var index = require('./index-Bp205iz4.js');
var calendarData = require('./calendar-data-BpobEh98.js');
var types = require('./types-BVJQZ50e.js');
require('./index-CjQGUKJk.js');

const irExtraServicePriceInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1}.ir-extra-service-price-input__price-wrapper{flex:1 1 0%}`;

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
        return (index.h(index.Host, { key: '61f944fcc86a180dcda8117ab4baa75308d2bcca', class: "ir-extra-service-price-input" }, index.h("ir-validator", { key: '0833e9ecc1e627a67b98ef4f181c192d9801d073', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: types.numberType()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: 'Price must be greater than 0' }) }, index.h("ir-input", { key: '5f97cc2fb1d96db73d3073678102103a75a6da85', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, index.h("span", { key: '94d9ceed1575cda682419d03da6958309aa1bac4', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendarData.calendar_data.property.currency.symbol), index.h("slot", { key: '6e72738db1926cfaa91408f209764ba3a311e776', name: "end", slot: "end" })))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

exports.ir_extra_service_price_input = IrExtraServicePriceInput;
