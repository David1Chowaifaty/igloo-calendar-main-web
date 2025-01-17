import { z } from './utils.js';
import { h as hooks } from './moment.js';

const ZIdInfo = z.object({
    type: z.object({
        code: z.string().min(3),
        description: z.string(),
    }),
    number: z.string().min(2),
});
const ZSharedPerson = z.object({
    id: z.number(),
    full_name: z.string().min(2),
    country_id: z.coerce.number().min(0),
    dob: z.coerce.date().transform(date => hooks(date).format('YYYY-MM-DD')),
    id_info: ZIdInfo,
});
const ZSharedPersons = z.array(ZSharedPerson);
const ExtraServiceSchema = z.object({
    booking_system_id: z.number().optional(),
    cost: z.coerce.number().nullable(),
    currency_id: z.number().min(1),
    description: z.string().min(1),
    end_date: z.string().nullable(),
    price: z.coerce.number(),
    start_date: z.string().nullable(),
    system_id: z.number().optional(),
});

export { ExtraServiceSchema as E, ZSharedPersons as Z, ZSharedPerson as a, ZIdInfo as b };

//# sourceMappingURL=booking.dto.js.map