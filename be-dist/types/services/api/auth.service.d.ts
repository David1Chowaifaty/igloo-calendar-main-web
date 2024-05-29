import { Token } from "../../models/Token";
import { TSignInValidator, TSignUpValidator } from "../../validators/auth.validator";
interface BaseLoginParams {
    option: 'google' | 'direct';
}
interface GoogleLoginParams extends BaseLoginParams {
    option: 'google';
    token: string;
}
interface DirectLoginParams extends BaseLoginParams {
    option: 'direct';
    params: TSignInValidator;
}
type LoginParams = GoogleLoginParams | DirectLoginParams;
export declare class AuthService extends Token {
    login(params: LoginParams, signIn?: boolean): Promise<any>;
    signUp(params: TSignUpValidator): Promise<void>;
    initializeFacebookSignIn(): void;
    private handleCredentialResponse;
    loginWithFacebook(): Promise<void>;
    createFakeGoogleWrapper(): {
        click: () => void;
    };
    loadGoogleSignInScript(element: any): void;
    initializeGoogleSignIn(element: any): void;
}
export {};
