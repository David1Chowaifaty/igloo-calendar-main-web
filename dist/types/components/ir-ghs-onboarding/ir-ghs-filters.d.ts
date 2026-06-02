import { EventEmitter } from '../../stencil-public-runtime';
import { ICountry } from '../../models/IBooking';
export declare class IrGhsFilters {
    countries: ICountry[];
    selectedCountryId: number | null;
    isLoading: boolean;
    filterApply: EventEmitter<void>;
    filterReset: EventEmitter<void>;
    countryChange: EventEmitter<number | null>;
    render(): any;
}
