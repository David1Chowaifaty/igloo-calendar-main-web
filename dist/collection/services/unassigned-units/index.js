import axios from "axios";
import { extras } from "../../utils/utils";
import { AssignUnitParamsSchema, GetAggregatedUnAssignedRoomsByDateRangeParamsSchema, } from "./types";
export class UnassignedUnitsService {
    async assignUnit(props) {
        try {
            const payload = AssignUnitParamsSchema.parse(props);
            const { data } = await axios.post(`/Assign_Exposed_Room`, {
                ...payload,
                extras,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getAggregatedUnAssignedRoomsByDateRange(params) {
        const payload = GetAggregatedUnAssignedRoomsByDateRangeParamsSchema.parse(params);
        const { data } = await axios.post('https://gateway.igloorooms.com/IR/Get_UnAssigned_Dates_Light', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}
