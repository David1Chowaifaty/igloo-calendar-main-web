import { Token } from "../models/Token";
import { updateHKStore } from "../stores/housekeeping.store";
import axios from "axios";
export class HouseKeepingService extends Token {
    async getExposedHKSetup(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.post(`/Get_Exposed_HK_Setup?Ticket=${token}`, {
            property_id,
        });
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async setExposedInspectionMode(property_id, mode) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.post(`/Set_Exposed_Inspection_Mode?Ticket=${token}`, {
            property_id,
            mode,
        });
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM?Ticket=${token}`, {
            property_id,
            links: assignments,
        });
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.post(`/Edit_Exposed_HKM?Ticket=${token}`, Object.assign(Object.assign({}, params), { is_to_remove }));
        return data['My_Result'];
    }
}
//# sourceMappingURL=housekeeping.service.js.map
