import { Token } from "../../models/Token";
import { TSignInValidator, TSignUpValidator } from "../../validators/auth.validator";
export declare class AuthService extends Token {
    login(params: TSignInValidator): Promise<void>;
    signUp(params: TSignUpValidator): Promise<void>;
}
