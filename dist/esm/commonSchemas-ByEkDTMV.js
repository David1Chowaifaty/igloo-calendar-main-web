import { l as libExports } from './index-DeW5X45W.js';

const DateSchema = libExports.z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .refine(value => {
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}, 'Invalid date');
const PropertyIdSchema = libExports.z.number().int();
const BookingNumberSchema = libExports.z.string();
const TaxTypesSchema = libExports.z.array(libExports.z.enum(['VAT', 'CITY_TAX', 'SERVICE_CHARGE'])).optional();

export { BookingNumberSchema as B, DateSchema as D, PropertyIdSchema as P, TaxTypesSchema as T };
