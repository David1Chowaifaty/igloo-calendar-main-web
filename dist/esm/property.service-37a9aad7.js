import { c as calendar_data } from './calendar-data-a6093df2.js';
import { d as downloadFile } from './utils-bf32d8ec.js';
import { a as axios } from './axios-aa1335b8.js';

class PropertyService {
    async getExposedProperty(params) {
        var _a, _b;
        try {
            const { data } = await axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            calendar_data.adultChildConstraints = results.adult_child_constraints;
            calendar_data.allowedBookingSources = results.allowed_booking_sources;
            calendar_data.allowed_payment_methods = results.allowed_payment_methods;
            calendar_data.currency = results.currency;
            calendar_data.is_vacation_rental = results.is_vacation_rental;
            calendar_data.pickup_service = results.pickup_service;
            calendar_data.max_nights = results.max_nights;
            calendar_data.roomsInfo = results.roomtypes;
            calendar_data.taxes = results.taxes;
            calendar_data.id = results.id;
            calendar_data.country = results.country;
            calendar_data.name = results.name;
            calendar_data.is_automatic_check_in_out = results.is_automatic_check_in_out;
            calendar_data.tax_statement = results.tax_statement;
            calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
            calendar_data.is_pms_enabled = results.is_pms_enabled;
            const spitTime = (_b = (_a = results === null || results === void 0 ? void 0 : results.time_constraints) === null || _a === void 0 ? void 0 : _a.check_out_till) === null || _b === void 0 ? void 0 : _b.split(':');
            calendar_data.checkin_checkout_hours = {
                offset: results.city.gmt_offset,
                hour: Number(spitTime[0] || 0),
                minute: Number(spitTime[1] || 0),
            };
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getCountrySales(params) {
        const { data } = await axios.post('/Get_Country_Sales', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            downloadFile(data.My_Params_Get_Country_Sales.Link_excel);
        }
        return data.My_Result;
    }
    async setExposedCleaningFrequency(params) {
        const { data } = await axios.post('/Set_Exposed_Cleaning_Frequency', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getMonthlyStats(params) {
        const { data } = await axios.post('/Get_Monthly_Stats', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            downloadFile(data.My_Params_Get_Monthly_Stats.Link_excel);
        }
        return data.My_Result;
    }
}

export { PropertyService as P };

//# sourceMappingURL=property.service-37a9aad7.js.map