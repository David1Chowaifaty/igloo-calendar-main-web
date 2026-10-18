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
        return (h("div", { key: 'd814fa1e3c20796db87c9f0ec4542cc0fd0bae0b', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: 'b4f2eaf6eb1892b6ba40451d0b37c80f5065e4b6' }, !insideSidebar && (h(Fragment, { key: '3832e7549228e9e5b8a34b3d89568b74a3f18527' }, h("ir-interceptor", { key: 'd165356a2d86307422dc6eed19e15724c1da3adb', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '45f9176eaa2c08ec9c4be6bb87f86c3427d83dc6' }))), h("form", { key: '0d94cfdf8bf52a168c12b258321d5763ea51e344', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '7f52c7d6ee5a0f7fdcabb5fed72d68859703aa2d', class: "px-1 sheet-header", displayContext: "sidebar", label: t('Lcz_ChangePassword', { fallback: 'Change Password' }) }), h("div", { key: '86d1301385e832dfe9dc6214929dd5efef9d196d', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '824fea812a88bf55de8ceb6cae82658c3de58a74', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'b3f9d8c180c47b0c8e5b8600c77ec3d6cfdb372b', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'e887e078276cdcbc55b38e629050df1669016ee2', class: "text-center mb-2" }, h("h4", { key: '87a2a5a5263b3a00b5ec3c9a70b88b50cb79c50e', class: "mb-1" }, t('Lcz_SetNewPassword')), this.submitted ? (h("p", null, t('Lcz_EmailSentConfirmPasswordChange', { fallback: 'An email has been sent to your address. Please check your inbox to confirm the password change.' }))) : (h("p", null, t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' })))), !this.submitted && (h("section", { key: 'f847ea956d5965fc44d529109dd5e7af4d68d0bd' }, h("div", { key: '08da1758c280ac92877383f80f0c33f8568e342d', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'ef0704982b2cf518f064be32e05dce3dbae80518', class: "m-0 p-0" }, h("div", { key: '9b2292a11327c0dd7e86a236134d2b240071cff2', class: 'position-relative' }, h("ir-validator", { key: 'c0fad98e82bf8bc7af6af9425ef55197ae6dbe48', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: '5486bb8044e5dd2b527781569f5958a4a4ac84fe', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: t('Lcz_NewPassword', { fallback: 'New password' }), value: this.password }))), this.showValidator && h("ir-password-validator", { key: '3a313d82d1f345ea2dd33a0c869bd2f451622c19', class: "mb-1", password: this.password })), h("div", { key: '6377b49a7dcc3124d9f5569d8a37dcfcff1c145e', class: 'position-relative' }, h("ir-validator", { key: 'b7d215f605c4c60ad0ceea5d9e2ec61340e16d07', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: '4839050c84dc1fc4492ce342e610887970a5a3ad', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '9d15d9cbb80518910a0c46f5d977c2173fe945a1', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: '8250ed28f8da2d514a1486204627c11fa2129d1e',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={t('Lcz_Cancel', { fallback: 'Cancel' })}
            size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'b1deabbbb107596b44aa020d231b5cb6ed135ed8',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))), insideSidebar && (h("div", { key: 'dd85e71a3c010d856600b7509b7a02d0906cc9f0', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: 'ae5fa3ae3490fcba2b963bf8e7db1b5dc67d282e', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '87b15fa55097c4d9aeeeff1ad148f14e8274675e', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))));
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
