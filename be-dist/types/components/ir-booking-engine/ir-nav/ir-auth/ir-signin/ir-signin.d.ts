import { EventEmitter } from '../../../../../stencil-public-runtime';
import { TSignInAuthTrigger, TSignInValidator } from "../../../../../validators/auth.validator";
import { TAuthNavigation } from '../auth.types';
export declare class IrSignin {
    enableSignUp: boolean;
    signInParams: TSignInValidator;
    formState: {
        cause: 'zod' | 'auth' | null;
        status: 'empty' | 'valid' | 'invalid';
        errors: Record<keyof TSignInValidator, string> | null;
    };
    isLoading: boolean;
    authFinish: EventEmitter<{
        state: 'success' | 'failed';
        token: string;
    }>;
    navigate: EventEmitter<TAuthNavigation>;
    signIn: EventEmitter<TSignInAuthTrigger>;
    private authService;
    componentWillLoad(): void;
    modifySignInParams(params: Partial<TSignInValidator>): void;
    login(params: {
        email?: string;
        booking_nbr?: string;
    }): Promise<void>;
    handleSignIn(e: Event): Promise<void>;
    render(): any;
}
