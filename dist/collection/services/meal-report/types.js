import * as z from "zod";
export const ParamsGetMealReportSchema = z.object({
    property_id: z.number(),
    report_type: z.enum(['GUEST_LIST', 'MEAL_COUNT']),
    from: z.string(),
    to: z.string(),
    meal_type_code: z.string().optional().nullable(),
    is_export_to_excel: z.boolean().optional().default(false),
});
export const ParamsSetHBPreferenceSchema = z.object({
    property_id: z.number(),
    room_identifier: z.string(),
    code: z.string(),
});
//# sourceMappingURL=types.js.map
