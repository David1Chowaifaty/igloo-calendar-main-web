import { z } from './index2.js';
import { u as updateHKStore } from './housekeeping.store.js';
import { a as axios } from './axios.js';

const SetHKTaskLabelsParamsSchema = z.object({
    property_id: z.number(),
    t1_label: z.string().optional(),
    t1_freq: z.string().optional(),
    t2_label: z.string().optional(),
    t2_freq: z.string().optional(),
});
const OverrideHKTaskOwnershipParamsSchema = z.object({
    property_id: z.number(),
    assignments: z.array(z.object({
        PR_ID: z.number(),
        DATE: z.string(),
        HK_TASK_TYPE_CODE: z.string(),
        HKM_ID: z.number().nullable(),
    })),
});
const SkipHKTasksParamsSchema = z.object({
    property_id: z.number(),
    tasks_to_skip: z.array(z.object({
        unit_id: z.number(),
        booking_nbr: z.string(),
        date: z.string(),
        reason_code: z.string().optional().default('001'),
    })),
});

class HouseKeepingService {
    async getExposedHKSetup(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Setup`, {
            property_id,
        });
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async overrideHKTaskOwnership(params) {
        const payload = OverrideHKTaskOwnershipParamsSchema.parse(params);
        const { data } = await axios.post(`/Override_HK_Task_Ownership`, payload);
        return data['My_Result'];
    }
    async setHKTaskLabels(params) {
        const payload = SetHKTaskLabelsParamsSchema.parse(params);
        const { data } = await axios.post(`/Set_HK_Task_Labels`, payload);
        return data['My_Result'];
    }
    async getExposedHKStatusCriteria(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Status_Criteria`, { property_id });
        updateHKStore('hk_tasks', data['My_Result']);
        return data['My_Result'];
    }
    async skipHKTasks(params) {
        const payload = SkipHKTasksParamsSchema.parse(params);
        const { data } = await axios.post(`/Skip_HK_Tasks`, payload);
        return data;
    }
    async getArchivedHKTasks(params) {
        const { data } = await axios.post(`/Get_Archived_HK_Tasks`, params);
        return { url: data.My_Params_Get_Archived_HK_Tasks.Link_excel, tasks: data['My_Result'] ?? [] };
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
        const { data } = await axios.post(`/Edit_Exposed_HKM`, { ...params, is_to_remove });
        return data['My_Result'];
    }
    async getHKPendingActions(params) {
        const { data } = await axios.post(`/Get_HK_Pending_Actions`, { ...params });
        updateHKStore('pending_housekeepers', [...data['My_Result']].map(d => ({ original: d, selected: false })));
        return data['My_Result'];
    }
    async setExposedUnitHKStatus(params) {
        const { data } = await axios.post(`/Set_Exposed_Unit_HK_Status`, { ...params });
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
        await axios.post(`/Execute_HK_Action`, { ...params });
    }
    async generateUserName(name) {
        const { data } = await axios.post(`/Generate_UserName`, { name });
        return data.My_Result;
    }
}

export { HouseKeepingService as H };

//# sourceMappingURL=housekeeping.service.js.map