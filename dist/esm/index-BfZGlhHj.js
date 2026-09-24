import { a as axios } from './axios-B50ozOIF.js';
import { e as extras } from './utils-CNQuD3ma.js';
import { B as BookingNumberSchema, D as DateSchema, P as PropertyIdSchema } from './commonSchemas-DOpzu-TI.js';
import { o as objectType, b as booleanType, n as numberType, s as stringType } from './types-BWKgfE54.js';

const AssignUnitParamsSchema = objectType({
    booking_nbr: BookingNumberSchema,
    identifier: stringType(),
    pr_id: numberType().int(),
    check_in: booleanType(),
});
const GetAggregatedUnAssignedRoomsByDateRangeParamsSchema = objectType({
    propertyid: PropertyIdSchema,
    from_date: DateSchema,
    to_date: DateSchema,
    language: stringType().optional().default('en'),
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
