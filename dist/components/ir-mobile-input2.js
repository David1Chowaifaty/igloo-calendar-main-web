import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { I as IMask } from './index4.js';

const masks = {
    AF: '##-###-####',
    AX: '(###)###-##-##',
    AL: '(###)###-###',
    DZ: '##-###-####',
    AS: '(684)###-####',
    AD: '###-###',
    AO: '(###)###-###',
    AI: '(264)###-####',
    AQ: '1##-###',
    AG: '(268)###-####',
    AR: '(###)###-####',
    AM: '##-###-###',
    AW: '###-####',
    AC: '####',
    AU: '#-####-####',
    AT: '(###)###-####',
    AZ: '##-###-##-##',
    BS: '(242)###-####',
    BH: '####-####',
    BD: '1###-######',
    BB: '(246)###-####',
    BY: '(##)###-##-##',
    BE: '(###)###-###',
    BZ: '###-####',
    BJ: '##-##-####',
    BM: '(441)###-####',
    BT: ['17-###-###', '77-###-###', '#-###-###'],
    BO: '#-###-####',
    BA: ['##-####', '##-#####'],
    BW: '##-###-###',
    BR: ['(##)####-####', '(##)#####-####'],
    IO: '###-####',
    BN: '###-####',
    BG: '(###)###-###',
    BF: '##-##-####',
    BI: '##-##-####',
    KH: '##-###-###',
    CM: '####-####',
    CA: '(###)###-####',
    CV: '(###)##-##',
    KY: '(345)###-####',
    CF: '##-##-####',
    TD: '##-##-##-##',
    CL: '#-####-####',
    CN: ['(###)####-###', '(###)####-####', '##-#####-#####'],
    CX: '#-####-####',
    CC: '#-####-####',
    CO: '(###)###-####',
    KM: '##-#####',
    CG: '##-#####',
    CK: '##-###',
    CR: '####-####',
    HR: '##-###-###',
    CU: '#-###-####',
    CY: '##-###-###',
    CZ: '(###)###-###',
    CD: '(###)###-###',
    DK: '##-##-##-##',
    DJ: '##-##-##-##',
    DM: '(767)###-####',
    DO: ['(809)###-####', '(829)###-####', '(849)###-####'],
    EC: ['#-###-####', '##-###-####'],
    EG: '(###)###-####',
    SV: '##-##-####',
    GQ: '##-###-####',
    ER: '#-###-###',
    EE: ['###-####', '####-####'],
    SZ: '##-##-####',
    ET: '##-###-####',
    FK: '#####',
    FO: '## ## ##',
    FJ: '##-#####',
    FI: '## ### ####',
    FR: '# ## ## ## ##',
    GF: '### ## ## ##',
    PF: '## ## ## ##',
    GA: '# ## ## ##',
    GM: '### ####',
    GE: '(###)###-###',
    DE: ['###-###', '(##) ####-####', '(###) ####-####', '(####) ###-####', '(3####) ##-####'],
    GH: '03# ### ####',
    GI: '###-#####',
    GR: '(###)###-####',
    GL: '##-##-##',
    GD: '(473)###-####',
    GP: '### ## ## ##',
    GU: '671 ### ####',
    GT: '#-###-####',
    GG: '(####)######',
    GN: '##-###-###',
    GW: '#-######',
    GY: '###-####',
    HT: '##-##-####',
    VA: '06 698#####',
    HN: '####-####',
    HK: '####-####',
    HU: '## ### ####',
    IS: '###-####',
    IN: '(####)###-###',
    ID: ['##-###-##', '##-###-###', '##-###-####', '(8##)###-###', '(8##)###-##-###'],
    IR: '(###)###-####',
    IQ: '(###)###-####',
    IE: '(###)###-###',
    IM: '(####)######',
    IL: ['#-###-####', '5#-###-####'],
    IT: '(###)####-###',
    CI: '##-###-###',
    JM: '(876)###-####',
    JP: ['(###)###-###', '##-####-####'],
    JE: '(####)####-######',
    JO: '#-####-####',
    KZ: ['(###) ### ## ##', '(####) ## ## ##', '(#####) # ## ##'],
    KE: '###-######',
    KI: '##-###',
    KP: ['###-###', '####-####', '##-###-###', '###-####-###', '191-###-####', '####-#############'],
    KR: '##-###-####',
    XK: ['##-###-###', '###-###-###'],
    KW: '####-####',
    KG: '(###)###-###',
    LA: ['##-###-###', '(20##)###-###'],
    LV: '##-###-###',
    LB: ['#-###-###', '##-###-###'],
    LS: '#-###-####',
    LR: '##-###-###',
    LY: ['##-###-###', '21-###-####'],
    LI: '(###)###-####',
    LT: '(###)##-###',
    LU: '(###)###-###',
    MO: '####-####',
    MG: '##-##-#####',
    MW: ['1-###-###', '#-####-####'],
    MY: ['#-###-###', '##-###-###', '(###)###-###', '##-###-####'],
    MV: '###-####',
    ML: '##-##-####',
    MT: '####-####',
    MH: '###-####',
    MQ: '(###)##-##-##',
    MR: '##-##-####',
    MU: '###-####',
    YT: '#####-####',
    MX: ['##-##-####', '(###)###-####'],
    FM: '###-####',
    MD: '####-####',
    MC: ['##-###-###', '(###)###-###'],
    MN: '##-##-####',
    ME: '##-###-###',
    MS: '(664)###-####',
    MA: '##-####-###',
    MZ: '##-###-###',
    MM: ['###-###', '#-###-###', '##-###-###'],
    NA: '##-###-####',
    NR: '###-####',
    NP: '##-###-###',
    NL: '##-###-####',
    NC: '##-####',
    NZ: ['#-###-###', '(###)###-###', '(###)###-####'],
    NI: '####-####',
    NE: '##-##-####',
    NG: ['##-###-##', '##-###-###', '(###)###-####'],
    NU: '####',
    NF: '3##-###',
    MK: '##-###-###',
    MP: '(670)###-####',
    NO: '(###)##-###',
    OM: '##-###-###',
    PK: '(###)###-####',
    PW: '###-####',
    PS: '##-###-####',
    PA: '###-####',
    PG: '(###)##-###',
    PY: '(###)###-###',
    PE: '(###)###-###',
    PH: '(###)###-####',
    PN: '###-###-###',
    PL: '(###)###-###',
    PT: '##-###-####',
    PR: ['(787) ### ####', '(939) ### ####'],
    QA: '####-####',
    RE: '#####-####',
    RO: '##-###-####',
    RU: '(###)###-##-##',
    RW: '(###)###-###',
    BL: '###-##-##-##',
    SH: '####',
    KN: '(869)###-####',
    LC: '(758)###-####',
    MF: '(###)###-###',
    PM: '##-####',
    VC: '(784)###-####',
    WS: '##-####',
    SM: '####-######',
    ST: '##-#####',
    SA: ['#-###-####', '5#-####-####'],
    SN: '##-###-####',
    RS: '##-###-####',
    SC: '#-###-###',
    SL: '##-######',
    SG: '####-####',
    SX: '(721)###-####',
    SK: '(###)###-###',
    SI: '##-###-###',
    SB: ['#####', '###-####'],
    SO: ['#-###-###', '##-###-###'],
    ZA: '##-###-####',
    GS: '#####',
    SS: '##-###-####',
    ES: '(###)###-###',
    LK: '##-###-####',
    SD: '##-###-####',
    SR: ['###-###', '###-####'],
    SJ: '(###)##-###',
    SE: '##-###-####',
    CH: '##-###-####',
    SY: '##-####-###',
    TW: ['####-####', '#-####-####'],
    TJ: '##-###-####',
    TZ: '##-###-####',
    TH: ['##-###-###', '##-###-####'],
    TL: ['###-####', '77#-#####', '78#-#####'],
    TG: '##-###-###',
    TK: '####',
    TO: '#####',
    TT: '(868)###-####',
    TN: '##-###-###',
    TR: '(###)###-####',
    TM: '#-###-####',
    TC: '(249)###-###',
    TV: ['2####', '90####'],
    UG: '(###)###-###',
    UA: '(##)###-##-##',
    AE: ['#-###-####', '5#-###-####'],
    GB: '##-####-####',
    US: '(###)###-####',
    UY: '#-###-##-##',
    UZ: '##-###-####',
    VU: ['#####', '##-#####'],
    VE: '(###)###-####',
    VN: ['##-####-###', '(###)####-###'],
    VG: '(284)###-####',
    VI: '(340)###-####',
    WF: '##-####',
    YE: ['#-###-###', '##-###-###', '###-###-###'],
    ZM: '##-###-####',
    ZW: '#-######',
};

