import * as z from "zod";
/**
 * The setup tables `Get_Exposed_Language` can be asked for.
 *
 * These are exactly the six types intersected into {@link TLocaleEntries} in
 * `src/stores/locales.store.ts` — keep the two lists in sync, otherwise a table
 * can be fetched whose keys are not declared on {@link LocaleKey}.
 */
export const LOCALE_TABLES = ['_PMS_FRONT', '_USER_MGT', '_BOOKING_LIST_FRONT', '_HK_FRONT', '_CHANNEL_FRONT', '_PAYMENT_BACK'];
/** One row of `My_Result.entries` — the key/value pair for a single string. */
export const LocaleEntryRowSchema = z.object({
    code: z.string(),
    description: z.string().nullable().default(''),
});
/** `My_Result` of `Get_Exposed_Language`. */
export const ExposedLanguageResultSchema = z.object({
    entries: z.array(LocaleEntryRowSchema).nullable().default([]),
    direction: z.string().nullable().default('LTR'),
});
