import { z } from 'zod';
export declare const SignInValidtor: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
export declare const SignUpValidtor: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
}, {
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
}>;
export type TSignInValidator = z.infer<typeof SignInValidtor>;
export type TSignUpValidator = z.infer<typeof SignUpValidtor>;
export type TTrigger = 'fb' | 'be';
export type TSignInAuthTrigger = FBTrigger | GoogleTrigger | BeSignInTrigger;
export type TSignUpAuthTrigger = FBTrigger | GoogleTrigger | BeSignUpTrigger;
interface FBTrigger {
    trigger: 'fb';
}
interface GoogleTrigger {
    trigger: 'google';
}
interface BeSignInTrigger {
    trigger: 'be';
    params: TSignInValidator;
}
interface BeSignUpTrigger {
    trigger: 'be';
    params: TSignUpValidator;
}
export {};
