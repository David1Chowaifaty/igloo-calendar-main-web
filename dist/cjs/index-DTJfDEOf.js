'use strict';

var axios = require('./axios-EresIryl.js');
var utils = require('./utils-C5I0LkiV.js');
var commonSchemas = require('./commonSchemas-BFzTbV-r.js');
var types = require('./types-BlCoz3jZ.js');

const AssignUnitParamsSchema = types.objectType({
    booking_nbr: commonSchemas.BookingNumberSchema,
    identifier: types.stringType(),
    pr_id: types.numberType().int(),
    check_in: types.booleanType(),
});
const GetAggregatedUnAssignedRoomsByDateRangeParamsSchema = types.objectType({
    propertyid: commonSchemas.PropertyIdSchema,
    from_date: commonSchemas.DateSchema,
    to_date: commonSchemas.DateSchema,
    language: types.stringType().optional().default('en'),
});

class UnassignedUnitsService {
    async assignUnit(props) {
        try {
            const payload = AssignUnitParamsSchema.parse(props);
            const { data } = await axios.axios.post(`/Assign_Exposed_Room`, {
                ...payload,
                extras: utils.extras,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getAggregatedUnAssignedRoomsByDateRange(params) {
        const payload = GetAggregatedUnAssignedRoomsByDateRangeParamsSchema.parse(params);
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IR/Get_UnAssigned_Dates_Light', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

exports.UnassignedUnitsService = UnassignedUnitsService;
