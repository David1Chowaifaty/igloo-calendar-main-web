import { z } from "zod";
import moment from "moment";
export const ZIdInfo = z.object({
    type: z.object({
        code: z.string().min(3),
        description: z.string(),
    }),
    number: z.string().min(2),
});
export const ZSharedPerson = z.object({
    id: z.number(),
    full_name: z.string().min(2),
    country_id: z.coerce.number().min(0),
    dob: z.coerce.date().transform(date => moment(date).format('YYYY-MM-DD')),
    id_info: ZIdInfo,
});
export const ZSharedPersons = z.array(ZSharedPerson);
export const ExtraServiceSchema = z.object({
    booking_system_id: z.number().optional(),
    cost: z.coerce.number().nullable(),
    currency_id: z.number().min(1),
    description: z.string().min(1),
    end_date: z.string().nullable(),
    price: z.coerce.number(),
    start_date: z.string().nullable(),
    system_id: z.number().optional(),
});
//# sourceMappingURL=booking.dto.js.map
