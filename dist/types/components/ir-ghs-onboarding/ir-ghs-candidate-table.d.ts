import { EventEmitter } from '../../stencil-public-runtime';
import { GHS_Candidate_Property } from '../../services/ghs/types';
import { ICountry } from '../../models/IBooking';
export declare class IrGhsCandidateTable {
    properties: GHS_Candidate_Property[];
    countries: ICountry[];
    selectedCountryId: number | null;
    selectedProperties: GHS_Candidate_Property[];
    propertyToActivate: GHS_Candidate_Property | null;
    isLoading: boolean;
    searchQuery: string;
    toggleSelection: EventEmitter<GHS_Candidate_Property>;
    toggleAll: EventEmitter<boolean>;
    activateProperty: EventEmitter<GHS_Candidate_Property>;
    render(): any;
}
