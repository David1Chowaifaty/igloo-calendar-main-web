'use strict';

const calendarData = require('./calendar-data-004d3283.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const axios = require('./axios-6e678d52.js');

class RoomService {
    async SetAutomaticCheckInOut(props) {
        const { data } = await axios.axios.post(`/Set_Automatic_Check_In_Out`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
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
                offset: results.country.gmt_offset,
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
    async fetchLanguage(code, sections = ['_PMS_FRONT']) {
        try {
            const { data } = await axios.axios.post(`https://gateway.igloorooms.com/IRBE/Get_Exposed_Language`, { code, sections });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            let entries = this.transformArrayToObject(data.My_Result.entries);
            locales_store.locales.entries = Object.assign(Object.assign({}, locales_store.locales.entries), entries);
            locales_store.locales.direction = data.My_Result.direction;
            //copy entries
            // this.copyEntries(entries);
            return { entries, direction: data.My_Result.direction };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    // private copyEntries(data: Record<string, string>) {
    //   const typedObject: Record<string, string> = {};
    //   Object.keys(data).forEach(key => {
    //     typedObject[key] = 'string' as unknown as string;
    //   });
    //   const output = Object.keys(typedObject).reduce((acc, key) => {
    //     acc[key] = 'string';
    //     return acc;
    //   }, {} as Record<string, string>);
    //   navigator.clipboard.writeText(JSON.stringify(output, null, 2).replace(/"string"/g, 'string'));
    // }
    transformArrayToObject(data) {
        let object = {};
        for (const d of data) {
            object[d.code] = d.description;
        }
        return object;
    }
}

exports.RoomService = RoomService;

//# sourceMappingURL=room.service-ad2985ed.js.map