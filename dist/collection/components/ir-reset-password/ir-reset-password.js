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
        return (h(Host, { key: '18b1cd983f01670c3a4b57cb563f2b8e5f9d2a19' }, h("ir-interceptor", { key: '9bd926770d8282e8e058dd73936d60718317189a' }), h("ir-toast", { key: 'ce1634695678b5427debdb59b4e642f14a343007' }), h("form", { key: '0b234eaa3f0ae02089227ce95b6baa8e48ae2de5', onSubmit: this.handleSignIn.bind(this), class: "form-container px-2" }, h("svg", { key: 'a2ad2c81cb434ac1c94933679e24c66b2fe099d5', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '1ff0e8af26c6a60ff86dfb10204354ca3b702ced', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'd31362c27e38793a235bfae42065e73accc9b993', class: "text-center mb-2" }, h("h4", { key: '550a4677de3b8466b081e1bae1665d0fab3e7b3c', class: "mb-1" }, "Set new Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '6a359af6c8515362e914aee4daf31ef372740a2b' }, h("div", { key: '3adfc3d22c3d392a9df7e219774cb654187efd21', class: 'mb-2' }, h("div", { key: '386e22faf4e1d9502f8e365d5d581136655a157d', class: "m-0 p-0" }, h("div", { key: 'e06df30e1d3e434ea51008a4dfb9b230f304f8d9', class: 'position-relative' }, h("ir-input-text", { key: '88596fa1f323548129e726edc8898e35427d4299', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New Password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '08d55d8134bf92eedff8e2fc9295ff58b568602a', class: "mb-1", password: this.password })), h("div", { key: '4c7d34f9467465accf4adc3181b55db33d768b96', class: 'position-relative' }, h("ir-input-text", { key: '00a98d131b8c3afd237057ecbabf425c5a341292', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm Password", type: 'password' }))), h("ir-button", { key: 'a75df41ecb00669904c01bccd8b985d3e1ee43a4', isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md", class: "login-btn mt-1" }))))));
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
