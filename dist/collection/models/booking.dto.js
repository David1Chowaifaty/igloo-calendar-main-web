import { z } from "zod";
export const ExtraServiceSchema = z.object({
    booking_system_id: z.number().optional(),
    cost: z.number().nullable(),
    currency_id: z.number().min(1),
    description: z.string().min(1),
    end_date: z.string().nullable(),
    price: z.number(),
    start_date: z.string().nullable(),
    system_id: z.number().optional(),
});
//# sourceMappingURL=booking.dto.js.map
