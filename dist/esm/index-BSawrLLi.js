import { a as axios } from './axios-B50ozOIF.js';
import { e as extras } from './utils-CKFOUZvS.js';
import { B as BookingNumberSchema, L as LanguageSchema, D as DateSchema, P as PropertyIdSchema } from './commonSchemas-Cx9w9d8l.js';
import { o as objectType, b as booleanType, n as numberType, s as stringType } from './types-CB66a07H.js';

const AssignUnitParamsSchema = objectType({
    booking_nbr: BookingNumberSchema,
    identifier: stringType(),
    pr_id: numberType().int(),
    check_in: booleanType(),
});
const GetAggregatedUnAssignedRoomsByDateRangeParamsSchema = LanguageSchema.extend({
    propertyid: PropertyIdSchema,
    from_date: DateSchema,
    to_date: DateSchema,
});

class UnassignedUnitsService {
    async assignUnit(props) {
        try {
            const payload = AssignUnitParamsSchema.parse(props);
            const { data } = await axios.post(`/Assign_Exposed_Room`, {
                ...payload,
                extras,
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
        const { data } = await axios.post('https://gateway.igloorooms.com/IR/Get_UnAssigned_Dates_Light', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

export { UnassignedUnitsService as U };
