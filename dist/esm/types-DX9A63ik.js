import { o as objectType, s as stringType, a as arrayType } from './types-CrHq6jOb.js';

/** One row of `My_Result.entries` — the key/value pair for a single string. */
const LocaleEntryRowSchema = objectType({
    code: stringType(),
    description: stringType().nullable().default(''),
    table_name: stringType().nullable().optional(),
});
/** `My_Result` of `Get_Exposed_Language`. */
const ExposedLanguageResultSchema = objectType({
    entries: arrayType(LocaleEntryRowSchema).nullable().default([]),
    direction: stringType().nullable().default('LTR'),
});

export { ExposedLanguageResultSchema as E };
