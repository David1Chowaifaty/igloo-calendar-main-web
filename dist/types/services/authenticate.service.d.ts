export declare class AuthService {
    authenticate(params: {
        username: string;
        password: string;
    }): Promise<any>;
    changeUserPwd(params: {
        username: string;
        new_pwd: string;
        old_pwd?: string;
    }): Promise<any>;
}
