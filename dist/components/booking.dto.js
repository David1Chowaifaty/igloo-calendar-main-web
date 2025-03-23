import { l as libExports } from './index3.js';
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
const ZIdInfo = libExports.z.object({
    type: libExports.z.object({
        code: libExports.z
            .union([
            // If provided and non-empty, must have at least 3 chars
            libExports.z.string().min(3),
            // or it can be an empty string
            libExports.z.literal(''),
        ])
            .optional(), // or undefined
        description: libExports.z
            .union([
            // If provided and non-empty, no special min
            libExports.z.string(),
            // or it can be empty string
            libExports.z.literal(''),
        ])
            .optional(),
    }),
    number: libExports.z
        .union([
        // If provided and non-empty, must have at least 2 chars
        libExports.z.string().min(2),
        // or it can be empty string
        libExports.z.literal(''),
    ])
        .optional(),
});
/**
 * ZSharedPerson schema:
 * - `id`: Optional numeric field.
 * - `full_name`: If provided and non-empty, must be at least 2 chars.
 * - `country_id`: If provided, coerced to number, must be >= 0.
 * - `dob`: If provided, coerced to Date and formatted. Otherwise skipped.
 * - `id_info`: The nested object above; can also be omitted entirely.
 */
const ZSharedPerson = libExports.z.object({
    id: libExports.z.number().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: libExports.z
        .union([
        libExports.z.string().min(2), // if provided and non-empty, must have min length 2
        libExports.z.literal(''), // or it can be empty string
    ])
        .optional(),
    last_name: libExports.z
        .union([
        libExports.z.string().min(2), // if provided and non-empty, must have min length 2
        libExports.z.literal(''), // or it can be empty string
    ])
        .optional(),
    country_id: libExports.z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: libExports.z
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
});
const ZSharedPersons = libExports.z.array(ZSharedPerson);
const ExtraServiceSchema = libExports.z.object({
    booking_system_id: libExports.z.number().optional(),
    cost: libExports.z.coerce.number().nullable(),
    currency_id: libExports.z.number().min(1),
    description: libExports.z.string().min(1),
    end_date: libExports.z.string().nullable(),
    price: libExports.z.coerce.number(),
    start_date: libExports.z.string().nullable(),
    system_id: libExports.z.number().optional(),
});

export { ExtraServiceSchema as E, ZSharedPersons as Z, ZSharedPerson as a, ZIdInfo as b };
//# sourceMappingURL=booking.dto.js.map

//# sourceMappingURL=booking.dto.js.map