import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrLogin {
    username: string;
    password: string;
    showPassword: boolean;
    authFinish: EventEmitter<{
        token: string;
        code: 'succsess' | 'error';
    }>;
    private authService;
    private token;
    private handleSignIn;
    render(): any;
}
