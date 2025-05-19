import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { S as SystemService, d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { C as CONSTANTS } from './constants.js';
import { z, Z as ZodError } from './index3.js';
import { d as defineCustomElement$b } from './ir-button2.js';
import { d as defineCustomElement$a } from './ir-icon2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-input-text2.js';
import { d as defineCustomElement$7 } from './ir-interceptor2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$4 } from './ir-password-validator2.js';
import { d as defineCustomElement$3 } from './ir-title2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss;

const IrResetPassword = /*@__PURE__*/ proxyCustomElement(class IrResetPassword extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.token = new Token();
        this.authService = new AuthService();
        this.systemService = new SystemService();
        this.initialized = false;
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
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    componentDidLoad() {
        console.log('here');
        this.init();
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    async init() {
        if (!this.ticket || this.initialized) {
            return;
        }
        await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Change_User_Pwd',
        });
        this.initialized = false;
    }
    async handleChangePassword(e) {
        e.preventDefault();
        try {
            this.error = {};
            this.isLoading = true;
            this.autoValidate = true;
            this.ResetPasswordSchema.parse({
                password: this.password,
                confirm_password: this.confirmPassword,
            });
            await this.authService.changeUserPwd({
                username: this.username,
                new_pwd: this.password,
                old_pwd: this.old_pwd,
            });
            if (!this.skip2Fa) {
                // this.submitted = true;
                window.history.back();
            }
            if (this.el.slot === 'sidebar-body') {
                this.closeSideBar.emit();
            }
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
    handleOtpFinished(e) {
        if (e.detail.type === 'success') {
            return;
        }
        if (this.el.slot !== 'sidebar-body') {
            window.history.back();
        }
        else {
            this.closeSideBar.emit();
        }
    }
    render() {
        var _a, _b;
        const insideSidebar = this.el.slot === 'sidebar-body';
        return (h("div", { key: 'cdee1cc8f73aa2af8ff30ae866412b90c77c5498', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, !insideSidebar && (h(Fragment, { key: 'e27f0fff16360e267d4b701a3753683ec864d522' }, h("ir-interceptor", { key: 'c286c1d4202702430cb438bfcafe6650b10d07b6', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'cb52fab8ad8c2ca33e79d4130ccfa2dfbc4905c3' }))), h("form", { key: '4f645f39a5ffc7eb4a624250476e196e91d4b82d', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '4c58dc34cb7b5f2d50d79d04cdd9c8e67caf114b', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '1ef833a9e36c9b80161a2a35077865211d6ef061', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: 'a699c3095c57de48489fdfd2e23851fcfa808bff', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '3fce5ab1cfb3e8f286c4f03912a51d72ce1b03e4', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'f3cff0da53c731d3dfa79e33863a8ce9c87768fb', class: "text-center mb-2" }, h("h4", { key: 'd63b007fce6e60b3cf482c13affcdfe7898002cd', class: "mb-1" }, "Set New Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '85139610bed1ca3269d6d2fade2919f6a011f796' }, h("div", { key: 'ef36d9154087a8ce52d76adca4c483d2aba1f852', class: 'mb-2' }, h("div", { key: '2e4dbeb71d3adf4d5a4002017ef82557ee13249c', class: "m-0 p-0" }, h("div", { key: 'f493e1bce80348447ba84ebe754a3f679595cf1c', class: 'position-relative' }, h("ir-input-text", { key: 'e3dbb4ec4789ed98850d7257b459633863880781', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '4c331fc2688e827f869ef41a3dc8d4b777c716e8', class: "mb-1", password: this.password })), h("div", { key: '88723c19c1130227a6c38000ced46751d2e52d83', class: 'position-relative' }, h("ir-input-text", { key: 'c4f2fe15122fcd7a2cf386f70afed1ef8e1629d6', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm password", type: 'password' }))), !insideSidebar && (h("div", { key: '2cc05a131f27993265ae3a62a9d7d494b72caaf4', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: '2ecbf8f8013f3fb3df8b922855d507aa95b55e8a', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: 'Cancel', size: "md", btn_color: "secondary" }), h("ir-button", { key: '39b6f4430b1c1a1d019822d0e3d106896e28182e', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md" })))))), insideSidebar && (h("div", { key: '1fa34dbdb24d2db531f315421ffbde114954022e', class: 'sheet-footer w-full' }, h("ir-button", { key: 'd11647e0f4717f33bfa6c35de651fb2976595731', text: 'Cancel', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: 'aad349985b756f3293148bf2d7ffb5d967bf752b', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: 'Change password', size: "md" }))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrResetPasswordStyle0 + IrResetPasswordStyle1; }
}, [2, "ir-reset-password", {
        "username": [1],
        "old_pwd": [1],
        "ticket": [1],
        "skip2Fa": [4, "skip-2-fa"],
        "confirmPassword": [32],
        "password": [32],
        "showValidator": [32],
        "autoValidate": [32],
        "error": [32],
        "submitted": [32],
        "isLoading": [32]
    }, [[16, "otpFinished", "handleOtpFinished"]], {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reset-password", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-password-validator", "ir-title", "ir-toast", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrResetPassword);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrResetPassword as I, defineCustomElement as d };

//# sourceMappingURL=ir-reset-password2.js.map