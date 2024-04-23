import { EventEmitter } from '../../stencil-public-runtime';
import { TAuthNavigation } from '../ir-auth/auth.types';
import { TSignUpAuthTrigger, TSignUpValidator } from "../../validators/auth.validator";
import { ZodError } from 'zod';
export declare class IrSignup {
    signUpParams: TSignUpValidator;
    formState: {
        status: 'empty' | 'valid' | 'invalid';
        errors: Record<keyof TSignUpValidator, ZodError> | null;
    };
    navigate: EventEmitter<TAuthNavigation>;
    signUp: EventEmitter<TSignUpAuthTrigger>;
    modifySignUpParams(params: Partial<TSignUpValidator>): void;
    handleSignUp(e: Event): void;
    render(): any;
}
