import { z } from "zod";
export const SetHKTaskLabelsParamsSchema = z.object({
    property_id: z.number(),
    t1_label: z.string().optional(),
    t1_freq: z.string().optional(),
    t2_label: z.string().optional(),
    t2_freq: z.string().optional(),
});
export const OverrideHKTaskOwnershipParamsSchema = z.object({
    property_id: z.number(),
    assignment: z.object({
        HK_TASK_ASSIGNMENT_ID: z.number(),
        PR_ID: z.number(),
        DATE: z.string(),
        HK_TASK_TYPE_CODE: z.string(),
        HKM_ID: z.number(),
    }),
});
//# sourceMappingURL=housekeeping.js.map
