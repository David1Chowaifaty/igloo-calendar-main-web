import { z } from 'zod';
declare const userSchema: z.ZodObject<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password?: string;
}, {
    password?: string;
}>;
type User = z.infer<typeof userSchema>;
export declare class IrTestCmp {
    user: User;
    error: Record<keyof User, boolean>;
    autoValidate: boolean;
    render(): any;
}
export {};
