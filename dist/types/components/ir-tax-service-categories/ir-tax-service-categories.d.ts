import { TaxAndChargeSetup, TaxesSetupEntries } from './types';
export declare class IrTaxServiceCategories {
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    isLoading: boolean;
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
    private init;
    private createEmptyCategorySetup;
    private isChargeRuleEmpty;
    private handleChargeRuleChange;
    private buildPayload;
    private handleSubmit;
    render(): any;
}
