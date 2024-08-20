import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrLogin {
    baseurl: string;
    username: string;
    password: string;
    showPassword: boolean;
    authFinish: EventEmitter<{
        token: string;
        code: 'succsess' | 'error';
    }>;
    private authService;
    componentWillLoad(): void;
    private handleSignIn;
    render(): any;
}
