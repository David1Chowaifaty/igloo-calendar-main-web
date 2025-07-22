import { z } from './index3.js';
import { h as hooks } from './moment.js';

// export const ZIdInfo = z.object({
//   type: z.object({
//     code: z.string().min(3),
//     description: z.string(),
//   }),
//   number: z.string().min(2),
// });
// export const ZSharedPerson = z.object({
//   id: z.number(),
//   full_name: z.string().min(2),
//   country_id: z.coerce.number().min(0),
//   dob: z.coerce.date().transform(date => moment(date).format('YYYY-MM-DD')),
//   id_info: ZIdInfo,
// });
/**
 * ZIdInfo schema:
 * - `type.code`: Validates a non-empty string must be at least 3 chars.
 *   If empty string or not provided, validation is skipped.
 * - `type.description`: Same pattern for description (but no min length).
 * - `number`: Validates if non-empty string it should be at least 2 chars.
 */
const ZIdInfo = z.object({
    type: z.object({
        code: z
            .union([
            // If provided and non-empty, must have at least 3 chars
            z.string().min(3),
            // or it can be an empty string
            z.literal(''),
        ])
            .optional(), // or undefined
        description: z
            .union([
            // If provided and non-empty, no special min
            z.string(),
            // or it can be empty string
            z.literal(''),
        ])
            .optional(),
    }),
    number: z
        .union([
        // If provided and non-empty, must have at least 2 chars
        z.string().min(2),
        // or it can be empty string
        z.literal(''),
    ])
        .optional()
        .nullable(),
});
/**
 * ZSharedPerson schema:
 * - `id`: Optional numeric field.
 * - `full_name`: If provided and non-empty, must be at least 2 chars.
 * - `country_id`: If provided, coerced to number, must be >= 0.
 * - `dob`: If provided, coerced to Date and formatted. Otherwise skipped.
 * - `id_info`: The nested object above; can also be omitted entirely.
 */
const ZSharedPerson = z.object({
    id: z.number().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: z
        .union([
        z.string().min(2), // if provided and non-empty, must have min length 2
        z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: z
        .union([
        z.string().min(2), // if provided and non-empty, must have min length 2
        z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    country_id: z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: z
        .string()
        .nullable()
        .optional()
        .refine(value => value === undefined || hooks(value, 'DD/MM/YYYY', true).isValid() || value === '' || value === null, 'Invalid date format')
        .transform(value => {
        if (value === undefined || value === '' || value === null)
            return null;
        const isDDMMYYYY = hooks(value, 'DD/MM/YYYY', true).isValid();
        return isDDMMYYYY ? null : hooks(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }),
    id_info: ZIdInfo.optional(),
    is_main: z.boolean().default(false),
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