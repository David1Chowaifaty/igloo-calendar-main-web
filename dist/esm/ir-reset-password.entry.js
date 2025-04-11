import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { C as CONSTANTS } from './constants-1510e43f.js';
import { z, Z as ZodError } from './index-502f9842.js';

const irResetPasswordCss = ".sc-ir-reset-password-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const IrResetPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish", 7);
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
};
IrResetPassword.style = IrResetPasswordStyle0;

export { IrResetPassword as ir_reset_password };

//# sourceMappingURL=ir-reset-password.entry.js.map