import { z } from "zod";
export const SelectedUnitSchema = z.object({
    roomtype_id: z.coerce.number(),
    unit_id: z.coerce.number(),
    rateplan_id: z.coerce.number(),
});
//# sourceMappingURL=types.js.map
