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
interface LoginSuccessPayload {
    state: 'success';
    token: string;
    payload: {
        method: 'google' | 'direct';
        token?: string;
        params?: TSignInValidator;
    };
}
interface LoginFailurePayload {
    state: 'failed';
    error: string;
}
type LoginEventPayload = LoginSuccessPayload | LoginFailurePayload;
export declare class AuthService extends Token {
    private subscribers;
    subscribe(callback: (result: LoginEventPayload) => void): void;
    unsubscribe(callback: (result: LoginEventPayload) => void): void;
    private notifySubscribers;
    signOut(): Promise<void>;
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
