'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const constants = require('./constants-abd1d7db.js');
const index$1 = require('./index-db8b30d9.js');

const irResetPasswordCss = ".sc-ir-reset-password-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const IrResetPassword = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.ResetPasswordSchema = index$1.z.object({
            password: index$1.z.string().regex(constants.CONSTANTS.PASSWORD),
            confirm_password: index$1.z
                .string()
                .nullable()
                .refine(password => {
                if (!constants.CONSTANTS.PASSWORD.test(password)) {
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
            if (error instanceof index$1.ZodError) {
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
        return (index.h(index.Host, { key: '34419414c6f20a656827faba592efb0915b97386' }, index.h("ir-interceptor", { key: '7125430374af10512db56601f83cf7bfd78600ca' }), index.h("ir-toast", { key: '5c739ef0075c5450f682c59d95f93dabbbeb5797' }), index.h("form", { key: '15d28cb8e247a1000340ef61a5d66e98ce6a4d81', onSubmit: this.handleSignIn.bind(this), class: "form-container px-2" }, index.h("div", { key: '650334ae288585f86f3df5b546099eb19f0338d7', class: "text-center" }, index.h("h4", { key: '82385fac5fca9f48ee92a6737f8ceb2d89c182e9' }, "Set new Password"), index.h("p", { key: 'c19d42dad544e1f008ac9e8939f98b363674a2f2' }, "Your new password must be different to previously used password")), this.submitted ? (index.h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (index.h("section", null, index.h("div", null, index.h("div", { class: "m-0 p-0" }, index.h("div", { class: 'position-relative' }, index.h("ir-input-text", { error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New Password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && index.h("ir-password-validator", { class: "mb-1", password: this.password })), index.h("div", { class: 'position-relative' }, index.h("ir-input-text", { error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm Password", type: 'password' }))), index.h("ir-button", { isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md", class: "login-btn mt-1" }))))));
    }
};
IrResetPassword.style = IrResetPasswordStyle0;

exports.ir_reset_password = IrResetPassword;

//# sourceMappingURL=ir-reset-password.cjs.entry.js.map