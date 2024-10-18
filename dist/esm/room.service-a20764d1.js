import { T as Token } from './Token-39881880.js';
import { c as calendar_data } from './calendar-data-666acc1f.js';
import { l as locales } from './locales.store-a1e3db22.js';
import { a as axios } from './axios-ab377903.js';

class RoomService extends Token {
    async getExposedProperty(params) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            calendar_data.adultChildConstraints = results.adult_child_constraints;
            calendar_data.allowedBookingSources = results.allowed_booking_sources;
            calendar_data.allowed_payment_methods = results.allowed_booking_methods;
            calendar_data.currency = results.currency;
            calendar_data.is_vacation_rental = results.is_vacation_rental;
            calendar_data.pickup_service = results.pickup_service;
            calendar_data.max_nights = results.max_nights;
            calendar_data.roomsInfo = results.roomtypes;
            calendar_data.taxes = results.taxes;
            calendar_data.id = results.id;
            calendar_data.country = results.country;
            calendar_data.name = results.name;
            calendar_data.tax_statement = results.tax_statement;
            calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
            calendar_data.is_pms_enabled = results.is_pms_enabled;
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async fetchLanguage(code, sections = ['_PMS_FRONT']) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Language`, { code, sections });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            let entries = this.transformArrayToObject(data.My_Result.entries);
            locales.entries = Object.assign(Object.assign({}, locales.entries), entries);
            locales.direction = data.My_Result.direction;
            return { entries, direction: data.My_Result.direction };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    transformArrayToObject(data) {
        let object = {};
        for (const d of data) {
            object[d.code] = d.description;
        }
        return object;
    }
}

export { RoomService as R };

//# sourceMappingURL=room.service-a20764d1.js.map