import { ChargeRule, TaxesSetupEntries } from "../ir-tax-service-categories/types";
/** Valid `BABY_COT_PRICING_MODEL` values — the baby cot's default price is either a flat per-stay charge or a per-night charge. */
declare const BABY_COT_PRICING_MODELS: readonly ["Stay", "Night"];
type BabyCotPricingModel = (typeof BABY_COT_PRICING_MODELS)[number];
export declare class IrExtraServicesSettings {
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    isLoading: boolean;
    isSaving: boolean;
    setupEntries: TaxesSetupEntries;
    priceCategoryRules: Map<string, ChargeRule>;
    autoValidate: boolean;
    dayUseBlockNight: boolean;
    babyCotPricingModel: BabyCotPricingModel;
    private tokenService;
    private setupService;
    private propertyService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handlePChange(newValue: string, oldValue: string): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    private reinit;
    private init;
    /** `svc_category` entries grouped by their `NOTES`-referenced parent code. See `groupSvcCategoriesByParent`. */
    private get serviceGroups();
    /** All grouped categories flattened, for building the price-rules map and the save payload. */
    private get categories();
    /**
     * The property's VAT setup. Every grouped extra service shares this one rate and is always
     * marked Inclusive — there's no per-category tax mode to configure anymore, so this single
     * value both drives the card-header summary and is what gets saved for every category.
     */
    private get vatSummary();
    /** Formats a charge rule as e.g. "15% Inclusive" or "Not Applicable". */
    private formatAccChargeRule;
    /** Builds the initial price rules map from `extra_info`'s `SVC_DEFAULT_PRICE_<code>` entries. Mode is always Inclusive — see `vatSummary`. */
    private buildInitialRules;
    /** Narrows the persisted `BABY_COT_PRICING_MODEL` string to a known option, defaulting to `'Stay'` if unset or unrecognized. */
    private resolveBabyCotPricingModel;
    private handlePriceRuleChange;
    /** Assembles the API payload from the current price rules state. Every category shares the property's VAT rate and is Inclusive. */
    private buildPayload;
    /** Validates and submits the extra-service price configuration to the API. */
    private handleSubmit;
    render(): any;
}
export {};
