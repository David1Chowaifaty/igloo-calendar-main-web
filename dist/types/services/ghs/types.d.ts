import { z } from 'zod';
export declare const GHS_Candidate_Property_Schema: z.ZodObject<{
    AC_ID: z.ZodNumber;
    NAME: z.ZodString;
    aname: z.ZodString;
    level2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    COUNTRY_ID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    NAME?: string;
    AC_ID?: number;
    aname?: string;
    level2?: string;
    COUNTRY_ID?: number;
}, {
    NAME?: string;
    AC_ID?: number;
    aname?: string;
    level2?: string;
    COUNTRY_ID?: number;
}>;
export type GHS_Candidate_Property = z.infer<typeof GHS_Candidate_Property_Schema>;
export declare const Params_Get_GHS_Candidate_Properties_Schema: z.ZodObject<{
    COUNTRY_ID: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    COUNTRY_ID?: number;
}, {
    COUNTRY_ID?: number;
}>;
export type Params_Get_GHS_Candidate_Properties = z.infer<typeof Params_Get_GHS_Candidate_Properties_Schema>;
export declare const Params_Generate_GHS_Listing_For_Selection_Schema: z.ZodObject<{
    Selected_AC_IDs: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    Selected_AC_IDs?: number[];
}, {
    Selected_AC_IDs?: number[];
}>;
export type Params_Generate_GHS_Listing_For_Selection = z.infer<typeof Params_Generate_GHS_Listing_For_Selection_Schema>;
export declare const Params_Update_GHS_Enablement_Schema: z.ZodObject<{
    AC_ID: z.ZodNumber;
    IS_ENABLED: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    AC_ID?: number;
    IS_ENABLED?: boolean;
}, {
    AC_ID?: number;
    IS_ENABLED?: boolean;
}>;
export type Params_Update_GHS_Enablement = z.infer<typeof Params_Update_GHS_Enablement_Schema>;
