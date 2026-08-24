import { a as axios } from './axios-CleaxLzD.js';
import { G as GetExposedExtraServicesPropsSchema, H as HandleExposedExtraServicePropsSchema } from './types-DuVpNPN2.js';

const extraServicesCategories = new Set(['ECI', 'LCO', 'BCT', 'EXB', 'HMP', 'ANP', 'BRF', 'LNC', 'DIN', 'HBD', 'FBD', 'MNB', 'DUZ']);
class ExtraServicesService {
    async getExposedExtraServices(props) {
        const payload = GetExposedExtraServicesPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Exposed_Extra_Services', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ?? [];
    }
    async handleExposedExtraService(props) {
        const payload = HandleExposedExtraServicePropsSchema.parse(props);
        const { data } = await axios.post('/Handle_Exposed_Extra_Service', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

export { ExtraServicesService as E, extraServicesCategories as e };
