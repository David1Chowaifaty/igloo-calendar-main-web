import { z } from "zod";
import { DateSchema, PropertyIdSchema } from "../commonSchemas";
export const GetDPBookingsReportParamsSchema = z.object({
    from_date: DateSchema,
    to_date: DateSchema,
    property_id: PropertyIdSchema,
});
