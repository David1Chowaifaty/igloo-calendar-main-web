import { s as stringType, n as numberType, a as arrayType, e as enumType } from './types-BG9uwIsj.js';

const DateSchema = stringType()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .refine(value => {
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}, 'Invalid date');
const PropertyIdSchema = numberType().int();
const BookingNumberSchema = stringType();
const TaxTypesSchema = arrayType(enumType(['VAT', 'CITY_TAX', 'SERVICE_CHARGE'])).optional();

export { BookingNumberSchema as B, DateSchema as D, PropertyIdSchema as P, TaxTypesSchema as T };
