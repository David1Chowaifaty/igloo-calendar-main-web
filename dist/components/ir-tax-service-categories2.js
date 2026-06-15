import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { z } from './index2.js';
import { B as BookingService } from './booking.store.js';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { s as showToast } from './utils.js';
import { d as defineCustomElement$f } from './ir-button2.js';
import { d as defineCustomElement$e } from './ir-custom-button2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-interceptor2.js';
import { d as defineCustomElement$a } from './ir-loading-screen2.js';
import { d as defineCustomElement$9 } from './ir-otp2.js';
import { d as defineCustomElement$8 } from './ir-otp-modal2.js';
import { d as defineCustomElement$7 } from './ir-page2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-tax-input2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-toast-item2.js';
import { d as defineCustomElement$2 } from './ir-toast-provider2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

var TaxationStrategy;
(function (TaxationStrategy) {
    TaxationStrategy["Normal"] = "000";
    TaxationStrategy["Cumulative"] = "001";
})(TaxationStrategy || (TaxationStrategy = {}));
/**
 * Charge rule (VAT, City Tax, Service Charge)
 */
const ChargeRuleSchema = z.object({
    value: z.number().nullable(),
    mode: z.string().min(1),
});
/**
 * Main setup schema
 */
z.object({
    vat: ChargeRuleSchema,
    cityTax: ChargeRuleSchema.nullable(),
    serviceCharge: ChargeRuleSchema.nullable(),
    taxationStrategy: z.nativeEnum(TaxationStrategy).nullable(),
});

const irTaxServiceCategoriesCss = ".sc-ir-tax-service-categories-h{display:block}.tax-page.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-xl)}.tax-page__header.sc-ir-tax-service-categories{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m)}.tax-page__heading.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.page-title.sc-ir-tax-service-categories{margin:0}.tax-page__subtitle.sc-ir-tax-service-categories{margin:0;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tax-grid__header.sc-ir-tax-service-categories{display:none}.tax-grid__col-label.sc-ir-tax-service-categories{font-size:var(--wa-font-size-xs);font-weight:600;color:var(--wa-color-text-quiet);text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap}.tax-grid__row.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-m);padding:var(--wa-space-m) 0}.tax-grid__name.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-3xs)}.tax-grid__title.sc-ir-tax-service-categories{font-size:var(--wa-font-size-m);margin:0;padding:0}.tax-grid__hint.sc-ir-tax-service-categories{margin:0;padding:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.tax-grid__cell[data-label].sc-ir-tax-service-categories::before{content:attr(data-label);display:block;font-size:var(--wa-font-size-xs);font-weight:600;color:var(--wa-color-text-quiet);margin-bottom:var(--wa-space-2xs)}.tax-grid__cell.sc-ir-tax-service-categories:empty{display:none}ir-tax-input.sc-ir-tax-service-categories::part(input){width:8ch}@media (min-width: 768px){.tax-grid.sc-ir-tax-service-categories{display:grid;grid-template-columns:minmax(auto, 320px) repeat(3, auto) auto;column-gap:var(--wa-space-m);align-items:center}.tax-grid__header.sc-ir-tax-service-categories,.tax-grid__row.sc-ir-tax-service-categories{display:contents}.tax-grid__divider.sc-ir-tax-service-categories{grid-column:1 / -1}.tax-grid__col-label.sc-ir-tax-service-categories{padding-bottom:0}.tax-grid__name.sc-ir-tax-service-categories,.tax-grid__cell.sc-ir-tax-service-categories{padding-bottom:var(--wa-space-s);align-self:center}.tax-grid__cell.sc-ir-tax-service-categories:empty{display:block}.tax-grid__cell[data-label].sc-ir-tax-service-categories::before{display:none}.ir-tax-input.sc-ir-tax-service-categories,.tax-grid__cell.sc-ir-tax-service-categories{width:fit-content}}";
const IrTaxServiceCategoriesStyle0 = irTaxServiceCategoriesCss;

