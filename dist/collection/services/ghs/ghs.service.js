import axios from "axios";
import { Params_Get_GHS_Candidate_Properties_Schema, Params_Generate_GHS_Listing_For_Selection_Schema, Params_Update_GHS_Enablement_Schema, } from "./types";
export class GHSService {
    async Get_GHS_Candidate_Properties(params) {
        const validatedParams = Params_Get_GHS_Candidate_Properties_Schema.parse(params);
        const { data } = await axios.post(`/Get_GHS_Candidate_Properties`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result || [];
    }
    async Generate_GHS_Listing_For_Selection(params) {
        const validatedParams = Params_Generate_GHS_Listing_For_Selection_Schema.parse(params);
        const { data } = await axios.post(`/Generate_GHS_Listing_For_Selection`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async Update_GHS_Enablement(params) {
        const validatedParams = Params_Update_GHS_Enablement_Schema.parse(params);
        const { data } = await axios.post(`/Update_GHS_Enablement`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
}
//# sourceMappingURL=ghs.service.js.map
