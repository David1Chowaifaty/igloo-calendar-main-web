import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrLogin {
    username: string;
    password: string;
    showPassword: boolean;
    authFinish: EventEmitter<{
        ApiClient: string;
        code: 'succsess' | 'error';
    }>;
    private authService;
    private ApiClient;
    private handleSignIn;
    render(): any;
}
