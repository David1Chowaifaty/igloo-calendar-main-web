'use strict';

const index = require('./index-3cfd4bf8.js');
const axios = require('./axios-6e678d52.js');

const initialValue = {
    default_properties: undefined,
    hk_criteria: undefined,
    hk_tasks: undefined,
    pending_housekeepers: [],
};
const { state: housekeeping_store } = index.createStore(initialValue);
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
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async getExposedHKStatusCriteria(property_id) {
        const { data } = await axios.axios.post(`/Get_Exposed_HK_Status_Criteria`, {
            property_id,
        });
        updateHKStore('hk_tasks', data['My_Result']);
        return data['My_Result'];
    }
    async setExposedInspectionMode(property_id, mode) {
        const { data } = await axios.axios.post(`/Set_Exposed_Inspection_Mode`, {
            property_id,
            mode,
        });
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const { data } = await axios.axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM`, {
            property_id,
            links: assignments,
        });
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const { data } = await axios.axios.post(`/Edit_Exposed_HKM`, Object.assign(Object.assign({}, params), { is_to_remove }));
        return data['My_Result'];
    }
    async getHKPendingActions(params) {
        const { data } = await axios.axios.post(`/Get_HK_Pending_Actions`, Object.assign({}, params));
        updateHKStore('pending_housekeepers', [...data['My_Result']]);
        return data['My_Result'];
    }
    async executeHKAction(params) {
        await axios.axios.post(`/Execute_HK_Action`, Object.assign({}, params));
    }
    async generateUserName(name) {
        const { data } = await axios.axios.post(`/Generate_UserName`, { name });
        return data.My_Result;
    }
}

exports.HouseKeepingService = HouseKeepingService;
exports.getDefaultProperties = getDefaultProperties;
exports.housekeeping_store = housekeeping_store;
exports.updateHKStore = updateHKStore;

//# sourceMappingURL=housekeeping.service-378593f3.js.map