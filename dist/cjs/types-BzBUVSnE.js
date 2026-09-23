'use strict';

var types = require('./types-BlCoz3jZ.js');

/** One row of `My_Result.entries` — the key/value pair for a single string. */
const LocaleEntryRowSchema = types.objectType({
    code: types.stringType(),
    description: types.stringType().nullable().default(''),
    table_name: types.stringType().nullable().optional(),
});
/** `My_Result` of `Get_Exposed_Language`. */
const ExposedLanguageResultSchema = types.objectType({
    entries: types.arrayType(LocaleEntryRowSchema).nullable().default([]),
    direction: types.stringType().nullable().default('LTR'),
});

exports.ExposedLanguageResultSchema = ExposedLanguageResultSchema;
