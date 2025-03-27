import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrPasswordValidator {
    /**
     * The password string to validate
     */
    password: string;
    passwordValidationChange: EventEmitter<boolean>;
    handlePasswordChange(newValue: string, oldValue: string): void;
    private get validLength();
    private get hasUppercase();
    private get hasLowercase();
    private get hasDigit();
    private get hasSpecialChar();
    render(): any;
}
