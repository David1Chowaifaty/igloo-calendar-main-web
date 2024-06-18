import { EventEmitter } from '../../../../stencil-public-runtime';
import { TAuthNavigation } from './auth.types';
export declare class IrAuth {
    el: HTMLElement;
    enableSignUp: boolean;
    authState: TAuthNavigation;
    animationDirection: string;
    signedIn: boolean;
    closeDialog: EventEmitter<null>;
    private authService;
    private googleButtonWrapper;
    componentWillLoad(): void;
    handleLoginResult(e: CustomEvent): void;
    handleNavigation(e: CustomEvent): void;
    handleAuthFinished(e: CustomEvent): void;
    signUp(params: {
        email?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
    }): void;
    private handleAuthStateChange;
    disconnectedCallback(): void;
    render(): any;
}
