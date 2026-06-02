import { GHS_Candidate_Property, Params_Get_GHS_Candidate_Properties, Params_Generate_GHS_Listing_For_Selection, Params_Update_GHS_Enablement } from './types';
export declare class GHSService {
    Get_GHS_Candidate_Properties(params: Params_Get_GHS_Candidate_Properties): Promise<GHS_Candidate_Property[]>;
    Generate_GHS_Listing_For_Selection(params: Params_Generate_GHS_Listing_For_Selection): Promise<string>;
    Update_GHS_Enablement(params: Params_Update_GHS_Enablement): Promise<void>;
}
