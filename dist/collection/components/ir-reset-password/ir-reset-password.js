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
        return (h("div", { key: 'b0cd48eda142ca810c2b8bc03e9598fd87fce174', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: '13a618b572ea07aa0edb9270b7cfbe0c81352e75' }, !insideSidebar && (h(Fragment, { key: '51a108a0fa6ce1bfa7a9fc52768eba34d3ade136' }, h("ir-interceptor", { key: '0690877f0e7b059aaabf01ca053d85eeb4c22769', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '09313717fc7b6fec3733b7787a05ee49005be13b' }))), h("form", { key: 'ab0e98a5e9cbf47bce6cd0f8820e60b4d972a3d6', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '9b280cf44478049cd2fee1ae1fbbe196e3f3deed', class: "px-1 sheet-header", displayContext: "sidebar", label: t('Lcz_ChangePassword', { fallback: 'Change Password' }) }), h("div", { key: '7c0385a2aa7622bc8ab929c8b5b5a2fae34a1ccc', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '04db921b8ae7c84c840ad1f6a9de0d5fd3c0365d', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'd5bc6bc33b188b3aaa43dbf9ca905b8e1112056e', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '93346207fd9a02e4c0bd9554a30987ab7ebe09e1', class: "text-center mb-2" }, h("h4", { key: 'e7d887dce810a9b61a4acab40a98c61de1f8d064', class: "mb-1" }, t('Lcz_SetNewPassword')), this.submitted ? (h("p", null, t('Lcz_EmailSentConfirmPasswordChange', { fallback: 'An email has been sent to your address. Please check your inbox to confirm the password change.' }))) : (h("p", null, t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' })))), !this.submitted && (h("section", { key: '84ab362d9023834631334f2d26336d14b1e5d2c5' }, h("div", { key: '7936fc84625a89344f07864338058d150713bcba', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'dbd3362c461f047e15141712944ba4732c739b2c', class: "m-0 p-0" }, h("div", { key: 'af1139fe2689d648e475ca3ce4c575d6cbf00cef', class: 'position-relative' }, h("ir-validator", { key: '1f422005b2a280db90903c660a89f874b749a099', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: '8368bca70f9b9e0e7059730432acee57cf7c024a', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: t('Lcz_NewPassword', { fallback: 'New password' }), value: this.password }))), this.showValidator && h("ir-password-validator", { key: '51ea40ff389a6ad206aad31150895a24ebaa237f', class: "mb-1", password: this.password })), h("div", { key: '8bbfc9fab47ee10a7257e455d081fc6afbe0a0be', class: 'position-relative' }, h("ir-validator", { key: 'f9f820dc935e87e158c5b8924105c47a9149ce3c', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: '51188cf55fcdaf6c46d59546446b0b1da70f577c', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '7030a135bb9d18e52a27455a0f99a8b2a69ec4d6', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: 'd89cacfa7520f6cdf2bc723d3e7527571024d454',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={t('Lcz_Cancel', { fallback: 'Cancel' })}
            size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2abd665a532536a6277d8a159ddcd552a0acdaed',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))), insideSidebar && (h("div", { key: '89077ec69e6e82dc8b3d3c29fe78f5ad2b979ea0', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: '6eee46453a5de1d05bd05aa6ceb0768111e076e6', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2d91586dfad1a8d62e44d5cc6525ca7e699a04ed', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))));
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
