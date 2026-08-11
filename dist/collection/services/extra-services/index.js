import axios from "axios";
import { GetExposedExtraServicesPropsSchema, HandleExposedExtraServicePropsSchema, } from "./types";
export * from './types';
export const extraServicesCategories = new Set(['ECI', 'LCO', 'BCT', 'EXB', 'HMP', 'ANP', 'BRF', 'LNC', 'DIN', 'HBD', 'FBD', 'MNB', 'DUZ']);
export class ExtraServicesService {
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
