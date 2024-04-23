import { EventEmitter } from '../../stencil-public-runtime';
import { TAuthNavigation } from './auth.types';
export declare class IrAuth {
    el: HTMLElement;
    authState: TAuthNavigation;
    animationDirection: string;
    closeDialog: EventEmitter<null>;
    signedIn: boolean;
    private authService;
    componentWillLoad(): void;
    componentDidLoad(): void;
    initGoogleAuth: () => void;
    loadGoogleApi(): void;
    handleSignIn: () => void;
    handleSignOut: () => void;
    loginWithFacebook(): Promise<void>;
    handleNavigation(e: CustomEvent): void;
    signUp(params: {
        email?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
    }): void;
    render(): any;
}
