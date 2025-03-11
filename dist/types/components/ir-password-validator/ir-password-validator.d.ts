export declare class IrPasswordValidator {
    /**
     * The password string to validate
     */
    password: string;
    private get validLength();
    private get hasUppercase();
    private get hasLowercase();
    private get hasDigit();
    private get hasSpecialChar();
    render(): any;
}
