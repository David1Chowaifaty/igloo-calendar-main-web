import { TaxAndChargeSetup, TaxesSetupEntries } from './types';
export declare class IrTaxServiceCategories {
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    isLoading: boolean;
    isSaving: boolean;
    chargeCategoryRules: Map<string, TaxAndChargeSetup>;
    setupEntries: TaxesSetupEntries;
    autoValidate: boolean;
    private tokenService;
    private bookingService;
    private propertyService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handlePChange(newValue: string, oldValue: string): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    /** Re-authenticates and re-fetches configuration when a watched prop changes. */
    private reinit;
    /** Fetches setup entries and property data, then builds the initial charge rules map. */
    private init;
    /**
     * Strips non-alphanumeric characters and lowercases a string for fuzzy matching
     * against tax names from the property data.
     */
    private normalizeTaxName;
    /**
     * Finds a tax entry by keyword from the property's taxes array.
     * Returns undefined when no match is found — the caller should treat that as Not Applicable.
     */
    private findTax;
    /**
     * Converts a property tax entry to a ChargeRule.
     * Returns `{ mode: '002', value: null }` (Not Applicable) when the tax is absent from the property data.
     */
    private toChargeRule;
    /**
     * Builds the initial charge rules map from property taxes and saved tax categories.
     * ACC (Accommodation) is seeded from the property's taxes array; service categories
     * are seeded from saved `tax_categories` or default to Not Applicable when absent.
     */
    private buildInitialRules;
    /** Returns a default setup for a service category with all fields set to Not Applicable. */
    private createEmptyCategorySetup;
    /** Returns true when a charge rule has no percentage value set. */
    private isChargeRuleEmpty;
    /**
     * Resolves the effective numeric value of a charge rule for payload submission.
     * Mode '002' (Not Applicable) always resolves to 0.
     */
    private resolveChargeValue;
    /** Updates the taxation strategy (Normal / Cumulative) for the ACC category. */
    private handleTaxationStrategyChange;
    /**
     * Updates a single charge field on a category.
     * When the ACC VAT changes, the new percentage is propagated to any service category
     * that still has an empty (unset) VAT value.
     */
    private handleChargeRuleChange;
    /** Assembles the API payload from the current charge rules state. */
    private buildPayload;
    /** Validates and submits the tax configuration to the API. */
    private handleSubmit;
    render(): any;
}
