import z from "zod";
import { PropertyIdSchema } from "../commonSchemas";
export const GetExposedHKSetupParamsSchema = z.object({
    property_id: PropertyIdSchema,
    language: z.string().optional().default('en'),
});
