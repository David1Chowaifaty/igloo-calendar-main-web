import { UserParams } from "../models/Users";
export declare class UserService {
    checkUserExistence(params: {
        UserName: string;
    }): Promise<boolean>;
    handleExposedUser(params: UserParams): Promise<any>;
    getExposedPropertyUsers(): Promise<any>;
}
