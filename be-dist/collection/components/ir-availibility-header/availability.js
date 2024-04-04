import { z } from "zod";
export const ExposedBookingAvailability = z.object({
    propertyid: z.coerce.number(),
    from_date: z.string().min(2),
    to_date: z.string().min(2),
    room_type_ids: z.string().array().optional().default([]),
    adult_nbr: z.number().min(1),
    child_nbr: z.number().min(0),
    language: z.string().default('en'),
    currency_ref: z.string(),
});
//# sourceMappingURL=availability.js.map
