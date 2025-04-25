import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { C as CONSTANTS } from './constants.js';
import { z, Z as ZodError } from './index3.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-icon2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-interceptor2.js';
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
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.token.setToken(this.ticket);
        }
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
    render() {
        var _a, _b;
        const insideSidebar = this.el.slot === 'sidebar-body';
        return (h("div", { key: '30948a42daf47acbc3cd29cb0de1fb3a52383e71', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, !insideSidebar && (h(Fragment, { key: 'c327435e7924b3c82b4639847253408c5941915d' }, h("ir-interceptor", { key: 'a440ad15e25b0dafc72a7af90d89ff98ceb25a74', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'b535d06c04d6fdca4fc550e362998b6306b05c94' }))), h("form", { key: '8ff885400a9ed18f1b32d12fe3020c57262f9ad1', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '1e7ea4a7164ccc99d94afafc29de20c56c56b057', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '289f5f9325a2352cbed5ad66ba71cd2747146e18', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '1e3173db245593452dffaf95d236b29d7f89c597', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '10b0040ed7ec9e75e8dd3be8b863461cc0f1c196', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '0739e36493278ac50fc9f9c1b8c72852177b0476', class: "text-center mb-2" }, h("h4", { key: '607b99a6f137d800014e09918c3220e6fb8306a5', class: "mb-1" }, "Set New Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: 'ba90e47d46b08b45f1932678c511186ba7259f8d' }, h("div", { key: '5737505b90e68684b5235d4f8df0aac1ac37465e', class: 'mb-2' }, h("div", { key: '732dac8272eca5eac6dc574d59f58d3a52549b76', class: "m-0 p-0" }, h("div", { key: '10c367d4c9964ab49e9ebb907344a4a75bc52ab2', class: 'position-relative' }, h("ir-input-text", { key: 'a14bc5ea56498a33f3911092dde68db478d065a1', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: 'ef8486d61e134e3b9c982c649de86fceb3d4a819', class: "mb-1", password: this.password })), h("div", { key: 'd2ab754be201a3c1c8763b05692cea389f32b253', class: 'position-relative' }, h("ir-input-text", { key: 'a5e9c76fc852acc99234480951af384558e0d9c2', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm password", type: 'password' }))), !insideSidebar && (h("div", { key: '97723cf3a9b519036fe3409e3609895786a633c4', class: "d-flex flex-column mt-1 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: '17ba53d21a2080d8c5130ea5be59055763518af5', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: 'Cancel', size: "md", btn_color: "secondary" }), h("ir-button", { key: '66fdad8d2fa2a255a844e0c8a68eb999246a3495', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md" })))))), insideSidebar && (h("div", { key: '3c535d4766f2024e5fc2540f41b75b93a5203eae', class: 'sheet-footer w-full' }, h("ir-button", { key: 'f497d722a013fd287428bbbb503d6d277f40893c', text: 'Cancel', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: '6f367774cf308e9af4af6c48039932b10880537d', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: 'Change password', size: "md" }))))));
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
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reset-password", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-password-validator", "ir-title", "ir-toast", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrResetPassword);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icon":
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