import { r as registerInstance, c as createEvent, h, H as Host } from './index-BxxIyJIp.js';
import { l as libExports } from './index-DeW5X45W.js';

const irExtraServicePriceInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1}.ir-extra-service-price-input__price-wrapper{flex:1 1 0%}`;

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
        return (h(Host, { key: 'f49a9e338398242c725f6d9036876093d2eaaf78', class: "ir-extra-service-price-input" }, h("ir-validator", { key: '4bcf7c24ca23a5230adbbdebd698244592a17ea0', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: libExports.z
                .number()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: 'Price must be greater than 0' }) }, h("ir-input", { key: '7a4ad13a17d24a846e2f46c822366a5917f7678a', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '61a32b3b86a868b333d97ebe00e4abe7aeba7e80', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, "$")))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

export { IrExtraServicePriceInput as ir_extra_service_price_input };
