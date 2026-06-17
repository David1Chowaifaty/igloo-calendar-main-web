'use strict';

var index = require('./index-CLqkDPTC.js');
var index$1 = require('./index-dbmC5P-h.js');
var axios = require('./axios-EresIryl.js');

const SetHKTaskLabelsParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    t1_label: index.libExports.z.string().optional(),
    t1_freq: index.libExports.z.string().optional(),
    t2_label: index.libExports.z.string().optional(),
    t2_freq: index.libExports.z.string().optional(),
});
const ResolveHKIssueParamsSchema = index.libExports.z.object({
    issue_ids: index.libExports.z.array(index.libExports.z.number().min(0)),
});
const OverrideHKTaskOwnershipParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    is_to_remove: index.libExports.z.boolean().optional().default(false),
    assignments: index.libExports.z.array(index.libExports.z.object({
        PR_ID: index.libExports.z.number(),
        DATE: index.libExports.z.string(),
        HK_TASK_TYPE_CODE: index.libExports.z.string(),
        HKM_ID: index.libExports.z.number().nullable(),
    })),
});
const SkipHKTasksParamsSchema = index.libExports.z.object({
    property_id: index.libExports.z.number(),
    tasks_to_skip: index.libExports.z.array(index.libExports.z.object({
        unit_id: index.libExports.z.number(),
        booking_nbr: index.libExports.z.string(),
        date: index.libExports.z.string(),
        reason_code: index.libExports.z.string().optional().default('001'),
    })),
});

const initialValue = {
    default_properties: undefined,
    hk_criteria: undefined,
    hk_tasks: undefined,
    pending_housekeepers: [],
};
const { state: housekeeping_store } = index$1.createStore(initialValue);
function updateHKStore(key, value) {
    housekeeping_store[key] = value;
}
function getDefaultProperties() {
    return housekeeping_store.default_properties;
}

class HouseKeepingService {
    async getExposedHKSetup(property_id) {
        const { data } = await axios.axios.post(`/Get_Exposed_HK_Setup`, {
            property_id,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async resolveHKIssue(params) {
        const payload = ResolveHKIssueParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Resolve_HK_Issue', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async overrideHKTaskOwnership(params) {
        const payload = OverrideHKTaskOwnershipParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Override_HK_Task_Ownership`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async setHKTaskLabels(params) {
        const payload = SetHKTaskLabelsParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Set_HK_Task_Labels`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getExposedHKStatusCriteria(property_id) {
        const { data } = await axios.axios.post(`/Get_Exposed_HK_Status_Criteria`, { property_id });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        updateHKStore('hk_tasks', data['My_Result']);
        return data['My_Result'];
    }
    async skipHKTasks(params) {
        const payload = SkipHKTasksParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Skip_HK_Tasks`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getArchivedHKTasks(params) {
        const { data } = await axios.axios.post(`/Get_Archived_HK_Tasks`, params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return { url: data.My_Params_Get_Archived_HK_Tasks.Link_excel, tasks: data['My_Result'] ?? [] };
    }
    async setExposedInspectionMode(property_id, mode) {
        const { data } = await axios.axios.post(`/Set_Exposed_Inspection_Mode`, {
            property_id,
            mode,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const { data } = await axios.axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM`, {
            property_id,
            links: assignments,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const { data } = await axios.axios.post(`/Edit_Exposed_HKM`, { ...params, is_to_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getHKPendingActions(params) {
        const { data } = await axios.axios.post(`/Get_HK_Pending_Actions`, { ...params });
        updateHKStore('pending_housekeepers', [...data['My_Result']].map(d => ({ original: d, selected: false })));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async setExposedUnitHKStatus(params) {
        const { data } = await axios.axios.post(`/Set_Exposed_Unit_HK_Status`, { ...params });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getHkTasks(params) {
        const { data } = await axios.axios.post('/Get_HK_Tasks', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return { url: data.My_Params_Get_HK_Tasks?.Link_excel, tasks: data.My_Result };
    }
    async executeHKAction(params) {
        const { data } = await axios.axios.post(`/Execute_HK_Action`, { ...params });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
    async generateUserName(name) {
        const { data } = await axios.axios.post(`/Generate_UserName`, { name });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getHkIssues(params) {
        try {
            const { data } = await axios.axios.post('/Get_HK_Issues', params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'] ?? [];
        }
        catch {
            return [];
        }
    }
    async getConnectedHk() {
        const { data } = await axios.axios.post('/Get_Connected_HK', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}

exports.HouseKeepingService = HouseKeepingService;
exports.getDefaultProperties = getDefaultProperties;
exports.housekeeping_store = housekeeping_store;
exports.updateHKStore = updateHKStore;
