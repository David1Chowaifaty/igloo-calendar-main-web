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
    assignments: z.array(z.object({
        PR_ID: z.number(),
        DATE: z.string(),
        HK_TASK_TYPE_CODE: z.string(),
        HKM_ID: z.number().nullable(),
    })),
});
export const SkipHKTasksParamsSchema = z.object({
    property_id: z.number(),
    tasks_to_skip: z.array(z.object({
        unit_id: z.number(),
        booking_nbr: z.string(),
        date: z.string(),
        reason_code: z.string().optional().default('001'),
    })),
});
//# sourceMappingURL=housekeeping.js.map
