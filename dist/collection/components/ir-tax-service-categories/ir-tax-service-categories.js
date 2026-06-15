import Token from "../../models/Token";
import { h } from "@stencil/core";
import { TaxationStrategy } from "./types";
import { BookingService } from "../../services/booking-service/booking.service";
import { PropertyService } from "../../services/property.service";
import calendar_data from "../../stores/calendar-data";
import { showToast } from "../../utils/utils";
export class IrTaxServiceCategories {
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
    static get is() { return "ir-tax-service-categories"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tax-service-categories.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tax-service-categories.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isSaving": {},
            "chargeCategoryRules": {},
            "setupEntries": {},
            "autoValidate": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "p",
                "methodName": "handlePChange"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyIdChange"
            }];
    }
}
//# sourceMappingURL=ir-tax-service-categories.js.map
