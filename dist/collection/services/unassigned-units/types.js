import { z } from "zod";
import { DateSchema, PropertyIdSchema, BookingNumberSchema } from "../commonSchemas";
export const AssignUnitParamsSchema = z.object({
    booking_nbr: BookingNumberSchema,
    identifier: z.string(),
    pr_id: z.number().int(),
    check_in: z.boolean(),
});
export const GetAggregatedUnAssignedRoomsByDateRangeParamsSchema = z.object({
    propertyid: PropertyIdSchema,
    from_date: DateSchema,
    to_date: DateSchema,
    language: z.string().optional().default('en'),
});
