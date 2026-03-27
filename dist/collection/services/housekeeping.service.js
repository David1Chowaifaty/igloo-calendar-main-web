import { OverrideHKTaskOwnershipParamsSchema, SetHKTaskLabelsParamsSchema, SkipHKTasksParamsSchema, } from "../models/housekeeping";
import { updateHKStore } from "../stores/housekeeping.store";
import axios from "axios";
export class HouseKeepingService {
    async getExposedHKSetup(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Setup`, {
            property_id,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async overrideHKTaskOwnership(params) {
        const payload = OverrideHKTaskOwnershipParamsSchema.parse(params);
        const { data } = await axios.post(`/Override_HK_Task_Ownership`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async setHKTaskLabels(params) {
        const payload = SetHKTaskLabelsParamsSchema.parse(params);
        const { data } = await axios.post(`/Set_HK_Task_Labels`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getExposedHKStatusCriteria(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Status_Criteria`, { property_id });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        updateHKStore('hk_tasks', data['My_Result']);
        return data['My_Result'];
    }
    async skipHKTasks(params) {
        const payload = SkipHKTasksParamsSchema.parse(params);
        const { data } = await axios.post(`/Skip_HK_Tasks`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getArchivedHKTasks(params) {
        const { data } = await axios.post(`/Get_Archived_HK_Tasks`, params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return { url: data.My_Params_Get_Archived_HK_Tasks.Link_excel, tasks: data['My_Result'] ?? [] };
    }
    async setExposedInspectionMode(property_id, mode) {
        const { data } = await axios.post(`/Set_Exposed_Inspection_Mode`, {
            property_id,
            mode,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const { data } = await axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM`, {
            property_id,
            links: assignments,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const { data } = await axios.post(`/Edit_Exposed_HKM`, { ...params, is_to_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getHKPendingActions(params) {
        const { data } = await axios.post(`/Get_HK_Pending_Actions`, { ...params });
        updateHKStore('pending_housekeepers', [...data['My_Result']].map(d => ({ original: d, selected: false })));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async setExposedUnitHKStatus(params) {
        const { data } = await axios.post(`/Set_Exposed_Unit_HK_Status`, { ...params });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getHkTasks(params) {
        const { data } = await axios.post('/Get_HK_Tasks', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return { url: data.My_Params_Get_HK_Tasks?.Link_excel, tasks: data.My_Result };
    }
    async executeHKAction(params) {
        const { data } = await axios.post(`/Execute_HK_Action`, { ...params });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
    async generateUserName(name) {
        const { data } = await axios.post(`/Generate_UserName`, { name });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getConnectedHk() {
        const { data } = await axios.post('/Get_Connected_HK', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}
//# sourceMappingURL=housekeeping.service.js.map
