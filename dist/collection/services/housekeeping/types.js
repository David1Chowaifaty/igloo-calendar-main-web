import { LanguageSchema, PropertyIdSchema } from "../commonSchemas";
export const GetExposedHKSetupParamsSchema = LanguageSchema.extend({
    property_id: PropertyIdSchema,
});
