'use strict';

var types = require('./types-BVJQZ50e.js');

const DateSchema = types.stringType()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .refine(value => {
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}, 'Invalid date');
const PropertyIdSchema = types.numberType().int();
const BookingNumberSchema = types.stringType();
const LanguageSchema = types.objectType({
    language: types.stringType().optional().default('en'),
});
const TaxTypesSchema = types.arrayType(types.enumType(['VAT', 'CITY_TAX', 'SERVICE_CHARGE'])).optional();

exports.BookingNumberSchema = BookingNumberSchema;
exports.DateSchema = DateSchema;
exports.LanguageSchema = LanguageSchema;
exports.PropertyIdSchema = PropertyIdSchema;
exports.TaxTypesSchema = TaxTypesSchema;
