import { EventEmitter } from '../../../../stencil-public-runtime';
import { TAuthNavigation } from './auth.types';
export declare class IrAuth {
    el: HTMLElement;
    enableSignUp: boolean;
    authState: TAuthNavigation;
    animationDirection: string;
    signedIn: boolean;
    closeDialog: EventEmitter<null>;
    authFinish: EventEmitter<{
        state: 'success' | 'failed';
        token: string;
    }>;
    private authService;
    googleButton: HTMLDivElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleCredentialResponse(response: any): void;
    handleSignOut: () => void;
    loginWithFacebook(): Promise<void>;
    handleNavigation(e: CustomEvent): void;
    signUp(params: {
        email?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
    }): void;
    onSignIn: (googleUser: any) => void;
    render(): any;
}
