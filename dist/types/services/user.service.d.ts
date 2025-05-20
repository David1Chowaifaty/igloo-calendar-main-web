import { UserParams } from "../models/Users";
export declare class UserService {
    sendVerificationEmail(): Promise<void>;
    checkUserExistence(params: {
        UserName: string;
    }): Promise<boolean>;
    handleExposedUser(params: UserParams): Promise<any>;
    getExposedPropertyUsers({ property_id }: {
        property_id: number;
    }): Promise<any>;
}
