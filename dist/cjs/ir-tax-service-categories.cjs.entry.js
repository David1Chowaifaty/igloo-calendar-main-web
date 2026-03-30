'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-8fd11984.js');
const booking_service = require('./booking.service-56109c03.js');
const property_service = require('./property.service-89d8059b.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
require('./axios-6e678d52.js');
require('./index-8bb117a0.js');
require('./utils-7364dac0.js');
require('./moment-1780b03a.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');
require('./type-393ac773.js');
require('./booking-9b5a7f1e.js');

const irTaxServiceCategoriesCss = ".sc-ir-tax-service-categories-h{display:block}.tax-page.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-xl)}.tax-page__header.sc-ir-tax-service-categories{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m)}.tax-page__heading.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.page-title.sc-ir-tax-service-categories{margin:0}.tax-page__subtitle.sc-ir-tax-service-categories{margin:0;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tax-page__meta.sc-ir-tax-service-categories{display:inline-flex;align-items:center;gap:var(--wa-space-s);color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tax-page__meta.sc-ir-tax-service-categories wa-badge.sc-ir-tax-service-categories{font-size:var(--wa-font-size-2xs)}.tax-page__grid.sc-ir-tax-service-categories{display:grid;gap:var(--wa-space-l)}.tax-panel.sc-ir-tax-service-categories{--spacing:var(--wa-space-l)}.tax-panel.sc-ir-tax-service-categories::part(header){padding-bottom:0}.tax-panel.sc-ir-tax-service-categories::part(body){padding-top:var(--wa-space-m)}.tax-panel__header.sc-ir-tax-service-categories{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--wa-space-m)}.tax-panel__heading.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.tax-panel__title.sc-ir-tax-service-categories{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold)}.tax-panel__desc.sc-ir-tax-service-categories{margin:0;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tax-panel__icon.sc-ir-tax-service-categories{font-size:1.25rem;color:var(--wa-color-text-quiet)}.tax-panel__content.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-m)}.tax-panel__content--grid.sc-ir-tax-service-categories{display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:var(--wa-space-m)}.tax-category.sc-ir-tax-service-categories{--spacing:var(--wa-space-s)}.tax-category__summary.sc-ir-tax-service-categories{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m)}.tax-category__summary-text.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-3xs)}.tax-category__hint.sc-ir-tax-service-categories{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.tax-category__fields.sc-ir-tax-service-categories{display:flex;gap:var(--wa-space-m);align-items:center}.tax-category__title.sc-ir-tax-service-categories{font-size:var(--wa-font-size-m);padding:0;margin:0}.tax-category__hint.sc-ir-tax-service-categories{padding:0;margin:0;font-size:var(--wa-font-size-xs)}.tax-category.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--spacing)}.tax-category__input.sc-ir-tax-service-categories::part(input){width:100px}.tax-category__fields.sc-ir-tax-service-categories{flex-direction:column;align-items:flex-start}@media (min-width: 768px){.tax-category.sc-ir-tax-service-categories .tax-category__input.sc-ir-tax-service-categories::part(select){width:150px}.tax-category__summary.sc-ir-tax-service-categories{min-width:300px;display:flex}.tax-category.sc-ir-tax-service-categories{flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center;width:fit-content}.tax-category.--core.sc-ir-tax-service-categories{display:grid}.tax-category.--core.sc-ir-tax-service-categories .tax-category__fields.sc-ir-tax-service-categories{display:grid;grid-template-columns:repeat(2, 1fr)}.tax-category__fields.sc-ir-tax-service-categories{flex-direction:row;align-items:center;flex-wrap:wrap}.tax-category.--core.sc-ir-tax-service-categories .tax-category__fields.sc-ir-tax-service-categories{align-items:end}}@media (min-width: 1024px){.tax-category.--core.sc-ir-tax-service-categories{display:flex}.tax-category.--core.sc-ir-tax-service-categories .tax-category__fields.sc-ir-tax-service-categories{display:flex;flex-direction:row;flex-wrap:wrap}.tax-category__summary.sc-ir-tax-service-categories{width:300px}.tax-category.--core.sc-ir-tax-service-categories{flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center}}";
const IrTaxServiceCategoriesStyle0 = irTaxServiceCategoriesCss;

const IrTaxServiceCategories = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    chargeCategoryRules = new Map();
    setupEntries;
    autoValidate;
    tokenService = new Token.Token();
    bookingService = new booking_service.BookingService();
    propertyService = new property_service.PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    handlePChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    async init() {
        this.isLoading = true;
        const [, tableEntries] = await Promise.all([
            this.propertyService.getExposedProperty({ id: this.propertyid, language: this.language }),
            this.bookingService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY', '_CITY_TAX_INCLUDED', '_SERVICE_CHARGE_INCLUDED']),
        ]);
        this.setupEntries = this.bookingService.groupEntryTablesResult(tableEntries);
        const initialChargeCategoryRules = new Map();
        initialChargeCategoryRules.set('ACC', this.createEmptyCategorySetup('ACC'));
        (this.setupEntries?.svc_category ?? []).forEach(c => {
            initialChargeCategoryRules.set(c.CODE_NAME, this.createEmptyCategorySetup(c.CODE_NAME));
        });
        this.chargeCategoryRules = initialChargeCategoryRules;
        this.isLoading = false;
    }
    createEmptyCategorySetup(code) {
        return {
            vat: {
                mode: code !== 'ACC' ? '001' : null,
                value: null,
            },
            cityTax: null,
            serviceCharge: null,
            serviceChargeCalculation: null,
        };
    }
    isChargeRuleEmpty(rule) {
        return !rule || rule.value === null || rule.value === undefined;
    }
    handleChargeRuleChange(categoryCode, field, nextRule) {
        const nextCategoryRules = new Map(this.chargeCategoryRules);
        const currentCategorySetup = nextCategoryRules.get(categoryCode);
        nextCategoryRules.set(categoryCode, {
            ...currentCategorySetup,
            [field]: nextRule,
        });
        if (categoryCode === 'ACC' && field === 'vat') {
            nextCategoryRules.set('ACC', { ...nextCategoryRules.get('ACC') });
            (this.setupEntries?.svc_category ?? []).forEach(category => {
                const categorySetup = nextCategoryRules.get(category.CODE_NAME);
                if (this.isChargeRuleEmpty(categorySetup?.vat)) {
                    nextCategoryRules.set(category.CODE_NAME, { ...categorySetup, vat: { ...categorySetup.vat, value: nextRule.value } });
                }
            });
        }
        this.chargeCategoryRules = nextCategoryRules;
    }
    buildPayload() {
        const accSetup = this.chargeCategoryRules.get('ACC');
        const tax_categories = (this.setupEntries?.svc_category ?? []).map(category => {
            const setup = this.chargeCategoryRules.get(category.CODE_NAME);
            const taxMode = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === setup?.vat?.mode);
            return {
                category: {
                    code: category.CODE_NAME,
                    description: category.CODE_VALUE_EN,
                },
                taxation_mode: {
                    code: setup?.vat?.mode ?? '',
                    description: taxMode?.CODE_VALUE_EN ?? '',
                },
                pct: setup?.vat?.value ?? 0,
            };
        });
        return {
            property_id: calendarData.calendar_data.property.id,
            VAT_INCLUDED_CODE: accSetup?.vat?.mode ?? null,
            VAT_PC: accSetup?.vat?.value ?? null,
            CITY_TAX_INCLUDED_CODE: accSetup?.cityTax?.mode ?? null,
            CITY_TAX_PCT: accSetup?.cityTax?.value ?? null,
            SERVICE_CHARGE_INCLUDED_CODE: accSetup?.serviceCharge?.mode ?? null,
            SERVICE_CHARGE_PCT: accSetup?.serviceCharge?.value ?? null,
            tax_categories,
        };
    }
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        const accSetup = this.chargeCategoryRules.get('ACC');
        const filteredVat = (this.setupEntries?.vat_included ?? []).filter(v => v.CODE_NAME !== '000');
        return (index.h(index.Host, { "data-testid": "ir-agents" }, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container tax-page" }, index.h("div", { class: "tax-page__header" }, index.h("div", { class: "tax-page__heading" }, index.h("h3", { class: "page-title" }, "Tax & Service Categories"), index.h("p", { class: "tax-page__subtitle" }, "Define taxes and service charges for room rates, cancellations, and on-property services.")), index.h("ir-custom-button", { type: "submit", form: "tax-service-categories__form", style: { width: '100px' }, variant: "brand" }, "Save")), index.h("form", { id: "tax-service-categories__form", onSubmit: e => this.handleSubmit(e) }, index.h("wa-card", null, index.h("div", { class: "tax-category --core" }, index.h("div", { class: "tax-category__summary" }, index.h("div", { class: "tax-category__summary-text" }, index.h("p", { class: "tax-category__title" }, "Accommodation"), index.h("p", { class: "tax-category__hint" }, "Room-related charges applied to reservations and cancellations"))), index.h("div", { class: "tax-category__fields" }, index.h("ir-tax-input", { autoValidate: this.autoValidate, onTaxChange: e => this.handleChargeRuleChange('ACC', 'vat', e.detail), class: "tax-category__input", label: "VAT", chargeRule: accSetup?.vat, setupEntries: this.setupEntries?.vat_included ?? [] }), index.h("ir-tax-input", { autoValidate: this.autoValidate, onTaxChange: e => this.handleChargeRuleChange('ACC', 'cityTax', e.detail), class: "tax-category__input", label: "City Tax", chargeRule: accSetup?.cityTax, setupEntries: this.setupEntries?.city_tax_included ?? [] }), index.h("ir-tax-input", { autoValidate: this.autoValidate, onTaxChange: e => this.handleChargeRuleChange('ACC', 'serviceCharge', e.detail), class: "tax-category__input --service-charge", label: "Service charge", chargeRule: accSetup?.serviceCharge, setupEntries: this.setupEntries?.service_charge_included ?? [] }), index.h("wa-radio-group", { size: "small", orientation: "horizontal", value: "normal" }, index.h("wa-radio", { appearance: "button", value: "normal" }, "Normal"), index.h("wa-radio", { appearance: "button", value: "cumulative" }, "Cumulative")))), index.h("wa-divider", null), (this.setupEntries?.svc_category ?? []).map((category, index$1) => {
            const categorySetup = this.chargeCategoryRules.get(category.CODE_NAME);
            return [
                index.h("div", { class: "tax-category" }, index.h("div", { class: "tax-category__summary" }, index.h("div", { class: "tax-category__summary-text" }, index.h("p", { class: "tax-category__title" }, category.CODE_VALUE_EN), category.NOTES && index.h("p", { class: "tax-category__hint" }, category.NOTES))), index.h("div", { class: "tax-category__fields" }, index.h("ir-tax-input", { autoValidate: this.autoValidate, class: "tax-category__input", onTaxChange: e => this.handleChargeRuleChange(category.CODE_NAME, 'vat', e.detail), chargeRule: categorySetup?.vat, setupEntries: filteredVat ?? [] }))),
                index$1 < (this.setupEntries?.svc_category?.length ?? 0) - 1 && index.h("wa-divider", null),
            ];
        }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "p": ["handlePChange"],
        "propertyid": ["handlePropertyIdChange"]
    }; }
};
IrTaxServiceCategories.style = IrTaxServiceCategoriesStyle0;

exports.ir_tax_service_categories = IrTaxServiceCategories;

//# sourceMappingURL=ir-tax-service-categories.cjs.entry.js.map