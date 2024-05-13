import { Token } from "../../models/Token";
import { TSignInValidator, TSignUpValidator } from "../../validators/auth.validator";
export declare class AuthService extends Token {
    login(params: TSignInValidator, booking_nbr?: string | number): Promise<any>;
    signUp(params: TSignUpValidator): Promise<void>;
}
