import { ZIEntrySchema } from "../../models/IBooking";
import * as z from "zod";
// ---------------------------------------------------------------------------
// Shared entry shape
// ---------------------------------------------------------------------------
export { ZIEntrySchema };
// ---------------------------------------------------------------------------
// Get_Setup_Entries_By_TBL_NAME
// ---------------------------------------------------------------------------
export const GetSetupEntriesByTblNameParamsSchema = z.object({
    TBL_NAME: z.string().min(1),
});
// ---------------------------------------------------------------------------
// Get_Setup_Entries_By_TBL_NAME_Multi
// ---------------------------------------------------------------------------
export const GetSetupEntriesByTblNameMultiParamsSchema = z.object({
    TBL_NAMES: z.array(z.string().min(1)),
});
// ---------------------------------------------------------------------------
// Get_Distinct_Setup_Tables
// ---------------------------------------------------------------------------
// The API has been observed to return either plain table-name strings or row
// objects carrying a TBL_NAME field — normalized to string[] in the service.
export const DistinctSetupTableSchema = z.union([z.string(), z.object({ TBL_NAME: z.string() }).passthrough()]);
export const DistinctSetupTablesResponseSchema = z.array(DistinctSetupTableSchema);
// ---------------------------------------------------------------------------
// Get_SetupEntry_By_Code
// ---------------------------------------------------------------------------
export const GetSetupEntryByCodeParamsSchema = z.object({
    TBL_NAME: z.string().min(1),
    CODE_NAME: z.string().min(1),
});
// ---------------------------------------------------------------------------
// Edit_Setup
// ---------------------------------------------------------------------------
export const EditSetupParamsSchema = z.object({
    // OWNER_ID: z.number(),
    TBL_NAME: z.string().min(1),
    CODE_NAME: z.string().min(1),
    // Administrative flags — default to a normal, fully-editable custom entry so
    // callers only need to override them when round-tripping an existing row's flags.
    ISSYSTEM: z.boolean().default(false),
    ISDELETEABLE: z.boolean().default(true),
    ISUPDATEABLE: z.boolean().default(true),
    ISVISIBLE: z.boolean().default(true),
    ISDELETED: z.boolean().default(false),
    DISPLAY_ORDER: z.number().optional().default(0),
    CODE_VALUE_EN: z.string().default(''),
    CODE_VALUE_FR: z.string().default(''),
    CODE_VALUE_AR: z.string().default(''),
    CODE_VALUE_RU: z.string().default(''),
    CODE_VALUE_EL: z.string().default(''),
    CODE_VALUE_HE: z.string().default(''),
    CODE_VALUE_PL: z.string().default(''),
    CODE_VALUE_DE: z.string().default(''),
    CODE_VALUE_UA: z.string().default(''),
    ENTRY_DATE: z.string(),
    // ENTRY_USER_ID: z.number().optional(),
    NOTES: z.string().default(''),
    INVARIANT_VALUE: z.string().nullable().default(null),
});
export const EditSetupManyParamsSchema = z.array(EditSetupParamsSchema);
export const ZExposedLanguageSchema = z.object({
    code: z.string(),
    culture: z.string(),
    description: z.string(),
    direction: z.string(),
    entries: z.null(),
    flag: z.string(),
    id: z.number(),
});
export const ZExposedLanguagesSchema = z.array(ZExposedLanguageSchema);
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
export const MoveSetupEntryParamsSchema = z.object({
    old_tbl_name: z.string(),
    code_name: z.string(),
    new_tbl_name: z.string(),
});
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
export const MissingSetupEntriesParamsSchema = z.object({
    language: z.string(),
});
/* -------------------------------------------------------------------------- */
/*                       Search Setup By Description                          */
/* -------------------------------------------------------------------------- */
export const ZSearchSetupByDescriptionParamsSchema = z.object({
    query: z.string(),
});
export const ZEntrySchema = z.object({
    CODE_NAME: z.string(),
    TBL_NAME: z.string(),
});
export const ZDuplicatedSetupEntriesAcrossTablesSchema = z.object({
    DESCRIPTION: z.string(),
    ENTRIES: z.array(ZEntrySchema),
    OCCURRENCES: z.number(),
});
