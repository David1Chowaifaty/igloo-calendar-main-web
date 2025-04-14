import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CONSTANTS } from './constants.js';
import { z, Z as ZodError } from './index3.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-interceptor2.js';
import { d as defineCustomElement$4 } from './ir-password-validator2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irResetPasswordCss = ".sc-ir-reset-password-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const IrResetPassword$1 = /*@__PURE__*/ proxyCustomElement(class IrResetPassword extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '18b1cd983f01670c3a4b57cb563f2b8e5f9d2a19' }, h("ir-interceptor", { key: '9bd926770d8282e8e058dd73936d60718317189a' }), h("ir-toast", { key: 'ce1634695678b5427debdb59b4e642f14a343007' }), h("form", { key: '0b234eaa3f0ae02089227ce95b6baa8e48ae2de5', onSubmit: this.handleSignIn.bind(this), class: "form-container px-2" }, h("svg", { key: 'a2ad2c81cb434ac1c94933679e24c66b2fe099d5', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '1ff0e8af26c6a60ff86dfb10204354ca3b702ced', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'd31362c27e38793a235bfae42065e73accc9b993', class: "text-center mb-2" }, h("h4", { key: '550a4677de3b8466b081e1bae1665d0fab3e7b3c', class: "mb-1" }, "Set new Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '6a359af6c8515362e914aee4daf31ef372740a2b' }, h("div", { key: '3adfc3d22c3d392a9df7e219774cb654187efd21', class: 'mb-2' }, h("div", { key: '386e22faf4e1d9502f8e365d5d581136655a157d', class: "m-0 p-0" }, h("div", { key: 'e06df30e1d3e434ea51008a4dfb9b230f304f8d9', class: 'position-relative' }, h("ir-input-text", { key: '88596fa1f323548129e726edc8898e35427d4299', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New Password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '08d55d8134bf92eedff8e2fc9295ff58b568602a', class: "mb-1", password: this.password })), h("div", { key: '4c7d34f9467465accf4adc3181b55db33d768b96', class: 'position-relative' }, h("ir-input-text", { key: '00a98d131b8c3afd237057ecbabf425c5a341292', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm Password", type: 'password' }))), h("ir-button", { key: 'a75df41ecb00669904c01bccd8b985d3e1ee43a4', isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md", class: "login-btn mt-1" }))))));
    }
    static get style() { return IrResetPasswordStyle0; }
}, [2, "ir-reset-password", {
        "confirmPassword": [32],
        "password": [32],
        "showValidator": [32],
        "autoValidate": [32],
        "error": [32],
        "submitted": [32],
        "isLoading": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reset-password", "ir-button", "ir-icons", "ir-input-text", "ir-interceptor", "ir-password-validator", "ir-toast", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrResetPassword$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrResetPassword = IrResetPassword$1;
const defineCustomElement = defineCustomElement$1;

export { IrResetPassword, defineCustomElement };

//# sourceMappingURL=ir-reset-password.js.map