import { GHS_Candidate_Property, Params_Get_GHS_Candidate_Properties, Params_Generate_GHS_Listing_For_Selection } from './types';
export declare class GHSService {
    Get_GHS_Candidate_Properties(params: Params_Get_GHS_Candidate_Properties): Promise<GHS_Candidate_Property[]>;
    Generate_GHS_Listing_For_Selection(params: Params_Generate_GHS_Listing_For_Selection): Promise<string>;
}
