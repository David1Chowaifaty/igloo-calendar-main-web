import { Moment } from 'moment';
import { ComboboxOption } from '../ir-m-combobox/ir-m-combobox';
export declare class IrTestCmp {
    dates: {
        fromDate: Moment;
        toDate: Moment;
    };
    selectedStaticOption: ComboboxOption;
    selectedCountry: ComboboxOption;
    selectedCustomOption: ComboboxOption;
    countryOptions: ComboboxOption[];
    customOptions: ComboboxOption[];
    isLoadingCountries: boolean;
    isLoadingCustom: boolean;
    private customComboboxRef;
    private staticOptions;
    private handleStaticOptionChange;
    private handleCountryChange;
    private handleCustomOptionChange;
    private handleCountrySearch;
    private handleCustomSearch;
    private handleCustomOptionClick;
    notificationCount: number;
    isMobileMenuOpen: boolean;
    private toggleMobileMenu;
    private pages;
    showMegaMenu: boolean;
    render(): any;
}
