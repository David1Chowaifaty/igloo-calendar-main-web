import ApiClient from "../../models/ApiClient";
import { AuthService } from "../../services/authenticate.service";
import { SystemService } from "../../services/system.service";
import { CONSTANTS } from "../../utils/constants";
import { Fragment, h } from "@stencil/core";
import { z, ZodError } from "zod";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
export class IrResetPassword {
    el;
    username;
    old_pwd;
    ticket;
    skip2Fa;
    language = 'en';
    confirmPassword;
    password;
    showValidator = false;
    autoValidate = false;
    error = {};
    submitted = false;
    isLoading = false;
    isFetching = false;
    closeSideBar;
    ApiClient = new ApiClient();
    authService = new AuthService();
    systemService = new SystemService();
    initialized = false;
    componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    componentDidLoad() {
        this.init();
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.ApiClient.setApiClient(this.ticket);
            this.init();
        }
    }
    async init() {
        if (!this.ticket || this.initialized) {
            return;
        }
        await Promise.all([
            LocaleController.load({ language: this.language, tables: SCREEN_TABLES.resetPassword }),
            this.systemService.checkOTPNecessity({
                METHOD_NAME: 'Change_User_Pwd',
            }),
        ]);
        this.initialized = false;
    }
    ResetPasswordSchema = z.object({
        password: z.string().regex(CONSTANTS.PASSWORD),
        confirm_password: z
            .string()
            .nullable()
            .refine(password => {
            if (!CONSTANTS.PASSWORD.test(password)) {
                return false;
            }
            return password === this.password;
        }, { message: t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) }),
    });
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
        const insideSidebar = this.el.slot === 'sidebar-body';
        // if (!locales.entries && !insideSidebar) {
        //   return <ir-loading-screen></ir-loading-screen>;
        // }
        return (h("div", { key: 'ca2d15cdb25695536acb860cc6d4c577d6ed75c9', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: 'c27be372e3fc9ed8a4482b789d8434212f92cd03' }, !insideSidebar && (h(Fragment, { key: '2b003a883352cb6d7b6e685105bd14042dcc31f4' }, h("ir-interceptor", { key: 'b28943740b0f725383ab0ef1d86f990f093d9687', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '9aca7faede931c580518c68f83f2918ddbd4f1fa' }))), h("form", { key: 'd42c464b8f9efacfd7fe9e88f96f33ec313fcb95', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: 'c4541dcee1fefe639be4248fa140b84a408961c1', class: "px-1 sheet-header", displayContext: "sidebar", label: t('Lcz_ChangePassword', { fallback: 'Change Password' }) }), h("div", { key: '277d38708c0f6abc266955fe446ff314f1efd3f2', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '4481a5960e48139f97921d6413f479848da246db', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'ce47ad2ba9ad54beeaf51cdc1959b7e5576d567f', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '65426668ee17c4613873688561572523c7cf9c5a', class: "text-center mb-2" }, h("h4", { key: '866931d9fa8080e1da9154a6a001e39e1cd8589e', class: "mb-1" }, t('Lcz_SetNewPassword')), this.submitted ? (h("p", null, t('Lcz_EmailSentConfirmPasswordChange', { fallback: 'An email has been sent to your address. Please check your inbox to confirm the password change.' }))) : (h("p", null, t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' })))), !this.submitted && (h("section", { key: 'a26116df48463aaa3a650154f86bc68006374e3e' }, h("div", { key: '4e51e551e081d6963cbeeef64af665e974248975', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '56716188b2842272ba0e6049b6136ee85198537f', class: "m-0 p-0" }, h("div", { key: 'a3bb5aaac987cf0ab48c8cd9ecaf254ddb807646', class: 'position-relative' }, h("ir-validator", { key: '47dd6d13409f9afcc955197a676401b9fcc2866f', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: '85cea043a2cb160dd7ddd691ebedaa32f59f913d', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: t('Lcz_NewPassword', { fallback: 'New password' }), value: this.password }))), this.showValidator && h("ir-password-validator", { key: '9f8d1fc19a49fca9e41ad87d6dbf6f5a7ea92d99', class: "mb-1", password: this.password })), h("div", { key: '0af46d22416ca8a83744a87579a57b523f70c1c6', class: 'position-relative' }, h("ir-validator", { key: '054231f59dc7fc6feff1ac5489b06468d076e38b', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: '62a24f19b0a549151cc96392a9bedd2fa8277230', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '86969055539b5b0ce1753aebd16550c0be916d15', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: '4469cca0bfbe06b54562219db0bff899b3b9e851',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={t('Lcz_Cancel', { fallback: 'Cancel' })}
            size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '92a5f0ce3288e89c540bceba76c8d6aa754208da',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))), insideSidebar && (h("div", { key: 'a200891734e6e4548a16ef159aade7fdf23d5e6c', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: 'fefbed2efb34354da30e66ed6dba27fa0592338a', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '7c6d20cc8e6edfcf2917ce806a8bbb40ca7298ac', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))));
    }
    static get is() { return "ir-reset-password"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-reset-password.css", "../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-reset-password.css", "../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "username": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "username"
            },
            "old_pwd": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "old_pwd"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "skip2Fa": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "skip-2-fa"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            }
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
            "isLoading": {},
            "isFetching": {}
        };
    }
    static get events() {
        return [{
                "method": "closeSideBar",
                "name": "closeSideBar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "otpFinished",
                "method": "handleOtpFinished",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
