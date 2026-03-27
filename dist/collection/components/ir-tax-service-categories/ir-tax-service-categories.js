import Token from "../../models/Token";
import { Host, h } from "@stencil/core";
import { BookingService } from "../../services/booking-service/booking.service";
import { PropertyService } from "../../services/property.service";
import calendar_data from "../../stores/calendar-data";
export class IrTaxServiceCategories {
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
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
            property_id: calendar_data.property.id,
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
            return h("ir-loading-screen", null);
        }
        const accSetup = this.chargeCategoryRules.get('ACC');
        const filteredVat = (this.setupEntries?.vat_included ?? []).filter(v => v.CODE_NAME !== '000');
        return (h(Host, { "data-testid": "ir-agents" }, h("ir-toast", null), h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), h("div", { class: "ir-page__container tax-page" }, h("div", { class: "tax-page__header" }, h("div", { class: "tax-page__heading" }, h("h3", { class: "page-title" }, "Tax & Service Categories"), h("p", { class: "tax-page__subtitle" }, "Define taxes and service charges for room rates, cancellations, and on-property services.")), h("ir-custom-button", { type: "submit", form: "tax-service-categories__form", style: { width: '100px' }, variant: "brand" }, "Save")), h("form", { id: "tax-service-categories__form", onSubmit: e => this.handleSubmit(e) }, h("wa-card", null, h("div", { class: "tax-category --core" }, h("div", { class: "tax-category__summary" }, h("div", { class: "tax-category__summary-text" }, h("p", { class: "tax-category__title" }, "Accommodation"), h("p", { class: "tax-category__hint" }, "Room-related charges applied to reservations and cancellations"))), h("div", { class: "tax-category__fields" }, h("ir-tax-input", { autoValidate: this.autoValidate, onTaxChange: e => this.handleChargeRuleChange('ACC', 'vat', e.detail), class: "tax-category__input", label: "VAT", chargeRule: accSetup?.vat, setupEntries: this.setupEntries?.vat_included ?? [] }), h("ir-tax-input", { autoValidate: this.autoValidate, onTaxChange: e => this.handleChargeRuleChange('ACC', 'cityTax', e.detail), class: "tax-category__input", label: "City Tax", chargeRule: accSetup?.cityTax, setupEntries: this.setupEntries?.city_tax_included ?? [] }), h("ir-tax-input", { autoValidate: this.autoValidate, onTaxChange: e => this.handleChargeRuleChange('ACC', 'serviceCharge', e.detail), class: "tax-category__input --service-charge", label: "Service charge", chargeRule: accSetup?.serviceCharge, setupEntries: this.setupEntries?.service_charge_included ?? [] }), h("wa-radio-group", { size: "small", orientation: "horizontal", value: "normal" }, h("wa-radio", { appearance: "button", value: "normal" }, "Normal"), h("wa-radio", { appearance: "button", value: "cumulative" }, "Cumulative")))), h("wa-divider", null), (this.setupEntries?.svc_category ?? []).map((category, index) => {
            const categorySetup = this.chargeCategoryRules.get(category.CODE_NAME);
            return [
                h("div", { class: "tax-category" }, h("div", { class: "tax-category__summary" }, h("div", { class: "tax-category__summary-text" }, h("p", { class: "tax-category__title" }, category.CODE_VALUE_EN), category.NOTES && h("p", { class: "tax-category__hint" }, category.NOTES))), h("div", { class: "tax-category__fields" }, h("ir-tax-input", { autoValidate: this.autoValidate, class: "tax-category__input", onTaxChange: e => this.handleChargeRuleChange(category.CODE_NAME, 'vat', e.detail), chargeRule: categorySetup?.vat, setupEntries: filteredVat ?? [] }))),
                index < (this.setupEntries?.svc_category?.length ?? 0) - 1 && h("wa-divider", null),
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