const IrTaxServiceCategories = /*@__PURE__*/ proxyCustomElement(class IrTaxServiceCategories extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    chargeCategoryRules = new Map();
    setupEntries;
    autoValidate;
    tokenService = new Token();
    bookingService = new BookingService();
    propertyService = new PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.reinit();
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    /** Re-authenticates and re-fetches configuration when a watched prop changes. */
    reinit() {
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    /** Fetches setup entries and property data, then builds the initial charge rules map. */
    async init() {
        this.isLoading = true;
        try {
            const [, tableEntries] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyid, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY', '_CITY_TAX_INCLUDED', '_SERVICE_CHARGE_INCLUDED']),
            ]);
            this.setupEntries = this.bookingService.groupEntryTablesResult(tableEntries);
            this.chargeCategoryRules = this.buildInitialRules();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Strips non-alphanumeric characters and lowercases a string for fuzzy matching
     * against tax names from the property data.
     */
    normalizeTaxName(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    /**
     * Finds a tax entry by keyword from the property's taxes array.
     * Returns undefined when no match is found — the caller should treat that as Not Applicable.
     */
    findTax(keyword) {
        const taxes = calendar_data.property?.taxes ?? [];
        return taxes.find(t => this.normalizeTaxName(t.name).includes(this.normalizeTaxName(keyword)));
    }
    /**
     * Converts a property tax entry to a ChargeRule.
     * Returns `{ mode: '002', value: null }` (Not Applicable) when the tax is absent from the property data.
     */
    toChargeRule(tax) {
        if (!tax)
            return { mode: '002', value: null };
        return { mode: tax.is_exlusive ? '000' : '001', value: tax.pct };
    }
    /**
     * Builds the initial charge rules map from property taxes and saved tax categories.
     * ACC (Accommodation) is seeded from the property's taxes array; service categories
     * are seeded from saved `tax_categories` or default to Not Applicable when absent.
     */
    buildInitialRules() {
        const taxCategories = calendar_data.property?.tax_categories ?? [];
        const savedStrategy = calendar_data.property?.taxation_strategy?.code;
        const accSetup = {
            vat: this.toChargeRule(this.findTax('vat')),
            cityTax: this.toChargeRule(this.findTax('city')),
            serviceCharge: this.toChargeRule(this.findTax('service')),
            taxationStrategy: savedStrategy ?? TaxationStrategy.Normal,
        };
        const rules = new Map();
        rules.set('ACC', accSetup);
        (this.setupEntries?.svc_category ?? []).forEach(c => {
            const match = taxCategories.find(tc => tc.category.code === c.CODE_NAME);
            rules.set(c.CODE_NAME, match ? { vat: { mode: match.taxation_mode.code, value: match.pct }, cityTax: null, serviceCharge: null, taxationStrategy: null } : this.createEmptyCategorySetup());
        });
        return rules;
    }
    /** Returns a default setup for a service category with all fields set to Not Applicable. */
    createEmptyCategorySetup() {
        return {
            vat: { mode: '002', value: null },
            cityTax: null,
            serviceCharge: null,
            taxationStrategy: null,
        };
    }
    /** Returns true when a charge rule has no percentage value set. */
    isChargeRuleEmpty(rule) {
        return !rule || rule.value === null || rule.value === undefined;
    }
    /**
     * Resolves the effective numeric value of a charge rule for payload submission.
     * Mode '002' (Not Applicable) always resolves to 0.
     */
    resolveChargeValue(rule) {
        if (!rule)
            return null;
        return rule.mode === '002' ? 0 : rule.value;
    }
    /** Updates the taxation strategy (Normal / Cumulative) for the ACC category. */
    handleTaxationStrategyChange(value) {
        const next = new Map(this.chargeCategoryRules);
        next.set('ACC', { ...next.get('ACC'), taxationStrategy: value });
        this.chargeCategoryRules = next;
    }
    /**
     * Updates a single charge field on a category.
     * When the ACC VAT changes, the new percentage is propagated to any service category
     * that still has an empty (unset) VAT value.
     */
    handleChargeRuleChange(categoryCode, field, nextRule) {
        const next = new Map(this.chargeCategoryRules);
        next.set(categoryCode, { ...next.get(categoryCode), [field]: nextRule });
        if (categoryCode === 'ACC' && field === 'vat') {
            (this.setupEntries?.svc_category ?? []).forEach(category => {
                const categorySetup = next.get(category.CODE_NAME);
                if (this.isChargeRuleEmpty(categorySetup?.vat)) {
                    next.set(category.CODE_NAME, { ...categorySetup, vat: { ...categorySetup.vat, value: nextRule.value } });
                }
            });
        }
        this.chargeCategoryRules = next;
    }
    /** Assembles the API payload from the current charge rules state. */
    buildPayload() {
        const accSetup = this.chargeCategoryRules.get('ACC');
        const tax_categories = (this.setupEntries?.svc_category ?? []).map(category => {
            const setup = this.chargeCategoryRules.get(category.CODE_NAME);
            const taxMode = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === setup?.vat?.mode);
            return {
                category: { code: category.CODE_NAME, description: category.CODE_VALUE_EN },
                taxation_mode: { code: setup?.vat?.mode ?? '', description: taxMode?.CODE_VALUE_EN ?? '' },
                pct: this.resolveChargeValue(setup?.vat) ?? 0,
            };
        });
        return {
            property_id: this.propertyid,
            VAT_INCLUDED_CODE: accSetup?.vat?.mode ?? null,
            VAT_PC: this.resolveChargeValue(accSetup?.vat) ?? null,
            CITY_TAX_INCLUDED_CODE: accSetup?.cityTax?.mode ?? null,
            CITY_TAX_PCT: this.resolveChargeValue(accSetup?.cityTax) ?? null,
            SERVICE_CHARGE_INCLUDED_CODE: accSetup?.serviceCharge?.mode ?? null,
            SERVICE_CHARGE_PCT: this.resolveChargeValue(accSetup?.serviceCharge) ?? null,
            tax_categories,
            TAXATION_STRATEGY: this.chargeCategoryRules.get('ACC').taxationStrategy,
        };
    }
    /** Validates and submits the tax configuration to the API. */
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            this.isSaving = true;
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
            showToast({
                title: 'Saved Successfully',
                type: 'success',
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        const accSetup = this.chargeCategoryRules.get('ACC');
        const filteredVat = (this.setupEntries?.vat_included ?? []).filter(v => v.CODE_NAME !== '000');
        const categories = this.setupEntries?.svc_category ?? [];
        return (h("ir-page", { label: "Tax & Service Categories", description: "Define taxes and service charges for room rates, cancellations, and on-property services.", "data-testid": "ir-tax-service-categories" }, h("ir-custom-button", { slot: "page-header", loading: this.isSaving, type: "submit", form: "tax-service-categories__form", style: { width: '100px' }, variant: "brand" }, "Save"), h("form", { id: "tax-service-categories__form", onSubmit: e => this.handleSubmit(e) }, h("wa-card", null, h("div", { class: "tax-grid" }, h("div", { class: "tax-grid__header", "aria-hidden": "true" }, h("div", null), h("div", { class: "tax-grid__col-label" }, "VAT"), h("div", { class: "tax-grid__col-label" }, "City Tax"), h("div", { class: "tax-grid__col-label" }, "Service Charge"), h("div", { class: "tax-grid__col-label" }, "Taxation Strategy")), h("div", { class: "tax-grid__row" }, h("div", { class: "tax-grid__name" }, h("p", { class: "tax-grid__title" }, "Accommodation"), h("p", { class: "tax-grid__hint" }, "Room-related charges applied to reservations and cancellations")), h("div", { class: "tax-grid__cell", "data-label": "VAT" }, h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'vat', e.detail), chargeRule: accSetup?.vat, setupEntries: this.setupEntries?.vat_included ?? [] })), h("div", { class: "tax-grid__cell", "data-label": "City Tax" }, h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'cityTax', e.detail), chargeRule: accSetup?.cityTax, setupEntries: this.setupEntries?.city_tax_included ?? [] })), h("div", { class: "tax-grid__cell", "data-label": "Service Charge" }, h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'serviceCharge', e.detail), chargeRule: accSetup?.serviceCharge, setupEntries: this.setupEntries?.service_charge_included ?? [] })), h("div", { class: "tax-grid__cell", "data-label": "Taxation Strategy" }, h("wa-radio-group", { size: "small", orientation: "horizontal", value: accSetup?.taxationStrategy ?? TaxationStrategy.Normal, "onwa-change": (e) => this.handleTaxationStrategyChange(e.detail.value) }, h("wa-radio", { appearance: "button", value: TaxationStrategy.Normal }, "Normal"), h("wa-radio", { appearance: "button", value: TaxationStrategy.Cumulative }, "Cumulative")))), categories.map(category => {
            const categorySetup = this.chargeCategoryRules.get(category.CODE_NAME);
            return [
                h("div", { class: "tax-grid__divider" }, h("wa-divider", null)),
                h("div", { class: "tax-grid__row" }, h("div", { class: "tax-grid__name" }, h("p", { class: "tax-grid__title" }, category.CODE_VALUE_EN), category.NOTES && h("p", { class: "tax-grid__hint" }, category.NOTES)), h("div", { class: "tax-grid__cell", "data-label": "VAT" }, h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange(category.CODE_NAME, 'vat', e.detail), chargeRule: categorySetup?.vat, setupEntries: filteredVat })), h("div", { class: "tax-grid__cell" }), h("div", { class: "tax-grid__cell" }), h("div", { class: "tax-grid__cell" })),
            ];
        }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "p": ["handlePChange"],
        "propertyid": ["handlePropertyIdChange"]
    }; }
    static get style() { return IrTaxServiceCategoriesStyle0; }
}, [2, "ir-tax-service-categories", {
        "ticket": [1],
        "p": [1],
        "language": [1],
        "propertyid": [2],
        "isLoading": [32],
        "isSaving": [32],
        "chargeCategoryRules": [32],
        "setupEntries": [32],
        "autoValidate": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"],
        "p": ["handlePChange"],
        "propertyid": ["handlePropertyIdChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tax-service-categories", "ir-button", "ir-custom-button", "ir-icons", "ir-input", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-page", "ir-spinner", "ir-tax-input", "ir-toast", "ir-toast-item", "ir-toast-provider", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tax-service-categories":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTaxServiceCategories);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-tax-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTaxServiceCategories as I, defineCustomElement as d };

//# sourceMappingURL=ir-tax-service-categories2.js.map