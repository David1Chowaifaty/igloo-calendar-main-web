import { CONSTANTS } from "../../utils/constants";
import { Host, h } from "@stencil/core";
import { z, ZodError } from "zod";
export class IrResetPassword {
    constructor() {
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.ResetPasswordSchema = z.object({
            password: z.string().regex(CONSTANTS.PASSWORD),
            confirm_password: z
                .string()
                .nullable()
                .refine(password => {
                if (!CONSTANTS.PASSWORD.test(password)) {
                    return false;
                }
                return password === this.password;
            }, { message: 'Password must be at least 8 characters long.' }),
        });
    }
    // private authService = new AuthService();
    // private token = new Token();
    async handleSignIn(e) {
        e.preventDefault();
        try {
            this.error = {};
            this.isLoading = true;
            this.autoValidate = true;
            this.ResetPasswordSchema.parse({
                password: this.password,
                confirm_password: this.confirmPassword,
            });
            await new Promise(r => setTimeout(() => {
                r(true);
            }, 300));
            this.submitted = true;
            // const token = await this.authService.authenticate({
            //   password: this.password,
            //   username: this.username,
            // });
            // this.token.setToken(token);
            // this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            if (error instanceof ZodError) {
                let validationErrors = {};
                error.issues.map(issue => {
                    const path = issue.path[0];
                    console.log(path, issue);
                    if (path === 'password') {
                        this.showValidator = true;
                    }
                    validationErrors[path] = true;
                });
                this.error = validationErrors;
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b;
        console.log(this.error);
        return (h(Host, { key: '34419414c6f20a656827faba592efb0915b97386' }, h("ir-interceptor", { key: '7125430374af10512db56601f83cf7bfd78600ca' }), h("ir-toast", { key: '5c739ef0075c5450f682c59d95f93dabbbeb5797' }), h("form", { key: '15d28cb8e247a1000340ef61a5d66e98ce6a4d81', onSubmit: this.handleSignIn.bind(this), class: "form-container px-2" }, h("div", { key: '650334ae288585f86f3df5b546099eb19f0338d7', class: "text-center" }, h("h4", { key: '82385fac5fca9f48ee92a6737f8ceb2d89c182e9' }, "Set new Password"), h("p", { key: 'c19d42dad544e1f008ac9e8939f98b363674a2f2' }, "Your new password must be different to previously used password")), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("section", null, h("div", null, h("div", { class: "m-0 p-0" }, h("div", { class: 'position-relative' }, h("ir-input-text", { error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New Password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { class: "mb-1", password: this.password })), h("div", { class: 'position-relative' }, h("ir-input-text", { error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm Password", type: 'password' }))), h("ir-button", { isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md", class: "login-btn mt-1" }))))));
    }
    static get is() { return "ir-reset-password"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-reset-password.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-reset-password.css"]
        };
    }
    static get states() {
        return {
            "confirmPassword": {},
            "password": {},
            "showValidator": {},
            "autoValidate": {},
            "error": {},
            "submitted": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "authFinish",
                "name": "authFinish",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    token: string;\n    code: 'succsess' | 'error';\n  }",
                    "resolved": "{ token: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-reset-password.js.map
