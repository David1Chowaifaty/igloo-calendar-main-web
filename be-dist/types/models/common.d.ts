import { z, ZodIssue } from 'zod';
export declare const ZCurrency: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    symbol: z.ZodString;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    symbol?: string;
    code?: string;
    name?: string;
    id?: number;
}, {
    symbol?: string;
    code?: string;
    name?: string;
    id?: number;
}>;
export type TCurrency = z.infer<typeof ZCurrency>;
export interface ICurrency {
    id: number;
    name: string;
    symbol: string;
    code: string;
}
export interface ICountry {
    cities: string[];
    id: number;
    name: string;
    phone_prefix: string;
    flag: string;
    code: string;
    currency: {
        code: string;
        id: number;
        symbol: string;
    };
}
export type TDirection = 'LTR' | 'RTL';
export interface IExposedLanguages {
    code: string;
    culture: string;
    description: string;
    direction: TDirection;
    entries: null;
    id: number;
    flag: string;
}
export interface DataStructure {
    ExceptionCode: any;
    ExceptionMsg: string;
    My_Params_Get_Exposed_Property: any;
    My_Result: any;
}
export type pages = 'booking' | 'checkout' | 'invoice' | 'booking-listing' | 'user-profile';
export declare class Identifier {
    code: string;
    name: string;
}
export type CheckoutErrors = {
    cause: 'user' | 'pickup' | 'payment';
    issues: Record<string, ZodIssue>;
} | {
    cause: 'booking-details' | 'booking-summary';
    issues: string;
};
