import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrResetPassword {
    el: HTMLIrResetPasswordElement;
    username: string;
    old_pwd: string;
    ticket: string;
    skip2Fa: boolean;
    language: string;
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
    isFetching: boolean;
    closeSideBar: EventEmitter<null>;
    private token;
    private authService;
    private systemService;
    private roomService;
    private initialized;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleTicketChange(oldValue: string, newValue: string): void;
    private init;
    private ResetPasswordSchema;
    private handleChangePassword;
    handleOtpFinished(e: CustomEvent): void;
    render(): any;
}
