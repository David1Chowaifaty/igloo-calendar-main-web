import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { c as calendar_data } from './calendar-data-9xOw4JU4.js';
import { t } from './t-BVYK64UG.js';
import { n as numberType } from './types-CB66a07H.js';
import './locale-scope-CapRuPkM.js';

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
        return (h(Host, { key: 'ce4781dd0357e2e73723df3a8587cacbf7f75944', class: "ir-extra-service-price-input" }, h("ir-validator", { key: '92d563a3f7153956638cd645b0092e0d3d2df6d1', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: numberType()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: t('Lcz_PriceMustBeGreaterThanZero', { fallback: 'Price must be greater than 0' }) }) }, h("ir-input", { key: 'bc7cf7174e5ac0a867c42daac15a229fcfc45c40', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '2e1f35a9af597e85f82fec1d04f7450e5b5fcefb', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendar_data.property.currency.symbol), h("slot", { key: '7369820bcf98db937072e6dd45de3f677aafc2a5', name: "end", slot: "end" })))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

export { IrExtraServicePriceInput as ir_extra_service_price_input };
