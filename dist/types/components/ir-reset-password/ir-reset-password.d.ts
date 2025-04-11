import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrResetPassword {
    confirmPassword: string;
    password: string;
    showValidator: boolean;
    autoValidate: boolean;
    error: {
        password?: boolean;
        confirm_password?: boolean;
    };
    submitted: boolean;
    isLoading: boolean;
    authFinish: EventEmitter<{
        token: string;
        code: 'succsess' | 'error';
    }>;
    private ResetPasswordSchema;
    private handleSignIn;
    render(): any;
}
