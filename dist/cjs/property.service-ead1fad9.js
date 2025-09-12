'use strict';

const calendarData = require('./calendar-data-960b69ba.js');
const utils = require('./utils-bf9b1b25.js');
const axios = require('./axios-6e678d52.js');

class PropertyService {
    async getExposedProperty(params) {
        var _a, _b;
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            calendarData.calendar_data.adultChildConstraints = results.adult_child_constraints;
            calendarData.calendar_data.allowedBookingSources = results.allowed_booking_sources;
            calendarData.calendar_data.allowed_payment_methods = results.allowed_payment_methods;
            calendarData.calendar_data.currency = results.currency;
            calendarData.calendar_data.is_vacation_rental = results.is_vacation_rental;
            calendarData.calendar_data.pickup_service = results.pickup_service;
            calendarData.calendar_data.max_nights = results.max_nights;
            calendarData.calendar_data.roomsInfo = results.roomtypes;
            calendarData.calendar_data.taxes = results.taxes;
            calendarData.calendar_data.id = results.id;
            calendarData.calendar_data.country = results.country;
            calendarData.calendar_data.name = results.name;
            calendarData.calendar_data.is_automatic_check_in_out = results.is_automatic_check_in_out;
            calendarData.calendar_data.tax_statement = results.tax_statement;
            calendarData.calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
            calendarData.calendar_data.is_pms_enabled = results.is_pms_enabled;
            const spitTime = (_b = (_a = results === null || results === void 0 ? void 0 : results.time_constraints) === null || _a === void 0 ? void 0 : _a.check_out_till) === null || _b === void 0 ? void 0 : _b.split(':');
            calendarData.calendar_data.checkin_checkout_hours = {
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
        const { data } = await axios.axios.post('/Get_Country_Sales', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Country_Sales.Link_excel);
        }
        return data.My_Result;
    }
    async getDailyRevenueReport(params) {
        const { data } = await axios.axios.post('/Get_Daily_Revenue_Report', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Daily_Revenue_Report.Link_excel);
        }
        return data.My_Result;
    }
    async setExposedCleaningFrequency(params) {
        const { data } = await axios.axios.post('/Set_Exposed_Cleaning_Frequency', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getMonthlyStats(params) {
        const { data } = await axios.axios.post('/Get_Monthly_Stats', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Monthly_Stats.Link_excel);
        }
        return data.My_Result;
    }
}

exports.PropertyService = PropertyService;

//# sourceMappingURL=property.service-ead1fad9.js.map