const irMobileInputCss = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n:host {\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\n.mobile-input__logo {\n  height: var(--wa-font-size-s);\n  aspect-ratio: 4/3;\n  border-radius: 3px;\n}\n.mobile-input__required {\n  color: #f3676c !important;\n}\n.mobile-input__prefix-dropdown::part(menu) {\n  height: 300px;\n  /* padding-top: 0; */\n}\n.mobile-input__container {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.mobile-input__container--disabled {\n  opacity: 0.7;\n}\n.mobile-input__phone-country {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.mobile-input__phone {\n  flex: 1 1 0%;\n}\n.mobile-input__phone {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mobile-input__phone--invalid {\n  border-color: var(--wa-color-danger-600);\n}\n.mobile-input__label {\n  display: inline-block;\n  position: relative;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-start: 0.5em !important;\n}\n.mobile-input__description {\n  margin: 0.25rem 0 0.5rem;\n  color: var(--wa-color-neutral-500);\n  font-size: 0.875rem;\n}\n.mobile-input__error {\n  margin: 0.5rem 0 0;\n  color: var(--wa-color-danger-600);\n  font-size: 0.875rem;\n}\n.mobile-input__required {\n  margin-left: 0.25rem;\n  color: var(--wa-color-danger-600);\n}\n.mobile-input__trigger,\n.mobile-input__phone {\n  padding: 0 var(--wa-form-control-padding-inline);\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-sizing: border-box;\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  border-radius: var(--wa-form-control-border-radius);\n  transition: background-color var(--wa-transition-normal), border var(--wa-transition-normal), all var(--wa-transition-normal), outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}\n.mobile-input__container {\n  height: var(--wa-form-control-height);\n}\n.mobile-input__trigger {\n  height: 100%;\n}\n.mobile-input__trigger:focus,\n.mobile-input__phone:focus {\n  outline: none;\n}\n.mobile-input__trigger:disabled,\n.mobile-input__phone:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.mobile-input__trigger:focus-visible,\n.mobile-input__phone:focus-visible {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n  z-index: 2;\n}\n.mobile-input__phone::placeholder {\n  color: var(--wa-form-control-placeholder-color);\n  user-select: none;\n  -webkit-user-select: none;\n}\n.mobile-input__trigger {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0;\n  cursor: pointer;\n}\n.mobile-input__phone {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mobile-input__phone {\n  cursor: text;\n}\n.mobile-input__trigger[aria-expanded='true'] {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n  z-index: 2;\n}\n.mobile-input__trigger[aria-expanded='true'] .mobile-input__phone-country-caret {\n  transform: rotate(-180deg);\n}\n\n.mobile-input__country-name {\n  flex: 1;\n}\n.mobile-input__country-prefix {\n  color: var(--wa-color-neutral-500);\n}\n";
const IrMobileInputStyle0 = irMobileInputCss;

const IrMobileInput = /*@__PURE__*/ proxyCustomElement(class IrMobileInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.mobileInputChange = createEvent(this, "mobile-input-change", 7);
        this.mobileInputCountryChange = createEvent(this, "mobile-input-country-change", 7);
    }
    static idCounter = 0;
    componentId = ++IrMobileInput.idCounter;
    inputId = `ir-mobile-input-${this.componentId}`;
    labelId = `${this.inputId}-label`;
    descriptionId = `${this.inputId}-description`;
    errorId = `${this.inputId}-error`;
    countryStatusId = `${this.inputId}-country-status`;
    inputRef;
    mask;
    /** The input's size. */
    size = 'small';
    /** Visible label for the phone input */
    label = 'Phone number';
    /** Name attribute passed to the native input */
    name = 'phone';
    /** Placeholder shown when the input is empty */
    placeholder = 'Enter phone number';
    /** Help text rendered under the label */
    description;
    /** Error message announced to screen readers */
    error;
    /** Native required attribute */
    required = false;
    /** Whether the control is disabled */
    disabled = false;
    /** Selected country ISO code. Component updates this prop when a new country is chosen */
    countryCode;
    /** Input value without formatting. Component keeps this prop in sync */
    value = '';
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries = [];
    mobileInputChange;
    mobileInputCountryChange;
    selectedCountry;
    displayValue = '';
    componentWillLoad() {
        const resolvedCountry = this.resolveCountry(this.countryCode) ?? null;
        if (!resolvedCountry) {
            return;
        }
        this.selectedCountry = resolvedCountry;
        this.countryCode = resolvedCountry?.code;
        this.displayValue = this.value ?? '';
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.initializeMask());
    }
    disconnectedCallback() {
        this.destroyMask();
    }
    handleCountryCodeChange(nextCode) {
        const resolvedCountry = this.resolveCountry(nextCode);
        if (resolvedCountry && resolvedCountry !== this.selectedCountry) {
            this.selectedCountry = resolvedCountry;
        }
    }
    handleSelectedCountryChange(next, previous) {
        if (!next)
            return;
        if (!previous || next.code !== previous.code) {
            if (this.countryCode !== next.code) {
                this.countryCode = next.code;
            }
            this.rebuildMask();
            this.mobileInputCountryChange.emit(next);
        }
    }
    handleValueChange(newValue, oldValue) {
        // if (newValue === oldValue) return;
        // if (this.mask) {
        //   if (this.mask.unmaskedValue !== (newValue ?? '')) {
        //     this.mask.unmaskedValue = newValue ?? '';
        //   }
        //   this.displayValue = this.mask.value;
        // } else {
        //   this.displayValue = newValue ?? '';
        //   if (this.inputRef && this.inputRef.value !== this.displayValue) {
        //     this.inputRef.value = this.displayValue;
        //   }
        // }
        if (newValue !== oldValue) {
            if (this.mask) {
                this.mask.value = newValue;
            }
        }
    }
    resolveCountry(code) {
        if (!code)
            return undefined;
        return this.countries.find(country => country.code.toUpperCase() === code.toUpperCase());
    }
    initializeMask() {
        if (!this.inputRef)
            return;
        const maskConfig = this.buildMaskOptions(this.selectedCountry);
        if (!maskConfig) {
            this.destroyMask();
            return;
        }
        this.mask = IMask(this.inputRef, maskConfig);
        if (this.value) {
            this.mask.unmaskedValue = this.value;
        }
        this.displayValue = this.mask.value;
        this.mask.on('accept', () => {
            if (!this.mask)
                return;
            const nextValue = this.mask.unmaskedValue ?? '';
            if (nextValue !== this.value) {
                this.value = nextValue;
            }
            this.displayValue = this.mask.value;
            this.emitChange();
        });
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        if (this.mask) {
            this.mask.destroy();
            this.mask = undefined;
        }
        this.displayValue = this.value ?? '';
    }
    buildMaskOptions(country) {
        if (!country)
            return undefined;
        const iso = country.code?.toUpperCase();
        if (!iso)
            return undefined;
        const rawMask = masks[iso];
        if (!rawMask)
            return undefined;
        const normalizePattern = (pattern) => pattern.replace(/#/g, '0');
        if (Array.isArray(rawMask)) {
            return {
                mask: rawMask.map(pattern => ({ mask: this.selectedCountry.phone_prefix + ' ' + normalizePattern(pattern) })),
                lazy: false,
                placeholderChar: '_',
            };
        }
        return {
            mask: this.selectedCountry.phone_prefix + ' ' + normalizePattern(rawMask),
            lazy: false,
            placeholderChar: '_',
        };
    }
    emitChange() {
        if (!this.selectedCountry)
            return;
        this.mobileInputChange.emit({
            country: this.selectedCountry,
            value: this.value ?? '',
            formattedValue: this.displayValue ?? '',
        });
    }
    handleCountrySelect = (event) => {
        if (this.disabled)
            return;
        event.stopPropagation();
        event.stopImmediatePropagation();
        const value = event.detail?.item?.value;
        const selected = this.countries.find(country => country.id.toString() === `${value}`);
        if (selected) {
            this.selectedCountry = selected;
        }
        requestAnimationFrame(() => {
            this.inputRef?.focus();
        });
    };
    handlePlainInput = (event) => {
        if (this.mask)
            return;
        const nextValue = event.target?.value ?? '';
        if (nextValue !== this.value) {
            this.value = nextValue;
            this.displayValue = nextValue;
            this.emitChange();
        }
    };
    render() {
        const describedByIds = [this.description ? this.descriptionId : null, this.error ? this.errorId : null].filter(Boolean).join(' ') || undefined;
        return (h(Host, { key: '8df77143c0600f4ac9781f4a78998fe5c0dee521', size: 'small', role: "group", "aria-labelledby": this.labelId, "aria-describedby": describedByIds }, h("label", { key: 'ff70606be2b0aaee37ffd35bc82a7a9ebcdffbb8', class: "mobile-input__label", id: this.labelId, htmlFor: this.inputId }, this.label, this.required ? (h("span", { class: "mobile-input__required", "aria-hidden": "true" }, "*")) : null), this.description ? (h("p", { id: this.descriptionId, class: "mobile-input__description" }, this.description)) : null, h("div", { key: 'ebdb3b0131ece6aaf8f1ba3d0ca20417ddc9fa62', class: { 'mobile-input__container': true, 'mobile-input__container--disabled': this.disabled } }, h("wa-dropdown", { key: '15cf504b03df39b124decfe86e9284435e383bec', "onwa-show": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": this.handleCountrySelect, class: "mobile-input__prefix-dropdown" }, h("button", { key: '00cdc437a9cb0161435206113deb900cce7988c4', slot: "trigger", type: "button", class: "mobile-input__trigger", disabled: this.disabled, "aria-haspopup": "listbox", "aria-label": "Change country calling code" }, h("div", { key: 'f5d163592a2ce1cb54b57ba2063165c52f687783', class: "mobile-input__phone-country", style: { marginRight: '1rem' } }, this.selectedCountry ? h("img", { src: this.selectedCountry?.flag, alt: this.selectedCountry?.name, class: "mobile-input__logo" }) : h("span", null, "Select")), h("wa-icon", { key: '585f2688120b5d231a50ca7078b0516c4ae60ab0', class: "mobile-input__phone-country-caret", name: "chevron-down", "aria-hidden": "true" })), h("span", { key: 'a75c93a692af05ddf60cffcbc094379f54ce8781', class: "sr-only", id: this.countryStatusId, "aria-live": "polite" }, this.selectedCountry ? `Selected country ${this.selectedCountry.name} ${this.selectedCountry.phone_prefix}` : 'Select a country'), this.countries.map(country => (h("wa-dropdown-item", { value: country.id.toString() }, h("div", { class: "mobile-input__phone-country", role: "option", "aria-selected": this.selectedCountry?.id === country.id ? 'true' : 'false' }, h("img", { src: country.flag, alt: country.name, class: "mobile-input__logo" }), h("span", { class: "mobile-input__country-name" }, country.name), h("span", { class: "mobile-input__country-prefix" }, country.phone_prefix)))))), h("input", { key: 'fca9399eab3ec8b94baaf918e3851d8904baa1b5', ref: el => (this.inputRef = el), id: this.inputId, class: {
                'mobile-input__phone': true,
                'mobile-input__phone--invalid': Boolean(this.error),
            }, name: this.name, type: "tel", inputmode: "tel", autocomplete: "tel", "aria-required": this.required ? 'true' : undefined, "aria-invalid": this.error ? 'true' : 'false', "aria-describedby": describedByIds, disabled: this.disabled, placeholder: this.placeholder, value: this.displayValue, onInput: this.handlePlainInput })), this.error ? (h("p", { id: this.errorId, class: "mobile-input__error", role: "alert" }, this.error)) : null));
    }
    static get watchers() { return {
        "countryCode": ["handleCountryCodeChange"],
        "selectedCountry": ["handleSelectedCountryChange"],
        "value": ["handleValueChange"]
    }; }
    static get style() { return IrMobileInputStyle0; }
}, [1, "ir-mobile-input", {
        "size": [513],
        "label": [1],
        "name": [1],
        "placeholder": [1],
        "description": [1],
        "error": [1],
        "required": [516],
        "disabled": [516],
        "countryCode": [1537, "country-code"],
        "value": [1537],
        "countries": [1040],
        "selectedCountry": [32],
        "displayValue": [32]
    }, undefined, {
        "countryCode": ["handleCountryCodeChange"],
        "selectedCountry": ["handleSelectedCountryChange"],
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-mobile-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMobileInput);
            }
            break;
    } });
}

export { IrMobileInput as I, defineCustomElement as d };

//# sourceMappingURL=ir-mobile-input2.js.map