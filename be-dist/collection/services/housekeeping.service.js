import { updateHKStore } from "../stores/housekeeping.store";
import axios from "axios";
export class HouseKeepingService {
    async getExposedHKSetup(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Setup`, {
            property_id,
        });
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async getExposedHKStatusCriteria(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Status_Criteria`, {
            property_id,
        });
        updateHKStore('hk_tasks', data['My_Result']);
        return data['My_Result'];
    }
    async setExposedInspectionMode(property_id, mode) {
        const { data } = await axios.post(`/Set_Exposed_Inspection_Mode`, {
            property_id,
            mode,
        });
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const { data } = await axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM`, {
            property_id,
            links: assignments,
        });
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const { data } = await axios.post(`/Edit_Exposed_HKM`, Object.assign(Object.assign({}, params), { is_to_remove }));
        return data['My_Result'];
    }
    async getHKPendingActions(params) {
        const { data } = await axios.post(`/Get_HK_Pending_Actions`, Object.assign({}, params));
        updateHKStore('pending_housekeepers', [...data['My_Result']]);
        return data['My_Result'];
    }
    async executeHKAction(params) {
        await axios.post(`/Execute_HK_Action`, Object.assign({}, params));
    }
    async generateUserName(name) {
        const { data } = await axios.post(`/Generate_UserName`, { name });
        return data.My_Result;
    }
}
//# sourceMappingURL=housekeeping.service.js.map